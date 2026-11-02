// Nœud Code « Demandes » (Run Once for All Items)
// 12 fiches SYNTHÉTIQUES, jeu VALIDATION. À lancer UNE SEULE FOIS.
const LIMITE = 12;
const demandes = [
 {
  "id": "M008",
  "demande": "Marque : Les Jardins de Mélisse\nSecteur : agroalimentaire\nTaille : PME\nFaits :\n- Producteur de soupes et jus de légumes bio, Occitanie, créé en 2014.\n- Effectif de 35 salariés sur la page entreprise, 52 salariés dans un article de presse locale (2025).\n- Vente en magasins bio et en ligne.\n- Levée de fonds de 3 M€ en 2024."
 },
 {
  "id": "M009",
  "demande": "Marque : Boulangerie Pasqualini Frères\nSecteur : agroalimentaire\nTaille : ETI\nFaits :\n- Entreprise familiale de biscuits et gâteaux secs, Alsace, fondée en 1935.\n- Chiffre d'affaires 2025 : 120 M€.\n- Produits vendus en France et dans 12 pays."
 },
 {
  "id": "M010",
  "demande": "Marque : Mielleraie du Quercy\nSecteur : agroalimentaire\nTaille : PME\nFaits :\n- Producteur et conditionneur de miel et de produits de la ruche, Lot.\n- En 2020, la société a rejoint un label de commerce équitable et a recruté 8 apiculteurs partenaires.\n- Page entreprise non mise à jour depuis 2022 ; chiffre d'affaires non communiqué."
 },
 {
  "id": "M018",
  "demande": "Marque : Immunéa\nSecteur : santé\nTaille : grand groupe\nFaits :\n- Groupe de produits de santé grand public (immunité, rhume, hiver), siège à Paris.\n- Chiffre d'affaires 2025 : 780 M€.\n- Présent dans 45 pays."
 },
 {
  "id": "M019",
  "demande": "Marque : Vitalpha Seniors\nSecteur : santé\nTaille : PME\nFaits :\n- Compléments alimentaires et aides au maintien de la forme pour les plus de 60 ans, Bordeaux.\n- 25 salariés selon le site ; 40 selon un annuaire d'entreprises (2025).\n- Vente en pharmacies et par correspondance.\n- Partenariat avec une mutuelle régionale en 2025."
 },
 {
  "id": "M020",
  "demande": "Marque : Ophtalie\nSecteur : santé\nTaille : ETI\nFaits :\n- Fabricant de produits de soin des yeux (larmes artificielles, compléments), Strasbourg.\n- Chiffre d'affaires 2021 : 66 M€.\n- Page « Actualités » : dernier communiqué en 2021 (nouveau site de production)."
 },
 {
  "id": "M028",
  "demande": "Marque : Rhumerie Saint-Calvaire\nSecteur : alcool\nTaille : PME\nFaits :\n- Rhumerie artisanale en Guadeloupe, fondée en 1903.\n- Production : 600 000 bouteilles par an ; 60 salariés.\n- Export vers l'Europe et l'Amérique du Nord.\n- Édition anniversaire annoncée pour 2027."
 },
 {
  "id": "M029",
  "demande": "Marque : Liqueurs Mathéo\nSecteur : alcool\nTaille : PME\nFaits :\n- Fabricant de liqueurs et d'apéritifs, Provence, entreprise familiale.\n- Fondée en 1952 d'après le site, en 1958 d'après un article de presse régionale.\n- Gamme de 15 références ; vendues en grande distribution régionale."
 },
 {
  "id": "M030",
  "demande": "Marque : Maison Castelvieux\nSecteur : alcool\nTaille : ETI\nFaits :\n- Producteur de vins de Bordeaux et négociant, plusieurs châteaux.\n- Chiffre d'affaires 2025 : 70 M€."
 },
 {
  "id": "M038",
  "demande": "Marque : Granivora\nSecteur : petfood\nTaille : PME\nFaits :\n- Alimentation pour rongeurs, lapins et oiseaux, Normandie, créée en 1994.\n- Chiffre d'affaires 2025 : 18 M€ ; 55 salariés.\n- Gamme vendue en animaleries et jardineries.\n- Lancement d'un emballage 100 % recyclable en 2026."
 },
 {
  "id": "M039",
  "demande": "Marque : Aquavita\nSecteur : petfood\nTaille : PME\nFaits :\n- Fabricant d'aliments pour poissons d'aquarium et de bassin, Alsace.\n- Fondé en 1985 d'après le site, en 1990 d'après un annuaire d'entreprises (2025).\n- Vente en animaleries et jardineries."
 },
 {
  "id": "M040",
  "demande": "Marque : Maison Pattelière\nSecteur : petfood\nTaille : grand groupe\nFaits :\n- Groupe d'alimentation et de santé animale, siège à Paris.\n- Chiffre d'affaires 2025 : 950 M€."
 }
];
return demandes.slice(0, LIMITE).map((d) => ({ json: d }));
