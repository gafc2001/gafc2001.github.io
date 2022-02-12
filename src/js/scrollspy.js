(function() {
    'use strict';
  
    var section = document.querySelectorAll(".section");
    var sections = {};
    var i = 0;
  
    Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop - 78;
    });
    window.onscroll = function() {
      var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
      for (i in sections) {
        if (sections[i] <= scrollPosition) {
            if(document.querySelector('.active')){
                document.querySelector('.active').classList.remove('active');
            }
            document.querySelector('a[href*=' + i + ']').classList.add('active');
        }
      }
    };
})();
  