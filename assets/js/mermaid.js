document.addEventListener("DOMContentLoaded", async function () {
  mermaid.initialize({ startOnLoad: true });
  await mermaid.run({
    querySelector: ".language-mermaid",
  });
  console.log("Mermaid initialized");
});
