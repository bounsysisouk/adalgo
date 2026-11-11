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
        FIN SI
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

## Produit

----- text--
    VARIABLE
    n : number
INIT
    compteur <- 1
    produits <- 1    
START
    DEBUT FONCTION produit (n) :

    TANT QUE compteur <= n FAIRE

        produit = produit * compteur
            compteur <- compteur + 1

        FIN TANT QUE 
         
        RETOURNER produit
        
    FIN FONCTION        
FIN
------

## CompterPair

----- text--
    VARIABLE
    n : number
INIT
    compteur <- 1
    nbPaire = 0   
START
    DEBUT FONCTION compterPair (n) :

    TANT QUE compteur <= n 

        SI (compteur % 2 = 0) FAIRE
            nbPairs = nbpairs +1
            AFFICHER compteur     
        FIN SI
            compteur <- compteur + 1

    FIN TANT QUE 
    RETOURNE  
        
    FIN FONCTION        
FIN
------

## tables

----- text--
    VARIABLE
    n : number
    i : ENTIER
INIT
    tab = []
    i = 0
    compteur = 0    
START
    DEBUT FONCTION table (n) :

    TANT QUE compteur <= n 
        SI (compteur % n = 0) FAIRE 
            tab[i] <- compteur  
            i = i + 1 
            
        FIN SI
            compteur <- compteur + 1
    FIN TANT QUE
        RETOURNE tab
    FIN FONCTION        
FIN
------

## multiplesJusqua(n, limite)

----- text--
    VARIABLE
    n : number
    i : ENTIER
    limite : ENTIER
INIT
    tab = []
    i = 0
    compteur = n    
START
    DEBUT FONCTION multiplierJusqua (n, limite) :

    TANT QUE compteur <= limite FAIRE 
    
            tab[i] <- compteur  
            i = i + 1
            compteur = compteur + n
            
    FIN TANT QUE
        RETOURNE tab
    FIN FONCTION        
FIN
------

