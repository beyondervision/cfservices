document.addEventListener("DOMContentLoaded", () => {
  // Marcel is ADVANCED maar menselijk (geen automation)
  CFS.context.set({
    access: "public",
    build: "ready",
    resonance: "zal-1-1"
  });

  CFS.aiGuidance.activate("advanced");

  console.info(
    "[CFServices][Agent]",
    "Marcel Leider · Menselijke partner · Advanced context actief"
  );
});
