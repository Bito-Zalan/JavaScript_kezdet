export function elagazas() {
  /* Döntsük el a szam változórol, hogy 0-e, páros-e, páratlan-e?*/
  /*A === nem csak az értéket ellenőrzi, hanem a típust is*/
  szam = Number(szam);
  console.log(szam);
  if (!Number.isNaN(szam)) {
    if (szam === 0) {
      console.log("A szam 0");
    } else if (szam % 2 === 0) {
      console.log("A szam páros");
    } else {
      console.log("A szam páratlan");
    }
  }
}
var szam = "0a";
console.log("A szám változó típusa: " + typeof szam);

export function ciklusok() {
  /* írjuk ki 10-szer a consolra, hogy "Az élet szép!" */
  for (let index = 0; index < 10; index++) {
    console.log(`"${index}Az élet szép!"`);
  }

  let index = 0;

  while (index < 10) {
    console.log(`${index}Az élet szép!`);
    index++;
  }
}
export function udvozles(nev) {
  console.log("Jó reggelt ", nev, "!");
}
