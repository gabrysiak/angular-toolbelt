/**
 * angular-toolbelt-mask 
 * @version v0.1.0 - 2014-1-29
 * @link http://github.com/gabrysiak/angular-toolbelt
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';

/* Mask input element */

angular.module('toolbelt.mask', [])

    .directive("toolbeltMask", function(){
        return {

            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attr, ctrl) {
                if (attr.type === 'radio' || attr.type === 'checkbox') return;
                
                element.unbind('input').unbind('keydown').unbind('change');
                element.mask(attr.toolbeltMask);
                element.bind('blur', function() {

                    scope.$apply(function() {
                        ctrl.$setViewValue(element.val());
                    });         
                });
            }
        }
    })