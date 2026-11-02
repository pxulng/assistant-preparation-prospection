# Résultats : assistant de préparation de prospection média

Tout est mesuré sur des **données synthétiques** (40 marques fictives, régie fictive Hexamédia). Rien n'a été testé sur de vraies marques ni en production. Les chiffres disent si l'assistant suit ses règles sur des cas fabriqués, pas s'il aiderait un commercial réel.

## 1. Ce qui a été comparé

| Version | Contenu |
|---|---|
| Baseline sans IA | Modèle de 3 mails générique ; seuls marque, secteur et site changent ; aucune alerte |
| v1 Haiku 5.5 | Premier prompt |
| v2 Haiku 5.5 / v2 Sonnet 5.5 | Prompt corrigé (10 règles), gelé avant la validation |

Jeux : 28 fiches de test (utilisées pour corriger le prompt) et 12 fiches de validation (utilisées une seule fois). Pièges : chiffre contradictoire, fait ancien, info manquante, aucun.

## 2. Résultats mesurés (comptages sur les fichiers de sortie)

| Indicateur | v1 Haiku | v2 Haiku run 1 | v2 Haiku run 2 | v2 Sonnet | Valid. Haiku | Valid. Sonnet |
|---|---|---|---|---|---|---|
| Fiches lisibles (lecture stricte, avant correction du lecteur) | 26/28 | 27/28 | 28/28 | 28/28 | 12/12 | 11/12 (12/12 après correction) |
| Offre « contenu de marque » | 88 % | 62 % | 53 % | 57 % | 66 % | 72 % |
| Mail 1 de plus de 120 mots | 2 | 0 | 0 | 2 | 0 | 2 |
| Listes « à vérifier » vides sur fiches sans piège | 0/16 | 0/16 | 1/16 | 9/16 | 0/2 | 0/2 |
| Pièges signalés | non relevé | 12/12 | 12/12 | 12/12 | 10/10 | 10/10 |

Baseline : 0 piège signalé, toutes les fonctions = « responsable marketing », par construction.

## 3. Notation IA de la validation (grille 1 à 4, 12 fiches par modèle)

| Critère | Haiku | Sonnet |
|---|---|---|
| Exactitude | 3,92 | 3,92 |
| Signalement | 3,67 | 3,67 |
| Ciblage | 4,00 | 3,92 |
| Pertinence | 3,33 | 3,67 |
| Qualité des mails | 3,75 | 3,50 |

3 fiches sur 12 à 20/20 pour chaque modèle. Écarts trop minces pour conclure.

## 4. Contrôle humain à l'aveugle (Paul, 10 sorties)

- Même note que le juge IA : 35 notes sur 50 (70 %). Écart d'au plus 1 point : 49/50. Écart moyen : 0,32.
- Désaccords : 15, dont 13 où Paul note plus haut que l'IA. Le juge IA est plus sévère.
- Signalement : 10/10 identiques (les deux ont relevé 1935 et 1903 utilisés sans alerte, par Sonnet). Exactitude : 9/10.
- Notes humaines : Haiku 19,8/20, Sonnet 18,8/20 (5 sorties chacun).

## 5. Coûts (mesurés sur le solde du compte, précision 1 centime)

Haiku 5.5 : environ 0,002 $ par fiche. Sonnet 5.5 : environ 0,030 $ par fiche (28 fiches : 0,84 $), soit environ 17 fois plus. Mon estimation initiale de Sonnet (0,4 à 0,6 $) était fausse.

## 6. Ce que ces résultats ne prouvent pas

1. **Le signalement est gonflé.** 22/22 pièges signalés, mais Haiku met des alertes sur presque toutes les fiches, y compris sans piège (liste vide : 1 fois sur 18). Une alerte partout détecte tous les pièges sans rien distinguer. La règle « liste vide si rien » n'est pas suivie. Sonnet vide plus souvent, mais seulement sur le test. Sur la validation il n'y a que 2 fiches sans piège : les fausses alertes n'y sont pas mesurables.
2. **La baseline est un adversaire faible.** Elle ne peut ni utiliser un fait ni signaler. La vraie comparaison serait avec des mails écrits à la main sur les mêmes fiches. Elle n'a pas été faite.
3. **Le jeu de test a servi à corriger le prompt.** Ses résultats sont des résultats de développement. Seule la validation est non biaisée, avec 12 fiches. La notation IA complète n'a été faite que sur la validation, pas sur le test.
4. **Le juge et les auteurs sont de la même famille de modèles.** Le contrôle humain est un seul évaluateur, Paul, qui connaît le projet, sur 10 sorties et 5 fiches plutôt faciles. L'accord de 70 % est un indice, pas une preuve de fiabilité.
5. **Le choix entre modèles repose sur très peu.** Le défaut de Sonnet (fait ancien en accroche sans alerte) vient de 2 fiches sur 5 comparées à l'aveugle, 4 sur le test et la validation. Pas de significativité possible.
6. **Variance.** Deux exécutions du même prompt diffèrent (offre changée sur 2 fiches, part de contenu de marque 62 % puis 53 %, une fuite de consigne en run 2). Chaque version n'a été exécutée qu'une fois (le run 2 est une reprise forcée).
7. **Aucune mesure d'utilité réelle.** Pas de destinataire, pas de taux de réponse, pas de temps gagné mesuré.
8. **Défauts résiduels non corrigés** (voir journal_erreurs.md, entrées 9 à 18) : listes jamais vides, faits hors fiche (M024, M032, M016, M003), « Objet » répété dans les relances, style (« me indiquer »).

## 7. Conclusion défendable

Sur 40 fiches fictives, avec un prompt de 10 règles, l'assistant évite d'inventer des faits et nomme les pièges, mais ne sait pas encore dire « rien à signaler ». Haiku 5.5 suffit pour ce travail et coûte environ 17 fois moins que Sonnet 5.5 ; Sonnet n'apporte pas d'avantage visible sur cet échantillon. Ces conclusions valent pour des données synthétiques et un petit échantillon ; la prochaine étape honnête est un test sur 5 vraies marques publiques, avec relecture humaine.
