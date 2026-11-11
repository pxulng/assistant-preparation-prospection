# Workflow n8n

`prospection_v2_sonnet55_validation.json` : export du workflow n8n (prompt v2, Sonnet 5.5, jeu de validation de 12 fiches), sans identifiants. Quatre nœuds : déclencheur manuel, nœud Code « Demandes » (fiches synthétiques), nœud Anthropic « Message a model » (prompt v2 de `../prompts/prompt_v2.txt` suivi de la fiche), nœud Code « Bloc de lecture » qui lit le JSON.

Pour l'utiliser : Workflows > Import from file, rattacher votre identifiant Anthropic, puis lancer. `prospection_v2_haiku55_validation.json` est le même workflow sur Haiku 5.5 (1 changement : le modèle, avec 6 000 jetons de sortie au maximum), le modèle recommandé par l'étude. La version v1 (jeu de test de 28 fiches) se reconstruit avec les fichiers `n8n_code_*.js` et le prompt v1 du dossier `prompts/`.

**EN**: `prospection_v2_sonnet55_validation.json` is the n8n export (prompt v2, Sonnet 5.5, 12-brand validation set), without credentials. Import it, attach your own Anthropic credential; switch the model in "Message a model" for Haiku 5.5. The prompts and data are French originals.

`prospection_v1_test_haiku55.json` : première version (prompt v1, Haiku 5.5, jeu de test de 28 fiches), reconstruite à partir de `prompts/prompt_v1.txt` et des fichiers `n8n_code_*.js`.
