/* =====================================
   Agent ADVANCED Runtime
   Z.A.L. binding
   ===================================== */

document.addEventListener("DOMContentLoaded", () => {

  // Zet AI-begeleiding expliciet op ADVANCED
  if (window.CFS && CFS.aiGuidance) {
    CFS.aiGuidance.activate("advanced");
  }

  // Context overschrijven voor partner
  if (window.CFS && CFS.context) {
    CFS.context.set({
      access: "public",
      build: "ready",
      resonance: "zal-1-1"
    });
  }

  console.info(
    "[Agent][Mireille Middelhof]",
    "ADVANCED profiel geladen"
  );
});
