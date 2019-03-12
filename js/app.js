var app = angular.module('myApp', []);
app.controller('home', function($scope) {
    $scope.nom = "Kevin Obam Ekono";
    $scope.fonction1 = "FULL+ STACK+ DEVELOPPEUR+ WEB+";
    $scope.fonction2 = "MOBILE+ STAND ALONE+";

    $scope.descriptif = "Bonjour, je suis Kevin Obam Ekono. J'ai 4 ans d'expériences dans le developpement . Je travaille sur une variété de technologies, front-end et back-end, je suis tres sociable et j'adore les nouveaux defis car pour moi un projet c'est un defi ainsi qu'une opportunité d'apprendre des nouvelles choses.j'ai une mobilité national ou international.j'aime le travail bien fait et j'aime beaucoup travailler en equipe.<<la programmation c'est l'école de la rue >>";

    $scope.cv = "#";
    $scope.image = "images/jamaldemi2.png";

});

app.controller('status', function($scope) {
    $scope.disponible = "Oui";
});

app.controller('Compte', function($scope) {
    $scope.faceboook = "#";
    $scope.twitter = "bonjour";
    $scope.linkedin = "#";
    $scope.google = "#";
    $scope.github = "github";

});
app.controller('cafe', function($scope) {
    $scope.nom = "Kevin Obam Ekono";
    $scope.fonction = "Developpeur full stack";
    $scope.image = "images/auteur2.jpg";
    $scope.slogan = "Allons boire du café";
    $scope.cv = "#";







});
app.controller('Voila', function($scope) {
    $scope.nom = "Kevin Obam";
    $scope.section1 = "ACCUEIL";
    $scope.section2 = "A PROPOS";

    $scope.section3 = "COMPETENCE";
    $scope.section4 = "EXPERIENCE";
    $scope.section5 = "EDUCATION";
    $scope.section6 = "REALISATION";
    $scope.section7 = "BLOG";
    $scope.section8 = "Github";




});
app.controller('About', function($scope) {
    $scope.titre_section = "A PROPOS";

    $scope.nom = "Kevin Obam Ekono";
    $scope.fonction = "FULL+ STACK+ DEVELOPPEUR+ WEB+ MOBILE+ STAND ALONE+";


    $scope.descriptif = "Bonjour, je suis Kevin Obam Ekono. J'ai 4 ans d'expériences dans le developpement . Je travaille sur une variété de technologies, front-end et back-end, je suis tres sociable et j'adore les nouveaux defis car pour moi un projet c'est un defi ainsi qu'une opportunité d'apprendre des nouvelles choses.j'ai une mobilité national ou international.j'aime le travail bien fait et j'aime beaucoup travailler en equipe.<<la programmation c'est l'école de la rue >>";



    $scope.image = "images/jamalentier2.png";

    $scope.date_naissance = "08/03/1995";
    $scope.phone = " (+237) 691 10 01 28 /693 44 18 40";
    $scope.email = "ekonokevin@gmail.com ";
    $scope.adresse = "Cameroun, Yaoundé Bonamoussadi rue 4025";
    $scope.websitef = "kevinobam.objis.com";


});

app.controller('savoir_faire_1', function($scope) {
    $scope.nom = "Web & UX Design";

    $scope.icone = "ion-monitor";


});

app.controller('savoir_faire_2', function($scope) {
    $scope.nom = "App Development";

    $scope.icone = "ion-iphone";


});
app.controller('savoir_faire_3', function($scope) {
    $scope.nom = " Marketing";

    $scope.icone = "ion-trophy";


});


app.controller('mes_compentences', function($scope) {
    $scope.nom1 = "html/css/js";
    $scope.indice1 = "90";

    $scope.nom2 = "Photoshop";
    $scope.indice2 = "60";

    $scope.nom3 = "bibliothèques css";
    $scope.indice3 = "85";

    $scope.nom4 = "Frameworks front-end";
    $scope.indice4 = "80";



});
app.controller('connaissances1', function($scope) {
    $scope.connaissances1 = "html";
    $scope.connaissances2 = "css";
    $scope.connaissances3 = "javascript";
    $scope.connaissances4 = "boostrap";
    $scope.connaissances5 = "material design";
    $scope.connaissances6 = "semantic";
    $scope.connaissances7 = "funtamental";


});

app.controller('connaissances2', function($scope) {
    $scope.connaissances1 = "jquery";
    $scope.connaissances2 = "angular";
    $scope.connaissances3 = "vue js";

    $scope.connaissances4 = "vivify";
    $scope.connaissances5 = "photoshop";
    $scope.connaissances6 = "cyberlink power director";
    $scope.connaissances7 = "swing";


});





app.controller('mes_compentences2', function($scope) {
    $scope.nom1 = "java";
    $scope.indice1 = "80";

    $scope.nom2 = "php";
    $scope.indice2 = "70";

    $scope.nom3 = "Android";
    $scope.indice3 = "80";

    $scope.nom4 = "frameworks back-end";
    $scope.indice4 = "80";



});
app.controller('connaissances3', function($scope) {
    $scope.connaissances1 = "java se";
    $scope.connaissances2 = "java ee";
    $scope.connaissances3 = "mysql";
    $scope.connaissances4 = "php";
    $scope.connaissances5 = "vba";
    $scope.connaissances6 = "c";
    $scope.connaissances7 = "c++";


});

app.controller('connaissances4', function($scope) {
    $scope.connaissances1 = "laravel";
    $scope.connaissances2 = "spip";
    $scope.connaissances3 = "prestashop";
    $scope.connaissances4 = "angular";
    $scope.connaissances5 = "spring";
    $scope.connaissances6 = "wordpress";
    $scope.connaissances7 = "woocommerce";


});

app.controller('mes_compentences3', function($scope) {
    $scope.nom1 = "mysql";
    $scope.indice1 = "80";

    $scope.nom2 = "webmarketing";
    $scope.indice2 = "70";

    $scope.nom3 = "webmastering";
    $scope.indice3 = "95";

    $scope.nom4 = "gestion serveur web avec cpanel";
    $scope.indice4 = "85";



});
app.controller('connaissances5', function($scope) {
    $scope.connaissances1 = "uml";
    $scope.connaissances2 = "maintenance materiel(moyen)";
    $scope.connaissances3 = "maintenant logiciel(élévé)";
    $scope.connaissances4 = "visual studio";
    $scope.connaissances5 = "eclipse";
    $scope.connaissances6 = "netbeans";
    $scope.connaissances7 = "git";


});

app.controller('connaissances6', function($scope) {
    $scope.connaissances1 = "progressive web app";
    $scope.connaissances2 = "responsive design";
    $scope.connaissances3 = "management";
    $scope.connaissances4 = "trello";
    $scope.connaissances5 = "commerciale";
    $scope.connaissances6 = "agriculture";
    $scope.connaissances7 = "suite office";


});











app.controller('language', function($scope) {
    $scope.nom1 = "Anglais";
    $scope.indice1 = "75";
    $scope.niveau1 = "Moyen";
    $scope.nom2 = "Françcais";
    $scope.indice2 = "80";
    $scope.niveau2 = "ELEVE";
    $scope.nom3 = "ALLEMAND";
    $scope.indice3 = "20";
    $scope.niveau3 = "FAIBLE";
});

app.controller('experience', function($scope) {


    $scope.nombre = "4";




});
app.controller('emploi', function($scope) {

    $scope.travail = [{
            'duree': "2018-maintenant",
            'entreprise': "Socinel SA",
            'fonction': "Consultant developpeur web",
            'descriptif': "developpeur laravel,gestion du serveur web",
            'icon': "ion-easel",


        },
        {
            'duree': "2017- maintenant",
            'entreprise': "Alteqdev sarl",
            'fonction': "Consultant Developpeur Web",
            'descriptif': "Web Developpement,creation des sites web,administration du serveur web",
            'icon': "ion-easel",


        },
        {
            'duree': "2015-2017",
            'entreprise': "TELES-HOSTING",
            'fonction': "informaticien",
            'descriptif': "Développement des sites web( spip et wordpress & php), Maintenance informatique Administration de sites, Administration du serveur web avec cpanel",
            'icon': "ion-card",


        },
    ];



});

app.controller('temoignages', function($scope) {

    $scope.image1 = "images/jamaldemi.png";
    $scope.titre1 = "les projets sont les meilleurs diplomes d'un developpeur";
    $scope.fonction1 = " Kevin Jamal";

    $scope.image2 = "images/auteur.jpg";
    $scope.titre2 = "Partager c'est continuer d'apprendre";
    $scope.fonction2 = " Kevin Jamal";

    $scope.image3 = "images/auteur2.jpg";
    $scope.titre3 = "la programmation c'est l'école de la rue";
    $scope.fonction3 = " Kevin Jamal";

});

app.controller('education', function($scope) {

    $scope.titre1 = "VALEUR PÉDAGOGIQUE";
    $scope.titre2 = "LOISIRS & INTERET";

});

app.controller('diplome', function($scope) {
    $scope.educations = [{

            'etablissement': "Université de Douala ",
            'diplome': "BAC +2 Informatique ",
            'annee': "2013 - 2015",

        },
        {

            'etablissement': "Google",
            'diplome': "Certication progressive web app",
            'annee': "2018",

        },
        {

            'etablissement': "google africa scholarship",
            'diplome': "mobile web specialiste",
            'annee': "2018",

        },
        {

            'etablissement': "Objis",
            'diplome': "Certification developpeur java et android",
            'annee': "2018 - 2019",

        },


    ];











});
app.controller('hobbies', function($scope) {

    $scope.hobb = [{

            'image': "ion-easel",
            'nom': "WEB",
        },
        {

            'image': "ion-ios-camera-outline",
            'nom': "INFOGRAPHIE",
        },
        {

            'image': "ion-plane",
            'nom': "VOYAGE",
        },
        {

            'image': "ion-ios-bookmarks-outline",
            'nom': "LECTURE",
        },
        {

            'image': "ion-ios-musical-notes",
            'nom': "MUSIQUE",
        }
    ];

});

app.controller('realisations', function($scope) {
    $scope.nom = "PORTFOLIO";
    $scope.tag1 = "site";
    $scope.tag2 = "application";
    $scope.tag3 = "infographie";
    $scope.tag4 = "mobile_native";




});


app.controller('realisation', function($scope) {
    $scope.projets = [{
            'id': "p1",
            'tag': "site infographie",
            'image': 'images/projet1.png',
            'lien': "#",
            'titre': "Site personnel",
            'date': 'Mars 2019',
            'text': "ce site est fait avec HTML , CSS , BOOSTRAP ,ANGULAR  ,MATERIAL DESIGN , VIVIFY "


        },
        {
            'id': "p2",
            'tag': "site ",
            'image': 'images/projet2.png',
            'lien': "#",
            'titre': "longrich business",
            'date': 'Janvier 2019',
            'text': "ce site est fait avec HTML , CSS , BOOSTRAP ,ANGULAR , VIVIFY, JQUERY ,SPIP "


        },

        {
            'id': "p3",
            'tag': "site ",
            'image': 'images/projet4.png',
            'lien': "#",
            'titre': "Alteqdev sarl",
            'date': 'Mars 2018',
            'text': "ce site est fait avec HTML , CSS , BOOSTRAP ,SPIP "


        },
        {
            'id': "p4",
            'tag': "site ",
            'image': 'images/projet5.png',
            'lien': "#",
            'titre': "Cetech sarl",
            'date': 'Mai 2018',
            'text': "ce site est fait avec HTML , CSS , BOOSTRAP ,SPIP ,JS "


        },
        {
            'id': "p5",
            'tag': "site infographie ",
            'image': 'images/projet5.png',
            'lien': "#",
            'titre': "Musicien Dany Mouandjo",
            'date': 'Mars 2018',
            'text': "ce site est fait avec HTML , CSS , BOOSTRAP ,SPIP ,JS  "


        },
        {
            'id': "p6",
            'tag': "application",
            'image': 'images/projet7.png',
            'lien': "#",
            'titre': "Systeme informatisé de gestion du suivi  evaluation avec sig",
            'date': 'Septembre 2018 ->Maintenant',
            'text': "ce site est fait avec HTML , CSS , BOOSTRAP ,LARAVEL. Systeme de gestion des cooperatives du cameroun ce projet a été financé par la banque mondiale et geré par le Ministere de l'Agriculture ."


        },

        {
            'id': "p7",
            'tag': "site infographie",
            'image': 'images/projet8.png',
            'lien': "#",
            'titre': "Parc National de lobeke ",
            'date': 'Avril 2018',
            'text': "ce site est fait avec HTML , CSS , BOOSTRAP ,SPIP"


        },
        {
            'id': "p8",
            'tag': "site",
            'image': 'images/projet9.png',
            'lien': "#",
            'titre': "Agri-future ",
            'date': 'Octobbre 2017',
            'text': "ce site est fait avec HTML , CSS , BOOSTRAP ,SPIP"


        },





    ];
});


app.controller('posts', function($scope) {
    $scope.articles = [{
            'id': '2',
            'titre': 'A LA DECOUVERTE DES WOMEN TECH MAKERS ',
            'image': 'images/speacker2.jpg',
            'date': '9 Mars 2019',
            'lien': '#',
            'lus': '5 lectures',
            'blog_descriptif': 'le texte descriptif ici',
            'blog_text': 'le text de l evenement ici'
        },
        {
            'id': '1',
            'titre': "Ma Vision d'un Google Developpeur group",
            'image': 'images/speacker1.jpg',
            'date': '9 Mars 2019',
            'lien': '#',
            'lus': '5 lectures',
            'blog_descriptif': 'le texte descriptif ici',
            'blog_text': 'le text de l evenement ici'
        }
    ];
});