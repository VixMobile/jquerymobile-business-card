var appobj = {};
(function(app) {
    var appName = 'jQueryMobile Business Card App';
    var version = '0.1';
    app.init = function() {
        $('#contactinfo').bind('expand', function() {
            $(document).scrollTop($(document).height());  
        }).bind('collapse', function() {
            $(document).scrollTop(0);
        });
    };
    app.init();
})(appobj);

$(document).ready(function() {
    appobj.init();
});
