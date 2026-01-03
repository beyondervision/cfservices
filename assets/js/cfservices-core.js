/* =====================================================
   CFServices · Core
   Centrale client-side logica
   ===================================================== */

window.CFS = window.CFS || {};

/* -----------------------------------------
   Basis status (future-proof)
----------------------------------------- */
window.CFS.state = {
  environment: "public",
  version: "1.0.0",
  initialized: true
};

console.info("[CFServices] Core geladen:", window.CFS.state);

/* =====================================================
   CFServices · AI-Begeleiding
   ===================================================== */

window.CFS.aiGuidance = {
  enabled: false,
  level: "none", // none | basic | advanced

  activate(level = "basic") {
    this.enabled = true;
    this.level = level;

    document.documentElement.setAttribute(
      "data-ai-guidance",
      level
    );

    console.info(
      "[CFServices]",
      "AI-begeleiding geactiveerd:",
      level
    );
  }
};
