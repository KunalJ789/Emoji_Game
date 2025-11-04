let fighters = [
  "🫎",
  "🫏",
  "🦁",
  "🐱",
  "🐯",
  "🦒",
  "🦊",
  "🦝",
  "🐰",
  "🐹",
  "🐭",
  "🐗",
  "🐷",
  "🐮",
  "🐻",
  "🐻‍❄️",
  "🐨",
  "🐼",
  "🐸",
  "🦓",
  "🐲",
];
let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightBtn");

fightButton.addEventListener("click", function () {
  let randomEmoji1 = Math.floor(Math.random() * fighters.length);
  let randomEmoji2 = Math.floor(Math.random() * fighters.length);
  stageEl.textContent = fighters[randomEmoji1] + " vs " + fighters[randomEmoji2]
});

