describe('Controller : CoursesCtrl', function(){
  beforeEach(module('courseApp'));
  var CoursesCtrl, scope;
  beforeEach(inject(function($controller, $rootScope){
    scope = $rootScope.$new();
    CoursesCtrl = $controller('CoursesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of courses to the scope', function(){
    expect(scope.courses.length).toBe(3 );
  });
});
