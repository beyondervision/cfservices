// agent-links.js
// Status: PASSIVE → ACTIVE (via Identity Console)
// Rol: Centrale link-validatie + Identity State consumer
// Architectuur: AI-Celium · Z.A.L. 1:1 · Front-end only

(function () {
  /* =========================================================
     Deel 1 — Social links: hide / show (bestaand gedrag)
     ========================================================= */

  const agentLinks = {
    linkedin: "",   // vul per agent
    facebook: "",
    youtube: ""
  };

  const block = document.getElementById("social-block");
  let visible = false;

  if (block) {
    document.querySelectorAll("#social-block .row").forEach(row => {
      const key = row.dataset.key;
      const url = agentLinks[key];

      if (url && url.trim() !== "") {
        const a = row.querySelector("a");
        if (a) {
          a.href = url;
          a.textContent = url.replace(/^https?:\/\//, "");
          visible = true;
        }
      } else {
        row.remove();
      }
    });

    if (visible) {
      block.classList.remove("hidden");
      block.classList.add("visible");
    }
  }

  /* =========================================================
     Deel 2 — Identity Console koppeling (Fase 2)
     ========================================================= */

  if (!window.CFS_IDENTITY_STATE) {
    // Geen console gebruikt → profiel blijft statisch
    return;
  }

  const state = window.CFS_IDENTITY_STATE;

  // Activeer AI-status pills visueel
  const pills = document.querySelectorAll(".ai-pill");
  pills.forEach(pill => pill.classList.add("active"));

  // Optioneel: future hooks (nu alleen logging)
  console.info("CFS Identity State gekoppeld:", state);

})();
