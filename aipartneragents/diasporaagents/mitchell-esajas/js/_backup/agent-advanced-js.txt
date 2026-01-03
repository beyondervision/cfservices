document.addEventListener("DOMContentLoaded", () => {

  // Context specifiek voor Diaspora Agent
  if (window.CFS && CFS.context) {
    CFS.context.set({
      access: "public",
      build: "ready",
      resonance: "zal-1-1"
    });
  }

  // Advanced AI-begeleiding
  if (window.CFS && CFS.aiGuidance) {
    CFS.aiGuidance.activate("advanced");
  }

  console.info(
    "[CFServices][Agent]",
    "Mitchell Esajas · Diaspora Agent · ADVANCED actief"
  );
});
