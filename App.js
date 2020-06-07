(function(){
    'use strict';
    angular.module('Portfolio',[])
    .controller('Name',function ($scope){
        $scope.name="TUSHAR GOEL";
    })
    .controller('Header',function($scope){
        $scope.head="About me.";
    })
    .controller('Aboutme',function($scope){
        $scope.aboutme="Hey everyone I'm TUSHAR GOEL working at Virtusa as an Intern. I collab with people to get the things done on various technologies like JAVA, GO and many more. At present I am pursuing my Bachlore's degree from CMR Engineering Collge, Hyderabad. The technologies I'm interested in and have a knowledge are Bootstrap, JAVA, GO, PHP, Servlets, DBMS.";
    });
})();
