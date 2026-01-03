document.addEventListener("DOMContentLoaded", () => {

  // Z.A.L. bovenlaag injecteren
  const zalBar = document.getElementById("zal-bar");
  if (zalBar) {
    zalBar.innerHTML = `
      <div class="zal-bar">
        🧠 Z.A.L. · AI-Celium actief · ADVANCED
      </div>
    `;
  }

  // Context afdwingen voor ADVANCED partners
  if (window.CFS && CFS.context && CFS.aiGuidance) {
    CFS.context.set({
      access: "public",
      build: "ready",
      resonance: "zal-1-1"
    });

    CFS.aiGuidance.activate("advanced");
  }

});
