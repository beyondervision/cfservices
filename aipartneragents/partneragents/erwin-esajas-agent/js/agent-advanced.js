document.addEventListener("DOMContentLoaded", () => {

  // Canonieke terugknop
  const navBack = document.querySelector(".nav-back");
  if (navBack) {
    navBack.innerHTML = `
      <a href="/aipartneragents/index.html">
        ← Terug naar Agents & Partners
      </a>
    `;
  }

  // Context override voor ADVANCED agent
  if (window.CFS && CFS.context) {
    CFS.context.set({
      access: "public",
      build: "ready",
      resonance: "zal-1-1"
    });
  }

  // AI-niveau forceren
  if (window.CFS && CFS.aiGuidance) {
    CFS.aiGuidance.activate("advanced");
  }

  console.info(
    "[CFServices][Agent]",
    "Erwin Esajas · ADVANCED profiel actief"
  );
});
