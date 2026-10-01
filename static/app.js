// =====================================================
// アンケート質問データ
// =====================================================


// -----------------------------------------------------
// 画像
// -----------------------------------------------------

const imagePath = (filename) => {return `/static/images/${filename}`;};


// -----------------------------------------------------
// 塗り方4種類
// -----------------------------------------------------

const coatingOptions = [
    {label: "手で塗る",description:"チューブ式で、押して、手に出して塗る",images:[imagePath("image1-1.png"),imagePath("image1-2.png")]},
    {label: "ローラー",description:"本体に直接日焼け止めが付いていて、コロコロするだけで塗れる",images: [imagePath("image2-1.png"),imagePath("image2-2.png")]},
    {label: "筆・ブラシ",description:"胴体を押すとブラシ部分に日焼け止めが出てきて、描くように塗れる",images: [imagePath("image3-1.png"),imagePath("image3-2.png")]},
    {label: "スポンジ",description:"星型の部分に日焼け止めが付いていて、ぽんぽんと凹むので、凹むたびに日焼け止めが出てきて、スタンプのように塗れる",images: [imagePath("image4-1.png"),imagePath("image4-2.png")]}
];


// =====================================================
// 最初の質問
// =====================================================

const firstQuestion = 
{id: "q0",title: "現在子育てはしていますか？",note: "一つ回答",type: "single",options: [
    {label: "現在している",branch: "①"},
    {label: "過去にしていた",branch: "①"},
    {label: "経験なし",branch: "②"}
    ]
};


// =====================================================
// ① 緑ルート
// =====================================================

const branch1Questions = [
    {id: "b1_q1",branch: "①",title: "【子どもの年齢】",type: "single",
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

    {id: "b1_q2",branch: "①",title:"子どもは日焼け止めは使用していますか（使用していましたか）",type: "single",
     options: [
        { label: "よく使用している" },
        { label: "外出時などに使用している" },
        { label: "以前は使用していたが、現在はあまり使用していない" },
        { label: "使用していない" },
        { label: "覚えていない" }
    ]
    },

    {id: "b1_q3",branch: "①",title:"お子さんが日焼け止めを塗るとき、現在どのように塗っていますか？",type: "single",
     options: [
        { label: "毎回、保護者が塗っている" },
        { label: "基本的に保護者が塗り、一部は子どもが塗る" },
        { label: "子どもが自分で塗っている" },
        { label: "日によって違う" },
        { label: "その他" }
    ]
    },

    {id: "b1_q4",branch: "①",title:"自分で日焼け止めを塗ることについてどう思いますか",type: "single",

        options: [
            { label: "できれば自分で塗ってほしい" },
            { label: "一部だけでも自分で塗ってほしい" },
            { label: "自分で塗ってもらってもよい" },
            { label: "保護者が塗る方が安心" },
            { label: "特に考えたことがない" }
        ]
    },
    
    {id: "b1_q5",branch: "①",title:"次のような「塗り方」の日焼け止めがあったら、どれを使ってみたいですか",
     note:"最大2つ回答できます。2つ選ぶ場合は、一番目・二番目の順番で選んでください。",type: "rank2",
     options: coatingOptions
    },

    {id: "b1_q6",branch: "①",title:"「子どもが自分から塗ってみたい」と思いそうなものは？",note:"最大2つ回答できます。2つ選ぶ場合は、一番目・二番目の順番で選んでください。",type: "rank2",
     options: coatingOptions
    },

    {id: "b1_q7",branch: "①",title:"日焼け止めを選ぶとき、重視することは何ですか？",type: "multi",
        options: [
            { label: "肌へのやさしさ" },
            { label: "SPF・PAなどの効果" },
            { label: "塗りやすさ" },
            { label: "落としやすさ" },
            { label: "価格" },
            { label: "容量" },
            { label: "香り" },
            { label: "子どもが使いやすいこと" },
            { label: "その他" }
        ]
    },


    {id: "b1_q8",branch: "①",title:"日焼け止めを子どもに塗るとき、困ることはありますか？",type: "multi",
        options: [
            { label: "子どもが嫌がる" },
            { label: "子どもが逃げる・動く" },
            { label: "塗るのに時間がかかる" },
            { label: "ムラなく塗るのが難しい" },
            { label: "顔や目の周りが塗りにくい" },
            { label: "外出前は忙しい" },
            { label: "塗り直しが大変" },
            { label: "特にない", exclusive: true },
            { label: "その他" }
        ]
    },


    {id: "b1_q9",branch: "①",title:"もし子どもが自分で日焼け止めを塗るようになったら、どんなことを期待しますか？",type: "multi",
        options: [
            { label: "保護者の負担が減る" },
            { label: "子どもが自分の肌を守る意識を持つ" },
            { label: "外出前の準備が楽になる" },
            { label: "日焼け止めを塗ることを嫌がらなくなる" },
            { label: "親子で楽しく使える" },
            { label: "特にない", exclusive: true },
            { label: "その他" }
        ]
    },


    {id: "b1_q10",branch: "①",title:"子どもが使いたくなる日焼け止めについて、何かアイデアや希望はありますか？",type: "text"},   
    {id: "b1_q11",branch: "①",title:"その他、日焼け止めについて伝えたいことがあれば教えてください。",type: "text"}
];


// =====================================================
// ② オレンジルート
// =====================================================

const branch2Questions = [
    {id: "b2_q1",branch: "②",title:"あなたの年代を教えてください",type: "single",
        options: [
            { label: "10代" },
            { label: "20代" },
            { label: "30代" },
            { label: "40代" },
            { label: "50代" },
            { label: "60代以上" }
        ]
    },


    {id: "b2_q2",branch: "②",title:"子どもの頃、日焼け止めを使っていましたか？",type: "single",
        options: [
            { label: "よく使っていた" },
            { label: "たまに使っていた" },
            { label: "ほとんど使っていなかった" },
            { label: "使っていなかった" },
            { label: "覚えていない" }
        ]
    },


    {id: "b2_q3",branch: "②",title:"子どもの頃、日焼け止めを塗ることについてどう感じていましたか？",type: "multi",
        options: [
            { label: "好きだった" },
            { label: "嫌だった" },
            { label: "面倒だった" },
            { label: "ベタベタするのが嫌だった" },
            { label: "特に何も感じなかった" },
            { label: "覚えていない" },
            { label: "その他" }
        ]
    },


    {id: "b2_q4",branch: "②",title:"子どもの頃、日焼け止めを塗るときに困ったことはありましたか？",type: "multi",
        options: [
            { label: "ベタベタする" },
            { label: "塗るのが面倒" },
            { label: "時間がかかる" },
            { label: "匂いが気になる" },
            { label: "冷たい" },
            { label: "服や髪につく" },
            { label: "自分ではうまく塗れない" },
            { label: "日焼け止めを塗る必要性が分からない" },
            { label: "特にない", exclusive: true },
            { label: "その他" }
        ]
    },

    {id: "b2_q5",branch: "②",title:"もし子どもの頃に、日焼け止めを楽しく塗れる商品があったら使ってみたいと思いましたか？",type: "single",
     options: [
            { label: "ぜひ使ってみたい" },
            { label: "少し使ってみたい" },
            { label: "どちらともいえない" },
            { label: "あまり使いたいと思わない" },
            { label: "使いたいと思わない" }
        ]
    },


    {id: "b2_q6",branch: "②",title:"次のような「塗り方」の日焼け止めがあったら、どれを使ってみたいですか？",note:"最大2つ回答できます。2つ選ぶ場合は、一番目・二番目の順番で選んでください。",type: "rank2",
     options: coatingOptions
    },

    {id: "b2_q7",branch: "②",title:"日焼け止めを選ぶとしたら、どんなことを重視しますか？",type: "multi",
        options: [
            { label: "塗りやすさ" },
            { label: "楽しく使えること" },
            { label: "見た目・デザイン" },
            { label: "肌へのやさしさ" },
            { label: "SPF・PAなどの効果" },
            { label: "価格" },
            { label: "落としやすさ" },
            { label: "その他" }
        ]
    },
    
    {id: "b2_q8",branch: "②",title:"もし身近な子ども（甥、姪、親戚の子ども、きょうだい、友人のこども）に日焼け止めをプレゼントするなら、どんなものをあげますか",note:"※いない場合も想像して、回答ください。中身は同じとします。",type: "multi",
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
    if (!value) {return null;}
    if (value === "現在している" || value === "過去にしていた") {return "①";}
    if (value === "経験なし") {return "②";}
    return null;
}


// =====================================================
// 現在表示する質問一覧
// =====================================================

function getQuestions() {
    const branch = getBranch();
    if (branch === "①") {
        return [firstQuestion, ...branch1Questions];
    }

    if (branch === "②") {
        return [firstQuestion, ...branch2Questions];
    }
    return [firstQuestion];
}


// =====================================================
// 「その他」判定
// =====================================================

function isOtherOption(option) {
    if (!option) {return false;}
    return (
        option.other === true ||
        option.label === "その他" ||
        option.label.includes("その他（自由回答）"));
}


// =====================================================
// HTMLエスケープ
// =====================================================

function escapeHtml(value) {
    if (
        value === null ||
        value === undefined) 
    {return "";}
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

const headerTexts = {

    start: {
        title: "日焼け止めに関するアンケート",
        subtitle: "まずは、いくつか教えてください。"
    },

    "①": {
        title: "お子さんの日焼け止めに<br>関するアンケート",
        subtitle:
            "現在子育て中の方も、<br>" +
            "子育てを終えた方も、<br>" +
            "ぜひお気軽にお答えください。"
    },

    "②": {
        title: "こどものころと現在の<br>日焼け止めアンケート",
        subtitle:
            "子どものころを思い出しながら<br>" +
            "気軽に答えてください"
    }
};


function updateHeader() {

    const key = getBranch() || "start";
    const text = headerTexts[key];

    document.getElementById("survey-title").innerHTML =
        text.title;

    document.getElementById("survey-subtitle").innerHTML =
        text.subtitle;
}

// =====================================================
// 質問表示
// =====================================================

function renderQuestion() {
    const questions = getQuestions();
    const question = questions[currentIndex];
    
    if (!question) {
        console.error("質問が見つかりません:", currentIndex);
        return;
    }

    updateHeader();
    
    // -------------------------
    // 進捗
    // -------------------------

    progressCurrent.textContent =
        currentIndex + 1;

    progressTotal.textContent =
        questions.length;

    const progress =
        ((currentIndex + 1) / questions.length) * 100;

    progressFill.style.width =
        `${progress}%`;


    // -------------------------
    // 戻る
    // -------------------------

    if (currentIndex === 0) {
        backButton.style.display = "none";
    } else {
        backButton.style.display = "block";
    }


    // -------------------------
    // 次へ / 送信
    // -------------------------

    if (currentIndex === questions.length - 1) {nextButton.textContent = "回答を送信";} 
    else {nextButton.textContent = "次へ";}


    // -------------------------
    // HTML
    // -------------------------

    let html = "";

    // 分岐ラベル

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
    <section
    class="question"
    data-question-id="${escapeAttribute(question.id)}"
    >
    <h2>
    ${escapeHtml(question.title)}
    </h2>
    `;
// 注釈
    if (question.note) {
        html += `
        <p class="question-note">
        ${escapeHtml(question.note).replace(/\n/g, "<br>")}
        </p>
        `;
    }


    // =================================================
    // 選択肢
    // =================================================

    if (
        question.type === "single" ||
        question.type === "multi" ||
        question.type === "rank2"
    ) {
        html += `
            <div class="options">
        `;

        const selected = answers[question.id];

        question.options.forEach(
            (option, index) => {
                let checked = false;
                let rank = "";
                if (question.type === "single") {
                    checked =
                        selected === option.label;
                }
                if (question.type === "multi") {
                    checked =
                        Array.isArray(selected) &&
                        selected.includes(option.label);
                }

                if (question.type === "rank2") {
                    checked =
                        Array.isArray(selected) &&
                        selected.includes(option.label);

                    if (checked) {
                        rank =
                            selected.indexOf(option.label) + 1;
                    }
                }

                html += `
                <label
                class="
                option-card
                ${option.images ? "has-image" : ""}
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
                    : ""}
                    >
                `;


                // =================================================
                // 画像
                // =================================================

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
                                src="${escapeAttribute(image)}"
                                alt="${escapeAttribute
                                       (option.label
                                       )} ${imageIndex + 1}"
                                       class="option-image"
                                       loading="lazy"
                                       onerror="this.style.display='none'; console.error('画像読み込み失敗:', this.src);"
                                >
                            `;
                        }
                    );

                    html += `
                        </div>
                    `;
                }


                // 名前・説明

                html += `
                <div class="option-information">
                <span class="option-text">${escapeHtml(option.label)}
                </span>${
                    option.description
                    ? `
                    <span class="option-description">
                    ${escapeHtml(
                        option.description)}</span>
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
                            class="rank-badge ${
                                rank ? "show" : ""
                            }"
                            data-rank-for="${
                                escapeAttribute(option.label)
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


        // =================================================
        // その他自由回答
        // =================================================

        if (
            question.type === "single" ||
            question.type === "multi"
        ) {

            const otherOption =
                question.options.find(
                    option =>
                        isOtherOption(option)
                );


            const selectedValue =
                answers[question.id];


            const isSelected =
                question.type === "single"
                    ? (
                        otherOption &&
                        selectedValue ===
                            otherOption.label
                    )
                    : (
                        Array.isArray(selectedValue) &&
                        otherOption &&
                        selectedValue.includes(
                            otherOption.label
                        )
                    );


            if (
                otherOption &&
                isSelected
            ) {

                const otherText =
                    answers[
                        `${question.id}_other`
                    ] || "";


                html += `
                    <textarea
                        id="${question.id}-other"
                        class="other-text"
                        placeholder="その他の場合はこちらにご記入ください"
                    >${escapeHtml(otherText)}</textarea>
                `;
            }
        }
    }


    // =================================================
    // 自由回答
    // =================================================

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


    // =================================================
    // multiText
    // =================================================

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


    // b2_q8 見た目統一

    if (
        question.id === "b2_q8"
    ) {

        const title =
            container.querySelector(
                ".question h2"
            );

        if (title) {

            title.style.fontFamily =
                "inherit";

            title.style.fontWeight =
                "600";
        }
    }
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


        if (!question) {
            return;
        }


        // =================================================
        // 最初の分岐
        // =================================================

        if (
            question.id === "q0"
        ) {

            answers["q0"] =
                input.value;


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


            currentIndex = 0;

            renderQuestion();

            return;
        }


        // =================================================
        // single
        // =================================================

        if (
            question.type === "single"
        ) {

            const previousValue =
                answers[question.id];


            answers[question.id] =
                input.value;


            const selectedOption =
                question.options.find(
                    option =>
                        option.label ===
                        input.value
                );


            const previousOption =
                question.options.find(
                    option =>
                        option.label ===
                        previousValue
                );


            if (
                isOtherOption(selectedOption) ||
                isOtherOption(previousOption)
            ) {

                if (
                    !isOtherOption(selectedOption)
                ) {

                    delete answers[
                        `${question.id}_other`
                    ];
                }


                renderQuestion();
            }


            return;
        }


        // =================================================
        // rank2
        // =================================================

        if (
            question.type === "rank2"
        ) {

            let selected =
                Array.isArray(
                    answers[question.id]
                )
                    ? [...answers[question.id]]
                    : [];


            if (input.checked) {

                if (selected.length >= 2) {

                    input.checked = false;

                    alert(
                        "選択できるのは最大2つまでです。"
                    );

                    return;
                }


                selected.push(
                    input.value
                );

            } else {

                selected =
                    selected.filter(
                        value =>
                            value !== input.value
                    );
            }


            answers[question.id] =
                selected;


            updateRankBadges();

            return;
        }


        // =================================================
        // multi
        // =================================================

        if (
            question.type === "multi"
        ) {

            let selected =
                Array.isArray(
                    answers[question.id]
                )
                    ? [...answers[question.id]]
                    : [];


            const option =
                question.options.find(
                    item =>
                        item.label ===
                        input.value
                );


            const wasOtherSelected =
                selected.some(
                    value => {

                        const item =
                            question.options.find(
                                candidate =>
                                    candidate.label ===
                                    value
                            );

                        return isOtherOption(item);
                    }
                );


            // 排他的選択肢

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


                        if (exclusiveInput) {

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


                if (input.checked) {

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


            const isOtherSelected =
                selected.some(
                    value => {

                        const item =
                            question.options.find(
                                candidate =>
                                    candidate.label ===
                                    value
                            );

                        return isOtherOption(item);
                    }
                );


            if (
                wasOtherSelected !==
                isOtherSelected
            ) {

                if (!isOtherSelected) {

                    delete answers[
                        `${question.id}_other`
                    ];
                }


                renderQuestion();
            }


            return;
        }


        // =================================================
        // multiText
        // =================================================

        if (
            question.type === "multiText"
        ) {

            let selected =
                answers[question.id] || [];


            if (input.checked) {

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
                [...new Set(selected)];
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


        if (!question) {
            return;
        }


        // 通常の自由回答

        if (
            question.type === "text"
        ) {

            answers[question.id] =
                target.value;
        }


        // その他

        if (
            question.type === "single" ||
            question.type === "multi"
        ) {

            const selected =
                answers[question.id];


            const otherOption =
                question.options.find(
                    option =>
                        isOtherOption(option)
                );


            const isOtherSelected =
                question.type === "single"
                    ? (
                        otherOption &&
                        selected ===
                            otherOption.label
                    )
                    : (
                        Array.isArray(selected) &&
                        otherOption &&
                        selected.includes(
                            otherOption.label
                        )
                    );


            if (isOtherSelected) {

                answers[
                    `${question.id}_other`
                ] =
                    target.value;
            }
        }


        // multiText

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
        !question ||
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
        .replace(
            /\\/g,
            "\\\\"
        )
        .replace(
            /"/g,
            '\\"'
        );
}


// =====================================================
// 回答チェック
// =====================================================

function validateQuestion() {

    const questions =
        getQuestions();

    const question =
        questions[currentIndex];


    if (!question) {
        return false;
    }


    const value =
        answers[question.id];


    // 最初の質問

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


    // single

    if (
        question.type === "single"
    ) {

        if (!value) {

            alert(
                "回答を1つ選択してください。"
            );

            return false;
        }


        const selectedOption =
            question.options.find(
                option =>
                    option.label ===
                    value
            );


        if (
            isOtherOption(
                selectedOption
            )
        ) {

            const otherText =
                answers[
                    `${question.id}_other`
                ] || "";


            if (!otherText.trim()) {

                alert(
                    "「その他」を選択した場合は、内容をご記入ください。"
                );

                return false;
            }
        }
    }


    // rank2

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


    // multi

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


        const otherOption =
            question.options.find(
                option =>
                    isOtherOption(option)
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


            if (!otherText.trim()) {

                alert(
                    "「その他」を選択した場合は、内容をご記入ください。"
                );

                return false;
            }
        }
    }


    // multiText

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


    // text

    if (
        question.type === "text"
    ) {

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

    nextButton.disabled = true;

    nextButton.textContent =
        "送信中...";


    const branch =
        getBranch();


    try {

        console.log(
            "送信開始",
            {
                branch: branch,
                answers: answers
            }
        );


        const response =
            await fetch(
                "/submit",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",
                        "Accept":
                            "application/json"
                    },

                    body: JSON.stringify({
                        branch: branch,
                        answers: answers
                    })
                }
            );


        // -------------------------------------------------
        // まずテキストとして受け取る
        // JSONで返ってこない場合も原因が分かるようにする
        // -------------------------------------------------

        const responseText =
            await response.text();


        console.log(
            "送信レスポンス:",
            response.status,
            responseText
        );


        let result = null;


        try {

            result =
                JSON.parse(
                    responseText
                );

        } catch (jsonError) {

            throw new Error(
                "サーバーからJSONではない応答が返りました。" +
                ` HTTP ${response.status}` +
                ` / ${responseText.substring(0, 300)}`
            );
        }


        if (
            !response.ok ||
            !result.success
        ) {

            throw new Error(
                result.message ||
                `送信に失敗しました。HTTP ${response.status}`
            );
        }


        console.log(
            "送信成功"
        );


        window.location.href =
            "/thanks";

    } catch (error) {

        console.error(
            "SUBMIT ERROR:",
            error
        );


        alert(
            "回答の送信に失敗しました。\n\n" +
            error.message
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
