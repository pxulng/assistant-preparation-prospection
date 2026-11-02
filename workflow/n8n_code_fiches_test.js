// Nœud Code « Demandes » (Run Once for All Items)
// 28 fiches SYNTHÉTIQUES, jeu TEST. À lancer UNE SEULE FOIS.
const LIMITE = 28;
const demandes = [
 {
  "id": "M001",
  "demande": "Marque : Maison Valdorine\nSecteur : agroalimentaire\nTaille : ETI\nFaits :\n- Conserveur de légumes et de plats végétariens fondé en 1962 dans le Maine-et-Loire.\n- Chiffre d'affaires 2025 : 186 M€ ; 640 salariés ; 3 usines en France.\n- Lancement en septembre 2026 d'une gamme de bocaux 100 % légumes français sous la marque « Valdorine Racines ».\n- Distribution en grandes surfaces et en restauration collective ; présence sur Instagram et Facebook."
 },
 {
  "id": "M002",
  "demande": "Marque : Champarel\nSecteur : agroalimentaire\nTaille : grand groupe\nFaits :\n- Fabricant de yaourts, desserts lactés et fromages frais, basé en Bretagne, marque nationale.\n- Chiffre d'affaires : 412 M€ selon la page entreprise (2025) ; 389 M€ selon le communiqué financier publié en mars 2026.\n- Partenaire officiel d'un club de handball féminin depuis 2024.\n- Objectif annoncé : réduire de 15 % le sucre de la gamme enfants d'ici 2027."
 },
 {
  "id": "M003",
  "demande": "Marque : Pastavia\nSecteur : agroalimentaire\nTaille : PME\nFaits :\n- Fabricant de pâtes fraîches artisanales à Lyon, créé en 2011.\n- 42 salariés ; chiffre d'affaires 2025 : 11 M€.\n- Vente en circuit court : épiceries fines, marchés et boutique en ligne.\n- Ouverture d'un second atelier de production prévue début 2027."
 },
 {
  "id": "M004",
  "demande": "Marque : Saveurs d'Ormeaux\nSecteur : agroalimentaire\nTaille : ETI\nFaits :\n- Fabricant de plats cuisinés réfrigérés pour la grande distribution, Vendée.\n- Chiffre d'affaires 2021 : 154 M€ (dernier chiffre publié sur la page entreprise).\n- En 2021, annonce d'un investissement de 12 M€ dans une nouvelle ligne de production.\n- Marques : « Ormeaux Traiteur » et « Petit Four à Pain »."
 },
 {
  "id": "M005",
  "demande": "Marque : Kerlouan Gourmet\nSecteur : agroalimentaire\nTaille : PME\nFaits :\n- Producteur de biscuits au beurre salé et de galettes, Finistère, fondé en 1989.\n- Environ 90 salariés.\n- Gamme de 24 références vendues en grande distribution et en boutiques de souvenirs."
 },
 {
  "id": "M006",
  "demande": "Marque : Fournil des Vaux\nSecteur : agroalimentaire\nTaille : ETI\nFaits :\n- Fabricant de pains et viennoiseries surgelés pour boulangeries et restauration, Normandie.\n- Chiffre d'affaires 2025 : 98 M€ ; 410 salariés.\n- Obtention en 2025 de la certification B Corp.\n- Campagne radio régionale lancée au printemps 2026 pour la gamme grand public « Fournil Maison »."
 },
 {
  "id": "M007",
  "demande": "Marque : Orsanne\nSecteur : agroalimentaire\nTaille : grand groupe\nFaits :\n- Groupe de snacking et de céréales du petit déjeuner, siège à Paris, 4 marques.\n- Chiffre d'affaires 2025 : 1,3 Md€ ; 4 200 salariés.\n- Marque principale « Orsanne Croc » ciblant les 6-12 ans ; partenariats avec des chaînes jeunesse.\n- Annonce en janvier 2026 d'un plan pour retirer les colorants artificiels de toutes les gammes."
 },
 {
  "id": "M011",
  "demande": "Marque : Phytorelle\nSecteur : santé\nTaille : ETI\nFaits :\n- Laboratoire de compléments alimentaires à base de plantes, Lyon, créé en 1998.\n- Chiffre d'affaires 2025 : 74 M€ ; 280 salariés.\n- Vente en pharmacies et parapharmacies ; 85 références.\n- Lancement en octobre 2026 d'une gamme pour le sommeil, développée avec un institut de recherche privé."
 },
 {
  "id": "M012",
  "demande": "Marque : Laboratoires Vidamed\nSecteur : santé\nTaille : grand groupe\nFaits :\n- Fabricant de vitamines et minéraux, présent dans 30 pays.\n- Chiffre d'affaires 2025 : 640 M€ d'après le rapport annuel ; 610 M€ d'après un communiqué de presse du même exercice.\n- Sponsoring d'un semi-marathon national depuis 2023.\n- Campagne télévisée lancée en septembre 2026 sur la prévention des carences de l'hiver."
 },
 {
  "id": "M013",
  "demande": "Marque : Probiovia\nSecteur : santé\nTaille : PME\nFaits :\n- Start-up de probiotiques pour la santé digestive, créée en 2019 à Nantes.\n- 26 salariés ; chiffre d'affaires 2025 : 8 M€.\n- Produits vendus en pharmacies et en ligne.\n- Étude clinique sur 120 patients publiée en 2025 (résultats présentés par la société)."
 },
 {
  "id": "M014",
  "demande": "Marque : Dermalune\nSecteur : santé\nTaille : ETI\nFaits :\n- Marque de dermo-cosmétique pour peaux sensibles, produite en Auvergne.\n- Chiffre d'affaires 2022 : 58 M€ (dernier chiffre accessible).\n- Lancement en 2022 d'une ligne enfants.\n- Distribution en pharmacies."
 },
 {
  "id": "M015",
  "demande": "Marque : Apaisia\nSecteur : santé\nTaille : PME\nFaits :\n- Fabricant de tisanes et d'huiles essentielles à visée bien-être, Drôme.\n- Une quarantaine de références."
 },
 {
  "id": "M016",
  "demande": "Marque : Sommeria\nSecteur : santé\nTaille : PME\nFaits :\n- Marque d'accessoires pour le sommeil (oreillers, masques, mélatonine sans ordonnance), Paris, créée en 2020.\n- Chiffre d'affaires 2025 : 14 M€ ; 30 salariés.\n- Vente principalement en ligne ; forte activité sur Instagram et TikTok.\n- Partenariat de contenu avec un podcast bien-être depuis 2025."
 },
 {
  "id": "M017",
  "demande": "Marque : Articuline\nSecteur : santé\nTaille : ETI\nFaits :\n- Laboratoire de produits pour les articulations et le confort musculaire (gels, patchs), Toulouse.\n- Chiffre d'affaires 2025 : 92 M€ ; 310 salariés.\n- Gamme vendue en pharmacies et grandes surfaces.\n- Accord de distribution en Belgique signé en 2026."
 },
 {
  "id": "M021",
  "demande": "Marque : Domaine des Hautes Brumes\nSecteur : alcool\nTaille : PME\nFaits :\n- Domaine viticole de 48 hectares en Bourgogne, exploitation familiale depuis 1887.\n- Production annuelle d'environ 180 000 bouteilles ; 22 salariés.\n- Vente en cavistes, restaurants et export vers 8 pays.\n- Lancement en 2026 d'une cuvée sans alcool issue de raisins du domaine."
 },
 {
  "id": "M022",
  "demande": "Marque : Distillerie Aurevaux\nSecteur : alcool\nTaille : ETI\nFaits :\n- Distillerie de whisky et de liqueurs, Jura, créée en 2009.\n- Chiffre d'affaires 2025 : 31 M€ ; 85 salariés.\n- Visites de la distillerie : 45 000 visiteurs en 2025.\n- Nouvelle édition limitée annoncée pour décembre 2026."
 },
 {
  "id": "M023",
  "demande": "Marque : Brasserie Kaltenmoor\nSecteur : alcool\nTaille : ETI\nFaits :\n- Brasserie industrielle et craft, Alsace, fondée en 1921.\n- Production : 320 000 hl selon le site, 280 000 hl selon un article de presse économique (2025).\n- Partenariat avec un festival de musiques actuelles depuis 2022.\n- Gamme sans alcool lancée en 2025."
 },
 {
  "id": "M024",
  "demande": "Marque : Maison Perdriel\nSecteur : alcool\nTaille : grand groupe\nFaits :\n- Maison de champagne fondée en 1840 à Épernay, groupe international de vins et spiritueux.\n- Chiffre d'affaires 2025 : 1,1 Md€ ; 2 600 salariés.\n- Marque de prestige présente dans plus de 100 pays.\n- Partenariat avec un grand prix de voile depuis 2023."
 },
 {
  "id": "M025",
  "demande": "Marque : Cidrerie du Vallon Sauvage\nSecteur : alcool\nTaille : PME\nFaits :\n- Cidrerie artisanale en Normandie, créée en 2005.\n- Production de cidres et de poiré, 12 salariés.\n- Vente en circuit court."
 },
 {
  "id": "M026",
  "demande": "Marque : Gin Orfaline\nSecteur : alcool\nTaille : PME\nFaits :\n- Marque de gin artisanal créée en 2018 à Bordeaux.\n- Chiffre d'affaires 2025 : 4,5 M€ ; 11 salariés.\n- Vente en cavistes, bars et en ligne ; forte activité sur Instagram.\n- Lancement d'un gin à faible teneur en alcool en 2026."
 },
 {
  "id": "M027",
  "demande": "Marque : Cave Montbrelle\nSecteur : alcool\nTaille : ETI\nFaits :\n- Négociant en vins du Sud-Ouest, créé en 1976.\n- Chiffre d'affaires 2022 : 52 M€.\n- En 2022, acquisition d'un domaine de 30 hectares.\n- Aucune actualité publiée depuis."
 },
 {
  "id": "M031",
  "demande": "Marque : Croquelune\nSecteur : petfood\nTaille : grand groupe\nFaits :\n- Fabricant de croquettes pour chiens et chats, marque nationale, siège à Rennes.\n- Chiffre d'affaires 2025 : 520 M€ ; 1 800 salariés.\n- Gamme vétérinaire vendue en cliniques ; gamme grand public en grandes surfaces.\n- Campagne télévisée et partenariat avec un influenceur animalier lancés en 2026."
 },
 {
  "id": "M032",
  "demande": "Marque : Wouafin\nSecteur : petfood\nTaille : ETI\nFaits :\n- Marque de friandises et de croquettes pour chiens, Vendée.\n- Chiffre d'affaires 2025 : 64 M€ ; 190 salariés.\n- Gamme sans céréales lancée en 2024.\n- Présence sur les réseaux sociaux et programme de fidélité en ligne."
 },
 {
  "id": "M033",
  "demande": "Marque : Félinova\nSecteur : petfood\nTaille : ETI\nFaits :\n- Marque d'alimentation pour chats, Alsace.\n- Chiffre d'affaires 2025 : 88 M€ selon le site ; 79 M€ selon un communiqué de presse de 2026.\n- Gamme senior lancée en 2025.\n- Vente en animaleries et grandes surfaces."
 },
 {
  "id": "M034",
  "demande": "Marque : Naturopattes\nSecteur : petfood\nTaille : PME\nFaits :\n- Marque d'alimentation naturelle pour chiens et chats, créée en 2016 à Lille.\n- Chiffre d'affaires 2025 : 9 M€ ; 24 salariés.\n- Vente en ligne et en animaleries spécialisées.\n- Abonnement mensuel lancé en 2025 ; communauté de 60 000 abonnés sur les réseaux."
 },
 {
  "id": "M035",
  "demande": "Marque : Gamelle & Co\nSecteur : petfood\nTaille : PME\nFaits :\n- Start-up de repas frais pour chiens livrés à domicile, Paris.\n- Levée de fonds de 5 M€ en 2021.\n- Dernière actualité publiée : lancement d'une recette au poulet en 2021."
 },
 {
  "id": "M036",
  "demande": "Marque : Ronronia\nSecteur : petfood\nTaille : PME\nFaits :\n- Marque de litières et d'accessoires pour chats, Pays de la Loire.\n- Une trentaine de références."
 },
 {
  "id": "M037",
  "demande": "Marque : Terre Canine\nSecteur : petfood\nTaille : ETI\nFaits :\n- Fabricant de croquettes et de gamelles pour chiens de travail et de sport, Auvergne.\n- Chiffre d'affaires 2025 : 41 M€ ; 120 salariés.\n- Partenaire de plusieurs clubs de sports canins.\n- Nouvelle usine en projet pour 2027."
 }
];
return demandes.slice(0, LIMITE).map((d) => ({ json: d }));
