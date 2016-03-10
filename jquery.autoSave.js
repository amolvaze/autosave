/* Autosave Project by Amol Vaze*/
(function($) {
    $.fn.autoSave = function(callback, ms) {
        return this.each(function() {
            var timer = 0, 
                $this = $(this),
                delay = ms || 1000;
            $this.keyup(function() {
                clearTimeout(timer);
                var $context = $this.val();
                if(localStorage) {
                    localStorage.setItem("autoSave", $context);
                }
                timer = setTimeout(function() {
                    callback();
                }, delay);
            });
        });
    };
})(jQuery);
