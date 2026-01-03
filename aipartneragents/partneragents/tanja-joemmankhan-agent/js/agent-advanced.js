/* =====================================================
   CFServices · Agent Advanced Runtime
   Z.A.L. · AI-Celium · Agent Binding
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  // Forceer ADVANCED Z.A.L. voor deze agent
  if (window.CFS && CFS.aiGuidance) {
    CFS.aiGuidance.activate("advanced");
  }

  // Context standaard voor Advanced agents
  if (window.CFS && CFS.context) {
    CFS.context.set({
      access: "public",
      build: "ready",
      resonance: "zal-1-1"
    });
  }

  console.info(
    "[CFServices][Agent]",
    "Advanced agent geladen · Z.A.L. actief"
  );
});
