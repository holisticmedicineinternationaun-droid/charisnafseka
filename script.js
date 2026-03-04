// Navigation logic
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and sections
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.interactive-section').forEach(sec => sec.classList.remove('active'));

        // Add active class to clicked button and target section
        button.classList.add('active');
        const targetId = button.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

// --- HUMORS MAP LOGIC ---
const humorsData = {
    blood: {
        title: "الدم (حار رطب)",
        color: "#e74c3c",
        icon: "fa-tint",
        generation: "ينتج في الكبد من الهضم الجيد المعتدل للغذاء.",
        location: "يسري في الأوردة والشرايين ليغذي جميع أعضاء البدن.",
        function: "تغذية البدن وتوليد اللحم، وهو أفضل الأخلاط وأكثرها كمية في الجسم السليم.",
        quote: "قال ابن سينا: «الدم خلط طبيعي، وهو حار رطب، وهو أفضل الأخلاط، والمقصود الأول من الغذاء»."
    },
    yellow: {
        title: "الصفراء (حار يابس)",
        color: "#f1c40f",
        icon: "fa-fire",
        generation: "تنتج في الكبد (وهي رغوة الدم أو الجزء اللطيف الحار منه).",
        location: "يستقر جزء منها في المرارة (الحويصلة الصفراوية)، وجزء يسري مع الدم.",
        function: "تلطيف الدم ليتمكن من الدخول للمجاري الدقيقة، وتغذية بعض الأعضاء كالرئة، وتنبيه الأمعاء لدفع الفضلات.",
        quote: "قال ابن سينا: «الصفراء خلط لطيف حار يابس، يذهب بعضه إلى المرارة، وبعضه يخالط الدم ليلطفه»."
    },
    phlegm: {
        title: "البلغم (بارد رطب)",
        color: "#3498db",
        icon: "fa-snowflake",
        generation: "ينتج في المعدة والكبد (وهو دم فج لم يكتمل هضمه ونضجه).",
        location: "ليس له عضو مخصص يجمعه (كمرارة الصفراء)، بل يسري مع الدم ويتركز في الأجزاء الباردة كالدماغ والمفاصل.",
        function: "ترطيب المفاصل والأعضاء الدائمة الحركة، ويمكن أن يتحول إلى دم إذا احتاجه البدن (احتراق البلغم يولد الدم).",
        quote: "قال ابن سينا: «البلغم دم لم يتم نضجه، وهو بارد رطب، وليس له مِقَرّ مخصوص كالصفراء والسوداء»."
    },
    black: {
        title: "السوداء (بارد يابس)",
        color: "#2c3e50",
        icon: "fa-mountain",
        generation: "تنتج في الكبد (وهي عكر الدم أو الجزء الأغلظ منه كعكر الزيت).",
        location: "يستقر الجزء الأكبر منها في الطحال، وجزء يسري مع الدم.",
        function: "تغذية الأعضاء القوية الصلبة كالعظام والطحال، وتنبيه فم المعدة لخلق الشعور بالجوع.",
        quote: "قال ابن سينا: «السوداء خلط بارد يابس، وهو ثفل الدم، ينصب منه قسط إلى الطحال ليغذيه ويشهي الطعام»."
    }
};

function showHumorInfo(type) {
    const data = humorsData[type];
    const box = document.getElementById('humor-info-box');

    // إزالة التنسيقات النشطة السابقة
    document.querySelectorAll('.humor-circle').forEach(circle => {
        circle.style.transform = 'scale(1)';
        circle.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    });

    // إضافة التنسيق النشط للخلط المحدد
    const activeCircle = document.querySelector(`.humor-circle.${type === 'yellow' ? 'yellow-bile' : type === 'black' ? 'black-bile' : type}`);
    if (activeCircle) {
        activeCircle.style.transform = 'scale(1.1) translateY(-5px)';
        activeCircle.style.boxShadow = `0 10px 25px ${data.color}66`;
    }

    box.style.borderRightColor = data.color;
    box.innerHTML = `
        <h3 style="color: ${data.color};"><i class="fas ${data.icon}"></i> ${data.title}</h3>
        <div class="humor-info-grid">
            <div class="info-section">
                <h4><i class="fas fa-fire-burner"></i> أين يتولد؟</h4>
                <p>${data.generation}</p>
            </div>
            <div class="info-section">
                <h4><i class="fas fa-map-marker-alt"></i> أين يستقر؟</h4>
                <p>${data.location}</p>
            </div>
            <div class="info-section" style="grid-column: 1 / -1;">
                <h4><i class="fas fa-cogs"></i> وظيفته في البدن</h4>
                <p>${data.function}</p>
            </div>
        </div>
        <div class="ibn-sina-quote">
            <i class="fas fa-quote-right" style="color: #ccc; font-size: 1.2rem; margin-left: 10px;"></i>
            ${data.quote}
        </div>
    `;

    box.classList.remove('hidden');
}


// --- DIAGNOSIS TABS LOGIC ---
function showDiagTab(tabId) {
    document.querySelectorAll('.diag-tab').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.diag-content').forEach(content => content.classList.remove('active'));

    // Find the button that called this
    const btn = document.querySelector(`.diag-tab[onclick="showDiagTab('${tabId}')"]`);
    if (btn) btn.classList.add('active');

    document.getElementById(tabId).classList.add('active');
}

// --- CAROUSEL & CARDS LOGIC ---
const herbsData = [
    // --- الحار اليابس (الناري) ---
    ...["الزعتر", "الهيل", "البابونج", "الزعفران", "لبان الذكر", "الفستق", "السكر", "الكرنب", "الشبت", "البندق", "الجرجير"].map(name => ({ title: name, icon: "fa-fire-alt", nature: "حار يابس (درجة 1)", desc: "يستخدم للتسخين، التجفيف، وتقطيع البلغم.", color: "linear-gradient(135deg, #e67e22, #d35400)" })),
    ...["الحبة السوداء", "القرفة", "النعناع", "الكرفس", "اليانسون", "الفجل", "المرة", "المصطكى", "الكراوية", "المري"].map(name => ({ title: name, icon: "fa-fire-alt", nature: "حار يابس (درجة 2)", desc: "يستخدم للتسخين، التجفيف، وتقطيع البلغم.", color: "linear-gradient(135deg, #e67e22, #d35400)" })),
    ...["القسط الهندي", "الزنجبيل", "الخردل", "القرنفل", "الفلفل الأسود", "الفلفل الأبيض", "الكمون", "السذاب", "الحلتيت", "حب الصنوبر"].map(name => ({ title: name, icon: "fa-fire-alt", nature: "حار يابس (درجة 3)", desc: "يستخدم للتسخين، التجفيف، وتقطيع البلغم.", color: "linear-gradient(135deg, #e67e22, #d35400)" })),
    ...["الثوم", "البصل", "الحرمل", "الحنظل", "الفريون", "الخربق", "الأشق"].map(name => ({ title: name, icon: "fa-fire-alt", nature: "حار يابس (درجة 4)", desc: "يستخدم للتسخين، التجفيف، وتقطيع البلغم.", color: "linear-gradient(135deg, #e67e22, #d35400)" })),

    // --- الحار الرطب (الهوائي) ---
    ...["العسل", "التين الطازج", "العنب", "الموز", "الرطب (البلح)", "الزبيب", "القمح", "دهن اللوز", "السمن", "الزبد", "الحمص"].map(name => ({ title: name, icon: "fa-wind", nature: "حار رطب (درجة 1)", desc: "يستخدم لتوليد الدم النقي وتغذية الأعضاء.", color: "linear-gradient(135deg, #f1c40f, #f39c12)" })),
    ...["اللحم الدسم", "البيض", "لحم الضأن (الخرفان)", "القلقاس", "اللوز الحلو"].map(name => ({ title: name, icon: "fa-wind", nature: "حار رطب (درجة 2)", desc: "يستخدم لتوليد الدم النقي وتغذية الأعضاء.", color: "linear-gradient(135deg, #f1c40f, #f39c12)" })),

    // --- البارد الرطب (البلغمي) ---
    ...["البنفسج", "الهندباء البرية", "الإسفاناخ (السبانخ)", "الخس", "السلق", "اللبن (الحليب)", "القثاء", "الكوسا", "الخبازي"].map(name => ({ title: name, icon: "fa-tint", nature: "بارد رطب (درجة 1)", desc: "يستخدم للترطيب، تبريد الالتهابات، وتسكين العطش.", color: "linear-gradient(135deg, #3498db, #2980b9)" })),
    ...["اللبن الرائب", "القرع (اليقطين)", "الخيار", "البطيخ الأحمر", "ماء الشعير", "الرجلة (البقلة الحمقاء)", "الجبن الطري", "السمك الطازج"].map(name => ({ title: name, icon: "fa-tint", nature: "بارد رطب (درجة 2)", desc: "يستخدم للترطيب، تبريد الالتهابات، وتسكين العطش.", color: "linear-gradient(135deg, #3498db, #2980b9)" })),
    ...["اللفاح (الخشخاش)", "البنج", "الأفيون", "السموم الباردة المحددة"].map(name => ({ title: name, icon: "fa-tint", nature: "بارد رطب (درجة 3)", desc: "يستخدم للترطيب، تبريد الالتهابات، وتسكين العطش.", color: "linear-gradient(135deg, #3498db, #2980b9)" })),

    // --- البارد اليابس (السوداوي) ---
    ...["السفرجل", "الرمان الحلو", "الورد الجوري", "التفاح", "الكمثرى", "الأرز", "الشعير", "البلوط", "العدس"].map(name => ({ title: name, icon: "fa-leaf", nature: "بارد يابس (درجة 1)", desc: "يستخدم للقبض، قطع النزيف، وتقوية الأنسجة الرخوة.", color: "linear-gradient(135deg, #9b59b6, #8e44ad)" })),
    ...["الرمان الحامض", "التمر الهندي", "الخل", "السماق", "العفص", "لسان الحمل", "الباقلاء (الفول)", "اللوبيا"].map(name => ({ title: name, icon: "fa-leaf", nature: "بارد يابس (درجة 2)", desc: "يستخدم للقبض، قطع النزيف، وتقوية الأنسجة الرخوة.", color: "linear-gradient(135deg, #9b59b6, #8e44ad)" })),
    ...["القشور القابضة جداً", "الهليلج الأسود", "الكحل (الإثمد)"].map(name => ({ title: name, icon: "fa-leaf", nature: "بارد يابس (درجة 3)", desc: "يستخدم للقبض، قطع النزيف، وتقوية الأنسجة الرخوة.", color: "linear-gradient(135deg, #9b59b6, #8e44ad)" }))
];

const organsDataList = [
    { title: "الدماغ (المخ)", icon: "fa-brain", nature: "بارد رطب", desc: "يحتاج إلى الأغذية المعتدلة، ويتضرر دائماً باليبوسة الشديدة.", color: "linear-gradient(135deg, #c0392b, #e74c3c)", border: "#c0392b" },
    { title: "القلب", icon: "fa-heart", nature: "حار يابس", desc: "ينبوع الحرارة الغريزية، تحييه الروائح الطيبة والبهجة.", color: "linear-gradient(135deg, #c0392b, #e74c3c)", border: "#c0392b" },
    { title: "الكبد", icon: "fa-lungs", nature: "حار رطب", desc: "مطبخ الغذاء ومكسر الأخلاط، يطلب الرطوبة والدفء.", color: "linear-gradient(135deg, #c0392b, #e74c3c)", border: "#c0392b" },
    { title: "المعدة", icon: "fa-procedures", nature: "عصبية باردة", desc: "محل هضم الطعام، تتأثر بالبرودة الشديدة والمثلجات.", color: "linear-gradient(135deg, #c0392b, #e74c3c)", border: "#c0392b" },
    { title: "الرئة", icon: "fa-wind", nature: "حار رطب", desc: "تتضرر بالغبار والهواء البارد الجاف، تحتاج لما يرطبها.", color: "linear-gradient(135deg, #c0392b, #e74c3c)", border: "#c0392b" },
    { title: "الطحال", icon: "fa-shield-virus", nature: "بارد يابس", desc: "يعمل كمصفاة للدم الغليظ (الخَلط السوداوي).", color: "linear-gradient(135deg, #c0392b, #e74c3c)", border: "#c0392b" },
    { title: "الكلية", icon: "fa-vial", nature: "حار رطب", desc: "من الأعضاء التي ذُكرت في قوائم الحار الرطب لتكوين الدم.", color: "linear-gradient(135deg, #c0392b, #e74c3c)", border: "#c0392b" }
];

let currentHerbIndex = 0;
let currentOrganIndex = 0;

function createCardHTML(item, isOrgan = false) {
    const bg = item.color;
    const border = item.border || "var(--secondary-color)";
    const titleColor = item.border || "var(--primary-color)";

    return `
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front" style="background: ${bg};">
                    <i class="fas ${item.icon} fa-3x" ${isOrgan ? '' : 'style="color: var(--secondary-color);"'}></i>
                    <h3>${item.title}</h3>
                </div>
                <div class="flip-card-back" style="border-color: ${border};">
                    <h3 style="color: ${titleColor};">طبيعته: ${item.nature}</h3>
                    <p>${item.desc}</p>
                </div>
            </div>
        </div>
    `;
}

function updateCarousel(type) {
    if (type === 'herbs') {
        const display = document.getElementById('herbs-cards-display');
        display.innerHTML = createCardHTML(herbsData[currentHerbIndex]);
    } else {
        const display = document.getElementById('organs-cards-display');
        display.innerHTML = createCardHTML(organsDataList[currentOrganIndex], true);
    }
}

function nextCard(type) {
    if (type === 'herbs') {
        currentHerbIndex = (currentHerbIndex + 1) % herbsData.length;
    } else {
        currentOrganIndex = (currentOrganIndex + 1) % organsDataList.length;
    }
    updateCarousel(type);
}

function prevCard(type) {
    if (type === 'herbs') {
        currentHerbIndex = (currentHerbIndex - 1 + herbsData.length) % herbsData.length;
    } else {
        currentOrganIndex = (currentOrganIndex - 1 + organsDataList.length) % organsDataList.length;
    }
    updateCarousel(type);
}

function renderAllGrids() {
    const herbsGrid = document.getElementById('herbs-all-grid');
    const organsGrid = document.getElementById('organs-all-grid');

    herbsGrid.innerHTML = herbsData.map(h => createCardHTML(h)).join('');
    organsGrid.innerHTML = organsDataList.map(o => createCardHTML(o, true)).join('');
}

function toggleViewAll(type) {
    const container = document.querySelector(`#section-${type === 'herbs' ? '2' : '3'} .carousel-container`);
    const grid = document.getElementById(`${type}-all-grid`);

    if (grid.classList.contains('hidden-grid')) {
        grid.classList.remove('hidden-grid');
        container.style.display = 'none';
    } else {
        grid.classList.add('hidden-grid');
        container.style.display = 'flex';
    }
}

// --- QUIZ LOGIC ---
const tfQuestions = [
    { question: "النعناع طبيعته حار يابس ويفيد في الهضم.", answer: true, explanation: "إجابة صحيحة! النعناع لطيف ومحلل للرياح." },
    { question: "يرى ابن سينا أن العدس يابس في الدرجة الثانية، بينما يراه ابن البيطار مولداً للدم السوداوي.", answer: true, explanation: "إلى جانب الاختلاف، كلا الرأيين يعكسان ميله للبرودة واليبوسة المولدة للسوداء." },
    { question: "لعلاج أوجاع المفاصل الباردة اليابسة، نستخدم أغذية باردة رطبة مثل الخس والقرع.", answer: false, explanation: "إجابة خاطئة! المفاصل الباردة تُعالج بالمسخنات مثل زيت الزيتون والحرمل (علاج بالضد)." },
    { question: "الأسماك البحرية الكبيرة تميل دائماً للحرارة واليبوسة.", answer: false, explanation: "خطأ، السمك الصغير منه يميل للحرارة واليبوسة، بينما السمك الكبير البحري بارد رطب." }
];

let currentTfIndex = 0;

function loadTF() {
    document.getElementById('tf-question').textContent = tfQuestions[currentTfIndex].question;
    document.getElementById('tf-feedback').textContent = '';
    document.getElementById('tf-feedback').className = 'feedback';
}

function checkTF(userAnswer) {
    const currentQ = tfQuestions[currentTfIndex];
    const feedbackEl = document.getElementById('tf-feedback');

    if (userAnswer === currentQ.answer) {
        feedbackEl.textContent = "أحسنت! " + currentQ.explanation;
        feedbackEl.className = 'feedback correct';
    } else {
        feedbackEl.textContent = "حاول مرة أخرى! " + currentQ.explanation;
        feedbackEl.className = 'feedback wrong';
    }

    setTimeout(() => {
        currentTfIndex = (currentTfIndex + 1) % tfQuestions.length;
        loadTF();
    }, 3000);
}


const mcqQuestions = [
    {
        question: "أي من الأغذية التالية طبيعته بارد رطب ومناسب لفصل الصيف لكسر حرارة المزاج الصفراوي؟",
        options: ["الزنجبيل", "البطيخ", "الكمون", "العسل"],
        answer: 1,
        explanation: "البطيخ بارد رطب ويسكن العطش وحرارة المعدة (علاج الضد)."
    },
    {
        question: "وفقاً لمبدأ 'الإصلاح'، كيف نُصلح الأغذية الغليظة مثل لحم البقر؟",
        options: ["بشرب الماء البارد", "بأكلها مع التفاح", "بمأكولات باردة كالبطيخ", "بالأبازير الحارة كالزعتر والكمون"],
        answer: 3,
        explanation: "الأبازير الحارة كالزعتر والكمون تساعد في تلطيف وهضم الأغذية الغليظة."
    },
    {
        question: "ماذا يقترح الأطباء لتقوية الدماغ (البارد الرطب) استناداً لعلاج 'المتشابه'؟",
        options: ["المرطبات اللطيفة كالبنفسج والورد", "المسخنات الشديدة كالفلفل", "المجففات كالسفرجل", "الثوم والبصل"],
        answer: 0,
        explanation: "لتقوية عضو بطبيعته، نستخدم علاج المتشابه، فنعطيه من جنسه كالبنفسج والورد."
    },
    {
        question: "أي الأعضاء يعتبر مطبخ الغذاء الثاني ومولد الأخلاط في الجسم؟",
        options: ["المعدة", "القلب", "الكبد", "الطحال"],
        answer: 2,
        explanation: "الكبد هو مطبخ الغذاء الثاني، حيث تتحول فيه عصارة المعدة إلى الأخلاط الأربعة."
    },
    {
        question: "ما هو الخلط الذي يعتبر مقعده ومصيدته في الطحال؟",
        options: ["الخلط الدموي", "الخلط البلغمي", "الخلط الصفراوي", "الخلط السوداوي"],
        answer: 3,
        explanation: "الطحال هو العضو الذي يستقبل الخلط السوداوي (عكر الدم) ليحتفظ به ويمنعه من تلويث البدن."
    },
    {
        question: "الزنجبيل والفلفل يصنفان ضمن الأدوية والأغذية:",
        options: ["الحارة في الدرجة الأولى", "الباردة في الدرجة الثانية", "الحارة اليابسة في الدرجة الثالثة أو الرابعة", "المعتدلة"],
        answer: 2,
        explanation: "هي مسخنات شديدة جداً تصنف في الدرجات العليا للحرارة واليبوسة وتستعمل بحذر."
    },
    {
        question: "شخص غضبه سريع، نبضه قوي سريع، ويميل لون بشرته للصفرة.. ما هو مزاجه الغالب؟",
        options: ["دموي", "بلغمي", "صفراوي", "سوداوي"],
        answer: 2,
        explanation: "هذه من العلامات الجلية لغلبة الخلط الصفراوي (الحار اليابس) الذي يزيد من حدة الانفعال."
    },
    {
        question: "شخص غني أو فقير تناول وجبة دسمة جداً (كبسة أو لحم غليظ) كيف يمكنه إصلاح هذه الوجبة المتعبة بمكونات بسيطة من المنزل؟",
        options: ["بشرب الماء المثلج بعدها", "بإضافة قليل من الخل والبصل أو شرب شاي بالنعناع والكمون", "بأكل فاكهة حلوة جداً كالمانجو", "بالنوم المباشر"],
        answer: 1,
        explanation: "الخل، البصل، النعناع، والكمون متوفرة وتقطع غلظة الدسم وتسهل هضمه وتُعتبر مصلحات سريعة (مبدأ الإصلاح)."
    },
    {
        question: "متى تكون (الحجامة الدموية) نافعة وأكثر فعالية كما نصح بها النبي ﷺ وعلماء الأمة كابن سينا؟",
        options: ["في بداية الشهر الهجري حيث الدم ساكن", "في النصف الثاني من الشهر (17، 19، 21) عندما تهيج الأخلاط", "بعد الأكل مباشرة ومعدة ممتلئة", "في حالة الضعف الشديد والأنيميا كعلاج عام"],
        answer: 1,
        explanation: "في النصف الثاني من الشهر الهجري، حيث تهيج الأخلاط المعلقة والرديئة نحو السطح (بتأثير القمر)، فيكون الجسم مستعداً لتنقية السموم."
    },
    {
        question: "ربة منزل بالغت في استخدام الطماطم والباذنجان (أغذية مولدة للرياح والسوداء) كيف يمكنها بحركة بسيطة إصلاح الطبخة لأهل بيتها؟",
        options: ["عن طريق زيادة كمية الملح الصخري", "عن طريق إضافة الثوم والتوابل الحارة (الكركم والفلفل الأسود) في الطبخ", "بتقديمها مع الخبز الأبيض", "بغليها لمدة أطول فقط"],
        answer: 1,
        explanation: "الثوم والكركم والفلفل الأسود (حارة) تكسر برودة تلك الخضار وتمنع تولد الرياح والخلط السوداوي المسبب للاكتئاب والغازات."
    }
];

let currentMcqIndex = 0;

function loadMCQ() {
    const q = mcqQuestions[currentMcqIndex];
    document.getElementById('mcq-question').textContent = q.question;
    const optionsGrid = document.getElementById('mcq-options');
    optionsGrid.innerHTML = '';

    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn-option';
        btn.textContent = opt;
        btn.onclick = () => checkMCQ(index);
        optionsGrid.appendChild(btn);
    });

    document.getElementById('mcq-feedback').textContent = '';
    document.getElementById('mcq-feedback').className = 'feedback';
}

function checkMCQ(selectedIndex) {
    const q = mcqQuestions[currentMcqIndex];
    const feedbackEl = document.getElementById('mcq-feedback');

    if (selectedIndex === q.answer) {
        feedbackEl.textContent = "إجابة صحيحة! " + q.explanation;
        feedbackEl.className = 'feedback correct';
    } else {
        feedbackEl.textContent = "إجابة خاطئة! الجواب الصحيح هو " + q.options[q.answer];
        feedbackEl.className = 'feedback wrong';
    }

    setTimeout(() => {
        currentMcqIndex = (currentMcqIndex + 1) % mcqQuestions.length;
        loadMCQ();
    }, 3500);
}

// Tricky Questions / Bot
const trickyQuestions = [
    {
        botText: "سمعت أن شرب الماء البارد جداً مفيد للمعدة بعد الاستيقاظ مباشرة.. هل أنا محق؟",
        isCorrect: false,
        explanation: "لا، هذا خطأ! المعدة تحتاج للدفء في الصباح، والماء البارد يصدم الحرارة الغريزية ويضعف الهضم."
    },
    {
        botText: "صديقي ذو المزاج (البلغمي) يأكل الكثير من الفلفل والزنجبيل (حار بمرتبة ثالثة).. هل يصيب؟",
        isCorrect: true,
        explanation: "أحسنت! هذا صحيح، فالمزاج البلغمي الزائد البرودة والرطوبة يحتاج لأعشاب مسخنة ومجففة لتعديل برودته."
    },
    {
        botText: "الرياضة القوية والتعرق الشديد يفيد دائماً أصحاب المزاج 'السوداوي' لأنه ينشطهم.. هل توافقني؟",
        isCorrect: false,
        explanation: "خطأ! أصحاب المزاج السوداوي يغلب عليهم الجفاف أصلاً (بارد يابس)، والرياضة القوية تزيد من جفافهم، بل تناسبهم الرياضة اللطيفة وتدليك البدن."
    },
    {
        botText: "القلب من الأعضاء التي طبيعتها الأصلية باردة ورطبة، لذلك يضره الحزن والغم.. أليس كذلك؟",
        isCorrect: false,
        explanation: "غير صحيح إطلاقاً! طبيعة القلب حارة يابسة، وهو ينبوع الحرارة الغريزية في البدن ومحرك الحياة."
    },
    {
        botText: "لتعديل مزاج الطعام الغليظ مثل اللحم البقري، يضيفون له توابل حارة كالكمون.. هل هذا يُسمى 'مبدأ الإصلاح'؟",
        isCorrect: true,
        explanation: "ممتاز! هذا هو مبدأ الإصلاح، حيث تُكسر كثافة الغذاء الغليظ أو لزوجته بتوابل لطيفة لتسهيل هضمه في المعدة."
    },
    {
        botText: "قرأت أن الخلط 'البلغمي' مكانه الأساسي الذي يختزن فيه هو 'المرارة'.. هل صدقوا؟",
        isCorrect: false,
        explanation: "فخ واضح! المرارة هي مستودع الخلط (الصفراوي) لتنظيف الكبد، أما البلغم فلا مستودع خاص له بل يسبح مع الدم في العروق."
    },
    {
        botText: "كثرة تناول الألبان والجبن البارد تزيد من الخلط البلغمي في الجسم وتورث الكسل.. صحيح؟",
        isCorrect: true,
        explanation: "بالضبط! الألبان أغذية باردة رطبة، وكثرتها دون مُصلحات (كالعسل أو الزعتر) ترفع البلغم وتسبب الوخامة والكسل."
    },
    {
        botText: "أنا شخص فقير ولا أملك ثمن الأدوية الغالية، وأعاني من غازات وبرودة في المعدة. سمعت أن مضغ القليل من بذور الشمر (البسباس) والكمون المحمصة بعد الأكل يكفيني كعلاج.. هل هذا معقول؟",
        isCorrect: true,
        explanation: "نعم وبكل تأكيد! الطب الأصيل لا يميز بين فقير وغني. الشمر والكمون (المتوفرة بكل مطبخ) تصلح برودة المعدة وتطرد الرياح بقوة لا تقل عن أقوى الأدوية."
    },
    {
        botText: "قرأت أن الحجامة مفيدة دائماً، وبإمكاني القيام بها كل أسبوع أو شهر لتشخيصي المستمر وتنظيف دمي بلا قيود.. أليس كذلك؟",
        isCorrect: false,
        explanation: "فخ خطير! الحجامة تستلزم وعياً (تشخيص، عمر، فصل، خلط). الإفراط فيها لشخص ضعيف أو دون داعٍ يُسقط القوة ويُضعف الحرارة الغريزية للبدن."
    },
    {
        botText: "لقد شربت كوباً من اللبن الرائب (البارد الرطب) واكتشفت أنه يسبب لي خمولاً كبيراً.. هل هناك حل سريع في خزانة مطبخي البسيطة دون رميه؟",
        isCorrect: true,
        explanation: "بالطبع! مجرد غمس ملعقة عسل فيه، أو رشة زعتر، أو قليل من الزنجبيل (وكلها حارة) ستصلح اللبن تماماً وتمنع تولد البلغم الكسول."
    },
    {
        botText: "يقول البعض أن أوقات وأيام الحجامة (17، 19، 21) مجرد عادات قديمة ولا أصل طبي لها، إذ يستوي إخراج الدم في أي يوم.. ما رأيك؟",
        isCorrect: false,
        explanation: "خطأ طبي! كما يؤثر القمر على المد والجزر، يؤثر على سوائل البدن. في هذا الوقت تهيج الأخلاط للخارج، فتكون استجابة الجسم لتنقية الفساد أعلى ما يمكن."
    },
    {
        botText: "لدي وجبة عدس (غذاء بارد يابس ومولد للسوداء) وأريد جعلها صحية بمكونات مطبخية عادية جداً ومجانية تقريباً. هل يكفي إضافة زيت الزيتون والكمون وقليل من الخل؟",
        isCorrect: true,
        explanation: "ممتاز! أنت ممارس ماهر ومُدبّر حكيم. الزيت يكسر جفافه، والكمون يطرد أرياحه، والخل يهضمه. هكذا تصبح وجبة الفقير والغني دوائية ومتكاملة!"
    }
];

let currentTrickyIndex = 0;

function loadTricky() {
    document.getElementById('tricky-question').textContent = trickyQuestions[currentTrickyIndex].botText;
    document.getElementById('tricky-feedback').textContent = '';
    document.getElementById('tricky-feedback').className = 'feedback';
}

function checkTricky(userAgrees) {
    const q = trickyQuestions[currentTrickyIndex];
    const feedbackEl = document.getElementById('tricky-feedback');

    if (userAgrees === q.isCorrect) {
        feedbackEl.innerHTML = "<i class='fas fa-star'></i> رائع، لم أنجح في خداعك! " + q.explanation;
        feedbackEl.className = 'feedback correct';
    } else {
        feedbackEl.innerHTML = "<i class='fas fa-exclamation-triangle'></i> للأسف، لقد وقعت في الفخ! " + q.explanation;
        feedbackEl.className = 'feedback wrong';
    }

    setTimeout(() => {
        currentTrickyIndex = (currentTrickyIndex + 1) % trickyQuestions.length;
        loadTricky();
    }, 4500);
}

// Organ Details Map
const organsMapData = {
    liver: {
        title: "الكبد",
        nature: "حار رطب",
        desc: "يعتبر مطبخ الغذاء الثاني ومولد الأخلاط. يناسبه الأغذية المعتدلة والتي فيها حلاوة خفيفة مثل الزبيب الأبيض."
    },
    heart: {
        title: "القلب",
        nature: "حار يابس",
        desc: "منبع الحرارة الغريزية. يقويه التفاح، والورد، والأشياء العطرية المفرحة."
    },
    stomach: {
        title: "المعدة",
        nature: "باردة الملمس حارة الفعل (تميل للبرودة والعصبية)",
        desc: "مكان الهضم الأول. تعشق الدفء، وتتضرر بالماء البارد جداً والمقليات. يفيدها النعناع والكمون."
    },
    brain: {
        title: "الدماغ",
        nature: "بارد رطب",
        desc: "مركز الحس والحركة. يقويه الجوز واللوز، وتضره الأبخرة الرديئة وكثرة السهر."
    },
    spleen: {
        title: "الطحال",
        nature: "بارد يابس",
        desc: "مصيدة الخلط السوداوي. يكره الأغذية الغليظة كالباذنجان والعدس، ويفيده الخل والزنجبيل."
    },
    lungs: {
        title: "الرئتان",
        nature: "تميل للبرودة والرطوبة (مروحة القلب)",
        desc: "تروح عن القلب الحرارة. تضرها الأغبرة والأبخرة، ويفيدها العسل، الزعتر، ولبان الذكر."
    },
    kidneys: {
        title: "الكليتان",
        nature: "حار رطب",
        desc: "مصفاة الدم. تضعف من الإفراط في الملح واللحم، وتحب الماء المعتدل والبطيخ."
    },
    uterus: {
        title: "الرحم والتناسلية",
        nature: "يميل للبرودة والرطوبة (عند النساء) ويميل للحرارة والجفاف (عند الرجال)",
        desc: "وعاء النسل. يضره البرد الشديد والجلوس في الرطوبات، ويفيده الإحماء بالزيوت الساخنة كزيت السمسم والمردقوش (للنساء) ومنشطات الدورة الدموية."
    },
    nerves: {
        title: "الأعصاب",
        nature: "باردة يابسة",
        desc: "نواقل الحس والحركة. تضرها المبردات الشديدة والمخدرات، وتقويها المروخات الحارة والأغذية الطبيعية المولدة للحرارة اللطيفة."
    },
    tissues: {
        title: "الأنسجة واللحم",
        nature: "حارة رطبة",
        desc: "غطاء البدن ووقايته. تنشط وتقوى بالرياضة المعتدلة واللحوم جيدة الانهضام، وتتضرر بكثرة السكون وتراكم الفضلات."
    }
};

function showOrganDetails(organId) {
    const data = organsMapData[organId];
    document.getElementById('organ-details').innerHTML = `
        <h3>${data.title}</h3>
        <p><strong>طبيعته:</strong> <span style="color:var(--primary-color)">${data.nature}</span></p>
        <p style="margin-top:15px; line-height:1.6;">${data.desc}</p>
    `;
}

// Initialization
window.onload = () => {
    // Carousels for individual cards removed, keeping only quizzes and tricky loaded
    loadTF();
    loadMCQ();
    loadTricky();
};

// --- LIGHTBOX GALLERY LOGIC ---
function openLightbox(imageSrc) {
    const modal = document.getElementById('image-lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = imageSrc;
    modal.style.display = 'block';
}

function closeLightbox(event) {
    if (event.target.id === 'image-lightbox' || event.target.className === 'lightbox-close') {
        document.getElementById('image-lightbox').style.display = 'none';
    }
}

// --- ACTIVATION & FREEMIUM LOGIC CONSTANTS ---
const MAX_FREE_DAYS = 7;
const TRIAL_START_KEY = 'lailaApp_trialStart';
const LAST_GENERATION_KEY = 'lailaApp_lastGenerationDate';
const ACTIVATION_KEY = 'lailaApp_activationCode';
const ACTIVATION_DATE = 'lailaApp_activationDate';
const SECRET_SALT = "LailaClinic123!@#";

// Function to generate a stable Device ID based on browser specifics
function getDeviceID() {
    // A simple fingerprint based on userAgent and screen info
    const fingerprint = navigator.userAgent + screen.width + screen.height + navigator.language;
    let hash = 0;
    for (let i = 0; i < fingerprint.length; i++) {
        hash = ((hash << 5) - hash) + fingerprint.charCodeAt(i);
        hash = hash & hash;
    }
    return Math.abs(hash).toString(36).toUpperCase().substring(0, 6).padStart(6, 'X');
}

// Same hash function as admin generator for validation
function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash).toString(16).toUpperCase();
}

function checkActivation() {
    const storedCode = localStorage.getItem(ACTIVATION_KEY);
    const actDateStr = localStorage.getItem(ACTIVATION_DATE);
    const deviceId = getDeviceID();

    if (!storedCode || !actDateStr) return false;

    // Verify code matches this exact device
    const expectedRaw = deviceId + SECRET_SALT;
    let expectedHash = hashCode(expectedRaw);
    if (expectedHash.length < 8) expectedHash = expectedHash.padStart(8, '0');
    expectedHash = expectedHash.slice(0, 4) + "-" + expectedHash.slice(4, 8);

    if (storedCode !== expectedHash) {
        // Code belongs to another device
        return false;
    }

    // Check 30 days expiry
    const actDate = new Date(actDateStr);
    const diffDays = Math.ceil(Math.abs(new Date() - actDate) / (1000 * 60 * 60 * 24));

    if (diffDays > 30) {
        // Expired
        localStorage.removeItem(ACTIVATION_KEY);
        localStorage.removeItem(ACTIVATION_DATE);
        return false;
    }

    return true; // Valid and active
}

function activateApp() {
    const inputCode = prompt("الرجاء إدخال كود التفعيل الذي أرسلناه لك بدقة:");
    if (!inputCode) return;

    const deviceId = getDeviceID();
    const expectedRaw = deviceId + SECRET_SALT;
    let expectedHash = hashCode(expectedRaw);
    if (expectedHash.length < 8) expectedHash = expectedHash.padStart(8, '0');
    expectedHash = expectedHash.slice(0, 4) + "-" + expectedHash.slice(4, 8);

    if (inputCode.trim().toUpperCase() === expectedHash) {
        localStorage.setItem(ACTIVATION_KEY, expectedHash);
        localStorage.setItem(ACTIVATION_DATE, new Date().toISOString());
        alert("تم التفعيل بنجاح! شكراً لاشتراكك بالباقة الذهبية. يمكنك استخدام التطبيق بلا قيود لمدة 30 يوماً.");
        // Hide modals if open
        const paywall = document.getElementById('paywall-modal');
        if (paywall) paywall.remove();
        document.getElementById('payment-modal').style.display = 'none';
    } else {
        alert("كود خاطئ أو لا ينتمي لهذا الجهاز. تأكد من نسخه بشكل صحيح.");
    }
}

// Populate Device ID on Load
document.addEventListener('DOMContentLoaded', () => {
    const devIdDisplay = document.getElementById('user-device-id-display');
    if (devIdDisplay) {
        devIdDisplay.innerText = getDeviceID();
    }
});

// --- PLAN GENERATOR LOGIC (TREATMENT & DIET) ---
function generatePlan() {
    // --- Freemium Paywall & Premium Logic ---
    const isPremium = checkActivation();
    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];

    if (!isPremium) {
        let trialStartStr = localStorage.getItem(TRIAL_START_KEY);
        let lastGenStr = localStorage.getItem(LAST_GENERATION_KEY);

        // Set trial start if first time
        if (!trialStartStr) {
            trialStartStr = now.toISOString();
            localStorage.setItem(TRIAL_START_KEY, trialStartStr);
        }

        // Check if 7 days passed
        const trialStartDate = new Date(trialStartStr);
        const diffDays = Math.ceil(Math.abs(now - trialStartDate) / (1000 * 60 * 60 * 24));

        if (diffDays > MAX_FREE_DAYS) {
            showPaywall("انتهت الفترة التجريبية!", "لقد استمتعت بتجربة أسبوع كامل مجاناً. للاستمرار في توليد خطط دقيقة مخصصة لحالتك يومياً، يرجى الاشتراك في الباقة الذهبية لدكتورة ليلى سكاك أو إدخال كود التفعيل بالأسفل.");
            return;
        }

        // Check if already generated today
        if (lastGenStr === todayStr) {
            showPaywall("استنفدت الحد اليومي!", "في الفترة التجريبية، يُسمح بتوليد خطة علاجية واحدة فقط باليوم لضمان دقة التركيز. اشترك الآن في الباقة الذهبية للحصول على عدد لا محدود من الخطط لك ولعائلتك.");
            return;
        }

        // Valid generation: update last generation date
        localStorage.setItem(LAST_GENERATION_KEY, todayStr);
    }
    // ----------------------------

    const mizaj = document.getElementById('user-mizaj').value;
    const blood = document.getElementById('user-blood').value;
    const neuro = document.getElementById('user-neuro').value;
    const ingredients = document.getElementById('user-ingredients').value.trim();
    const diseases = document.getElementById('user-diseases').value.trim();
    const spiritual = document.getElementById('user-spiritual').value;

    const resultDiv = document.getElementById('plan-result');

    // Logic 1: Determine treatment temperament (علاج الضد)
    let opposingDiet = "";
    let forbiddenMizaj = "";
    let dailySuggestions = { breakfast: "", lunch: "", snack: "", dinner: "" };

    if (mizaj === 'hot-dry') {
        opposingDiet = "الباردة الرطبة";
        forbiddenMizaj = "الحار اليابس";
        dailySuggestions = {
            breakfast: "وجبة باردة رطبة (مثل الشوفان بالحليب، أو فواكه طازجة كالبطيخ والكمثرى).",
            lunch: "مرق خضار غير مبهر، وقرع مسلوق، مع إدام خفيف لتجنب زيادة الحرارة.",
            snack: "عصير شعير، أو منقوع تمر هندي، أو قهوة شعير باردة.",
            dinner: "لبن زبادي مع خيار، أو سلطة خس وخيار خفيفة."
        };
    } else if (mizaj === 'hot-moist') {
        opposingDiet = "الباردة اليابسة";
        forbiddenMizaj = "الحار الرطب";
        dailySuggestions = {
            breakfast: "خبز شعير، عدس، أو تفاح حامض.",
            lunch: "وجبة مطبوخة بخل وتوابل باردة وقابضة كالسماق والكزبرة اليابسة.",
            snack: "قهوة عربية خفيفة بدون هيل حرّيف، أو شاي أسود قابض.",
            dinner: "سلطة ملفوف مقرمشة، أو الجبن الجاف منزوع الدسم."
        };
    } else if (mizaj === 'cold-moist') {
        opposingDiet = "الحارة اليابسة (المجففة والمحللة)";
        forbiddenMizaj = "البارد الرطب";
        dailySuggestions = {
            breakfast: "خبز بر حار مع عسل نحل وتوابل (قرفة، زنجبيل).",
            lunch: "مشويات مبهرة بالثوم والبصل والفلفل، ومطبوخة جيداً.",
            snack: "قهوة مضاف إليها الزنجبيل والقرنفل، مع بضع تمرات.",
            dinner: "وجبة خفيفة ساخنة: شوربة حريرة بالتوابل، والابتعاد عن الألبان."
        };
    } else if (mizaj === 'cold-dry') {
        opposingDiet = "الحارة الرطبة (المغذية والمرطبة)";
        forbiddenMizaj = "البارد اليابس";
        dailySuggestions = {
            breakfast: "بيض مقلي بسمن بلدي، أو لوزيات، وكوب حليب دافئ بالعسل.",
            lunch: "مرق بالخضار الدافئ (كالجزر واللفت)، وأرز بالزبدة.",
            snack: "شاي بابونج دافئ، وموز أو زبيب أو تين.",
            dinner: "شوربة غنية بالدسم الطبيعي أو مرق عظام."
        };
    }

    let ingredientsHTML = "";
    if (ingredients.length > 0) {
        ingredientsHTML = `
            <div class="plan-section" style="background-color: #e8f5e9; border: 1px solid #4caf50;">
                <h4 style="color: #2e7d32;"><i class="fas fa-magic"></i> هندسة طبخ مكوناتك لليوم (${ingredients}):</h4>
                <p>بما أن طبيعة جسمك الحالية تميل لمزاج <strong>${document.getElementById('user-mizaj').options[document.getElementById('user-mizaj').selectedIndex].text}</strong>، إليك التعديل الضمني الذي يجب أن تقوم به عند طبخ قائمة اليوم لتفادي المضاعفات:</p>
                <ul style="margin-top:10px;">
                    <li style="margin-bottom:8px;"><strong>قاعدة التوابل والمحسنات:</strong> استخدم بهارات ومنكهات من الطبع المعاكس (<strong style="color:var(--primary-color)">${opposingDiet}</strong>) عند تحضير المكونات التي ذكرتها لتكسر حدتها وتجعلها دواءً لك، حتى وإن كانت من نفس طبعك.</li>
                    <li><strong>مثال تطبيقي:</strong> لو ذكرت 'اللحم أو البيض' ومزاجك حار، اسلقه ولا تقله لتقليل حرارته، وزد عليه الكزبرة الخضراء والخل. وإن كان مزاجك بارداً وذكرت 'بطاطس'، أضف السمن، الفلفل، والزنجبيل لرفع طاقته وضمان ألا يسبب خمولاً وغازات.</li>
                </ul>
            </div>
        `;
    }

    // Process medical warnings 
    let medicalHTML = "";
    if (diseases.length > 0) {
        medicalHTML = `
            <div class="plan-section" style="background-color: #e3f2fd; border: 1px solid #64b5f6;">
                <h4 style="color: #1565c0;"><i class="fas fa-pills"></i> تقييم الأمان والتداخلات الطبية:</h4>
                <p><strong>لقد ذكرت حالتك الصحية/الأدوية:</strong> (${diseases})</p>
                <p style="margin-top:10px;"><strong>تنبيه هام وموازنة:</strong> الخطة الطبائعية المذكورة هنا تعتمد على الغذاء وتعديل المزاج. نظراً لوجود حالتك الطبية المذكورة، يُرجى مراعاة الآتي بشدة:</p>
                <ul style="margin-top:10px;">
                    <li style="margin-bottom:8px;">تفادى الأعشاب المركزة والبهارات الحارة (كالزنجبيل والقرفة والثوم المفرط) إذا كنت تأخذ مسيلات دم أو أدوية ضغط (أعطِ الأولوية للعلاج الدوائي).</li>
                    <li style="margin-bottom:8px;">لا توقف أدويتك أبداً، هذه الخطة الطبائعية هي <strong>نظام داعم ومهيئ للشفاء</strong> (يوازن كيمياء الدم) وليس بديلاً مفاجئاً للدواء.</li>
                    <li>استثنِ أي مكون يمنعه طبيبك المعالج المعاصر حتى لو كان موافقاً لعلاجك الطبائعي (مثل العسل لمرضى السكري غير المنتظم).</li>
                </ul>
            </div>
        `;
    }

    // Logic 2: Spiritual Treatment
    let spiritualHTML = "";
    if (spiritual !== 'none') {
        let spiritualPlan = "";
        let spiritualDiagnosis = "";
        if (spiritual === 'magic') {
            spiritualDiagnosis = "سحر عضوي (يولد أخلاطاً رديئة في البطن)";
            spiritualPlan = `التشخيص المبدئي بناءً على الأعراض العضوية الغامضة والكوابيس يشير لاحتمالية أذى سحري ينعكس كمرض عضوي. 
            <strong>التدبير الذاتي:</strong> ركز على "الاستفراغ المادي للأخلاط الرديئة". استخدم السنا المكي بكميات قليلة لتنظيف الجهاز الهضمي، مع الشرب الدائم لماء زمزم. قلل جداً من اللحوم والأجبان التي تضفي سوداوية للبدن.`;
        } else if (spiritual === 'envy') {
            spiritualDiagnosis = "عين حاسدة مبنية على الأعراض المذكورة";
            spiritualPlan = `الأعراض كالتثاؤب المستمر والخمول المفاجئ والبرودة هي انعكاسات مادية دقيقة للعين الحارة الدخيلة. 
            <strong>التدبير الذاتي:</strong> علاج العين قائم على كسر السمية. تناول 7 تمرات عجوة، والاغتسال اليومي بماء بارد (إن لم يزعج مزاجك) مضاف إليه 7 ورقات من سدر العناب. غلف منافذ الطاقة المعتدى عليها بأذكار الصباح والمساء.`;
        } else if (spiritual === 'possession') {
            spiritualDiagnosis = "مس خارجي ووساوس قهرية قوية";
            spiritualPlan = `هذه الأعراض النفسية الحادة والعزلة تشير لأذى مسّي يحاول التسلط على المزاج ودفعه للسوداوية لتسهيل تحكمه وتوليد الغضب. 
            <strong>التدبير الذاتي:</strong> العلاج الأقوى يكون بتبخير محيطك والجسد بـ "القسط الهندي أو البحري" فهو يضيق مجاري القرين، مع دهن الأطراف بالمسك الأسود قبل النوم. ابتعد تماماً عن العزلة في الظلام.`;
        }

        spiritualHTML = `
            <div class="plan-section" style="background-color: #fce4ec; border: 1px solid #f48fb1;">
                <h4 style="color: #c2185b;"><i class="fas fa-quran"></i> 4. التشخيص الروحي المبني على الأعراض</h4>
                <p>النظام يشخص الأعراض التي ذكرت بأنها قد تكون: <strong style="font-size:1.1rem;">${spiritualDiagnosis}</strong>.</p>
                <p style="margin-top:10px; line-height:1.6;">${spiritualPlan}</p>
            </div>
        `;
    }

    // Logic 3: Blood Type compatibility
    let bloodAdvice = "";
    if (blood === "O") bloodAdvice = "جهازك الهضمي كصياد (حمضة عالية): يعتمد على البروتينات القوية كاللحوم الطازجة وتجنب القمح والذرة. وفرّغ طاقتك بالرياضة القوية.";
    else if (blood === "A") bloodAdvice = "جهازك الهضمي نباتي (حمضة منخفضة): تجنب اللحوم الحمراء المعقدة واستند على البقوليات والأسماك والرياضات الهادئة كالتأمل والمشي.";
    else if (blood === "B") bloodAdvice = "جهازك الهضمي مرن: يهضم الألبان واللحوم المتنوعة. تجنب الدجاج فقط واستبدله بالغنم أو الأرانب أو ديك رومي.";
    else if (blood === "AB") bloodAdvice = "مزيج غامض: وازن بين النباتات البحرية والألبان بقليل من اللحوم البيضاء وبوجبات صغيرة متقطعة.";

    // Logic 4: Neurotransmitters compatibility
    let neuroAdvice = "";
    if (neuro === "dopamine") neuroAdvice = "النواقل العصبية (الدوبامين): أدخل في غذائك الأطعمة الغنية بالتيروزين (لوز، بيض) واستخدم أعشاب كإكليل الجبل أو فنجان قهوة لتنشيط الشغف.";
    else if (neuro === "serotonin") neuroAdvice = "النواقل العصبية (السيروتونين): أنت بحاجة للهدوء، استخدم الكربوهيدرات المعقدة بذكاء، وتعرض للشمس باكراً. الزعفران والبابونج ممتازة لك.";
    else if (neuro === "gaba") neuroAdvice = "النواقل العصبية (GABA): توتر عالٍ وتشنج بدني. اقطع المنبهات تماماً. الناردين والمليسة والبابونج البارد هي أصدقاؤك لإرخاء الأعصاب.";
    else if (neuro === "adrenaline") neuroAdvice = "النواقل العصبية (الأدرينالين): غدتك الكظرية متعبة من كثرة التفكير والضغط. تناول أدابتوجينات ملائمة (كالأشواغاندا) مع استبعاد السكريات.";

    // Generate HTML Result
    resultDiv.innerHTML = `
        <h3><i class="fas fa-clipboard-check"></i> الخطة الغذائية والعلاجية المتكاملة لحالتك</h3>
        
        ${medicalHTML}

        <div class="plan-section">
            <h4><i class="fas fa-calendar-day"></i> 1. الجدول الغذائي اليومي المقترح (مدرج بقاعدة علاج الضد)</h4>
            <ul>
                <li style="margin-bottom:12px;"><strong style="color:var(--primary-color)"><i class="fas fa-sun"></i> الإفطار:</strong> ${dailySuggestions.breakfast}</li>
                <li style="margin-bottom:12px;"><strong style="color:var(--primary-color)"><i class="fas fa-utensils"></i> الغداء:</strong> ${dailySuggestions.lunch}</li>
                <li style="margin-bottom:12px;"><strong style="color:var(--primary-color)"><i class="fas fa-coffee"></i> قهوة المساء/تصبيرة:</strong> ${dailySuggestions.snack}</li>
                <li style="margin-bottom:12px;"><strong style="color:var(--primary-color)"><i class="fas fa-moon"></i> العشاء:</strong> ${dailySuggestions.dinner}</li>
            </ul>
        </div>

        ${ingredientsHTML}

        <div class="plan-section">
            <h4><i class="fas fa-balance-scale-right"></i> 2. استراتيجية علاج الضد</h4>
            <p>لأن الطبع الطاغي لك هو <strong>${document.getElementById('user-mizaj').options[document.getElementById('user-mizaj').selectedIndex].text}</strong>، فمفتاح المعاكسة هو الطبيعة (<strong style="color:green">${opposingDiet}</strong>).</p>
            <ul>
                <li>توقف عن الأطعمة ذات الطبع (<span style="color:red; font-weight:bold;">${forbiddenMizaj}</span>).</li>
            </ul>
        </div>

        <div class="plan-section">
            <h4><i class="fas fa-dna"></i> 3. تدعيم الخطة بفصيلة الدم والهرمونات</h4>
            <p><strong>بناء على الفصيلة:</strong> ${bloodAdvice}</p>
            <p style="margin-top:10px;"><strong>توجيه العصبي والنفسي:</strong> ${neuroAdvice}</p>
        </div>

        ${spiritualHTML}
    `;

    resultDiv.classList.remove('hidden');
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

// --- PAYWALL UI FUNCTION ---
function showPaywall(title, message) {
    // Check if paywall already exists
    if (document.getElementById('paywall-modal')) return;

    const paywallHTML = `
        <div id="paywall-modal" class="lightbox-modal" style="display:block; z-index:10000; animation: fadeIn 0.3s;">
            <div class="lightbox-content" style="background:var(--bg-color); max-width:500px; padding:40px; border-radius:20px; text-align:center; border: 2px solid var(--secondary-color); box-shadow: 0 10px 40px rgba(0,0,0,0.8), inset 0 0 20px rgba(212,175,55,0.2);">
                <i class="fas fa-crown" style="font-size: 4rem; color: var(--secondary-color); margin-bottom: 20px; animation: goldPulse 2s infinite alternate;"></i>
                <h2 style="color: var(--secondary-color); margin-bottom: 15px; text-shadow: 1px 1px 3px rgba(0,0,0,0.8);">${title}</h2>
                <p style="color: #e2e8f0; font-size: 1.2rem; line-height: 1.6; margin-bottom: 30px;">${message}</p>
                
                <div style="background: rgba(11, 43, 26, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(212, 175, 55, 0.3); margin-bottom: 30px;">
                    <h3 style="color: var(--secondary-color); margin-bottom: 10px; font-size: 1.4rem;">الباقة الذهبية المميزة</h3>
                    <p style="color: white; font-size: 1.5rem; font-weight: bold; margin-bottom: 5px;">1000 د.ج / شهرياً</p>
                    <p style="color: #cbd5e1; font-size: 1.1rem;">أو بالعملة الأجنبية: 9 دولار / شهرياً</p>
                </div>

                <div style="display:flex; flex-direction:column; gap:15px;">
                    <button onclick="document.getElementById('paywall-modal').remove(); document.getElementById('payment-modal').style.display='block';" style="background: linear-gradient(135deg, var(--secondary-color), #b8982c); color: var(--primary-color); padding: 15px; border:none; border-radius: 30px; font-size: 1.2rem; font-weight: bold; cursor: pointer; font-family:inherit; box-shadow: 0 5px 15px rgba(0,0,0,0.5);">
                        <i class="fas fa-lock"></i> اشترك الآن
                    </button>
                    <button onclick="document.getElementById('paywall-modal').remove();" style="background: transparent; border: none; color: #a0aec0; cursor: pointer; text-decoration: underline; font-family:inherit; font-size:1.1rem;">
                        العودة لاحقاً
                    </button>
                    <button onclick="activateApp();" style="background: transparent; border: 1px dashed var(--gold); color: var(--gold); padding: 10px; border-radius: 8px; cursor: pointer; font-family:inherit; font-size:1rem; margin-top: 10px;">
                        <i class="fas fa-key"></i> لدي كود تفعيل بالفعل
                    </button>
                </div>
                <div style="margin-top: 30px; background: rgba(212, 175, 55, 0.1); padding: 15px; border-radius: 8px; border: 1px solid var(--secondary-color);">
                    <p style="color: #cbd5e1; font-size: 1.1rem; margin-bottom: 15px; line-height: 1.6;">
                        للمشتركين: يُرجى إرسال وصل الدفع مع <strong>(رمز جهازك)</strong> الظاهر بالأسفل إلى التليجرام أو الواتساب. سيتم الرد عليك بـ <strong>كود التفعيل</strong> الخاص بك فوراً.
                    </p>
                    <div style="margin-bottom: 15px; font-size: 1.1rem; color: #94a3b8;">
                        رمز جهازك: <strong style="color: var(--gold); user-select: all; letter-spacing: 2px; font-family: monospace; background: #000; padding: 5px 10px; border-radius: 5px;">${getDeviceID()}</strong>
                    </div>
                    <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
                        <a href="https://wa.me/213664083947" target="_blank" style="background: #25D366; color: white; padding: 10px 20px; border-radius: 20px; text-decoration: none; font-weight: bold; font-size: 1.1rem; box-shadow: 0 4px 10px rgba(0,0,0,0.3); display: flex; align-items: center; gap: 8px;">
                            <i class="fab fa-whatsapp" style="font-size: 1.3rem;"></i> تواصل واتساب
                        </a>
                        <a href="http://t.me/Leilaappbot" target="_blank" style="background: #0088cc; color: white; padding: 10px 20px; border-radius: 20px; text-decoration: none; font-weight: bold; font-size: 1.1rem; box-shadow: 0 4px 10px rgba(0,0,0,0.3); display: flex; align-items: center; gap: 8px;">
                            <i class="fab fa-telegram-plane" style="font-size: 1.3rem;"></i> تواصل تليجرام
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', paywallHTML);
}
