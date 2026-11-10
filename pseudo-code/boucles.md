# Boucles

## CompterJusqua

----- text--
    VARIABLE
    n : number
INIT
    compteur <- 1
    LIRE n
START
    DEBUT FONCTION compterJusqua (n) :
        TANT QUE compteur <= n FAIRE
            AFFICHER compteur
            compteur <- compteur + 1
        FIN TANT QUE 
        
    FIN FONCTION        
FIN
------

## AfficherPairs

----- text--
    VARIABLE
    n : number
INIT
    compteur <- 1
    
START
    DEBUT FONCTION AfficherPairs (n) :

    TANT QUE compteur <= n 
        SI (compteur % 2 = 0) FAIRE
            AFFICHER compteur
            compteur <- compteur + 1
        FIN TANT QUE 
        
    FIN FONCTION        
FIN
------

## Sommme

----- text--
VARIABLE
    n : number
INIT
    compteur ← 1
    somme ← 0
START
    DEBUT FONCTION somme (n) :

    TANT QUE  compteur <= n FAIRE
        somme ← somme + compteur
        compteur ← compteur + 1

    FIN TANT QUE 

    RETOURNER somme 

FIN FONCTION
------

----- text--
    VARIABLE
    n : number
INIT
    compteur <- 1
    produits <- 1    
START
    DEBUT FONCTION AfficherPairs (n) :

    TANT QUE compteur <= n FAIRE

        produit = produit * compteur
            compteur <- compteur + 1

        FIN TANT QUE 
         
        RETOURNER produit
        
    FIN FONCTION        
FIN
------