# objets

## fullName(personne)

----- text--
    VARIABLE
 OBJET: { CHAINE }
INIT
    AFFICHER remplir le tableau { prenom, nom }
    lIRE [{ prenom, nom }]
START
    RETOURNE personne.prenom + " " + personne.nom   
FIN
------

## filtrerParAge(personne, ageMin)

----- text--
    VARIABLE
        OBJET: { CHAINE }
        ageMin: ENTIER 
        TABLEAU: {p}
INIT
    AFFICHER remplir le tableau { prenom, nom }
    lIRE [{ prenom, nom }]
    
START
resultat[]
    POUR CHAQUE p de personne FAIRE

        SI p.age >= ageMin ALORS
        resultat = resultat.push(p)
        FIN SI

    FIN POUR

    RETOURNE resultats  
FIN
------

## trierParNom(personne)

----- text--
    VARIABLE
        nom: [{CHAINE}]
        N: []
        i: ENTIER
        J: ENTIER
INIT
  AFFICHER " Remplir le tableau avec les nom"
  LIRE entrer nom dans le tableau 
START
    POUR CHAQUE i : 0 à N - 1 FAIRE
        Pour j de i + 1 à N - 1 FAIRE 
            SI personnes[i].nom < personnes[j].nom
            temp = personnes[i]
            personnes[i] = personnes[j]
            personne[j] = temp
            FIN SI
        FIN POUR 
    FIN POUR 


    RETOURNE N 
FIN
------

