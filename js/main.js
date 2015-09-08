!function ($) {
	//=================================== scroll  ===================================//

  $body.scrollspy({
    target: '#navbar-main',
    offset: navHeight
  });

  $('#navbar-main').affix({offset: 1200});

  $window.on('load', function () {
    $body.scrollspy('refresh')
  });

  $('#navbar-main [href=#]').click(function (e) {
    e.preventDefault()
  });
};
