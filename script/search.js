$("input").keyup(function () {
    var userInput = $(this).val();
    // console.log("here");
    $(".browseLoc").map(function (index, value) {
        $(value).toggle($(value).text().toLowerCase().indexOf(userInput) >= 0);
    });
    var zoneTitle = document.querySelectorAll('.zoneTitle')
    var hr = document.querySelectorAll('hr')
    for (var i = 0; i < zoneTitle.length; i++) {
      zoneTitle[i].style.display = 'none';
      hr[i].style.display = 'none';
    }
});
