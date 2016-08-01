/**
 * Created by my4637275 on 2016/7/31.
 */
angular.module("ezstuff",[])
    
.controller('test',myController);
function myController($scope) {
    $scope.person=[
        // {pic:"./images/first.jpg", name:"老大"},
        // {pic:"./images/2.jpg", name:"老二"},
        // {pic:"./images/3.jpg", name:"老三"},
        // {pic:"./images/4.jpg", name:"老四"},
        // {pic:"./images/5.jpg", name:"老五"}
    ];

    var picture=["./images/first.jpg","./images/2.jpg","./images/3.jpg","./images/4.jpg",'./images/5.jpg','/images/6.jpg','./images/7.jpg','./images/8.jpg','./images/9.jpg','./images/10.jpg','./images/11.jpg'];
    
    (function remember_person() {
      if(localStorage.getItem('person'))  {
          $scope.person=JSON.parse(localStorage.getItem('person'));
      }
        else {
          localStorage.setItem('person', JSON.stringify( $scope.person));
      }
    })();

    $scope.isAdd=false;

    $scope.delete=function (index) {
        $scope.person.splice(index,1);
        $scope.saveFriend($scope.person)
    };

    $scope.stick=function (index) {
        var vm=$scope.person[index];
        $scope.person.splice(index,1);
        $scope.person.unshift(vm);
        $scope.saveFriend($scope.person)
    };

    $scope.empty=function () {
        $scope.person.length=0;
        localStorage.removeItem('person')
    };
    
    $scope.add=function () {
        $scope.isAdd=true;

    };
    $scope.confirm=function () {
        if(!$scope.new_name){
            alert("名字不能为空");
        }
        else{
            var new_friend={
                pic:picture[Math.floor(Math.random()*picture.length)],
                name:$scope.new_name
            };
            $scope.person.unshift(new_friend);
            $scope.saveFriend($scope.person)
        }
        $scope.new_name="";
        $scope.isAdd=false;
    };
    $scope.cancel=function () {
        $scope.isAdd=false;
    };

    $scope.saveFriend = function (person) {
        if (Array.isArray(person)) {
            localStorage.setItem('person', JSON.stringify(person));
        }
    }
    
}

