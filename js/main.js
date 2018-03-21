$(document).ready(function() {
    $(".edit").click(function() {
        $(this).css('display', 'none');
        $(this).parent().find(".save").css('display', 'table');
        $(this).parent().find(".name").replaceWith('<input class="name" type="text" value="Breakfast">');
        $(this).parent().find(".calories").find("span").replaceWith('<input style="max-width: 50px;" type="text" value="0.00"><span>kg</span>');
        $(this).parent().find(".protein").find("span").replaceWith('<input style="max-width: 50px;" type="text" value="0.00"><span>kg</span>');
        $(this).parent().find(".carbs").find("span").replaceWith('<input style="max-width: 50px;" type="text" value="0.00"><span>kg</span>');
        $(this).parent().find(".fat").find("span").replaceWith('<input style="max-width: 50px;" type="text" value="0.00"><span>kg</span>');
    });
    $(".save").click(function() {
        $(this).css('display', 'none');
        $(this).parent().find(".edit").css('display', 'table');
        $(this).parent().find(".name").replaceWith($(this).parent().find(".name").val());
        $(this).parent().find(".calories").replaceWith('')
    });
});
