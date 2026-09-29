import os
import json

from flask import Flask, render_template, request, jsonify
import psycopg
from psycopg.types.json import Json


app = Flask(
    __name__,
    template_folder="../templates",
    static_folder="../static"
)


# ========================================
# データベース
# ========================================

DATABASE_URL = os.environ.get("DATABASE_URL")


def get_connection():
    if not DATABASE_URL:
        raise RuntimeError(
            "DATABASE_URL が設定されていません。"
        )

    return psycopg.connect(DATABASE_URL)


def create_table():

    with get_connection() as conn:

        with conn.cursor() as cur:

            cur.execute("""
                CREATE TABLE IF NOT EXISTS survey_responses (
                    id SERIAL PRIMARY KEY,
                    branch TEXT NOT NULL,
                    answers JSONB NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            """)

        conn.commit()


# ========================================
# アンケート
# ========================================

@app.route("/")
def index():

    return render_template("index.html")


# ========================================
# 回答送信
# ========================================

@app.route("/submit", methods=["POST"])
def submit():

    try:

        data = request.get_json()

        if not data:

            return jsonify({
                "success": False,
                "message": "回答データがありません。"
            }), 400


        branch = data.get("branch")

        answers = data.get("answers")


        if branch not in ["①", "②"]:

            return jsonify({
                "success": False,
                "message": "分岐情報が正しくありません。"
            }), 400


        if not isinstance(answers, dict):

            return jsonify({
                "success": False,
                "message": "回答データが正しくありません。"
            }), 400


        # テーブル作成
        create_table()


        # 保存
        with get_connection() as conn:

            with conn.cursor() as cur:

                cur.execute(
                    """
                    INSERT INTO survey_responses
                    (branch, answers)
                    VALUES (%s, %s)
                    """,
                    (
                        branch,
                        Json(answers)
                    )
                )

            conn.commit()


        return jsonify({
            "success": True
        })


    except Exception as e:

        print("ERROR:", e)

        return jsonify({
            "success": False,
            "message": "回答の保存に失敗しました。"
        }), 500


# ========================================
# Thank you
# ========================================

@app.route("/thanks")
def thanks():

    return render_template("thanks.html")


# ========================================
# ローカル実行
# ========================================

if __name__ == "__main__":

    app.run(
        debug=True,
        host="0.0.0.0",
        port=5000
    )
