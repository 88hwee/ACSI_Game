/* ======================================================
   DEFEAT OF GERMANY – ALIEN SHOOTING MCQ GAME
   Tank shoots falling aliens:
   - Red = MCQ (TRUMPH / TIME / RUSSIA)
   - Blue = info fact
   Timer: 3 minutes
   Score shows top-right of canvas
   Shooting sound: laser.mp3 (id="laserSound")
   ====================================================== */

// ---------- DATA: 30 MCQs ----------

const questions = [
  // USA – TRUMPH (15)
  {
    question: "In the acronym TRUMPH, what does the letter T stand for?",
    options: [
      "Training and tactics",
      "Troops and manpower",
      "Trade and maritime power",
      "Technology and machinery"
    ],
    correctIndex: 1
  },
  {
    question: "In TRUMPH, what does the letter R refer to?",
    options: [
      "Railways and transport",
      "Resources and industry",
      "Recruitment and reserves",
      "Reconnaissance and radar"
    ],
    correctIndex: 1
  },
  {
    question: "What does the letter U in TRUMPH represent?",
    options: [
      "Unconditional surrender",
      "Urban bombing campaigns",
      "Unbroken Atlantic lifeline",
      "Unified Allied command"
    ],
    correctIndex: 2
  },
  {
    question: "What does the letter M in TRUMPH stand for?",
    options: [
      "Money and Lend-Lease aid",
      "Mechanised tank divisions",
      "Marine and naval forces",
      "Military leadership changes"
    ],
    correctIndex: 0
  },
  {
    question: "What does the letter P in TRUMPH stand for?",
    options: [
      "Propaganda and morale",
      "Partnership and planning",
      "Political reform at home",
      "Production controls"
    ],
    correctIndex: 1
  },
  {
    question: "What does the letter H in TRUMPH stand for?",
    options: [
      "Heavy industry expansion",
      "Home-front mobilisation",
      "High command decisions",
      "Humanitarian relief"
    ],
    correctIndex: 1
  },
  {
    question: "Why did US troops matter after D-Day in June 1944?",
    options: [
      "They relieved exhausted Allies and kept pressure on Germany.",
      "They mainly guarded ports already captured in Italy.",
      "They replaced Soviet troops on the Eastern Front.",
      "They were kept as a reserve and rarely fought."
    ],
    correctIndex: 0
  },
  {
    question: "Why is the USA called the 'Arsenal of Democracy'?",
    options: [
      "It used its factories to supply weapons and materials to Allies.",
      "It stayed neutral and focused only on diplomacy.",
      "It restricted exports to protect its own markets.",
      "It created new democratic governments inside Germany."
    ],
    correctIndex: 0
  },
  {
    question: "How did the Unbroken Atlantic lifeline help defeat Germany?",
    options: [
      "It kept food, fuel, and weapons flowing to Britain and the USSR.",
      "It let Germany move its U-boats to the Pacific.",
      "It ended the need for convoys in the Atlantic.",
      "It forced Britain to abandon its merchant fleet."
    ],
    correctIndex: 0
  },
  {
    question: "What was one major impact of US Money and Lend-Lease aid on Britain?",
    options: [
      "It helped Britain keep paying for the war without collapsing.",
      "It forced Britain to give up most of its overseas bases.",
      "It encouraged Britain to end cooperation with other Allies.",
      "It led Britain to reduce its air force and rely on ground troops."
    ],
    correctIndex: 0
  },
  {
    question: "How did Lend-Lease aid support the Soviet war effort?",
    options: [
      "It provided vehicles, fuel, and equipment that improved mobility.",
      "It replaced all Soviet-made tanks with Allied models.",
      "It required the USSR to stop producing heavy weapons.",
      "It focused mainly on luxury goods, not military items."
    ],
    correctIndex: 0
  },
  {
    question: "How did Partnership and planning help Allied campaigns against Germany?",
    options: [
      "Joint conferences produced coordinated operations like D-Day.",
      "Each Ally planned separately to keep its strategy secret.",
      "Cooperation was limited to dividing territory after the war.",
      "Most planning focused on Asia, not Europe."
    ],
    correctIndex: 0
  },
  {
    question: "Which statement best describes Home-front mobilisation in the USA?",
    options: [
      "Civilians took war jobs, women entered factories, and people bought war bonds.",
      "Civilian life changed very little, with factories making peacetime goods.",
      "Workers were removed from jobs and kept in reserve at home.",
      "The government discouraged mass production of weapons."
    ],
    correctIndex: 0
  },
  {
    question: "Why was a strong US economy important for defeating Germany?",
    options: [
      "It allowed high production while German industry suffered shortages and bombing.",
      "It meant the USA could stay neutral in the European war.",
      "It led the USA to focus only on trade, not military support.",
      "It encouraged the USA to reduce support for its Allies."
    ],
    correctIndex: 0
  },
  {
    question: "How did US industry compare to German industry by the later years of the war?",
    options: [
      "US output of weapons and supplies far exceeded that of Germany.",
      "German industry remained much larger than US industry.",
      "Both countries produced almost the same amount of war material.",
      "US factories mainly produced civilian goods after 1942."
    ],
    correctIndex: 0
  },

  // Britain – TIME (5)
  {
    question: "In TIME, what does the letter T stand for for Britain?",
    options: [
      "Tenacity in the Battle of Britain",
      "Territorial expansion in Europe",
      "Trade agreements with the USA",
      "Technological superiority at sea"
    ],
    correctIndex: 0
  },
  {
    question: "In TIME, what does the letter I stand for for Britain?",
    options: [
      "Imperial expansion",
      "Intelligence and innovation",
      "Industrial rearmament",
      "Infantry tactics"
    ],
    correctIndex: 1
  },
  {
    question: "How did Tenacity in the Battle of Britain help the Allies?",
    options: [
      "It stopped invasion and kept Britain as a base for later offensives.",
      "It forced Britain to surrender and leave the war.",
      "It made Germany shift all forces to North Africa.",
      "It led Britain to abandon its air force."
    ],
    correctIndex: 0
  },
  {
    question: "What is a key example of British Intelligence and innovation?",
    options: [
      "Radar and codebreaking that helped counter air and U-boat attacks.",
      "Refusing to use radios to avoid confusing pilots and crews.",
      "Focusing intelligence work on post-war elections.",
      "Stopping most research to save money for civilians."
    ],
    correctIndex: 0
  },
  {
    question: "How did Empire and endurance strengthen Britain’s war effort?",
    options: [
      "Troops, resources, and bases from the Empire kept sea routes open.",
      "Colonial territories stayed neutral and did not join the war.",
      "Britain gave up most overseas bases early to cut costs.",
      "The Empire offered only money but no manpower or materials."
    ],
    correctIndex: 0
  },

  // USSR – RUSSIA (10)
  {
    question: "In RUSSIA, what does the letter R stand for?",
    options: [
      "Reorganisation of industry",
      "Retreat from the front",
      "Reform of government",
      "Rationing of food"
    ],
    correctIndex: 0
  },
  {
    question: "In RUSSIA, what does the letter U refer to?",
    options: [
      "Urban reconstruction",
      "Unyielding winter",
      "Underground resistance",
      "United front with Allies"
    ],
    correctIndex: 1
  },
  {
    question: "What does the first S in RUSSIA stand for?",
    options: [
      "Submarine warfare",
      "Scorched-earth tactics",
      "Social reforms",
      "Strategic bombing"
    ],
    correctIndex: 1
  },
  {
    question: "What does the second S in RUSSIA stand for?",
    options: [
      "Stalingrad",
      "Supply lines",
      "Secret police",
      "Southern campaigns"
    ],
    correctIndex: 0
  },
  {
    question: "In RUSSIA, what does the letter I stand for?",
    options: [
      "Industrial sabotage",
      "Industry and technology",
      "Infantry offensives",
      "International diplomacy"
    ],
    correctIndex: 1
  },
  {
    question: "In RUSSIA, what does the letter A represent?",
    options: [
      "Attrition strategy",
      "Armistice negotiations",
      "Air superiority",
      "Alliance building"
    ],
    correctIndex: 0
  },
  {
    question: "Why were Soviet factories moved east of the Ural Mountains?",
    options: [
      "To protect production from German attacks and keep weapons flowing.",
      "To reduce military output and focus on civilian goods.",
      "To trade more easily with neutral Asian countries.",
      "To avoid sharing resources with other Allies."
    ],
    correctIndex: 0
  },
  {
    question: "How did the unyielding winter of 1941–42 affect German forces?",
    options: [
      "Cold and supply problems slowed their advance and weakened their troops.",
      "Weather conditions favoured Germany and sped up the invasion.",
      "The winter had little impact because fighting stopped completely.",
      "It allowed Germany to launch new offensives into Central Asia."
    ],
    correctIndex: 0
  },
  {
    question: "What was the main impact of Soviet scorched-earth tactics?",
    options: [
      "They denied German troops food, fuel, and shelter as they advanced.",
      "They gave German troops easier access to Soviet factories.",
      "They shortened German supply lines and helped transport.",
      "They allowed Germany to quickly restore the facilities for its own use."
    ],
    correctIndex: 0
  },
  {
    question: "What is meant by the Soviet attrition strategy?",
    options: [
      "Fighting huge battles and accepting losses to wear down German strength.",
      "Avoiding major battles to save troops for post-war conflicts.",
      "Relying only on small elite units while keeping the main army in reserve.",
      "Limiting fighting to small border skirmishes to avoid escalation."
    ],
    correctIndex: 0
  }
];

// ---------- FACTS FOR BLUE ALIENS ----------

const facts = [
  "USA – TRUMPH: Troops, Resources, Unbroken Atlantic lifeline, Money & Lend-Lease, Partnership, Home-front mobilisation.",
  "Britain – TIME: Tenacity, Intelligence, Morale, Empire and endurance.",
  "USSR – RUSSIA: Reorganisation of industry, Unyielding winter, Scorched-earth tactics, Stalingrad, Industry & technology, Attrition strategy.",
  "US troops helped open and hold the Western Front after D-Day in June 1944.",
  "The USA converted peacetime factories into war industries, becoming the 'Arsenal of Democracy'.",
  "Lend-Lease aid sent fuel, vehicles, and weapons to Britain and the USSR.",
  "The Unbroken Atlantic lifeline kept supply convoys reaching Britain and the Soviet Union.",
  "In the Battle of Britain, RAF pilots and civilians held out, preventing German invasion.",
  "Radar and codebreaking at Bletchley Park gave Britain a major intelligence edge.",
  "Britain used its Empire for troops, food, and bases to keep key sea routes open.",
  "The USSR moved factories east of the Urals so they were safe from German bombing.",
  "The harsh winter of 1941–42 slowed the German advance and helped save Moscow.",
  "Scorched-earth tactics denied German troops food, fuel, and shelter.",
  "At Stalingrad, Germany’s Sixth Army was destroyed and the Red Army began pushing west.",
  "The USSR’s attrition strategy exhausted German manpower and equipment."
];

// ---------- BASIC GAME STATE ----------

let tank;
let bullets = [];
let aliens = [];
let stars = [];

let score = 0;
let gameState = "play"; // "play", "question", "over"
const GAME_DURATION_MS = 3 * 60 * 1000; // 3 minutes
let startTime;

let remainingQuestionIndices = [];
let currentQuestionIndex = null;

let laserSoundElement;

let questionDiv, factDiv, gameStatusDiv;

// ---------- CLASSES ----------

class Tank {
  constructor() {
    this.x = 400;
    this.y = 540;
    this.speed = 6;
  }

  move(dir) {
    this.x += dir * this.speed;
    this.x = constrain(this.x, 40, width - 40);
  }

  show() {
    push();
    rectMode(CENTER);
    noStroke();
    fill(230, 60, 60);
    rect(this.x, this.y, 60, 25, 6);
    triangle(this.x - 25, this.y, this.x, this.y - 20, this.x + 25, this.y);
    fill(255, 180, 0);
    rect(this.x - 12, this.y + 12, 10, 14, 4);
    rect(this.x + 12, this.y + 12, 10, 14, 4);
    pop();
  }
}

class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 5;
    this.speed = 8;
  }

  update() {
    this.y -= this.speed;
  }

  offscreen() {
    return this.y < -10;
  }

  hits(alien) {
    return dist(this.x, this.y, alien.x, alien.y) < this.r + alien.r;
  }

  show() {
    push();
    noStroke();
    fill(255, 230, 80);
    rectMode(CENTER);
    rect(this.x, this.y, 4, 16, 3);
    pop();
  }
}

class Alien {
  constructor(type) {
    this.type = type; // "question" or "info"
    this.x = random(40, width - 40);
    this.y = -30;
    this.r = 20;
    this.speed = random(1.5, 3);
    this.questionIndex = null;

    if (this.type === "question") {
      this.col = color(220, 60, 60); // red
    } else {
      this.col = color(80, 120, 255); // blue
    }
  }

  attachQuestionIndex(index) {
    this.questionIndex = index;
  }

  update() {
    this.y += this.speed;
  }

  offscreen() {
    return this.y > height + 30;
  }

  show() {
    push();
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2);

    // face
    fill(255);
    ellipse(this.x - 6, this.y - 4, 6);
    ellipse(this.x + 6, this.y - 4, 6);
    fill(0);
    ellipse(this.x - 6, this.y - 4, 3);
    ellipse(this.x + 6, this.y - 4, 3);

    if (this.type === "question") {
      fill(0);
      rectMode(CENTER);
      rect(this.x, this.y + 5, 12, 4, 2); // straight mouth
    } else {
      noFill();
      stroke(0);
      strokeWeight(2);
      arc(this.x, this.y + 5, 16, 8, 0, PI); // smile
    }
    pop();
  }
}

// ---------- SETUP & DRAW ----------

function setup() {
  const canvas = createCanvas(800, 600);
  const container = document.getElementById("gameContainer");
  if (container) {
    canvas.parent("gameContainer");
  }

  tank = new Tank();
  initStars();

  remainingQuestionIndices = [...Array(questions.length).keys()];

  questionDiv = document.getElementById("questionDiv");
  factDiv = document.getElementById("factDiv");
  gameStatusDiv = document.getElementById("gameStatus");

  if (questionDiv) questionDiv.innerHTML = "";
  if (factDiv) factDiv.innerHTML = "Shoot blue aliens for facts!";
  if (gameStatusDiv) gameStatusDiv.textContent = "Shoot red aliens to answer MCQs.";

  laserSoundElement = document.getElementById("laserSound");

  startTime = millis();

  hookButtons();
}

function draw() {
  background(6, 15, 45);
  drawStars();

  // timer
  const elapsed = millis() - startTime;
  const remainingMs = max(0, GAME_DURATION_MS - elapsed);
  const remainingSec = floor(remainingMs / 1000);

  if (gameState === "play" && remainingMs <= 0) {
    gameState = "over";
    if (gameStatusDiv) {
      gameStatusDiv.textContent =
        "Time's up! Final score: " + score + ". Refresh to play again.";
    }
  }

  if (gameState === "play") {
    if (keyIsDown(LEFT_ARROW)) tank.move(-1);
    if (keyIsDown(RIGHT_ARROW)) tank.move(1);

    if (frameCount % 60 === 0) {
      spawnAlien();
    }

    for (let i = aliens.length - 1; i >= 0; i--) {
      const a = aliens[i];
      a.update();
      a.show();
      if (a.offscreen()) aliens.splice(i, 1);
    }

    for (let i = bullets.length - 1; i >= 0; i--) {
      const b = bullets[i];
      b.update();
      b.show();

      if (b.offscreen()) {
        bullets.splice(i, 1);
        continue;
      }

      for (let j = aliens.length - 1; j >= 0; j--) {
        const a = aliens[j];
        if (b.hits(a)) {
          handleAlienHit(a);
          aliens.splice(j, 1);
          bullets.splice(i, 1);
          break;
        }
      }
    }
  } else {
    // freeze movement but still draw
    aliens.forEach((a) => a.show());
    bullets.forEach((b) => b.show());
  }

  tank.show();
  drawHUD(score, remainingSec);

  if (gameState === "over") {
    drawGameOverOverlay();
  }
}

// ---------- HELPERS ----------

function initStars() {
  stars = [];
  for (let i = 0; i < 120; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      r: random(1, 2)
    });
  }
}

function drawStars() {
  noStroke();
  fill(240);
  for (const s of stars) {
    circle(s.x, s.y, s.r);
  }
}

function drawHUD(currentScore, remainingSec) {
  push();
  fill(255);
  textFont("system-ui");
  textSize(16);
  textAlign(RIGHT, TOP);
  text("Score: " + currentScore, width - 20, 10);
  text("Time: " + remainingSec + "s", width - 20, 30);
  pop();
}

function drawGameOverOverlay() {
  push();
  fill(0, 180);
  rect(0, 0, width, height);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(28);
  text("TIME'S UP!", width / 2, height / 2 - 20);
  textSize(20);
  text("Final score: " + score, width / 2, height / 2 + 15);
  textSize(14);
  text("Refresh the page to play again.", width / 2, height / 2 + 45);
  pop();
}

function spawnAlien() {
  let type = "info";
  if (remainingQuestionIndices.length > 0 && random() < 0.6) {
    type = "question";
  }

  const alien = new Alien(type);

  if (type === "question") {
    const qi = getNextQuestionIndex();
    if (qi === null) {
      alien.type = "info";
      alien.col = color(80, 120, 255);
    } else {
      alien.attachQuestionIndex(qi);
    }
  }
  aliens.push(alien);
}

function getNextQuestionIndex() {
  if (remainingQuestionIndices.length === 0) return null;
  const idx = floor(random(remainingQuestionIndices.length));
  const val = remainingQuestionIndices[idx];
  remainingQuestionIndices.splice(idx, 1);
  return val;
}

function handleAlienHit(alien) {
  if (alien.type === "question" && alien.questionIndex !== null) {
    openQuestion(alien.questionIndex);
  } else {
    showRandomFact();
  }
}

// ---------- QUESTION + FACT UI ----------

function openQuestion(qIndex) {
  currentQuestionIndex = qIndex;
  gameState = "question";

  const q = questions[qIndex];
  if (!questionDiv) return;

  let html = `<div class="mcq-box"><div class="mcq-question">${q.question}</div>`;
  html += `<div class="mcq-options">`;
  q.options.forEach((opt, i) => {
    const letter = String.fromCharCode(65 + i);
    html += `<button class="mcq-option" data-index="${i}">${letter}. ${opt}</button>`;
  });
  html += `</div></div>`;

  questionDiv.innerHTML = html;

  const buttons = questionDiv.querySelectorAll(".mcq-option");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selected = parseInt(btn.getAttribute("data-index"), 10);
      checkAnswer(selected);
    });
  });

  if (gameStatusDiv) {
    gameStatusDiv.textContent = "Answer the question to resume the game.";
  }
}

function checkAnswer(selectedIndex) {
  const q = questions[currentQuestionIndex];
  if (!q) return;

  if (selectedIndex === q.correctIndex) {
    score += 10;
    if (gameStatusDiv) gameStatusDiv.textContent = "Correct! +10 points.";
  } else {
    if (gameStatusDiv) gameStatusDiv.textContent = "Incorrect. Keep going!";
  }

  if (questionDiv) questionDiv.innerHTML = "";
  currentQuestionIndex = null;
  gameState = "play";
}

function showRandomFact() {
  if (!factDiv || facts.length === 0) return;
  const idx = floor(random(facts.length));
  factDiv.textContent = facts[idx];
}

// ---------- INPUT: keyboard + buttons ----------

function keyPressed() {
  if (gameState === "play" && key === " ") {
    shoot();
  }
}

function shoot() {
  if (gameState !== "play") return;
  bullets.push(new Bullet(tank.x, tank.y - 25));

  if (laserSoundElement) {
    try {
      laserSoundElement.currentTime = 0;
      laserSoundElement.play();
    } catch (e) {
      // ignore autoplay errors
    }
  }
}

function hookButtons() {
  const leftBtn = document.getElementById("leftBtn");
  const rightBtn = document.getElementById("rightBtn");
  const shootBtn = document.getElementById("shootBtn");

  if (leftBtn) {
    leftBtn.addEventListener("click", () => {
      if (gameState === "play") tank.move(-1);
    });
  }
  if (rightBtn) {
    rightBtn.addEventListener("click", () => {
      if (gameState === "play") tank.move(1);
    });
  }
  if (shootBtn) {
    shootBtn.addEventListener("click", () => {
      shoot();
    });
  }
}
