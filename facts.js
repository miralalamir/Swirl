const facts = [
  "AI can detect diseases from X-rays better than humans.",
  "The first AI program was written in 1951.",
  "AI helps power voice assistants like Siri and Alexa.",
  "AI can create music, art, and even poetry!",
  "Some robots today can show emotions using AI.",
  "AI helps self-driving cars understand traffic.",
  "AI models can beat world champions in chess and Go.",
  "AI translation tools help people speak across languages.",
  "AI can write code, essays, and generate images.",
  "Machine learning is a branch of AI that learns from data."
];

function showRandomFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  document.getElementById("fact-box").textContent = facts[randomIndex];
}
