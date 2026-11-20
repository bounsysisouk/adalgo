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
