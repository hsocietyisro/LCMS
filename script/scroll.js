$(document).ready(function(){

    // get sessionStorage for page id
    var get_id = sessionStorage.getItem('pg_id');

    // check page id, then scroll to its div
    if(get_id)
        scrollToID(get_id, 1100);

    // click event to scroll to div
    $('.scroll a').on('click', function(){
        var id = '#'+$(this).data('id');
        sessionStorage.setItem('pg_id', id);
        scrollToID(id, 1100);
    });

});

function scrollToID(id, speed) {
    var offSet = 70;
    var obj = $(id).offset();
    var targetOffset = $(id).offset().top - offSet;
    $('html,body').animate({ scrollTop: targetOffset }, speed);
}
