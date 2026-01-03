document.addEventListener("DOMContentLoaded", () => {

  // Z.A.L. bovenlaag (placeholder, gekoppeld aan /cfservices/zal)
  const zalBar = document.getElementById("zal-bar");
  if (zalBar) {
    zalBar.innerHTML = `
      <div class="zal-banner">
        Z.A.L. · AI-Celium · Context & Resonantie actief
      </div>
    `;
  }

  console.info(
    "[CFServices][Agent]",
    "Jerry Moi-Thuk-Shung · ADVANCED profiel geladen"
  );

});
