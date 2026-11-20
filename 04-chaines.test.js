import { inverserChaine, estPalindrome, compterVoyelles, capitaliser, tronquer, toCamelCase, toSnakeCase, validerMotDePasse, analyserTexte } from "./04-chaines.js"

// Tu maîtrises maintenant .toBe(), .toEqual() et le cas null.
// À partir d'ici, on ne te montre plus les tests — tu les écris.
// Les cas à couvrir sont indiqués dans chaque describe.

// Cas à couvrir : chaîne normale, chaîne vide.
describe("inverserChaine", () => {
  it("Retourne la chaîne dans l'ordre inverse", () => {
    expect(inverserChaine("bonjour")).toBe("ruojnob")
  })
   it("Retourne null quand la chaine est vide", () => {
    expect(inverserChaine("")).toBe(null)
  })
})

// Cas à couvrir : palindrome, non-palindrome, un seul caractère.
describe("estPalindrome", () => {
  it("Retourne true si la chaîne se lit de la même façon dans les deux sens", () =>{
    expect(estPalindrome("kayak")).toBe(true)
  })
  it("Retourne true si la chaîne se lit de la même façon dans les deux sens", () =>{
    expect(estPalindrome("bonjour")).toBe(false)
  })
})

// Cas à couvrir : chaîne avec voyelles, chaîne sans voyelle.
describe("compterVoyelles", () => {
  it.todo("à compléter")
})

// [FACULTATIF] Cas à couvrir : chaîne mixte (boNJOUR → Bonjour), chaîne déjà correcte.
describe("capitaliser", () => {
  it.todo("à compléter")
})

// [FACULTATIF] Cas à couvrir : chaîne trop longue, chaîne assez courte.
describe("tronquer", () => {
  it.todo("à compléter")
})

// [FACULTATIF] Cas à couvrir : plusieurs mots, deux mots.
describe("toCamelCase", () => {
  it.todo("à compléter")
})

// [FACULTATIF] Même pattern inverse.
describe("toSnakeCase", () => {
  it.todo("à compléter")
})

// [FACULTATIF] Cas à couvrir : valide, trop court, pas de chiffre, pas de majuscule.
describe("validerMotDePasse", () => {
  it.todo("à compléter")
})

// [FACULTATIF] Cas à couvrir : texte simple, texte vide.
// Rappel : le résultat est un objet { lettres, mots, phrases } — utilise .toEqual().
describe("analyserTexte", () => {
  it.todo("à compléter")
})
