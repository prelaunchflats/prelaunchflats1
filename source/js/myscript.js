var container = $('.grid').isotope({
  itemSelector: '.col-xs-12',
  getSortData: {
    name: '.name',
    price: '.price parseInt'
  }
});
$('.alphSort').on('click', function(e){
  e.preventDefault();
  container.isotope({ sortBy: 'name', sortAscending: true});
});
$('.prcBtnH').on('click', function(e){
  e.preventDefault();
  container.isotope({ sortBy: 'price', sortAscending: false});
});
$('.prcBtnL').on('click', function(e){
  e.preventDefault();
  container.isotope({ sortBy: 'price', sortAscending: true});
});
$('.prcBtnO').on('click',function(e){
  e.preventDefault();
  container.isotope({sortBy:'original-order', sortAscending: true});
});

$('#btnRM').click(function(){
    $('#readmore').animate({height:'322px'}, 500);
});
$('#btnRL').click(function(){
	$('#readmore').animate({height:'0px'}, 500);
});
$('#btnRM2').click(function(){
    $('#readmore2').animate({height:'322px'}, 500);
});
$('#btnRL2').click(function(){
	$('#readmore2').animate({height:'0px'}, 500);
});
$('#btnRM3').click(function(){
    $('#readmore3').animate({height:'322px'}, 500);
});
$('#btnRL3').click(function(){
	$('#readmore3').animate({height:'0px'}, 500);
});
$('#btnRM4').click(function(){
    $('#readmore4').animate({height:'322px'}, 500);
});
$('#btnRL4').click(function(){
	$('#readmore4').animate({height:'0px'}, 500);
});

$(function() {
  var overlay = $('#overlay');
  var open_modal = $('.open_modal');
  var close = $('.modal_close, #overlay');
  var modal = $('.modal_div');
  var body = $('body');
  var stateObj = { foo: open_modal.attr('href') };

  container.isotope({sortBy:'original-order', sortAscending: true});

  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 100000,
    step: 500,
    values: [ 50000, 100000 ],
    slide: function( e, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });

  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  
  $("#mydd a").on('click',function (e) {
  	e.preventDefault();
    $("#dropdownMenu1").html($(this).html() + ' <span class="downicon"></span>');
  });

  $("#mydd2 a").on('click',function (e) {
  	e.preventDefault();
    $("#dropdownMenu2").html($(this).html() + ' <span class="downicon"></span>');
  });

  $("#mydd3 a").on('click',function (e) {
  	e.preventDefault();
    $("#dropdownMenu3").html($(this).html() + ' <span class="downicon"></span>');
  });

  open_modal.click( function(event){
    event.preventDefault();
    body.css('overflow', 'hidden')
    body.css('animation', 'animate1 1s')
    var div = $(this).attr('href');
    overlay.fadeIn(400, function(){
      $(div)
        .css('display', 'block')
        .animate({opacity: 1, top: '50%'}, 200);
      body.css('background-size', '100% auto')
      body.css('-webkit-background-size', '100% auto')
      history.pushState(stateObj, "p", div);
    });
  });

  close.click( function(){
    body.css('overflow', 'auto')
    body.css('animation', 'animate2 1s')
    modal.animate({opacity: 0, top: '45%'}, 200, function(){
      $(this).css('display', 'none');
      body.css('background-size', '105% auto')
      body.css('-webkit-background-size', '105% auto')
      overlay.fadeOut(400);
      history.pushState({ foo: "#" }, "p", "#");
    });
  });
});