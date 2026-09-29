// =========================
// アンケート管理
// =========================

let currentQuestion = 0;

let questionHistory = [];


// =========================
// 要素取得
// =========================

const questions = Array.from(
    document.querySelectorAll(".question")
);

const nextButton =
    document.getElementById("next-button");

const backButton =
    document.getElementById("back-button");

const progressNumber =
    document.getElementById("progress-number");

const progressTotal =
    document.getElementById("progress-total");

const progressFill =
    document.getElementById("progress-fill");


// =========================
// Q1以外の分岐質問を最初は非表示
// =========================

questions.forEach((question, index) => {

    if (index !== 0) {
        question.classList.remove("active");
    }

});


// =========================
// 表示する質問リストを作る
// =========================

function getVisibleQuestions() {

    const q1 =
        document.querySelector(
            'input[name="q1"]:checked'
        );

    const branch =
        q1 ? q1.value : null;


    const result = [];


    // -------------------------
    // Q1
    // -------------------------

    const q1Element =
        document.querySelector(
            '[data-question="q1"]'
        );

    result.push(q1Element);


    // -------------------------
    // ①ルート
    // -------------------------

    if (
        branch === "現在している" ||
        branch === "過去にしていた"
    ) {

        document
            .querySelectorAll(".branch-1")
            .forEach(question => {

                result.push(question);

            });

    }


    // -------------------------
    // ②ルート
    // -------------------------

    if (branch === "経験なし") {

        const branch2 =
            document.getElementById(
                "branch2-placeholder"
            );

        result.push(branch2);

    }


    return result;
}


// =========================
// 質問を表示
// =========================

function showQuestion(index) {

    const visibleQuestions =
        getVisibleQuestions();


    if (index < 0) {
        index = 0;
    }


    if (index >= visibleQuestions.length) {
        index = visibleQuestions.length - 1;
    }


    currentQuestion = index;


    // 全質問を非表示

    questions.forEach(question => {
        question.classList.remove("active");
    });


    // 現在の質問だけ表示

    const question =
        visibleQuestions[currentQuestion];

    question.classList.add("active");


    // -------------------------
    // プログレス
    // -------------------------

    const total =
        visibleQuestions.length;

    progressNumber.textContent =
        currentQuestion + 1;

    progressTotal.textContent =
        total;

    const percentage =
        ((currentQuestion + 1) / total) * 100;

    progressFill.style.width =
        percentage + "%";


    // -------------------------
    // 戻るボタン
    // -------------------------

    if (currentQuestion === 0) {

        backButton.style.display =
            "none";

    } else {

        backButton.style.display =
            "block";

    }


    // -------------------------
    // 次へ / 送信
    // -------------------------

    if (currentQuestion === total - 1) {

        nextButton.textContent =
            "回答を送信";

    } else {

        nextButton.textContent =
            "次へ";

    }

}


// =========================
// 回答チェック
// =========================

function validateCurrentQuestion() {

    const visibleQuestions =
        getVisibleQuestions();

    const question =
        visibleQuestions[currentQuestion];


    const inputs =
        question.querySelectorAll(
            "input"
        );


    if (inputs.length === 0) {
        return true;
    }


    const checked =
        question.querySelector(
            "input:checked"
        );


    if (!checked) {

        alert(
            "回答を1つ選択してください。"
        );

        return false;

    }


    return true;
}


// =========================
// 回答を全部取得
// =========================

function collectAnswers() {

    const answers = {};

    const allInputs =
        document.querySelectorAll(
            "input[name]"
        );


    allInputs.forEach(input => {

        if (input.checked) {

            answers[input.name] =
                input.value;

        }

    });


    return answers;
}


// =========================
// 次へ
// =========================

nextButton.addEventListener(
    "click",
    async function () {

        // 回答チェック

        if (!validateCurrentQuestion()) {
            return;
        }


        // 現在の質問を確認

        const visibleQuestions =
            getVisibleQuestions();


        // -------------------------
        // 最後なら送信
        // -------------------------

        if (
            currentQuestion ===
            visibleQuestions.length - 1
        ) {

            await submitSurvey();

            return;
        }


        // -------------------------
        // 次の質問
        // -------------------------

        currentQuestion++;

        showQuestion(currentQuestion);

    }
);


// =========================
// 戻る
// =========================

backButton.addEventListener(
    "click",
    function () {

        if (currentQuestion > 0) {

            currentQuestion--;

            showQuestion(currentQuestion);

        }

    }
);


// =========================
// Q1変更時
// =========================

document
    .querySelectorAll('input[name="q1"]')
    .forEach(input => {

        input.addEventListener(
            "change",
            function () {

                // Q1を変更したら
                // 一度最初に戻す

                currentQuestion = 0;

                showQuestion(0);

            }
        );

    });


// =========================
// 送信
// =========================

async function submitSurvey() {

    nextButton.disabled = true;

    nextButton.textContent =
        "送信中...";


    const answers =
        collectAnswers();


    try {

        const response =
            await fetch("/submit", {

                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body:
                    JSON.stringify(answers)

            });


        const result =
            await response.json();


        if (!result.success) {

            throw new Error(
                result.message ||
                "送信に失敗しました。"
            );

        }


        // 完了画面

        document.body.innerHTML = `

            <main class="survey-card">

                <div style="
                    text-align:center;
                    padding:50px 10px;
                ">

                    <div style="
                        font-size:50px;
                        margin-bottom:20px;
                    ">
                        💜
                    </div>

                    <h1 style="
                        color:#7b4bc4;
                        margin-bottom:20px;
                    ">
                        ご回答ありがとうございました！
                    </h1>

                    <p style="
                        line-height:1.8;
                        color:#666;
                    ">
                        アンケートへのご協力、
                        ありがとうございました。
                    </p>

                </div>

            </main>

        `;


    } catch (error) {

        console.error(error);

        alert(
            "回答の送信に失敗しました。\n" +
            "もう一度お試しください。"
        );


        nextButton.disabled = false;

        nextButton.textContent =
            "回答を送信";

    }

}


// =========================
// 初期表示
// =========================

showQuestion(0);
