describe('Controller : CoursesCtrl', function(){
  var ctrl, scope, $httpBackend;
  beforeEach(module('courseApp'));

  beforeEach(inject(function(_$httpBackend_, $controller, $rootScope) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET('jsondata/course.json').respond([
      {"id":"1",
        "name":"线性代数",
        "teacher_id":"10",
        "students_id": "1"
      },
      {"id":"2",
        "name":"Analysis of Unix System",
        "teacher_id":"11",
        "students_id": "2"
      },
    ]);
    ctrl = $controller('CoursesCtrl', {
      $scope: scope
    });
  }));

  it('should create "courses" module with 2 courses fetched from xhr', function(){
    expect(scope.courses).toBeUndefined();
    $httpBackend.flush();
    expect(scope.courses).toEqual([
      {"id":"1",
        "name":"线性代数",
        "teacher_id":"10",
        "students_id": "1"
      },
      {"id":"2",
        "name":"Analysis of Unix System",
        "teacher_id":"11",
        "students_id": "2"
      },
    ]);
  });
});
