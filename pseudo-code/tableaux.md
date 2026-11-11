# Tableaux

## maximum (tableaux)

----- text--
    VARIABLE
    tab : ENTIER[5]
    max : ENTIER
    n : ENTIER
INIT
    tab = [0] <- 3
    tab = [1] <- 7
    tab = [2] <- 2
    tab = [3] <- 9
    tab = [4] <- 1
    max <- tab[0]
    
START
    DEBUT FONCTION maximum(tab) :

        POUR n <- 1 à 4 

            SI tab[n] > max ALORS
                max <- tab[n]
            FIN SI 

        FIN POUR 

        RETOURNER max 

        FIN   
        
    FIN FONCTION        
FIN
------

## minimum (tableaux)

----- text--
    VARIABLE
    tab : ENTIER[5]
    max : ENTIER
    n : ENTIER
INIT
    tab = [0] <- 3
    tab = [1] <- 7
    tab = [2] <- 2
    tab = [3] <- 9
    tab = [4] <- 1
    max <- tab[0]
    
START
    DEBUT FONCTION minimum(tab) :

        POUR n <- 1 à 4 

            SI tab[n] < min ALORS
                max <- tab[n]
            FIN SI 

        FIN POUR 

        RETOURNER min 

        FIN   
        
    FIN FONCTION        
FIN
------