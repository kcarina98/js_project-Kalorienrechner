function getCalories() {
  // Daten holen
  const height = Number(document.querySelector("#height").value);
  const age = document.querySelector("#age").value;
  const weight = Number(document.querySelector("#weight").value);
  const weiblich = document.querySelector("#w").checked;
  const männlich = document.querySelector("#m").checked;
  const activity = document.querySelector("#sport").value;

  // Output definieren
  const outputGrundumsatzKcal = document.querySelector(
    ".outputGrundumsatzKcal"
  );
  const outputGrundumsatzKj = document.querySelector(".outputGrundumsatzKj");
  const outputGesamtumsatzKcal = document.querySelector(
    ".outputGesamtumsatzKcal"
  );
  const outputGesamtumsatzKj = document.querySelector(".outputGesamtumsatzKj");

  // -Rechnung definieren
  const rechnungM = 66.47 + 13.7 * weight + 5 * height - 6.8 * age;
  const rechnungW = 655.1 + 9.6 * weight + 1.8 * height - 4.7 * age;

  // ! Grundumsatz berechnen
  if (männlich === true) {
    console.log("männlich");
    outputGrundumsatzKcal.innerHTML = rechnungM.toFixed(2);
    outputGrundumsatzKj.innerHTML = (rechnungM * 4.184).toFixed(2);
  } else {
    outputGrundumsatzKcal.innerHTML = rechnungW.toFixed(2);
    outputGrundumsatzKj.innerHTML = (rechnungW * 4.184).toFixed(2);
  }

  //! Gesamtumsatz berechnen
  if (männlich === true) {
    console.log("männlich");
    outputGesamtumsatzKcal.innerHTML = (rechnungM * activity).toFixed(2);
    outputGesamtumsatzKj.innerHTML = (rechnungM * activity * 4.184).toFixed(2);
  } else {
    outputGesamtumsatzKcal.innerHTML = (rechnungW * activity).toFixed(2);
    outputGesamtumsatzKj.innerHTML = (rechnungW * activity * 4.184).toFixed(2);
  }
}
