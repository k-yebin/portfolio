// Acc
$(document).on("click", ".naccs .menu div", function () {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");

        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".naccs ul")
            .find("li:eq(" + numberIndex + ")")
            .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
    }
});

//modal 열고 닫기
$(".modalView1").click(function(){
    $('.modal').css('display', 'block');
    $('body').on('scroll touchmove mousewheel', e => {
        e.stopPropagation(); //백그라운드 스크롤 정지
    });
})
$('#modalClose').click(function(){
    $('.modal').css('display', 'none');
    $('body').off('scroll touchmove mousewheel'); //스크롤 정지 해제
})


