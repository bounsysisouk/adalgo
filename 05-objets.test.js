import { fullName, filtrerParAge, trierParNom, grouperParVille, statistiques, prixTotal, plusCher } from "./05-objets.js"

// Les fonctions retournent des objets et des tableaux d'objets.
// Utilise .toBe() pour une string, .toEqual() pour un objet ou un tableau.
// Plus d'indications sur les cas — choisis toi-même ce qui est pertinent à tester.

describe("fullName", () => {
  it("Reçoit un objet { prenom, nom } et retourne le nom complet", () => {
    expect(fullName({ prenom: "Ada", nom: "Lovelace"})).toBe("Ada Lovelace")
  });
  it("retourne rien si aucun nom ni prenom", () => {
    expect(fullName({prenom: "", nom: ""})).toBe("","")
  });
});

describe("filtrerParAge", () => {
  it("Reçoit un tableau de { nom, age } et retourne ceux dont l'âge est >= ageMin.", () => {
    expect(filtrerParAge([{ nom: "Ada", age: 28 }, { nom: "Alan", age: 17 }], 18)).toEqual([{nom: "Ada", age: 28}])
  });
  it("Reçoit un tableau de { nom, age } et retourne ceux dont l'âge est >= ageMin.", () => {
    expect(filtrerParAge([{ nom: "Ada", age: 28 }, { nom: "Alan", age: 18 }], 18)).toEqual([{nom: "Ada", age: 28},
      { nom: "Alan", age: 18 }])
  });
  it("Reçoit un tableau de { nom, age } et retourne ceux dont l'âge est >= ageMin.", () => {
    expect(filtrerParAge([{ nom: "Adam", age: 8 }, { nom: "Alain", age: 8 }], 18)).toEqual([]);
  });
})

describe("trierParNom", () => {
  it("reçoit un tableau de { nom, ... } et retourne le tableau trié par ordre alphabétique du nom.", () => {
    expect(trierParNom([{ nom: "Turing" }, { nom: "Lovelace" }, { nom: "Hopper" }])).toEqual([{ nom: "Hopper" }, { nom: "Lovelace" }, { nom: "Turing" }])
  });
  it("ne modifie pas le tableau d'origine.", () => {
    const original = [{ nom: "Turing" }, { nom:"Ada" }]
    expect(original[0].nom).toBe("Turing")
  });
  it("Retourne le tableau vide si au moins un chanp est vide", () => {
    expect(trierParNom([{nom:""}])).toEqual([])
  });
})

// [FACULTATIF]
describe("grouperParVille", () => {
  it.todo("à compléter")
})

// [FACULTATIF]
describe("statistiques", () => {
  it.todo("à compléter")
})

// [FACULTATIF]
describe("prixTotal", () => {
  it.todo("à compléter")
})

// [FACULTATIF]
describe("plusCher", () => {
  it.todo("à compléter")
})
