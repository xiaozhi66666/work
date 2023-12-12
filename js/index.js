window.onload = function () {
    // open
    console.log($('#menu'));
    $('#menu').click(function () {
        console.log(123123);
        $('#nav_t').slideDown()
        // $('#nav_t').animate({ left: 0 },);
        // $("#nav_t").animate({ left: '10px' });
    })
    $('#cancel').click(function () {
        $('#nav_t').slideUp()
    })
    var isCorrect = false
    $(".icon-shoucang1").css("color", "#ccc");
    $(".icon-shoucang1").css("cursor", "pointer");
    $(".icon-shoucang1").each(function () {
        $(this).click(function () {
            isCorrect = !isCorrect
            if (isCorrect) {
                var c1 = $(this).css('color')
                if (c1 == 'rgb(255, 0, 0)') {
                    $(this).css("color", "#ccc");
                } else {
                    $(this).css("color", "red");
                }
            } else {
                var color = $(this).css('color')
                if (color == 'rgb(204, 204, 204)') {
                    $(this).css("color", "red");
                } else {
                    $(this).css("color", "#ccc");
                }
            }
        });
    });
}