describe('Controller : CoursesCtrl', function(){
  var ctrl, scope, $httpBackend;
  beforeEach(module('courseApp'));

  beforeEach(inject(function(_$httpBackend_, $controller, $rootScope) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET('jsondata/course.json').respond([
      {"name":"C Language",
        "teacher":"professor X",
        "students": [{"name": "Zhang Song"},
          {"name": "Hu Kai"}
        ]
      },
      {"name":"Analysis of Unix System",
        "teacher":"professor Y",
        "students": [{"name": "Yao Yao"},
          {"name": "Dai Junfeng"}
        ]
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
      {"name":"C Language",
        "teacher":"professor X",
        "students": [{"name": "Zhang Song"},
          {"name": "Hu Kai"}
        ]
      },
      {"name":"Analysis of Unix System",
        "teacher":"professor Y",
        "students": [{"name": "Yao Yao"},
          {"name": "Dai Junfeng"}
        ]
      },
    ]);
  });
});
