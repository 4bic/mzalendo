// Mobile boilerplate helper function (https://github.com/h5bp/mobile-boilerplate/blob/master/js/mylibs/helper.js)
// Hide URL Bar for iOS and Android by Scott Jehl
// https://gist.github.com/1183357
function hideUrlBar() {
  var win = window,
    doc = win.document;

  // If there's a hash, or addEventListener is undefined, stop here
  if( !location.hash || !win.addEventListener ){

    //scroll to 1
    window.scrollTo( 0, 1 );
    var scrollTop = 1,

    //reset to 0 on bodyready, if needed
    bodycheck = setInterval(function(){
      if( doc.body ){
        clearInterval( bodycheck );
        scrollTop = "scrollTop" in doc.body ? doc.body.scrollTop : 1;
        win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
      } 
    }, 15 );

    win.addEventListener( "load", function(){
      setTimeout(function(){
        //reset to hide addr bar at onload
        win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
      }, 0);
    }, false );
  }
}


//generic re-usable hide or show with class states
function hideShow(elem, trig) {
  $(elem).toggleClass(function() {
    if ($(this).is('.open')) {
      $(this).hide().removeClass('open');
      trig.removeClass('active');
      return 'closed';
    } else {
      $(this).show().removeClass('closed');
      trig.addClass('active');
      return 'open';
    }
  });
}

$(function(){
  /*
   * General stuff
   */
  // add appropriate stuff to head
  // <!-- Mobile viewport optimization http://goo.gl/b9SaQ -->
  $('head').append('<meta name="HandheldFriendly" content="True">').append('<meta name="MobileOptimized" content="320">');
  
  $('.social-and-tools').append('<ul><li><a href="/" class="m-fb">Share page via Facebook</a></li><li><a href="/" class="m-twitter">Share page via Twitter</a></li></ul>');

  /*
   * Main non AJAX interactions
   */
  // prep
  $('#main-menu, #search, #site-user-tools').hide();
  $('#search').before('<menu id="m-top-tools"><button class="nav-trigger m-icon-nav">menu</button><button class="search-trigger icon-search">search</button></menu>');

  // nav
  $('.nav-trigger').live('click', function(){
    //add states to trigger elem
    hideShow('#main-menu, #site-user-tools', $(this));
  });

  // search
  $('.search-trigger').live('click', function(){
  	hideShow('#search', $(this));
  });
});