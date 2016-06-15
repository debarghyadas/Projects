
angular.module('app.directives',[])
.filter('dateFilter', function($filter) {
  return function(input, format) {
    return $filter('date')(new Date(input), format);
;
  }
}).directive('noSpecialChar', function() {
        return {
          require: 'ngModel',
          restrict: 'A',
          link: function(scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function(inputValue) {
              if (inputValue == null)
                return ''
              cleanInputValue = inputValue.replace(/[^A-za-z0-9]/gi, '');
              if (cleanInputValue != inputValue) {
                modelCtrl.$setViewValue(cleanInputValue);
                modelCtrl.$render();
              }
              return cleanInputValue;
            });
          }
        }
      })
   .directive('onlyNumber', function() {
        return {
          require: 'ngModel',
          restrict: 'A',
          link: function(scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function(inputValue) {
              if (inputValue == null)
                return ''
              cleanInputValue = inputValue.replace(/[^0-9]/gi, '');
              if (cleanInputValue != inputValue) {
                modelCtrl.$setViewValue(cleanInputValue);
                modelCtrl.$render();
              }
              return cleanInputValue;
            });
          }
        }
      })
   .directive('onlyChar', function() {
    //String regx = "^[\\p{L} .'-]+$"; FOR ALLL LANGUAGE
        return {
          require: 'ngModel',
          restrict: 'A',
          link: function(scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function(inputValue) {
              if (inputValue == null)
                return ''
              cleanInputValue = inputValue.replace(/[^A-Za-z]/gi, '');
              if (cleanInputValue != inputValue) {
                modelCtrl.$setViewValue(cleanInputValue);
                modelCtrl.$render();
              }
              return cleanInputValue;
            });
          }
        }
      });
