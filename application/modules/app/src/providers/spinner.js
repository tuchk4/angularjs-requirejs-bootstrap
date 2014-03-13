define(function(require) {

  var module = require('modules/app/app');

  module.provider('app.provider.spinner', function() {
    var key = 'spinner';

    this.$get = [
      '$rootScope',
      function($rootScope) {

        return {
          show: function() {
            $rootScope[key] = true;
          },
          hide: function() {
            $rootScope[key] = false;
          }
        };
      }
    ];
  });
});
