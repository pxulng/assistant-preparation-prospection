# Étude de cas : préparer la prospection média avec un assistant IA, et mesurer honnêtement ce qu'il vaut

> Projet de démonstration sur **données entièrement synthétiques** (régie, sites et 40 marques inventés). Conçu à partir de ma pratique de la prospection commerciale ; jamais utilisé en production, ni chez un employeur, et aucune donnée réelle n'y figure.

## Le problème

Avant d'écrire à une marque, un commercial média passe du temps à comprendre qui elle est, à choisir l'offre à lui proposer et à personnaliser une séquence de trois mails. C'est un travail répétitif mais qui demande de la rigueur : un chiffre mal repris ou un fait périmé utilisé en accroche décrédibilise le mail.

Question posée : un assistant peut-il préparer ce travail, **un commercial relisant toujours avant envoi**, sans inventer de faits et en signalant ce qui est douteux ?

## Ce que j'ai construit

Un workflow n8n + Claude. À partir d'une fiche de faits sur une marque, il produit :
- 2 à 3 **fonctions à viser** (jamais de noms de personnes : trouver des contacts est hors périmètre) ;
- une **offre** parmi 4, avec sa justification ;
- **3 mails** (premier mail, deux relances) ;
- une liste de **faits à vérifier** (chiffre contradictoire, fait de plus de 2 ans, information manquante).

Il n'envoie rien. Pas de prix ni de résultat promis.

## Comment je l'ai évalué

J'ai traité le projet comme une mission chez un client, avec des critères fixés avant de tester :
- **Une baseline sans IA** : un gabarit unique de 3 mails, pour savoir ce que vaut l'outil le plus simple.
- **40 marques fictives** dont 28 de test et 12 de validation, avec des pièges placés volontairement (chiffre contradictoire, fait ancien, information manquante) et des fiches sans piège.
- **Une grille de 1 à 4** sur 5 critères : exactitude (bloquant), signalement, ciblage, pertinence de l'offre, qualité des mails.
- **Le jeu de validation utilisé une seule fois**, après avoir gelé le prompt.
- **Deux modèles comparés** (Haiku 5.5 et Sonnet 5.5), coût mesuré sur le solde du compte.
- **Un contrôle humain à l'aveugle** : j'ai noté moi-même 10 sorties mélangées sans savoir quel modèle les avait écrites, puis comparé à un juge IA.
- **Un journal des erreurs** (18 entrées) : ce qui a mal tourné, pourquoi, ce que j'ai décidé.

## Ce qui s'est passé

**Le premier prompt avait des défauts nets.** Il choisissait l'offre « contenu de marque » dans 88 % des cas par défaut, mettait des alertes sur toutes les fiches et affirmait des choses absentes de la fiche (audience d'un site, campagnes passées). Deux fiches sur 28 étaient illisibles, la réponse étant coupée. Après analyse des erreurs, j'ai écrit un deuxième prompt de 10 règles. La part du contenu de marque est tombée à 53 à 62 %.

**Une erreur de montage m'a coûté un essai.** Mon premier prompt ne contenait pas la variable qui insère la fiche de la marque : l'assistant répondait « aucune fiche fournie ». Je l'ai vu en lisant les sorties, corrigé et noté dans le journal.

**Les pièges sont tous repérés, mais cela vaut moins qu'il n'y paraît.** Les deux modèles signalent 22 pièges sur 22. Mais Haiku met aussi une alerte sur presque toutes les fiches sans piège (une liste vide sur 18). Tout signaler, c'est facile ; savoir dire « rien à signaler », c'est ce qui rendrait l'outil utile à un commercial. Je l'ai documenté sans le corriger pour garder la validation propre.

**Haiku suffit.** Sur la validation, les deux modèles obtiennent des notes très proches (exactitude 3,92 pour les deux). Dans le contrôle à l'aveugle, les deux défauts les plus sérieux viennent de Sonnet : une année ancienne (1935, 1903) utilisée en accroche sans alerte. Haiku coûte environ 0,002 $ par fiche contre 0,030 $, soit 17 fois moins. L'échantillon est trop petit pour parler de différence démontrée ; je retiens Haiku par défaut.

**Mon jugement et celui du juge IA se recoupent sur l'essentiel.** Sur 50 notes, 35 sont identiques (70 %) et 49 à un point près. Les deux ont relevé les mêmes cas où une date ancienne servait d'accroche sans alerte. Le juge IA est plus sévère que moi sur le style (13 désaccords sur 15 où je note plus haut). Pour s'en servir, il faudrait le recaler sur des notes humaines.

## Ce que j'en retiens

- **Un score sans point de comparaison ne dit rien.** La baseline m'a obligé à définir ce que l'IA devait faire de mieux, et à constater que la comparaison était faible (le gabarit ne peut ni utiliser un fait ni signaler). La vraie référence serait des mails écrits à la main sur les mêmes fiches.
- **Il faut séparer le jeu qui sert à corriger de celui qui sert à juger.** Les 28 fiches de test ont guidé le prompt ; seules les 12 de validation sont non biaisées.
- **Les erreurs résiduelles sont l'information la plus utile.** Les alertes sur toutes les fiches, les accroches sur un fait ancien chez Sonnet, les petites fautes de style (« me indiquer ») sont les endroits où un humain doit vraiment relire.
- **Le modèle n'est pas déterministe.** Deux exécutions du même prompt n'ont pas donné les mêmes offres sur 2 fiches. Les conclusions valent pour une exécution, pas pour toutes.

## Limites

Données inventées par la même démarche que le prompt, donc probablement trop favorables ; un seul évaluateur humain (moi), 10 sorties, des fiches plutôt faciles ; juge IA de la même famille que les modèles évalués ; aucune mesure d'utilité réelle (taux de réponse, temps gagné) ; aucun test sur de vraies marques.

## Ce que je ferais ensuite

1. Un prompt v3 qui impose la liste vide quand il n'y a rien à signaler, testé sur de nouvelles fiches, sans toucher aux résultats de la v2.
2. Un test sur cinq vraies marques publiques, avec faits relus et datés par un humain.
3. Une comparaison avec des mails écrits à la main sur les mêmes fiches.
4. Mesurer le temps de préparation manuel pour chiffrer le gain éventuel, étiqueté comme hypothèse tant que ce n'est pas mesuré.

Tout est dans le dépôt : données, prompts, sorties, grille, notations, journal et synthèse chiffrée.
