const learningTheories = [
  {
    id: "behaviorism",
    number: 1,
    title: "Behaviorism",
    theoristsCore: "B.F. Skinner, Ivan Pavlov, and Edward Thorndike; learning is an observable change in behavior shaped by environmental stimuli and reinforcement (Ertmer & Newby, 1993, pp. 54–55).",
    howItHappens: "Learners form associations between a stimulus and a response; desired behaviors are strengthened through positive or negative reinforcement and repeated practice, while unreinforced behaviors extinguish (pp. 55–56).",
    example: "A student takes an online test and if they get everything correct, they automatically receive their grade with a digital sticker and a note saying “Perfect!” (Positive reinforcement); if they miss any questions, the sticker and praise are withheld and they only see their grade."
  },
  {
    id: "cognitivism",
    number: 2,
    title: "Cognitivism",
    theoristsCore: "Robert Gagné, Ulric Neisser, and John Anderson; learning is an internal change in mental states and knowledge structures rather than mere outward behavior (Ertmer & Newby, 1993, pp. 57–58).",
    howItHappens: "Information is actively received, encoded, organized into existing mental schemata, and stored in long-term memory for retrieval (pp. 58–59).",
    example: "When teaching students that fish breathe underwater using gills, the teacher links prior knowledge to provide context, showing that gills work the same way lungs help humans and animals breathe air."
  },
  {
    id: "experiential",
    number: 3,
    title: "Progressive Education / Experiential Learning",
    theoristsCore: "John Dewey; authentic education arises through purposeful, reflective experience that connects school to real life (Dewey, 1997, pp. 25, 44).",
    howItHappens: "Through the principle of continuity (every experience modifies future experiences) and interaction (the interplay between internal learner conditions and objective environment), learners encounter a genuine problem, form hypotheses, and test solutions (pp. 35, 42–44, 67–69).",
    example: "After reading about acids and bases in their textbook, students actively test how baking soda (a base/alkaline substance) and white vinegar (an acid) interact—observing the fizzing and bubbling reaction firsthand and reflecting on how their observations connect to what they read."
  },
  {
    id: "constructivism",
    number: 4,
    title: "Cognitive Constructivism (Genetic Epistemology)",
    theoristsCore: "Jean Piaget and Bärbel Inhelder; learners actively construct increasingly complex mental structures across developmental stages (Gallagher & Reid, 2002, pp. 2, 41).",
    howItHappens: "Driven by equilibration, learners encounter cognitive conflict (disequilibrium) and resolve it by either fitting new information into existing schemas (assimilation) or restructuring schemas to fit new realities (accommodation) (pp. 44–46, 54).",
    example: "Young students are given a scale and several objects that vary in weight and size. Students weigh the different objects and encounter cognitive conflict when they realize not all small objects are light, nor are all large objects heavy."
  },
  {
    id: "discovery",
    number: 5,
    title: "Discovery Learning & Scaffolding",
    theoristsCore: "Jerome Bruner; learners actively construct knowledge by going \"beyond the information given\" to categorize and discover underlying structures (Bruner & Anglin, 1973, pp. 218, 401).",
    howItHappens: "Learners translate experiences across enactive (action), iconic (image), and symbolic (language) modes of representation, using structured intuition and spiral revisitings of core concepts to infer general principles (pp. 328–331, 413–415).",
    example: "A teacher tells young students that mixing the three primary colors in different ways produces other colors they will recognize, then gives them the paints to mix and discover the new colors on their own."
  },
  {
    id: "sociocultural",
    number: 6,
    title: "Sociocultural Theory",
    theoristsCore: "Lev Vygotsky; human cognitive development is fundamentally social and mediated by cultural tools and language (Vygotsky, 1978, pp. 52–57).",
    howItHappens: "Functions appear first on the social plane between people (interpsychological) and then inside the child (intrapsychological), advancing most effectively within the Zone of Proximal Development (ZPD) with guidance from a more knowledgeable other (pp. 57, 86–87).",
    example: "For an art project, a teacher invites a clay artist to demonstrate hand-building a vessel, explaining her process and answering questions along the way. Each child is then given clay and builds a vessel of their choice while the artist circulates to guide them within their Zone of Proximal Development."
  },
  {
    id: "situated",
    number: 7,
    title: "Situated Learning & Communities of Practice",
    theoristsCore: "Jean Lave and Etienne Wenger; learning is an integral part of generative social practice in the lived-in world, not isolated knowledge transfer (Lave & Wenger, 1991, pp. 31, 35).",
    howItHappens: "Through Legitimate Peripheral Participation (LPP), newcomers enter a Community of Practice, initially performing low-risk, authentic tasks and gradually moving toward full participation and identity transformation alongside old-timers (pp. 29, 53–56, 95).",
    example: "To learn block-based programming, students explore the Scratch community and find a program they are interested in. They then look inside the code, do a remix by changing a few things, and run the program to see what happens—moving from peripheral participation towards creating original projects."
  },
  {
    id: "funds-of-knowledge",
    number: 8,
    title: "Funds of Knowledge",
    theoristsCore: "Norma González, Luis Moll, and Cathy Amanti; historically accumulated, culturally developed household and community practices are vital academic assets that counter deficit views (González et al., 2005, Ch. 1, pp. 11–15; Ch. 2, pp. 47–53).",
    howItHappens: "Teachers act as ethnographic researchers conducting home visits (visitas), uncovering household labor histories and social networks, and using those cultural resources to design mediated classroom curriculum (Ch. 4, pp. 71–78; Ch. 14, pp. 257–262).",
    example: "To learn about their students’ culture and gain funds of knowledge, a teacher assigns students a project to list the people in their household along with their roles and chores. With this information, the teacher designs lessons that connect their household skills and responsibilities to the classroom curriculum."
  }
];

const theoryGrid = document.getElementById("theory-grid");
const searchInput = document.getElementById("search-input");
const noResults = document.getElementById("no-results");
const selectA = document.getElementById("theory-select-a");
const selectB = document.getElementById("theory-select-b");
const swapBtn = document.getElementById("swap-btn");
const comparisonBoard = document.getElementById("comparison-board");

function renderTheoryCards(list) {
  if (!theoryGrid) return;
  theoryGrid.innerHTML = "";
  if (list.length === 0) {
    noResults.classList.remove("hidden");
    return;
  }
  noResults.classList.add("hidden");

  list.forEach((theory) => {
    const card = document.createElement("article");
    card.className = "theory-card";
    card.innerHTML = `
      <div>
        <span class="card-badge">Theory #${theory.number}</span>
        <h3>${theory.title}</h3>
        <div class="detail-block">
          <p><strong>Theorists &amp; Core Idea:</strong> ${theory.theoristsCore}</p>
        </div>
        <div class="detail-block">
          <p><strong>How Learning Happens:</strong> ${theory.howItHappens}</p>
        </div>
        <div class="example-callout">
          <strong>Teaching Example</strong>
          <span>${theory.example}</span>
        </div>
      </div>
      <div class="card-actions">
        <button type="button" class="btn-small" data-slot="a" data-id="${theory.id}">Set as Theory A</button>
        <button type="button" class="btn-small" data-slot="b" data-id="${theory.id}">Set as Theory B</button>
      </div>
    `;
    theoryGrid.appendChild(card);
  });
}

function populateCompareDropdowns() {
  if (!selectA || !selectB) return;
  learningTheories.forEach((theory) => {
    selectA.add(new Option(`${theory.number}. ${theory.title}`, theory.id));
    selectB.add(new Option(`${theory.number}. ${theory.title}`, theory.id));
  });
  selectA.value = "behaviorism";
  selectB.value = "constructivism";
  renderComparison();
}

function renderComparison() {
  if (!selectA || !selectB || !comparisonBoard) return;
  const theoryA = learningTheories.find((t) => t.id === selectA.value);
  const theoryB = learningTheories.find((t) => t.id === selectB.value);
  if (!theoryA || !theoryB) return;

  comparisonBoard.innerHTML = [theoryA, theoryB]
    .map(
      (theory, idx) => `
      <div class="compare-column">
        <span class="card-badge">Theory ${idx === 0 ? "A" : "B"} &bull; #${theory.number}</span>
        <h3>${theory.title}</h3>
        <div class="compare-row">
          <h4>Theorists &amp; Core Idea</h4>
          <p>${theory.theoristsCore}</p>
        </div>
        <div class="compare-row">
          <h4>How Learning Happens</h4>
          <p>${theory.howItHappens}</p>
        </div>
        <div class="compare-row">
          <h4>Teaching Example</h4>
          <div class="example-callout">
            <span>${theory.example}</span>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();
    const filtered = learningTheories.filter(
      (t) =>
        t.title.toLowerCase().includes(query) ||
        t.theoristsCore.toLowerCase().includes(query) ||
        t.howItHappens.toLowerCase().includes(query) ||
        t.example.toLowerCase().includes(query)
    );
    renderTheoryCards(filtered);
  });
}

if (theoryGrid) {
  theoryGrid.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-slot]");
    if (!btn) return;
    const slot = btn.getAttribute("data-slot");
    const id = btn.getAttribute("data-id");
    if (slot === "a") selectA.value = id;
    else selectB.value = id;
    renderComparison();
    document.getElementById("compare").scrollIntoView({ behavior: "smooth" });
  });
}

if (selectA && selectB) {
  selectA.addEventListener("change", renderComparison);
  selectB.addEventListener("change", renderComparison);
}

if (swapBtn) {
  swapBtn.addEventListener("click", () => {
    const temp = selectA.value;
    selectA.value = selectB.value;
    selectB.value = temp;
    renderComparison();
  });
}

// Randomized Self-Check Quiz Logic
const rawQuizData = [
  {
    question: "An online test automatically rewards students with a digital sticker and praise for 100% accuracy, while withholding the sticker when errors are made. Which theory does this represent?",
    options: [
      { text: "Behaviorism", correct: true, explanation: "Correct! This relies on positive reinforcement and stimulus-response associations." },
      { text: "Cognitivism", correct: false, explanation: "Incorrect. This focuses on outward rewards and behavioral reinforcement rather than internal schemas." },
      { text: "Situated Learning", correct: false, explanation: "Incorrect. This is a controlled digital reinforcement exercise." }
    ]
  },
  {
    question: "When teaching students how fish breathe underwater with gills, a teacher links prior knowledge of human and animal lungs. Which theory is being applied?",
    options: [
      { text: "Experiential Learning", correct: false, explanation: "Incorrect." },
      { text: "Cognitivism", correct: true, explanation: "Correct! Linking prior knowledge to anchor new concepts in memory is a hallmark of cognitivism." },
      { text: "Funds of Knowledge", correct: false, explanation: "Incorrect." }
    ]
  },
  {
    question: "Students read about acids and bases, then combine baking soda and white vinegar to observe the fizzing reaction firsthand. Which theorist's framework is this?",
    options: [
      { text: "John Dewey (Experiential Learning)", correct: true, explanation: "Correct! Dewey emphasized active, purposeful experience combined with reflection connecting theory to practice." },
      { text: "B.F. Skinner (Behaviorism)", correct: false, explanation: "Incorrect." },
      { text: "Lev Vygotsky (Sociocultural Theory)", correct: false, explanation: "Incorrect." }
    ]
  },
  {
    question: "Young students weigh objects of varying size and weight, encountering cognitive conflict when they realize small objects aren't always light. What is this psychological mechanism called?",
    options: [
      { text: "Legitimate Peripheral Participation", correct: false, explanation: "Incorrect." },
      { text: "Disequilibrium & Accommodation (Piaget)", correct: true, explanation: "Correct! Cognitive constructivism focuses on resolving cognitive conflict and restructuring schemas." },
      { text: "Operant Conditioning", correct: false, explanation: "Incorrect." }
    ]
  },
  {
    question: "A teacher tells students that mixing three primary colors produces other colors, then gives them paints to mix and discover secondary colors on their own. Whose discovery model is this?",
    options: [
      { text: "Jerome Bruner", correct: true, explanation: "Correct! Bruner's Discovery Learning encourages students to go 'beyond the information given' to infer underlying structures." },
      { text: "Jean Piaget", correct: false, explanation: "Incorrect." },
      { text: "John Dewey", correct: false, explanation: "Incorrect." }
    ]
  },
  {
    question: "A visiting clay artist demonstrates hand-building a vessel, answers questions, and guides students within their Zone of Proximal Development. Which theory is this?",
    options: [
      { text: "Behaviorism", correct: false, explanation: "Incorrect." },
      { text: "Sociocultural Theory (Vygotsky)", correct: true, explanation: "Correct! Social modeling and scaffolding by an MKO within the ZPD is central to Vygotsky's theory." },
      { text: "Cognitivism", correct: false, explanation: "Incorrect." }
    ]
  },
  {
    question: "Students explore the Scratch community, inspect existing code written by experienced users, and perform a low-risk 'remix'. Which theory describes this?",
    options: [
      { text: "Situated Learning & Communities of Practice (Lave & Wenger)", correct: true, explanation: "Correct! Remixing community artifacts is a classic example of Legitimate Peripheral Participation (LPP)." },
      { text: "Discovery Learning", correct: false, explanation: "Incorrect." },
      { text: "Funds of Knowledge", correct: false, explanation: "Incorrect." }
    ]
  },
  {
    question: "A teacher assigns a project to list household members, roles, and chores, using that information to design curriculum connected to household skills. What is this called?",
    options: [
      { text: "Funds of Knowledge (González et al.)", correct: true, explanation: "Correct! Utilizing household and cultural practices as academic assets is the core of Funds of Knowledge." },
      { text: "Sociocultural Theory", correct: false, explanation: "Incorrect." },
      { text: "Experiential Learning", correct: false, explanation: "Incorrect." }
    ]
  }
];

// Shuffle quiz questions on load so they are mixed up
let mainQuizData = [...rawQuizData].sort(() => Math.random() - 0.5);

let mainCurrentQ = 0;
let mainScore = 0;
let mainAnswered = false;

const mainQEl = document.getElementById("main-quiz-question");
const mainOptEl = document.getElementById("main-quiz-options");
const mainFeedEl = document.getElementById("main-quiz-feedback");
const mainNextBtn = document.getElementById("main-next-btn");
const mainProgEl = document.getElementById("main-quiz-progress");
const mainScoreEl = document.getElementById("main-quiz-score");

function loadMainQuiz() {
  if (!mainQEl) return;
  mainAnswered = false;
  mainFeedEl.className = "quiz-feedback hidden";
  mainFeedEl.textContent = "";
  mainNextBtn.classList.add("hidden");

  const q = mainQuizData[mainCurrentQ];
  mainProgEl.textContent = `Question ${mainCurrentQ + 1} of ${mainQuizData.length}`;
  mainQEl.textContent = q.question;
  mainOptEl.innerHTML = "";

  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-btn";
    btn.textContent = opt.text;
    btn.addEventListener("click", () => selectMainOption(opt, btn));
    mainOptEl.appendChild(btn);
  });
}

function selectMainOption(selectedOpt, btnElement) {
  if (mainAnswered) return;
  mainAnswered = true;

  const allBtns = mainOptEl.querySelectorAll(".quiz-btn");
  allBtns.forEach((b) => (b.disabled = true));

  const q = mainQuizData[mainCurrentQ];

  if (selectedOpt.correct) {
    btnElement.classList.add("correct");
    mainFeedEl.className = "quiz-feedback success";
    mainScore++;
  } else {
    btnElement.classList.add("incorrect");
    mainFeedEl.className = "quiz-feedback error";
    allBtns.forEach((b, i) => {
      if (q.options[i].correct) b.classList.add("correct");
    });
  }

  mainFeedEl.textContent = selectedOpt.explanation;
  mainScoreEl.textContent = `Score: ${mainScore} / ${mainQuizData.length}`;

  if (mainCurrentQ < mainQuizData.length - 1) {
    mainNextBtn.textContent = "Next Question →";
  } else {
    mainNextBtn.textContent = "View Final Results 🏆";
  }
  mainNextBtn.classList.remove("hidden");
}

if (mainNextBtn) {
  mainNextBtn.addEventListener("click", () => {
    mainCurrentQ++;
    if (mainCurrentQ < mainQuizData.length) {
      loadMainQuiz();
    } else {
      mainProgEl.textContent = "Self-Check Quiz Completed!";
      mainQEl.textContent = `Great job! You scored ${mainScore} out of ${mainQuizData.length} correct.`;
      mainOptEl.innerHTML = `<p style="font-size: 1.05rem; margin: 1rem 0;">You have successfully tested your knowledge across all eight foundational learning theories. Feel free to review the theory cards or retake the quiz!</p>`;
      mainFeedEl.classList.add("hidden");
      mainNextBtn.textContent = "Retake Quiz";
      mainNextBtn.onclick = () => {
        mainCurrentQ = 0;
        mainScore = 0;
        // Re-shuffle when retaking
        mainQuizData = [...rawQuizData].sort(() => Math.random() - 0.5);
        mainNextBtn.onclick = null;
        loadMainQuiz();
      };
    }
  });
}

// Initialize
if (theoryGrid) renderTheoryCards(learningTheories);
if (selectA) populateCompareDropdowns();
if (mainQEl) loadMainQuiz();