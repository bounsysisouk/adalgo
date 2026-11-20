# Chaînes de caractères

## inverserChaine(chaine)

----- text--
VARIABLE
chaine : CHAINE
motInverse : CHAINE
i : ENTIER
longueur : ENTIER
INIT
    AFFICHER "entrer une chaine de caractère"
    LIRE chaine
START
    DEBUT FONCTION inverserChaine(chaine)
    longueur <- TAILLE(chaine)
    i <- longueur - 1
    motInverse <- ""

        TANT QUE i >= 0 FAIRE
            motInverse <- motInverse + chaine[i]
            i <- i - 1
        FIN TANT QUE

    RETOURNE motInverse

    FIN FONCTION

------- FIN------

## estPalindrome(chaine)

----- text--
VARIABLE
chaine : CHAINE
longueur : ENTIER
i : ENTIER
j : ENTIER

INIT
    AFFICHER "entrer une chaine de caractère"
    LIRE chaine
START
    DEBUT FONCTION estPalindrome(chaine)
    longueur <- TAILLE(chaine)
    i <- 0
    j <- longueur - 1

        TANT QUE i < j FAIRE
            SI chaine[i] != chaine[j] ALORS
                RETOURNER FAUX
            FIN SI

            i <- i + 1
            j <- j - 1

        FIN TANT QUE

        RETOURNER VRAI

    FIN FONCTION

--------- FIN---------

## compterVoyelles(chaine)

----- text--
VARIABLE
chaine : CHAINE
longueur : ENTIER
i : ENTIER
compterVoyelles: ENTIER


INIT
    AFFICHER "entrer une chaine de caractère"
    LIRE chaine
START
    DEBUT FONCTION compterVoyelles(chaine)
    longueur <- TAILLE(chaine)
    compterVoyelles <- 0
    i <- 0
   

        TANT QUE i < longueur FAIRE

            SI chaine[i] = "a" OU chaine[i] = "e" OU chaine[i] = "i" OU chaine[i] = "o" OU chaine[i] = "u" OU chaine[i] = "y" ALORS
                compterVoyelles <- compterVoyelles + 1
            FIN SI

        i <- i + 1
        
        FIN TANT QUE
            RETOURNE compterVoyelles

    FIN FONCTION

--------- FIN---------

