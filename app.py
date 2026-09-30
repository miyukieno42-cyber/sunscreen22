from flask import Flask, render_template, request, jsonify, Response
import os
import csv
import io
import json
from datetime import datetime
import psycopg


# =========================================================
# Flask
# =========================================================

app = Flask(__name__)


# =========================================================
# Neon PostgreSQL
# =========================================================

DATABASE_URL = os.environ.get("DATABASE_URL")


def get_db():

    if not DATABASE_URL:
        raise Exception(
            "DATABASE_URL が設定されていません。"
        )

    return psycopg.connect(
        DATABASE_URL,
        sslmode="require"
    )


# =========================================================
# データベース準備
# =========================================================

def create_table():

    conn = get_db()

    try:

        cursor = conn.cursor()

        cursor.execute(
            """
            CREATE TABLE IF NOT EXISTS responses (
                id SERIAL PRIMARY KEY,
                created_at TIMESTAMP
            )
            """
        )

        cursor.execute(
            """
            ALTER TABLE responses
            ADD COLUMN IF NOT EXISTS branch TEXT
            """
        )

        cursor.execute(
            """
            ALTER TABLE responses
            ADD COLUMN IF NOT EXISTS answers JSONB
            """
        )

        conn.commit()

        cursor.close()

    finally:

        conn.close()


# =========================================================
# トップページ
# =========================================================

@app.route("/")
def index():

    return render_template(
        "index.html"
    )


# =========================================================
# アンケート送信
# =========================================================

@app.route(
    "/submit",
    methods=["POST"]
)
def submit():

    try:

        data = request.get_json(
            silent=True
        )

        if not data:

            return jsonify({
                "success": False,
                "message": "回答データを受け取れませんでした。"
            }), 400


        branch = data.get(
            "branch",
            ""
        )


        answers = data.get(
            "answers",
            {}
        )


        if not isinstance(
            answers,
            dict
        ):

            return jsonify({
                "success": False,
                "message": "回答データの形式が正しくありません。"
            }), 400


        # DB準備
        create_table()


        # DB接続
        conn = get_db()

        try:

            cursor = conn.cursor()

            cursor.execute(
                """
                INSERT INTO responses (
                    created_at,
                    branch,
                    answers
                )
                VALUES (
                    %s,
                    %s,
                    %s::jsonb
                )
                """,
                (
                    datetime.now(),
                    branch,
                    json.dumps(
                        answers,
                        ensure_ascii=False
                    )
                )
            )

            conn.commit()

            cursor.close()

        finally:

            conn.close()


        return jsonify({
            "success": True
        })


    except Exception as e:

        print(
            "SUBMIT ERROR:",
            repr(e)
        )

        return jsonify({
            "success": False,
            "message": str(e)
        }), 500


# =========================================================
# ありがとうページ
# =========================================================

@app.route("/thanks")
def thanks():

    return render_template(
        "thanks.html"
    )


# =========================================================
# CSVダウンロード
# =========================================================

@app.route("/download_csv")
def download_csv():

    try:

        create_table()

        conn = get_db()

        try:

            cursor = conn.cursor()

            cursor.execute(
                """
                SELECT
                    id,
                    created_at,
                    branch,
                    answers
                FROM responses
                ORDER BY id
                """
            )

            rows = cursor.fetchall()

            cursor.close()

        finally:

            conn.close()


        if not rows:

            return "まだ回答データがありません。"


        answer_dicts = []

        all_keys = []


        for row in rows:

            answer_json = row[3]


            if answer_json is None:

                answers = {}


            elif isinstance(
                answer_json,
                dict
            ):

                answers = answer_json


            else:

                try:

                    answers = json.loads(
                        answer_json
                    )

                except Exception:

                    answers = {}


            answer_dicts.append(
                answers
            )


            for key in answers.keys():

                if key not in all_keys:

                    all_keys.append(key)


        output = io.StringIO(
            newline=""
        )


        writer = csv.writer(
            output
        )


        writer.writerow(
            [
                "ID",
                "回答日時",
                "分岐"
            ]
            +
            all_keys
        )


        for row, answers in zip(
            rows,
            answer_dicts
        ):

            row_data = [
                row[0],
                row[1],
                row[2]
            ]


            for key in all_keys:

                value = answers.get(
                    key,
                    ""
                )


                if isinstance(
                    value,
                    list
                ):

                    value = ", ".join(
                        str(item)
                        for item in value
                    )


                elif isinstance(
                    value,
                    dict
                ):

                    value = json.dumps(
                        value,
                        ensure_ascii=False
                    )


                row_data.append(
                    value
                )


            writer.writerow(
                row_data
            )


        csv_data = (
            "\ufeff"
            +
            output.getvalue()
        )


        response = Response(
            csv_data,
            mimetype="text/csv; charset=utf-8"
        )


        response.headers[
            "Content-Disposition"
        ] = (
            "attachment; "
            "filename=child_sunscreen_survey.csv"
        )


        return response


    except Exception as e:

        print(
            "CSV ERROR:",
            repr(e)
        )

        return (
            "CSVの作成に失敗しました。\n"
            + str(e),
            500
        )


# =========================================================
# ローカル実行
# =========================================================

if __name__ == "__main__":

    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )
