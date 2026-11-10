# conditions

## estPositif

----- text--
    VARABLE
    n : number
INIT
    LIRE n
START
    DEBUT FONCTION estPosistif (n) :
        SI (n >= 0) ALORS
            retourne VRAI
        SINON
            retourne FAUX
    FIN FONCTION        
FIN
------

## estPair

----- text--
    VARABLE
    n : number
INIT
    LIRE n
START
    DEBUT FONCTION estPair (n) :
        SI (n % 2 = 0) ALORS
            retourne VRAI
        SINON
            retourne FAUX
    FIN FONCTION        
FIN
------

## max (a, b)

----- text--
    VARABLE
    max : number

INIT

START
    DEBUT FONCTION estMax (a, b) :
        max <= 0
        SI (a > b) ALORS
            max <- a
        SINON
            max <- b
        fin si
        retourne max
    FIN FONCTION        
FIN
------

## mention (note)

----- text--
    VARABLE
    note : number

INIT
    lire note
START
    DEBUT FONCTION mention () :
        note <= 0
        SI (note >= 16) ALORS
            RETOURNE "Très bien"
        FIN SI

        SI (note >= 14 && < 16) ALORS
            RETOURNE "Bien"
        FIN SI

        SI (note >= 12 && < 14) ALORS
            RETOURNE "Assez bien"
        FIN SI

        SI (note >= 10) ALORS
            RETOURNE "Passable"
        FIN SI

            RETOURNE "insuffisant"    
        
        
    FIN FONCTION        
FIN
------


