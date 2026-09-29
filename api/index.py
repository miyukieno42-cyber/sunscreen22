import os
import json
from flask import Flask, render_template, request, jsonify
import psycopg


app = Flask(
    __name__,
    template_folder="../templates",
    static_folder="../static"
)


# =========================
# データベース
# =========================

DATABASE_URL = os.environ.get("DATABASE_URL")


def get_connection():
    if not DATABASE_URL:
        raise RuntimeError("DATABASE_URL が設定されていません。")
    return psycopg.connect(DATABASE_URL)


def create_table():
    """
    アンケート回答を保存するテーブルを作成
    """
    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("""
                CREATE TABLE IF NOT EXISTS survey_responses (
                    id SERIAL PRIMARY KEY,
                    answers JSONB NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            """)
        conn.commit()


# =========================
# トップページ
# =========================

@app.route("/")
def index():
    return render_template("index.html")


# =========================
# 回答送信
# =========================

@app.route("/submit", methods=["POST"])
def submit():
    try:
        data = request.get_json()

        if not data:
            return jsonify({
                "success": False,
                "message": "回答データがありません。"
            }), 400

        create_table()

        with get_connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    INSERT INTO survey_responses (answers)
                    VALUES (%s)
                    """,
                    (json.dumps(data, ensure_ascii=False),)
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


# =========================
# ローカル実行用
# =========================

if __name__ == "__main__":
    app.run(debug=True)
