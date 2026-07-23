# Cahier des charges --- Madagasik'Hanina

  -------------------------------------------------------------
  Champ                          Valeur
  ------------------------------ ------------------------------
  Nom provisoire                 **Madagasik'Hanina**

  Type                           Plateforme mobile + web de
                                 découverte, commande et
                                 livraison de repas

  Marché                         Madagascar (lancement cible :
                                 Antananarivo, puis extension)

  Version document               1.0

  Statut                         Vision complète (phasée)

  Langue                         Français (UI produit : FR +
                                 malagasy sur parcours
                                 critiques)
  -------------------------------------------------------------

------------------------------------------------------------------------

## 1. Objet du document

Ce cahier des charges définit le produit **Madagasik'Hanina** : une
marketplace alimentaire de type Uber Eats / Glovo, adaptée au contexte
malgache, avec une double ambition :

1.  **Digitaliser les restaurants établis** (menu complet en ligne,
    panier, paiement immédiat).
2.  **Donner une vitrine et des commandes aux micro-vendeurs**
    (gargottes, soupe, street food, mofo, grillades, etc.).

Il fixe le périmètre fonctionnel, les règles métier, l'architecture
cible, le phasage et les risques. Il corrige aussi explicitement les
mauvaises idées initiales pour éviter de construire un mauvais clone.

------------------------------------------------------------------------

## 2. Contexte et problématique

### 2.1 Contexte

À Madagascar, une grande partie de l'offre alimentaire est **informelle
ou semi-formelle**. Les gros restaurants digitalisent peu (ou mal) leurs
menus. Les clients commandent encore beaucoup via WhatsApp / appel. Le
**Mobile Money** (MVola, Orange Money, Airtel Money) domine largement la
carte bancaire. Le dernier kilomètre et la confiance (hygiène, prix,
délai) restent des freins.

### 2.2 Problèmes à résoudre

- Découvrir qui vend quoi **près de soi**, sur une carte.
- Commander sans négocier le prix dans un chat.
- Payer simplement (surtout Mobile Money).
- Suivre le livreur en temps réel.
- Permettre aux **petits vendeurs** d'exister digitalement (image +
  commandes), pas seulement aux chaînes.
- Permettre aux **gros restos** d'avoir une expérience catalogue digne
  d'Uber Eats.
- Écouler les surplus / fin de service via des **prix flash** visibles
  immédiatement.

### 2.3 Positionnement

  ------------------------------------------------------------
  Dimension              Madagasik'Hanina
  ---------------------- -------------------------------------
  Découverte             **Carte-first** (pas seulement une
                         liste)

  Offre                  Du street food au resto gastronomique

  Commande               Prix affichés + panier + paiement
                         immédiat

  Paiement               Mobile Money d'abord

  Différenciateurs       Micro-vendeurs + flash anti-gaspi +
                         tracking type course

  Non-différenciateur    Menu digital, panier, notes, suivi
  (table stakes)         --- obligatoire, surtout pour les
                         gros
  ------------------------------------------------------------

------------------------------------------------------------------------

## 3. Critique produit (sans pitié)

Cette section documente ce qui a été **rejeté**, **corrigé** ou
**renforcé** par rapport à l'idée initiale.

### 3.1 Idées rejetées ou corrigées

  -----------------------------------------------------------------
  Idée initiale        Verdict           Correction retenue
  -------------------- ----------------- --------------------------
  Commander via        **Mauvaise**      Friction, abandons,
  messagerie, le resto                   litiges ("ce n'était pas
  "donne le prix",                       le prix"), charge pour le
  puis payer                             vendeur. **Chat ≠
                                         caisse.**

  Bouton magique       **Mauvaise**      Remplacé par un **checkout
  "envoyer le prix /                     sur montant calculé**
  faire payer" dans le                   (menu + livraison +
  message comme flux                     frais). Un devis structuré
  principal                              reste possible en
                                         exception (commande
                                         custom), jamais comme flux
                                         standard.

  "Algorithme" + code  **Dangereuse**    Paiement via **API / SDK
  secret maison pour                     opérateurs** et
  payer carte / Mobile                   tokenisation. Le PIN app =
  Money                                  déverrouillage local /
                                         confirmation, **pas** un
                                         système de paiement
                                         inventé. Jamais stocker de
                                         numéro de carte en clair.

  Matching livreur 100 **Risquée**       Commandes orphelines,
  % type inDrive                         client qui attend. Modèle
  (accept/reject libre                   **hybride** : l'algo fixe
  sans filet)                            le prix → offre aux
                                         livreurs proches → timeout
                                         → redispatch. Le client
                                         voit un ETA, pas une
                                         enchère.

  Profil "Instagram    **Insuffisant**   Vitrine oui, mais **menu +
  only" sans menu                        CTA Commander**
  actionnable                            obligatoires pour
                                         convertir.

  Remises jusqu'à −80  **Abusable**      Flash deals avec stock,
  % sans règles                          créneau, géo, anti-spam,
                                         badge "anti-gaspi / fin de
                                         service".
  -----------------------------------------------------------------

### 3.2 Idées à conserver et renforcer

- Carte regroupant tous les vendeurs inscrits + filtres (type, plat,
  note, prix, proximité, livraison dispo).
- Tracking livreur temps réel + clôture de course.
- Notation et commentaire après livraison (y compris depuis le fil lié à
  la commande).
- Flash prix cassés **très visibles sur la carte**.
- Versement vendeur vers **Mobile Money pro** ou **compte bancaire**.
- Onboarding ultra-léger pour micro-vendeurs (objectif image + commandes
  simples).
- Pour les **gros restos** : digitalisation **totale** du menu, parcours
  client identique à Uber Eats.

### 3.3 Idées ajoutées

- Tiers vendeur : **Micro / Standard / Premium**.
- Kit vitrine pour street food (templates, catégories, bio courte).
- Outils d'import menu (CSV/Excel) pour gros restos.
- Parcours commande **unifié** (même panier / paiement pour tous les
  tiers).
- Mode faible connexion (cache, retries).
- KYC léger + badges de confiance progressifs.
- Centre de litiges avec SLA.
- UI bilingue FR + malagasy (parcours critiques).
- Commission plus douce pour les micro-vendeurs au lancement.

------------------------------------------------------------------------

## 4. Objectifs

### 4.1 Objectifs produit

- Permettre à un client de trouver, commander et se faire livrer un
  repas en **moins de 3 minutes** de parcours digital (hors préparation
  / livraison).
- Permettre à un micro-vendeur de publier une vitrine commandable en
  **moins de 10 minutes**.
- Permettre à un restaurant établi d'exposer **100 % de son menu** et
  d'encaisser comme sur Uber Eats.
- Assurer transparence des prix (plats + livraison + frais) **avant**
  paiement.
- Assurer traçabilité de la course jusqu'à clôture livreur.

### 4.2 Objectifs business (cadre)

- Créer un effet de réseau local (offre dense sur une zone avant
  d'élargir).
- Monétiser via commission sur commandes + éventuels frais de service.
- Se différencier par l'inclusivité street food et l'anti-gaspi, pas
  seulement par "encore une app de resto".

### 4.3 Hors scope (volontaire)

- Réservation de table / click & collect (phase ultérieure possible).
- Marketplace non alimentaire.
- Application desktop native Electron pour restos (remplacée par web /
  PWA).
- Paiement crypto.
- Chat comme système de caisse.

------------------------------------------------------------------------

## 5. Acteurs et applications

### 5.1 Acteurs

  ------------------------------------------------------------
  Acteur                             Rôle
  ---------------------------------- -------------------------
  Client                             Découvre, commande, paie,
                                     suit, note

  Vendeur (micro ou resto)           Gère vitrine/menu,
                                     prépare, confirme, flash
                                     deals, encaisse

  Livreur                            Accepte des courses,
                                     livre, clôture

  Admin plateforme                   KYC, modération, litiges,
                                     paramètres tarifs /
                                     commissions

  Systèmes externes                  Mobile Money, cartes
                                     (plus tard), Maps,
                                     stockage fichiers,
                                     SMS/OTP
  ------------------------------------------------------------

### 5.2 Applications

  ----------------------------------------------------------------
  Application             Plateforme            Public
  ----------------------- --------------------- ------------------
  App Client              iOS / Android (React  Clients
                          Native Expo) + Web    
                          (Next.js)             

  Back-office Vendeur     Web responsive / PWA  Vendeurs
                          (Next.js), tablette   
                          OK                    

  App Livreur             iOS / Android (React  Livreurs
                          Native Expo)          

  Admin                   Web (Next.js)         Équipe
                                                Madagasik'Hanina

  API                     NestJS                Tous les clients
  ----------------------------------------------------------------

    flowchart LR
      Client[AppClient]
      Resto[BackOfficeVendeur]
      Livreur[AppLivreur]
      Admin[AdminWeb]
      API[API_NestJS]
      Pay[MobileMoney]
      Maps[Maps_Realtime]

      Client --> API
      Resto --> API
      Livreur --> API
      Admin --> API
      API --> Pay
      API --> Maps

------------------------------------------------------------------------

## 6. Tiers vendeurs (deux vitesses, un seul moteur de caisse)

### 6.1 Micro (Street / Local)

**Cible** : vendeur de soupe, gargotte, stand, home cook sérieux, etc.

**Onboarding minimal** : - Nom commercial - Catégorie (soupe, mofo,
grillades, gargotte, etc.) - Photo de couverture - Pin GPS sur la
carte - Horaires simples - Numéro Mobile Money de réception - 3 à 15
produits avec **prix obligatoire** (photo optionnelle au début)

**Objectif** : image + présence carte + commandes simples. Badge
**Street / Local**.

**Contrainte** : téléphone + PWA suffisent. Pas d'exigence "gros
logiciel".

### 6.2 Standard / Premium (restaurants établis)

**Condition sine qua non pour ouvrir les commandes** : **digitalisation
complète du menu**.

Doivent être saisis (ou importés) : - Catégories - Plats (nom,
description, prix) - Variantes / extras (taille, accompagnements,
options payantes) - Disponibilités / ruptures - Photos (fortement
recommandées ; exigibles pour Premium) - Horaires par service si besoin

**Parcours client** = Uber Eats :
`ouvrir vendeur → parcourir menu → panier → payer → suivi`.

Si le menu n'est pas digitalisé de façon exploitable (ex. PDF scanné
illisible) : le compte peut rester en **vitrine seule** ; les
**commandes restent désactivées** jusqu'à validation.

### 6.3 Règle commune

Un seul moteur : **panier + total transparent + paiement**. Seule la
richesse du catalogue change selon le tier.

------------------------------------------------------------------------

## 7. Parcours métier principaux

### 7.1 Client --- découverte carte

1.  Ouvre l'app → carte centrée sur sa position (ou adresse).
2.  Voit les pins vendeurs (clustering si densité élevée).
3.  Filtre : type de cuisine / genre (gastronomie, gargotte, italienne,
    chinoise...), plat recherché (ex. pizza), note, prix, proximité,
    livraison disponible, flash deals.
4.  Tape un pin → aperçu → fiche vendeur.

### 7.2 Client --- fiche vendeur + commande

1.  Profil type vitrine (nom, photos, note, bio, badge tier).
2.  Menu actionnable + bouton **Commander**.
3.  Ajoute des articles au panier (extras inclus).
4.  Voit le détail : sous-total plats + frais livraison estimés + frais
    service.
5.  Choisit le mode de paiement (MM / espèces / carte selon phase).
6.  Paie (ou confirme espèces) → commande créée.
7.  Suit la préparation puis le livreur en temps réel.
8.  Réception → livreur clôture → invitation **Notez-nous** +
    commentaire.

### 7.3 Vendeur --- exploitation

1.  Reçoit la commande (son / notification).
2.  Accepte / refuse selon règles (délai max).
3.  Passe : en préparation → prête.
4.  Messagerie secondaire pour précisions (sans renégocier le prix du
    panier).
5.  Peut publier un flash deal (stock + créneau + prix barré).
6.  Suit les versements (MM pro / banque).

### 7.4 Livreur --- course

1.  Reçoit une offre avec prix calculé par l'algo (ex. 2 000 à 10 000 Ar
    selon distance / zone / heure).
2.  Accepte dans le délai, sinon redistribuée.
3.  Se rend chez le vendeur → récupère → livre au client.
4.  Position partagée en temps réel.
5.  Clôture la course (éventuelle preuve photo / code).

------------------------------------------------------------------------

## 8. Exigences fonctionnelles

Légende priorité : **P0** = MVP, **P1** = V2, **P2** = V3 / vision.

### 8.1 Compte client (`CLI`)

  --------------------------------------------------------------
  ID         Exigence                  Priorité
  ---------- ------------------------- -------------------------
  CLI-01     Inscription / connexion   P0
             (téléphone + OTP SMS)     

  CLI-02     Profil éditable (nom,     P0
             photo, adresses de        
             livraison)                

  CLI-03     Gestion des moyens de     P0
             paiement préférés (MM :   
             opérateur + numéro        
             masqué)                   

  CLI-04     Confirmation de paiement  P0
             par flux opérateur        
             officiel (USSD/push/SDK)  
             ; PIN app optionnel pour  
             confirmer l'intention,    
             pas pour "remplacer"      
             l'opérateur               

  CLI-05     Historique des commandes  P0

  CLI-06     Notifications push        P0
             (statut commande, livreur 
             proche)                   

  CLI-07     Langue FR / malagasy (au  P1
             moins écrans critiques)   

  CLI-08     Mode faible connexion     P1
             (cache menus vus, file    
             d'attente actions)        
  --------------------------------------------------------------

### 8.2 Carte et découverte (`MAP`)

  --------------------------------------------------------------
  ID         Exigence                  Priorité
  ---------- ------------------------- -------------------------
  MAP-01     Carte interactive avec    P0
             tous les vendeurs actifs  
             de la zone                

  MAP-02     Clustering des pins +     P0
             fiche aperçu au tap       

  MAP-03     Filtre par type / genre   P0
             de vendeur                

  MAP-04     Filtre par plat / mot-clé P0
             menu (ex. pizza →         
             pizzerias + restos        
             proposant pizza)          

  MAP-05     Filtre mieux notés        P0

  MAP-06     Filtre prix (gamme panier P1
             moyen ou plat d'entrée de 
             gamme)                    

  MAP-07     Filtre proximité (rayon)  P0

  MAP-08     Filtre livraison          P0
             disponible maintenant     

  MAP-09     Surcouche / badge flash   P1
             deals très visible        

  MAP-10     Recherche textuelle       P0
             vendeur                   
  --------------------------------------------------------------

### 8.3 Fiche vendeur (`VEN`)

  --------------------------------------------------------------
  ID         Exigence                  Priorité
  ---------- ------------------------- -------------------------
  VEN-01     Fiche vitrine :           P0
             couverture, avatar, nom,  
             bio, note moyenne, badges 

  VEN-02     Affichage menu par        P0
             catégories                

  VEN-03     CTA Commander toujours    P0
             accessible                

  VEN-04     Affichage horaires et     P0
             statut ouvert / fermé     

  VEN-05     Galerie photos (style     P1
             réseau social)            

  VEN-06     Liste d'avis publics      P0
  --------------------------------------------------------------

### 8.4 Catalogue digital (`CAT`)

  --------------------------------------------------------------
  ID         Exigence                  Priorité
  ---------- ------------------------- -------------------------
  CAT-01     CRUD catégories et plats  P0
             (back-office)             

  CAT-02     Prix en Ariary, visibles  P0
             côté client avant ajout   
             panier                    

  CAT-03     Disponibilité on/off par  P0
             plat (rupture)            

  CAT-04     Variantes et extras       P0
             payants                   
             (Standard/Premium)        

  CAT-05     Photos plats              P0

  CAT-06     Import CSV/Excel du menu  P1

  CAT-07     Activation commandes      P0
             conditionnée à un         
             catalogue minimal valide  

  CAT-08     Pour Standard/Premium :   P0
             refus d'activation si     
             menu non digitalisé / non 
             exploitable               

  CAT-09     Allergènes / mentions     P2
             (optionnel)               
  --------------------------------------------------------------

### 8.5 Commande et panier (`ORD`)

  --------------------------------------------------------------
  ID         Exigence                  Priorité
  ---------- ------------------------- -------------------------
  ORD-01     Panier multi-articles     P0
             d'un seul vendeur par     
             commande                  

  ORD-02     Calcul transparent :      P0
             plats + livraison + frais 
             service                   

  ORD-03     Adresse / pin de          P0
             livraison obligatoire     

  ORD-04     Instructions livreur      P0
             (digicode, "appeler en    
             bas", etc.)               

  ORD-05     Machine d'états (voir §9) P0

  ORD-06     Annulation selon règles   P0
             (avant acceptation        
             vendeur / délais)         

  ORD-07     Une commande = un vendeur P0
             ; panier vidé si          
             changement de vendeur     
             (avec confirmation)       
  --------------------------------------------------------------

### 8.6 Paiement (`PAY`)

  --------------------------------------------------------------
  ID         Exigence                  Priorité
  ---------- ------------------------- -------------------------
  PAY-01     Paiement Mobile Money (au P0 / P1
             moins 1 opérateur en P0,  
             3 en P1)                  

  PAY-02     Espèces à la livraison,   P0
             avec montant exact        
             affiché et confirmation   
             livreur                   

  PAY-03     Carte bancaire            P2
             (tokenisation PSP)        

  PAY-04     Aucun stockage de PAN /   P0
             CVV ; secrets MM non      
             stockés en clair          

  PAY-05     Journal d'audit des       P0
             tentatives et statuts     
             paiement                  

  PAY-06     Versement vendeur vers MM P1
             pro ou IBAN / compte      
             bancaire                  

  PAY-07     Split logique : part      P0
             vendeur / part livraison  
             / part plateforme         
  --------------------------------------------------------------

### 8.7 Livraison et livreurs (`LIV`)

  --------------------------------------------------------------
  ID         Exigence                  Priorité
  ---------- ------------------------- -------------------------
  LIV-01     Calcul automatique du     P0
             prix course selon         
             distance (grille type 2   
             000--10 000 Ar,           
             paramétrable)             

  LIV-02     Facteurs optionnels :     P1
             zone, heure de pointe,    
             météo (plus tard)         

  LIV-03     Offre aux livreurs        P0
             proches (broadcast limité 
             ou séquentiel)            

  LIV-04     Timeout puis redispatch   P0
             automatique               

  LIV-05     Tracking GPS temps réel   P0
             visible client            

  LIV-06     Clôture de course par le  P0
             livreur                   

  LIV-07     Preuve de livraison (code P1
             client ou photo)          

  LIV-08     Historique gains livreur  P0

  LIV-09     KYC livreur (pièce,       P0
             selfie, véhicule/mode)    
  --------------------------------------------------------------

### 8.8 Flash deals (`FLASH`)

  --------------------------------------------------------------
  ID         Exigence                  Priorité
  ---------- ------------------------- -------------------------
  FLASH-01   Création d'une offre      P1
             flash : plat, prix barré, 
             stock, créneau            

  FLASH-02   Plafond de remise         P1
             configurable (ex. max 80  
             %)                        

  FLASH-03   Visibilité prioritaire    P1
             sur la carte et listes    

  FLASH-04   Expiration auto + stock à P1
             0 → disparition           

  FLASH-05   Anti-spam (limites de     P1
             publications / jour)      

  FLASH-06   Badge "Fin de service /   P1
             Anti-gaspi"               
  --------------------------------------------------------------

### 8.9 Messagerie (`MSG`)

  --------------------------------------------------------------
  ID         Exigence                  Priorité
  ---------- ------------------------- -------------------------
  MSG-01     Thread client ↔ vendeur   P1
             lié à une commande        

  MSG-02     Thread client ↔ livreur   P1
             pendant la course         

  MSG-03     Interdiction de           P1
             contourner le paiement    
             in-app (avertissements /  
             détection basique)        

  MSG-04     Pas de bouton "fixer un   P0 (règle produit)
             prix arbitraire" comme    
             caisse                    
  --------------------------------------------------------------

### 8.10 Notation (`RATE`)

  --------------------------------------------------------------
  ID         Exigence                  Priorité
  ---------- ------------------------- -------------------------
  RATE-01    Note vendeur +            P0
             commentaire après         
             livraison                 

  RATE-02    Note livreur (séparée)    P1

  RATE-03    Modération des avis       P1
             abusifs (admin)           

  RATE-04    Prompt "Notez-nous" dans  P0
             le contexte commande /    
             messages                  
  --------------------------------------------------------------

### 8.11 Back-office vendeur (`BO`)

  --------------------------------------------------------------
  ID                   Exigence             Priorité
  -------------------- -------------------- --------------------
  BO-01                Dashboard commandes  P0
                       en temps réel        

  BO-02                Gestion catalogue    P0
                       (selon tier)         

  BO-03                Statut ouvert /      P0
                       fermé / pause        
                       commandes            

  BO-04                Flash deals          P1

  BO-05                Paramètres payout    P1
                       (MM / banque)        

  BO-06                Stats simples (CA    P1
                       jour, top plats,     
                       notes)               

  BO-07                Onboarding guidé     P0
                       micro (wizard 5--10  
                       min)                 

  BO-08                Kit vitrine          P1
                       (templates           
                       catégories /         
                       conseils photo)      
  --------------------------------------------------------------

### 8.12 Admin (`ADM`)

  --------------------------------------------------------------
  ID                   Exigence             Priorité
  -------------------- -------------------- --------------------
  ADM-01               Validation KYC       P0
                       vendeurs / livreurs  

  ADM-02               Activation /         P0
                       suspension comptes   

  ADM-03               Paramétrage grilles  P0
                       tarif livraison et   
                       commissions          

  ADM-04               Gestion litiges      P1

  ADM-05               Modération contenus  P1
                       (photos, avis)       

  ADM-06               Pilotage zones de    P1
                       service (villes /    
                       quartiers)           
  --------------------------------------------------------------

------------------------------------------------------------------------

## 9. Machine d'états --- commande

États principaux :

    brouillon
      → en_attente_paiement
      → payee_ou_confirmee_especes
      → en_attente_vendeur
      → acceptee
      → en_preparation
      → prete
      → cherche_livreur
      → assignee
      → en_livraison
      → livree
      → notee

États parallèles / terminaux :

- `annulee` (par client, vendeur, système --- selon règles et
  remboursement)
- `litige`
- `echouer_paiement`
- `expiree_sans_livreur` (escalade / compensation selon politique)

Transitions clés :

1.  Paiement MM réussi → `payee_ou_confirmee_especes` puis notification
    vendeur.
2.  Espèces : confirmation d'intention → même file d'attente vendeur ;
    encaissement à la livraison.
3.  Vendeur accepte → préparation.
4.  `prete` déclenche matching livreur (`cherche_livreur`).
5.  Livreur accepte → `assignee` → GPS partagé.
6.  Clôture livreur → `livree` → sollicitation notation.

<!-- -->

    stateDiagram-v2
      [*] --> Brouillon
      Brouillon --> EnAttentePaiement
      EnAttentePaiement --> Payee: MM_OK
      EnAttentePaiement --> ConfirmeeEspeces: choix_especes
      EnAttentePaiement --> EchecPaiement: MM_KO
      Payee --> EnAttenteVendeur
      ConfirmeeEspeces --> EnAttenteVendeur
      EnAttenteVendeur --> Acceptee: vendeur_accepte
      EnAttenteVendeur --> Annulee: refus_ou_timeout
      Acceptee --> EnPreparation
      EnPreparation --> Prete
      Prete --> ChercheLivreur
      ChercheLivreur --> Assignee: livreur_accepte
      ChercheLivreur --> ExpireeSansLivreur: timeouts
      Assignee --> EnLivraison
      EnLivraison --> Livree: cloture
      Livree --> Notee
      Payee --> Annulee
      Acceptee --> Annulee
      EnLivraison --> Litige

------------------------------------------------------------------------

## 10. Tarification livraison (algorithme)

### 10.1 Principes

- Le **prix est fixé par la plateforme** (pas négocié client/livreur).
- Le livreur **accepte ou laisse passer** ; en cas de silence,
  redistribuition.
- Grille indicative initiale (paramétrable admin) :

  -------------------------------------------------------------
  Distance estimée               Prix course indicatif
  ------------------------------ ------------------------------
  0--2 km                        2 000 Ar

  2--4 km                        3 500 Ar

  4--6 km                        5 000 Ar

  6--8 km                        7 000 Ar

  8--12 km                       10 000 Ar

  \> 12 km                       hors zone ou majoration
                                 exceptionnelle
  -------------------------------------------------------------

- Majorations possibles (P1) : heure de pointe, pluie, zone difficile.
- Le client voit le **prix livraison avant paiement**.
- Ce n'est **pas** une enchère inDrive : c'est une offre à prix fixe
  calculé.

### 10.2 Matching

1.  Sélection des livreurs online dans un rayon R.
2.  Envoi offre (broadcast limité ou waterfall).
3.  Premier accept valide gagne.
4.  Sinon élargissement rayon / redispatch.
5.  Si échec : état `expiree_sans_livreur` + procédure (remboursement /
    report / support).

------------------------------------------------------------------------

## 11. Exigences non fonctionnelles

  ------------------------------------------------------------------
  ID          Thème                  Exigence
  ----------- ---------------------- -------------------------------
  NF-01       Performance            Affichage carte initiale \< 3 s
                                     en 4G moyenne sur zone
                                     densément peuplée (objectif)

  NF-02       Temps réel             Latence position livreur perçue
                                     \< 5 s dans conditions normales

  NF-03       Disponibilité          99 % mensuel en Phase 1
                                     (objectif réaliste), viser 99,5
                                     %+ ensuite

  NF-04       Sécurité               Auth JWT + refresh, HTTPS,
                                     secrets en vault/env, principle
                                     of least privilege

  NF-05       Paiements              Pas de données carte brutes ;
                                     conformité opérateur MM ;
                                     journalisation

  NF-06       Données perso          Minimisation, consentements,
                                     droit d'accès/suppression
                                     (politique publiée)

  NF-07       Scalabilité            Architecture multi-zones (ville
                                     par ville)

  NF-08       Observabilité          Logs structurés, métriques
                                     commandes/paiements/matching,
                                     alertes

  NF-09       Accessibilité réseau   Tolérance coupures brèves
                                     (retry idempotent paiement /
                                     statut)

  NF-10       Internationalisation   FR + malagasy
  ------------------------------------------------------------------

------------------------------------------------------------------------

## 12. Architecture technique cible

### 12.1 Choix retenus

  --------------------------------------------------------------
  Couche        Technologie           Justification
  ------------- --------------------- --------------------------
  App Client /  **React Native        Un codebase mobile, équipe
  Livreur       (Expo)**              TypeScript/React

  Web Client /  **Next.js**           SEO possible côté
  BO / Admin                          marketing, PWA resto,
                                      admin unique

  API           **NestJS (Node.js)**  Structure modulaire
                                      multi-rôles, WebSockets
                                      natifs

  ORM           **Prisma**            Productivité, migrations
                                      claires

  DB            **PostgreSQL +        Données relationnelles +
                PostGIS**             requêtes de proximité

  Cache / files **Redis + BullMQ**    Matching, retries
  d'attente                           paiement, jobs

  Temps réel    **Socket.IO** (Nest   Tracking + notifications
                gateway)              live

  Fichiers      Stockage              Photos menus, preuves
                S3-compatible         

  Maps          Google Maps Platform  Affichage + geocoding +
                ou Mapbox             directions

  Paiements     APIs MVola / Orange   Réalité du marché
                Money / Airtel Money  
                (+ PSP carte en P2)   
  --------------------------------------------------------------

### 12.2 Pourquoi pas d'autres options (décision)

- **Flutter** : excellent, mais l'équipe part sur React → Expo plus
  cohérent.
- **Electron resto** : trop lourd pour micro-vendeurs ; PWA suffit.
- **Firebase only** : rapide en prototype, fragile pour splits paiement,
  litiges, geo complexe à l'échelle.
- **Chat-paiement custom** : écarté (§3).

### 12.3 Modules API suggérés

`auth`, `users`, `vendors`, `catalog`, `orders`, `payments`, `delivery`,
`matching`, `flash`, `messaging`, `ratings`, `admin`, `geo`,
`notifications`.

------------------------------------------------------------------------

## 13. Modèle économique (cadre)

- **Commission** sur le montant des plats (taux selon tier ; plus doux
  pour Micro au lancement).
- **Frais de service** client (optionnel, transparent).
- **Livraison** : payée par le client selon grille ; redistribution
  livreur / éventuelle marge plateforme.
- **Flash deals** : même logique de commission, ou campagne
  subventionnée ponctuelle.
- Interdiction des paiements hors plateforme dans les CGU (contourner =
  risque de suspension).

Les taux exacts sont des paramètres admin, hors gel de ce document.

------------------------------------------------------------------------

## 14. Phasage

### Phase 0 --- Cadrage

- CDC (ce document)
- Wireframes parcours client / vendeur / livreur
- CGU, contrat vendeur, contrat livreur
- Choix opérateur MM n°1 et compte marchand

### Phase 1 --- MVP (1 ville)

- App Client + App Livreur + BO Vendeur PWA + Admin minimal
- Carte, filtres essentiels, menu digital, panier, paiement 1× MM +
  espèces
- Matching livreur + tracking + notation
- Tiers Micro et Standard (Premium optionnel)
- **Pas** de flash deals ni multi-MM complets

### Phase 2 --- Différenciation

- Flash deals carte
- Filtres avancés
- Multi Mobile Money
- Messagerie liée commande
- Kit vitrine micro + import CSV menu
- Litiges / modération

### Phase 3 --- Extension

- Carte bancaire
- Multi-villes
- Analytics avancés
- Fidélité / promos plateforme
- App vendeur native si besoin
- Options : click & collect, commande groupée

------------------------------------------------------------------------

## 15. Données et règles métier critiques

1.  Une commande = un vendeur.
2.  Prix plats gelés au moment du paiement (snapshot ligne de commande).
3.  Le vendeur ne peut pas modifier le montant payé via chat.
4.  Stock flash décrémenté de façon concurrent-safe.
5.  Livreurs et vendeurs peuvent être suspendus (notes basses, fraude,
    no-show).
6.  Espèces : le livreur doit confirmer l'encaissement ; litige possible
    si écart.
7.  Horaires vendeur : hors service → pas de nouvelle commande.
8.  Zone de livraison : hors zone → blocage checkout avec message clair.

------------------------------------------------------------------------

## 16. Risques et mitigations

  -------------------------------------------------------------
  Risque            Impact            Mitigation
  ----------------- ----------------- -------------------------
  Chicken-egg (pas  Élevé             Lancer **quartier par
  assez de vendeurs                   quartier** ; onboarding
  / livreurs /                        micro agressif ;
  clients)                            incentives livreurs

  Intégration       Élevé             1 opérateur d'abord ;
  Mobile Money                        retries ; file d'attente
  lente / instable                    ; monitoring

  Commandes sans    Élevé             Redispatch, élargissement
  livreur                             rayon, compensation,
                                      densifier flotte

  Méfiance hygiène  Moyen             Badges, avis, photo
  street food                         réelle, modération,
                                      signalement

  Fraude espèces /  Moyen             Preuve livraison, KYC,
  fausses                             seuils, litiges
  livraisons                          

  Contournement     Moyen             Prix meilleurs in-app, UX
  WhatsApp                            plus simple que WhatsApp,
                                      CGU

  Coûts Maps / SMS  Moyen             Cache geocode, quotas,
                                      OTP rate-limit

  Catalogue gros    Moyen             Import assisté,
  restos mal saisi                    checklists, activation
                                      conditionnelle

  Surpromesse −80 % Moyen             Plafonds, stock,
                                      expiration, contrôles
                                      admin
  -------------------------------------------------------------

------------------------------------------------------------------------

## 17. Critères d'acceptation globaux (vision)

Le produit est considéré conforme à la vision lorsque :

1.  Un client peut filtrer "pizza", voir les vendeurs concernés sur la
    carte, ouvrir un menu à prix fixes, payer en Mobile Money, suivre le
    livreur, noter.
2.  Un micro-vendeur de soupe peut être visible sur la carte avec une
    vitrine et recevoir une commande payée.
3.  Un gros restaurant ne peut activer les commandes **que** si son menu
    est digitalisé ; le parcours client est alors équivalent à Uber
    Eats.
4.  Aucun flux principal ne repose sur "le resto tape un prix dans le
    chat pour faire payer".
5.  Le prix livreur est calculé automatiquement et redistribué si non
    accepté.
6.  Les flash deals (Phase 2) apparaissent de façon prioritaire sur la
    carte avec stock et expiration.

------------------------------------------------------------------------

## 18. Glossaire

  ------------------------------------------------------------
  Terme                  Définition
  ---------------------- -------------------------------------
  Vendeur                Tout établissement ou micro-commerce
                         inscrit (resto, gargotte, stand...)

  Tier                   Niveau Micro / Standard / Premium

  Flash deal             Offre temporaire à prix cassé
                         (anti-gaspi / fin de service)

  Matching               Attribution d'une course à un livreur

  Payout                 Versement des fonds au vendeur

  PWA                    Progressive Web App (site
                         installable, hors Electron)

  Snapshot               Prix figés dans la commande au moment
                         du paiement
  ------------------------------------------------------------

------------------------------------------------------------------------

## 19. Annexes à produire (hors rédaction initiale)

- [ ] Wireframes (client, vendeur, livreur)
- [ ] Modèle de données détaillé (ERD)
- [ ] Grille tarifaire livraison v1 signée produit
- [ ] Politique de commission par tier
- [ ] CGU / politique de confidentialité
- [ ] Checklist KYC
- [ ] Contrats opérateurs Mobile Money

------------------------------------------------------------------------

*Document de vision produit --- Madagasik'Hanina v1.0. Toute évolution
majeure des règles de commande, de paiement ou de matching doit mettre à
jour ce cahier des charges.*
