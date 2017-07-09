$(document).ready(function(){

    // get sessionStorage for page id
    var get_id = sessionStorage.getItem('pg_id');

    // check page id, then scroll to its div
    if(get_id)
        scrollToID(get_id, 1000);

    // click event to scroll to div
    $('.scroll a').on('click', function(){
        var id = '#'+$(this).data('id');
        sessionStorage.setItem('pg_id', id);
        scrollToID(id, 1000);
    });

});
function scrollToID(id, speed) {
    var offSet = 70;
    var obj = $(id).offset();
    var targetOffset = $(id).offset().top - offSet;
    $('html,body').animate({ scrollTop: targetOffset }, speed);
    sessionStorage.removeItem(get_id);
}

var i = sessionStorage.length;
while(i--) {
  var key = sessionStorage.key(i);
  sessionStorage.removeItem(key);
}


var i = sessionStorage.length;
while(i--) {
  var key = sessionStorage.key(i);
  sessionStorage.removeItem(key);
}
