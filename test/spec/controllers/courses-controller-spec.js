describe('Controller : CourseListCtrl', function(){
  var ctrl, scope, $httpBackend;
  beforeEach(module('courseApp'));

  beforeEach(inject(function(_$httpBackend_, $controller, $rootScope) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET('jsondata/course.json').respond([
      {"courseId":"1",
        "name":"线性代数",
        "teacherId":"10",
        "studentsId": "1"
      },
      {"courseId":"2",
        "name":"Analysis of Unix System",
        "teacherId":"11",
        "studentsId": "2"
      },
    ]);
    ctrl = $controller('CourseListCtrl', {
      $scope: scope
    });
  }));

  it('should create "courses" module with 2 courses fetched from xhr', function(){
    expect(scope.courses).toBeUndefined();
    $httpBackend.flush();
    expect(scope.courses).toEqual([
      {"courseId":"1",
        "name":"线性代数",
        "teacherId":"10",
        "studentsId": "1"
      },
      {"courseId":"2",
        "name":"Analysis of Unix System",
        "teacherId":"11",
        "studentsId": "2"
      },
    ]);
  });
});
