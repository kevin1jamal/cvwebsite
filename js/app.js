// JavaScript Document

    <script>
  var app = angular.module('myApp', []);
  app.controller('section1', function($scope) {
      $scope.nom= "Kevin Obam Ekono";
      $scope.fonction= "DESIGN+ DEVELOPE+ INTERACTIVE+ ART+";
       $scope.descriptif= "Bonjour, je suis Kevin Obam. J'ai 2 ans d'expérience dans le developpement Web et UX. Je travaille sur une variété de marques et d'agences, grandes et petites.";
      
       $scope.cv= "#";
       $scope.image="image/logo longrich.jpg"
       
  });
  
  app.controller('status', function($scope) {
      $scope.disponible= "Oui";
      });
  
  app.controller('Compte', function($scope) {
      $scope.facebook= "#";
      $scope.twitter= "#";
       $scope.linkedin= "#";
       $scope.google="#";
        $scope.github="#";
       
      
       
  });
  app.controller('About', function($scope) {
      $scope.nom= "Kevin Obam Ekono";
      $scope.fonction= "DESIGN+ DEVELOPE+ INTERACTIVE+ ART+";
       $scope.descriptif= "Bonjour, je suis Kevin Obam. J'ai 2 ans d'expérience dans le developpement Web et UX. Je travaille sur une variété de marques et d'agences, grandes et petites.";
      
        $scope.date_naissance= "08/03/1995";
         $scope.phone="691 10 01 28 /693 44 18 40";
          $scope.email="ekonokevin@gmail.com";
           $scope.adresse=" Yde rue 4025";
            $scope.websitef="kevinObam.objis.com";
      
       
  });
  
  
  app.controller('navbar', function($scope) {
      $scope.nom= "Kevin Obam";
      $scope.section1= "ACCUEIL";
       $scope.section2= "A PROPOS";
      
        $scope.section3= "COMPETENCE";
         $scope.section4="EXPERIENCE";
          $scope.section5="EDUCATION";
           $scope.section6="REALISATION";
            $scope.section7="BLOG";
             $scope.section8="CONTACT";
      
       
  });
  
  app.controller('savoir_faire_1', function($scope) {
      $scope.nom= "savoir 1";
     
       $scope.icone= "#";
      
       
  });
  app.controller('savoir_faire_2', function($scope) {
      $scope.nom= "savoir 2";
     
       $scope.icone= "#";
      
       
  });
  app.controller('savoir_faire_3', function($scope) {
      $scope.nom= "savoir 3";
     
       $scope.icone= "#";
      
       
  });
  
  
app.controller('mes_compentences1', function($scope) {
      $scope.nom= "compentence1";
      $scope.indice= "98";
      }); 
      
app.controller('mes_compentences2', function($scope) {
      $scope.nom= "compentence2";
      $scope.indice= "75";
      });
       
app.controller('language1', function($scope) {
      $scope.nom= "compentence1";
      $scope.indice= "75";
      $scope.niveau="ADVANCE";
      }); 
app.controller('language2', function($scope) {
      $scope.nom= "compentence2";
      $scope.indice= "98";
      $scope.niveau="ADVANCE";
      }); 
app.controller('language3', function($scope) {
      $scope.nom= "compentence3";
      $scope.indice= "50";
      $scope.niveau="MOYEN";
      }); 
      
             
app.controller('service4', function($scope) {
      $scope.service_titre= "Titre service 4";
      $scope.service_text= "text service 4 text service 4 text service 4 text service 4 text service 4 text service 4 text service 1 text service 1";
       $scope.service_image= "image/bindane.png";
      
       
});
  
  
  app.controller('blog', function($scope) {
      $scope.blog_titre= "Titre service 4";
      $scope.blog_descr="le text descriptif de l'";
      $scope.blog_text= "text service 4 text service 4 text service 4 text service 4 text service 4 text service 4 text service 1 text service 1";
       $scope.blog_image= "image/logo longrich.jpg";
       $scope.blog_auteur="nom auteur";
       $scope.blog_date="25/12/2015";
       
      
       
  });
  
  app.controller('event', function($scope) {
      $scope.event_titre= "Titre service 4";
      $scope.event_descr="le text descriptif de l'";
       
       $scope.event_image= "image/bindane.png";
       $scope.event_ville="nom auteur";
       $scope.event_lieu="nom du lieu";
       $scope.event_heure="10h:25min";
       $scope.event_date="25/12/2015";
       scope.event_speacker="personne1 , personne2 ,personne3 ";
       
      
       
  });
  
  app.controller('equipe', function($scope) {
      $scope.equipe_nom= "Nom equipe";
      $scope.equipe_fonction="fonction equipe'";
       
       $scope.equipe_image= "image/bindane.png";
       $scope.equipe_grade="grade";
       
       
      
       
  });
  
  app.controller('localisation', function($scope) {
      $scope.local_ville= "ville";
      $scope.local_contact="XXXXXXXXX";
       
       $scope.local_personne= "nom responsable";
      
       
       
      
       
  });
  
  app.controller('distributeur', function($scope) {
      $scope.dist_image= "image/bindane.png";
      $scope.dist_nom="Distributeur";
       
       $scope.dist_lien= "#";
      
       
       
      
       
  });
  
  app.controller('distributeur', function($scope) {
      $scope.dist_image= "image/bindane.png";
      $scope.dist_nom="Distributeur";
       
       $scope.dist_lien= "#";
      
       
       
      
       
  });
  app.controller('about', function($scope) {
      $scope.about_image= "image/logo longrich.jpg";
      $scope.about_nom="Distributeur";
      $scope.about_descriptif="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere congue diam eget dictum. Maecenas faucibus nunc vel egestas venenatis. Quisque malesuada blandit diam, vehicula semper neque facilisis sed. Integ";
      $scope.about_texte="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere congue diam eget dictum. Maecenas faucibus nunc vel egestas venenatis. Quisque malesuada blandit diam, vehicula semper neque facilisis sed. Integer auctor massa ex, a ullamcorper arcu bibendum id. Nam bibendum sodales nisl, vel faucibus eros commodo a. Etiam condimentum libero nec nisi commodo tristique. Sed a neque id arcu mattis sodales et sit amet magna. Sed a diam finibus, cursus nibh non, pretium augue. Aliquam fringilla magna quis aliquam tristique. Nam dictum maximus mi, quis varius lectus iaculis sit amet. Nullam aliquet nulla nec pellentesque volutpat. Nullam rutrum libero hendrerit viverra vulputate. Donec a dapibus sem. Aliquam eget libero nunc. Phasellus porttitor dolor lorem, nec auctor lacus aliquet at. Phasellus eu ante magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc lacus enim, pulvinar eget odio a, rhoncus lacinia enim. Sed congue nibh ut elit fringilla, sed ultricies nisi consectetur. Donec cursus, eros nec ultricies eleifend, ex velit scelerisque tortor, at imperdiet ligula ipsum a erat. Curabitur in sem suscipit justo consequat mollis sit amet facilisis mauris. Quisque in fringilla sapien, quis gravida ante. Aenean dictum ullamcorper placerat. Nam pulvinar ipsum sit amet dolor feugiat accumsan. Nulla ex mi, pretium sit amet blandit vitae, tincidunt ut erat. Morbi porta neque nec ex placerat, vel molestie est commodo. dapibus porta. Ut accumsan velit sed eleifend iaculis. Sed lobortis sapien ante, a mollis risus pharetra sed. Nullam eros enim, luctus ut porttitor vitae, consectetur in massa. Quisque commodo mattis arcu, nec semper nunc ultrices sed. Quisque dictum luctus ullamcorper. Nunc orci nulla, lacinia at ligula eget, laoreet rhoncus ex.";
       
       $scope.about_lien= "#";
      
       
       
      
       
  });
  
  
  
  app.controller('produit', function($scope) {
      $scope.service_titre= "Titre service 1";
      $scope.service_text= "text service 1 text service 1 text service 1 text service 1 text service 1 text service 1 text service 1 text service 1";
       $scope.service_image= "image/bindane.png";
       $scope.service_prix="10000";
       $scope.service_unite="FCFA";
       $scope.service_marque="LongRich";
       
      
       
  });
  
  
  </script>
