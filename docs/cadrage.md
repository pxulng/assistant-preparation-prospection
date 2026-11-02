# Cadrage : assistant de préparation de prospection média

> Tout est fictif : la régie (Hexamédia), ses sites, ses offres et les 40 marques sont inventés. Aucune donnée réelle (prospects, contacts, tarifs, chiffres d'une entreprise) n'a été utilisée.

## Problème
Préparer une prise de contact commerciale demande deux tâches lentes : comprendre la marque visée (qui elle est, ce qu'elle fait, quoi lui proposer) et personnaliser un mail de séquence. Le projet teste si un assistant peut préparer ce travail, qu'un commercial relit toujours avant envoi.

## Origine du projet
Conçu à partir de ma pratique de la prospection (séquences email en 3 temps, ciblage par secteur, personnalisation par marque). Testé sur des données synthétiques, pas en production.

## Ce que fait l'assistant
Pour une fiche de faits sur une marque : 2 à 3 fonctions à viser (jamais de noms de personnes), une offre principale parmi 4 avec sa justification, 3 mails (premier mail, relance J+4, relance J+9) et une liste de faits à vérifier (chiffres contradictoires, faits anciens, informations manquantes).

## Hors périmètre
- Trouver des contacts nommés (données personnelles).
- Envoyer les mails : un humain relit tout.
- Promettre des résultats, citer des prix ou des campagnes passées.

## Critères de réussite (fixés avant les tests)
1. Aucun fait inventé dans les mails.
2. Un chiffre contradictoire, un fait ancien (plus de 2 ans) ou une information manquante est signalé et jamais présenté comme sûr.
3. L'offre choisie est défendable d'après les faits, et les fonctions visées correspondent à la taille de la marque.
4. Mails courts, un seul appel à l'action, français correct.

## Méthode
Baseline sans IA (gabarit unique), jeu de test de 28 marques, jeu de validation de 12 marques utilisé une seule fois, comparaison de deux modèles, journal d'erreurs. Statuts des chiffres : mesuré, hypothèse ou projeté.
