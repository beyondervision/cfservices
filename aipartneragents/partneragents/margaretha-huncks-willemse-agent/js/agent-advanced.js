document.addEventListener("DOMContentLoaded", () => {

  if (window.CFS && CFS.aiGuidance) {
    CFS.aiGuidance.activate("advanced");
  }

  if (window.CFS && CFS.context) {
    CFS.context.set({
      access: "public",
      build: "ready",
      resonance: "zal-1-1"
    });
  }

  console.info(
    "[CFServices][Agent]",
    "Margaretha Huncks-Willemse · Advanced Z.A.L. actief"
  );

});
