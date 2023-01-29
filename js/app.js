

$(document).ready(function(){
    $('#sidebar-show__btn').on("click", function(){
        $('.sidebar__left').fadeToggle("fast", "linear");
    });

    $('#sidebar-show__btn-right').on("click", function(){
        $('.sidebar__right').fadeToggle("slow", "linear");
    });
});

