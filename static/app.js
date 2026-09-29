// =====================================================
// アンケート質問データ
// =====================================================


// -----------------------------------------------------
// 画像
// -----------------------------------------------------

const imagePath = (filename) => {
    return `/static/images/${filename}`;
};


// -----------------------------------------------------
// 共通の塗り方
// -----------------------------------------------------

// -----------------------------------------------------
// 塗り方4種類
// -----------------------------------------------------

const coatingOptions = [

    {
        label: "手で塗る",

        description:
            "チューブ式で、押して、手に出して塗る",

        images: [
            imagePath("image1-1.png"),
            imagePath("image1-2.png")
        ]
    },


    {
        label: "ローラー",

        description:
            "本体に直接日焼け止めが付いていて、コロコロするだけで塗れる",

        images: [
            imagePath("image2-1.png"),
            imagePath("image2-2.png")
        ]
    },


    {
        label: "筆・ブラシ",

        description:
            "胴体を押すとブラシ部分に日焼け止めが出てきて、描くように塗れる",

        images: [
            imagePath("image3-1.png"),
            imagePath("image3-2.png")
        ]
    },


    {
        label: "スポンジ",

        description:
            "星型の部分に日焼け止めが付いていて、ぽんぽんと凹むので、凹むたびに日焼け止めが出てきて、スタンプのように塗れる",

        images: [
            imagePath("image4-1.png"),
            imagePath("image4-2.png")
        ]
    }

];

// =====================================================
// 最初の質問
// =====================================================

const firstQuestion = {

    id: "q0",

    title: "現在子育てはしていますか？",

    note: "一つ回答",

    type: "single",

    options: [

        {
            label: "現在している",
            branch: "①"
        },

        {
            label: "過去にしていた",
            branch: "①"
        },

        {
            label: "経験なし",
            branch: "②"
        }

    ]

};


// =====================================================
// ① 緑ルート
// =====================================================

const branch1Questions = [

    // -------------------------------------------------
    // ①-1
    // -------------------------------------------------

    {
        id: "b1_q1",

        branch: "①",

        title: "【子どもの年齢】",

        type: "single",

        options: [

            { label: "0〜2歳" },

            { label: "3〜5歳（未就学）" },

            { label: "小学校低学年" },

            { label: "小学校高学年" },

            { label: "中学生" },

            { label: "高校生以上" },

            { label: "その他" }

        ]

    },


    // -------------------------------------------------
    // ①-2
    // -------------------------------------------------

    {
        id: "b1_q2",

        branch: "①",

        title:
            "子どもは日焼け止めは使用していますか（使用していましたか）",

        type: "single",

        options: [

            { label: "よく使用している" },

            { label: "外出時などに使用している" },

            {
                label:
                    "以前は使用していたが、現在はあまり使用していない"
            },

            { label: "使用していない" },

            { label: "覚えていない" }

        ]

    },


    // -------------------------------------------------
    // ①-3
    // -------------------------------------------------

    {
        id: "b1_q3",

        branch: "①",

        title:
            "お子さんが日焼け止めを塗るとき、現在どのように塗っていますか？",

        type: "single",

        options: [

            { label: "毎回、保護者が塗っている" },

            {
                label:
                    "基本的に保護者が塗り、一部は子どもが塗る"
            },

            { label: "子どもが自分で塗っている" },

            { label: "日によって違う" },

            { label: "その他" }

        ]

    },


    // -------------------------------------------------
    // ①-4
    // -------------------------------------------------

    {
        id: "b1_q4",

        branch: "①",

        title:
            "自分で日焼け止めを塗ることについてどう思いますか",

        type: "single",

        options: [

            { label: "できれば自分で塗ってほしい" },

            { label: "一部だけでも自分で塗ってほしい" },

            { label: "自分で塗ってもらってもよい" },

            { label: "保護者が塗る方が安心" },

            { label: "特に考えたことがない" }

        ]

    },


    // -------------------------------------------------
    // ①-5
    // -------------------------------------------------

    {
        id: "b1_q5",

        branch: "①",

        title:
            "次のような「塗り方」の日焼け止めがあったら、どれを使ってみたいですか",

        note:
            "最大2つ回答できます。2つ選ぶ場合は、一番目・二番目の順番で選んでください。",

        type: "rank2",

        options: coatingOptions

    },


    // -------------------------------------------------
    // ①-6
    // -------------------------------------------------

    {
        id: "b1_q6",

        branch: "①",

        title:
            "「子どもが自分から塗ってみたい」と思いそうなものは？",

        note:
            "最大2つ回答できます。2つ選ぶ場合は、一番目・二番目の順番で選んでください。",

        type: "rank2",

        options: coatingOptions

    },


    // -------------------------------------------------
    // ①-7
    // -------------------------------------------------

    {
        id: "b1_q7",

        branch: "①",

        title:
            "子ども自身で塗る場合、気になることは？",

        note:
            "複数回答OK",

        type: "multi",

        options: [

            { label: "塗りムラができそう" },

            { label: "塗る量が分からなそう" },

            { label: "顔や目の周りに使うのが心配" },

            { label: "手や服、髪が汚れそう" },

            { label: "日焼け止めが手につくのが嫌" },

            { label: "容器をうまく使えなそう" },

            { label: "衛生面が気になる" },

            { label: "時間がかかりそう" },

            {
                label: "特にない",
                exclusive: true
            },

            {
                label: "その他（自由回答）",
                other: true
            }

        ]

    },


    // -------------------------------------------------
    // ①-8
    // -------------------------------------------------

    {
        id: "b1_q8",

        branch: "①",

        title:
            "子どもが自分から塗りたくなるために、どんな工夫があるといいと思いますか。",

        note:
            "複数回答OK",

        type: "multi",

        options: [

            { label: "自分で持って塗れる" },

            { label: "コロコロなど、動作自体が楽しい" },

            { label: "筆のように塗れる" },

            { label: "好きな色・デザイン" },

            { label: "キャラクターなどのデザイン" },

            { label: "遊び感覚で使える" },

            { label: "塗った場所が分かりやすい" },

            { label: "自分で使いやすい大きさ・形" },

            {
                label: "その他（自由回答）",
                other: true
            }

        ]

    },


    // -------------------------------------------------
    // ①-9
    // -------------------------------------------------

    {
        id: "b1_q9",

        branch: "①",

        title:
            "子どもが自分で濡れる日焼け止めがあるとしたら、どんなことに期待しますか",

        note:
            "複数OK",

        type: "multi",

        options: [

            { label: "保護者が塗る手間が減る" },

            { label: "外出前の準備が楽になる" },

            {
                label:
                    "子どもが自分で身支度するきっかけになる"
            },

            { label: "日焼け止めを嫌がらなくなる" },

            { label: "日焼け止めを塗る習慣が身につく" },

            { label: "親子でケンカすることが減る" },

            {
                label: "特に期待することはない",
                exclusive: true
            },

            {
                label: "その他（自由回答）",
                other: true
            }

        ]

    },


    // -------------------------------------------------
    // ①-10
    // -------------------------------------------------

    {
        id: "b1_q10",

        branch: "①",

        title:
            "子どもが自分から使いたくなることを目的とした日焼け止めがあれば試したいですか",

        type: "single",

        options: [

            { label: "ぜひ試してみたい" },

            { label: "少し試してみたい" },

            { label: "どちらともいえない" },

            { label: "あまり思わない" },

            { label: "思わない" }

        ]

    },


    // -------------------------------------------------
    // ①-11
    // -------------------------------------------------

    {
        id: "b1_q11",

        branch: "①",

        title:
            "こんなものがあったらいいなと思うものはどんなものですか。",

        note: "自由回答",

        type: "text",

        optional: true

    }

];


// =====================================================
// ② オレンジルート
// =====================================================

const branch2Questions = [

    // -------------------------------------------------
    // ②-1
    // -------------------------------------------------

    {
        id: "b2_q1",

        branch: "②",

        title:
            "【年齢をお答えください】",

        type: "single",

        options: [

            { label: "10代" },

            { label: "20代前半" },

            { label: "20代後半" },

            { label: "30代" },

            { label: "40代" },

            { label: "その他" }

        ]

    },


    // -------------------------------------------------
    // ②-2
    // -------------------------------------------------

    {
        id: "b2_q2",

        branch: "②",

        title:
            "子どもの頃日焼け止めを自分で塗ることはあった？",

        type: "single",

        options: [

            { label: "ほとんど自分" },

            { label: "一部自分で塗っていた" },

            { label: "ほとんど親が塗っていた" },

            { label: "覚えていない" }

        ]

    },


    // -------------------------------------------------
    // ②-3
    // -------------------------------------------------

    {
        id: "b2_q3",

        branch: "②",

        title:
            "もし、子どもの頃、自分で日焼け止めを塗るなら、どんな塗り方だったらやってみたい？",

        note:
            "最大2つ回答できます。2つ選ぶ場合は、一番目・二番目の順番で選んでください。",

        type: "rank2",

        options: coatingOptions

    },


    // -------------------------------------------------
    // ②-4
    // -------------------------------------------------

    {
        id: "b2_q4",

        branch: "②",

        title:
            "次の中で子どもが楽しみながら、使えそうと思うものを選んでください",

        note:
            "※自分が使ってみたいと思うものでもOK\n最大2つ回答できます。2つ選ぶ場合は、一番目・二番目の順番で選んでください。",

        type: "rank2",

        options: [

            { label: "コロコロ転がして塗る" },

            { label: "筆で絵を描くように塗る" },

            { label: "ポンポンして塗る" },

            { label: "色や模様が変化する" },

            { label: "好きなデザイン・カラーから選べる" },

            { label: "キャラクターなどがついている" },

            { label: "その他" }

        ]

    },


    // -------------------------------------------------
    // ②-5
    // -------------------------------------------------

    {
        id: "b2_q5",

        branch: "②",

        title:
            "子どもが自分で使う日焼け止めと聞いて、心配になりそうなことは？",

        note:
            "複数回答OK",

        type: "multi",

        options: [

            { label: "ちゃんと塗れているか分からない" },

            { label: "塗りムラができそう" },

            { label: "顔や目に入らないか心配" },

            { label: "服や髪についてしまいそう" },

            { label: "日焼け止めが手についてベタベタしそう" },

            { label: "容器をうまく使えなそう" },

            { label: "衛生面が心配" },

            {
                label: "特に心配はない",
                exclusive: true
            },

            {
                label: "その他（自由回答）",
                other: true
            }

        ]

    },


    // -------------------------------------------------
    // ②-6
    // -------------------------------------------------

    {
        id: "b2_q6",

        branch: "②",

        title:
            "日焼け止めを「自分から使ってみたい」と思えるとしたら、何があるといい？",

        note:
            "複数回答OK",

        type: "multi",

        options: [

            { label: "自分専用のもの" },

            { label: "自分で使いやすい形" },

            { label: "見た目がかわいい・かっこいい" },

            { label: "遊び感覚で使える" },

            { label: "塗る動作が楽しい" },

            { label: "好きな色を選べる" },

            { label: "友達に見せたくなる" },

            { label: "「自分でできた」と感じられる" },

            {
                label: "その他（自由回答）",
                other: true
            }

        ]

    },


    // -------------------------------------------------
    // ②-7
    // -------------------------------------------------

    {
        id: "b2_q7",

        branch: "②",

        title:
            "逆に、こんな日焼け止めだったら、子どもは使いたくないと思うものは？",

        note:
            "自由回答欄と選択肢があります。",

        type: "multiText",

        options: [

            { label: "操作が難しい" },

            { label: "ベタベタする" },

            { label: "見た目が子どもっぽすぎる" },

            { label: "大きい" },

            { label: "面倒" },

            { label: "塗るのに時間がかかる" }

        ]

    },


    // -------------------------------------------------
    // ②-8
    // -------------------------------------------------

    {
        id: "b2_q8",

        branch: "②",

        title:
            "もし身近な子ども（甥、姪、親戚の子ども、きょうだい、友人のこども）に日焼け止めをプレゼントするなら、どんなものをあげますか",

        note:
            "※いない場合も想像して、回答ください。中身は同じとします。",

        type: "single",

        options: [

            { label: "自分で塗れる" },

            { label: "遊び感覚で使える" },

            { label: "見た目がかわいい" },

            { label: "塗り方が面白い" },

            { label: "子どもが好きなデザイン" },

            { label: "その他" }

        ]

    }

];


// =====================================================
// アンケート状態
// =====================================================

let answers = {};

let currentIndex = 0;


// =====================================================
// HTML要素
// =====================================================

const container =
    document.getElementById("question-container");

const nextButton =
    document.getElementById("next-button");

const backButton =
    document.getElementById("back-button");

const progressCurrent =
    document.getElementById("progress-current");

const progressTotal =
    document.getElementById("progress-total");

const progressFill =
    document.getElementById("progress-fill");


// =====================================================
// 現在のルートを取得
// =====================================================

function getBranch() {

    const value = answers["q0"];

    if (!value) {
        return null;
    }

    return value.branch;

}


// =====================================================
// 現在表示する質問一覧
// =====================================================

function getQuestions() {

    const branch = getBranch();

    if (branch === "①") {

        return [
            firstQuestion,
            ...branch1Questions
        ];

    }

    if (branch === "②") {

        return [
            firstQuestion,
            ...branch2Questions
        ];

    }

    return [
        firstQuestion
    ];

}


// =====================================================
// 質問表示
// =====================================================

function renderQuestion() {

    const questions =
        getQuestions();

    const question =
        questions[currentIndex];


    // -------------------------
    // 全体の進捗
    // -------------------------

    progressCurrent.textContent =
        currentIndex + 1;

    progressTotal.textContent =
        questions.length;


    const progress =
        ((currentIndex + 1) /
        questions.length) * 100;


    progressFill.style.width =
        `${progress}%`;


    // -------------------------
    // 戻る
    // -------------------------

    if (currentIndex === 0) {

        backButton.style.display =
            "none";

    } else {

        backButton.style.display =
            "block";

    }


    // -------------------------
    // 最後
    // -------------------------

    if (
        currentIndex ===
        questions.length - 1
    ) {

        nextButton.textContent =
            "回答を送信";

    } else {

        nextButton.textContent =
            "次へ";

    }


    // -------------------------
    // 質問HTML
    // -------------------------

    let html = "";


    // ①・②表示

    if (question.branch) {

        const branchClass =
            question.branch === "①"
                ? "branch-green"
                : "branch-orange";


        html += `
            <div class="branch-label ${branchClass}">
                ${question.branch}
            </div>
        `;

    }


    html += `

        <section class="question">

            <h2>
                ${escapeHtml(question.title)}
            </h2>

    `;


    // 注釈

    if (question.note) {

        html += `
            <p class="question-note">
                ${escapeHtml(question.note)
                    .replace(/\n/g, "<br>")}
            </p>
        `;

    }


    // -------------------------
    // 選択肢
    // -------------------------

    if (
        question.type === "single" ||
        question.type === "multi" ||
        question.type === "rank2"
    ) {

        html += `
            <div class="options">
        `;


        const selected =
            answers[question.id];


        question.options.forEach(
            (option, index) => {

                let checked = false;

                let rank = "";


                // -------------------------
                // single
                // -------------------------

                if (
                    question.type === "single"
                ) {

                    checked =
                        selected === option.label;

                }


                // -------------------------
                // multi
                // -------------------------

                if (
                    question.type === "multi"
                ) {

                    checked =
                        Array.isArray(selected) &&
                        selected.includes(option.label);

                }


                // -------------------------
                // rank2
                // -------------------------

                if (
                    question.type === "rank2"
                ) {

                    checked =
                        Array.isArray(selected) &&
                        selected.includes(option.label);


                    if (checked) {

                        rank =
                            selected.indexOf(
                                option.label
                            ) + 1;

                    }

                }


                html += `

                    <label
                        class="
                            option-card
                            ${option.image ? "has-image" : ""}
                        "
                    >

                        <input
                            type="${
                                question.type === "single"
                                    ? "radio"
                                    : "checkbox"
                            }"

                            name="${question.id}"

                            value="${escapeAttribute(
                                option.label
                            )}"

                            data-index="${index}"

                            ${
                                checked
                                    ? "checked"
                                    : ""
                            }
                        >

                `;


                // 画像

              // -------------------------
// 画像2枚
// -------------------------

if (
    option.images &&
    option.images.length > 0
) {

    html += `

        <div class="option-images">

    `;


    option.images.forEach(
        (image, imageIndex) => {

            html += `

                <img
                    src="${image}"
                    alt="${escapeAttribute(
                        option.label
                    )} ${imageIndex + 1}"
                    class="option-image"
                    onerror="
                        this.style.display='none'
                    "
                >

            `;

        }
    );


    html += `

        </div>

    `;

}


                html += `

    <div class="option-information">

        <span class="option-text">

            ${
                escapeHtml(
                    option.label
                )
            }

        </span>


        ${
            option.description
                ? `
                    <span class="option-description">
                        ${escapeHtml(
                            option.description
                        )}
                    </span>
                `
                : ""
        }

    </div>

`;


                // 順番バッジ

                if (
                    question.type === "rank2"
                ) {

                    html += `

                        <span
                            class="rank-badge"
                            data-rank-for="${
                                escapeAttribute(
                                    option.label
                                )
                            }"
                        >
                            ${rank}
                        </span>

                    `;

                }


                html += `

                    </label>

                `;

            }
        );


        html += `
            </div>
        `;


        // その他自由回答

        if (
            question.type === "multi"
        ) {

            const hasOther =
                question.options.some(
                    option => option.other
                );


            if (hasOther) {

                const otherText =
                    answers[
                        `${question.id}_other`
                    ] || "";


                html += `

                    <textarea
                        id="${question.id}-other"
                        class="other-text"
                        placeholder="その他の場合はこちらにご記入ください"
                    >${escapeHtml(
                        otherText
                    )}</textarea>

                `;

            }

        }

    }


    // -------------------------
    // 自由回答
    // -------------------------

    if (
        question.type === "text"
    ) {

        const value =
            answers[question.id] || "";


        html += `

            <textarea
                id="${question.id}-text"
                class="free-text"
                placeholder="自由にご記入ください"
            >${escapeHtml(value)}</textarea>

        `;

    }


    // -------------------------
    // 自由回答＋選択肢
    // -------------------------

    if (
        question.type === "multiText"
    ) {

        const freeText =
            answers[
                `${question.id}_free`
            ] || "";


        html += `

            <textarea
                id="${question.id}-free"
                class="free-text"
                placeholder="自由にご記入ください"
            >${escapeHtml(freeText)}</textarea>

        `;


        html += `
            <div class="options">
        `;


        const selected =
            answers[question.id] || [];


        question.options.forEach(
            option => {

                const checked =
                    selected.includes(
                        option.label
                    );


                html += `

                    <label class="option-card">

                        <input
                            type="checkbox"

                            name="${question.id}"

                            value="${escapeAttribute(
                                option.label
                            )}"

                            ${
                                checked
                                    ? "checked"
                                    : ""
                            }
                        >

                        <span class="option-text">
                            ${escapeHtml(
                                option.label
                            )}
                        </span>

                    </label>

                `;

            }
        );


        html += `
            </div>
        `;

    }


    html += `
        </section>
    `;


    container.innerHTML =
        html;


    updateRankBadges();

}


// =====================================================
// HTMLエスケープ
// =====================================================

function escapeHtml(value) {

    if (value === null ||
        value === undefined) {

        return "";

    }


    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function escapeAttribute(value) {

    return escapeHtml(value);

}


// =====================================================
// 入力イベント
// =====================================================

container.addEventListener(
    "change",
    function(event) {

        const input =
            event.target;


        if (
            input.tagName !== "INPUT"
        ) {
            return;
        }


        const questions =
            getQuestions();

        const question =
            questions[currentIndex];


        // -------------------------
        // 最初の分岐
        // -------------------------

        if (
            question.id === "q0"
        ) {

            const branch =
                question.options.find(
                    option =>
                        option.label ===
                        input.value
                );


            answers["q0"] =
                branch;


            // 以前のルートの回答を消す

            branch1Questions.forEach(
                q => {

                    delete answers[q.id];

                    delete answers[
                        `${q.id}_other`
                    ];

                    delete answers[
                        `${q.id}_free`
                    ];

                }
            );


            branch2Questions.forEach(
                q => {

                    delete answers[q.id];

                    delete answers[
                        `${q.id}_other`
                    ];

                    delete answers[
                        `${q.id}_free`
                    ];

                }
            );


            renderQuestion();

            return;

        }


        // -------------------------
        // single
        // -------------------------

        if (
            question.type === "single"
        ) {

            answers[question.id] =
                input.value;

            return;

        }


        // -------------------------
        // rank2
        // -------------------------

        if (
            question.type === "rank2"
        ) {

            let selected =
                answers[question.id] || [];


            if (
                input.checked
            ) {

                if (
                    selected.length >= 2
                ) {

                    input.checked =
                        false;


                    alert(
                        "選択できるのは最大2つまでです。"
                    );


                    return;

                }


                selected = [
                    ...selected,
                    input.value
                ];

            } else {

                selected =
                    selected.filter(
                        value =>
                            value !==
                            input.value
                    );

            }


            answers[question.id] =
                selected;


            updateRankBadges();

            return;

        }


        // -------------------------
        // multi
        // -------------------------

        if (
            question.type === "multi"
        ) {

            let selected =
                answers[question.id] || [];


            const option =
                question.options.find(
                    item =>
                        item.label ===
                        input.value
                );


            // 「特にない」系

            if (
                option &&
                option.exclusive &&
                input.checked
            ) {

                selected = [
                    input.value
                ];


                container
                    .querySelectorAll(
                        `input[name="${question.id}"]`
                    )
                    .forEach(
                        checkbox => {

                            if (
                                checkbox.value !==
                                input.value
                            ) {

                                checkbox.checked =
                                    false;

                            }

                        }
                    );

            } else {

                // 他の選択肢が選ばれたら
                // 「特にない」を外す

                if (
                    input.checked &&
                    option &&
                    !option.exclusive
                ) {

                    const exclusive =
                        question.options.find(
                            item =>
                                item.exclusive
                        );


                    if (exclusive) {

                        const exclusiveInput =
                            container.querySelector(
                                `input[value="${escapeSelector(
                                    exclusive.label
                                )}"]`
                            );


                        if (
                            exclusiveInput
                        ) {

                            exclusiveInput.checked =
                                false;

                        }


                        selected =
                            selected.filter(
                                value =>
                                    value !==
                                    exclusive.label
                            );

                    }

                }


                if (
                    input.checked
                ) {

                    if (
                        !selected.includes(
                            input.value
                        )
                    ) {

                        selected.push(
                            input.value
                        );

                    }

                } else {

                    selected =
                        selected.filter(
                            value =>
                                value !==
                                input.value
                        );

                }

            }


            answers[question.id] =
                selected;


            return;

        }


        // -------------------------
        // multiText
        // -------------------------

        if (
            question.type === "multiText"
        ) {

            let selected =
                answers[question.id] || [];


            if (
                input.checked
            ) {

                selected.push(
                    input.value
                );

            } else {

                selected =
                    selected.filter(
                        value =>
                            value !==
                            input.value
                    );

            }


            answers[question.id] =
                [
                    ...new Set(selected)
                ];

        }

    }
);


// =====================================================
// テキスト入力
// =====================================================

container.addEventListener(
    "input",
    function(event) {

        const target =
            event.target;


        if (
            target.tagName !== "TEXTAREA"
        ) {
            return;
        }


        const questions =
            getQuestions();

        const question =
            questions[currentIndex];


        if (
            question.type === "text"
        ) {

            answers[question.id] =
                target.value;

        }


        if (
            question.type === "multi"
        ) {

            answers[
                `${question.id}_other`
            ] =
                target.value;

        }


        if (
            question.type === "multiText"
        ) {

            answers[
                `${question.id}_free`
            ] =
                target.value;

        }

    }
);


// =====================================================
// 順番バッジ
// =====================================================

function updateRankBadges() {

    const questions =
        getQuestions();

    const question =
        questions[currentIndex];


    if (
        question.type !== "rank2"
    ) {
        return;
    }


    const selected =
        answers[question.id] || [];


    container
        .querySelectorAll(
            ".rank-badge"
        )
        .forEach(
            badge => {

                const label =
                    badge.dataset.rankFor;


                const index =
                    selected.indexOf(
                        label
                    );


                if (index === -1) {

                    badge.textContent = "";

                    badge.classList.remove(
                        "show"
                    );

                } else {

                    badge.textContent =
                        index + 1;

                    badge.classList.add(
                        "show"
                    );

                }

            }
        );

}


// =====================================================
// CSS selector用エスケープ
// =====================================================

function escapeSelector(value) {

    return String(value)
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"');

}


// =====================================================
// 回答チェック
// =====================================================

function validateQuestion() {

    const questions =
        getQuestions();

    const question =
        questions[currentIndex];


    const value =
        answers[question.id];


    // -------------------------
    // 最初の質問
    // -------------------------

    if (
        question.id === "q0"
    ) {

        if (!value) {

            alert(
                "回答を1つ選択してください。"
            );

            return false;

        }

        return true;

    }


    // -------------------------
    // single
    // -------------------------

    if (
        question.type === "single"
    ) {

        if (!value) {

            alert(
                "回答を1つ選択してください。"
            );

            return false;

        }

    }


    // -------------------------
    // rank2
    // -------------------------

    if (
        question.type === "rank2"
    ) {

        if (
            !Array.isArray(value) ||
            value.length === 0
        ) {

            alert(
                "回答を1つ以上選択してください。"
            );

            return false;

        }

    }


    // -------------------------
    // multi
    // -------------------------

    if (
        question.type === "multi"
    ) {

        if (
            !Array.isArray(value) ||
            value.length === 0
        ) {

            alert(
                "回答を1つ以上選択してください。"
            );

            return false;

        }


        // その他が選択されている場合

        const otherOption =
            question.options.find(
                option =>
                    option.other
            );


        if (
            otherOption &&
            value.includes(
                otherOption.label
            )
        ) {

            const otherText =
                answers[
                    `${question.id}_other`
                ] || "";


            if (
                !otherText.trim()
            ) {

                alert(
                    "「その他（自由回答）」を選択した場合は、内容をご記入ください。"
                );

                return false;

            }

        }

    }


    // -------------------------
    // multiText
    // -------------------------

    if (
        question.type === "multiText"
    ) {

        const selected =
            Array.isArray(value)
                ? value
                : [];


        const freeText =
            answers[
                `${question.id}_free`
            ] || "";


        if (
            selected.length === 0 &&
            !freeText.trim()
        ) {

            alert(
                "選択肢を選ぶか、自由回答をご記入ください。"
            );

            return false;

        }

    }


    // -------------------------
    // 自由回答
    // -------------------------

    if (
        question.type === "text"
    ) {

        // Pagesでは「自由回答」なので
        // 未入力でも進める

        return true;

    }


    return true;

}


// =====================================================
// 次へ
// =====================================================

nextButton.addEventListener(
    "click",
    async function() {

        if (
            !validateQuestion()
        ) {
            return;
        }


        const questions =
            getQuestions();


        // 最後

        if (
            currentIndex ===
            questions.length - 1
        ) {

            await submitSurvey();

            return;

        }


        currentIndex++;

        renderQuestion();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


// =====================================================
// 戻る
// =====================================================

backButton.addEventListener(
    "click",
    function() {

        if (
            currentIndex <= 0
        ) {
            return;
        }


        currentIndex--;

        renderQuestion();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


// =====================================================
// 送信
// =====================================================

async function submitSurvey() {

    nextButton.disabled =
        true;

    nextButton.textContent =
        "送信中...";


    const branch =
        getBranch();


    try {

        const response =
            await fetch(
                "/submit",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        branch: branch,
                        answers: answers
                    })
                }
            );


        const result =
            await response.json();


        if (
            !response.ok ||
            !result.success
        ) {

            throw new Error(
                result.message ||
                "送信に失敗しました。"
            );

        }


        // Thank youページ

        window.location.href =
            "/thanks";


    } catch (error) {

        console.error(error);


        alert(
            "回答の送信に失敗しました。\n" +
            "もう一度お試しください。"
        );


        nextButton.disabled =
            false;

        nextButton.textContent =
            "回答を送信";

    }

}


// =====================================================
// 初期表示
// =====================================================

renderQuestion();
