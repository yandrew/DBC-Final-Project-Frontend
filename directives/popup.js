app.directive('popup', function($parse) {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {

            var showHideExpr = $parse(attrs.when);
            var setHide = function(){
                scope.$apply(function(){
                    showHideExpr.assign(scope, false);
                });
            };

            var show = function(){
                element.css('display','block');
                element.bind('mouseleave', setHide);
            };

            var hide = function(){
                element.css('display','none');
                element.unbind('mouseleave', setHide);
            };

            scope.$watch(attrs.when, function(shouldShow) {
                if(shouldShow){
                   show();
                } else {
                   hide();
                }
            });
        }
      }
});