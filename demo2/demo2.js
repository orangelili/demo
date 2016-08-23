/**
 * Created by Lili on 16/8/22.
 */
initColor($('#progress' ).find('.steps'),2, '#5ab65f');

function progress(type, progress, steps, progress_line, color){
    var now = 0;
    var divs = $('#'+progress ).find(".steps");
    divs.find('.message').css('visibility', 'hidden');
    var count = parseInt($(divs).length) - 1;
    divs.each(function(index,div){
        if ($(div).attr('class') === progress_line) {
            if (type === 'up') {
                now = index-1 <= 0 ?  0 : index - 1;
            } else if (type === 'down') {
                now = index+1 >= count ?  count : index + 1;
            }
            $(div).removeClass('progress_line');
        }
    });
    $(divs[now] ).attr('class', progress_line);
    divs.find('.message').css('visibility', 'hidden');
    divs.find('.square').css('background', '');
    divs.find('.circle').css('background', '');
    divs.find('p').css('color', '');
    initColor(divs, now, color);
}
/*insert data here=========*/
function initColor(divs, number , color){
    var progress = divs.slice(0, number+1);
    divs.eq(number).attr("class","steps progress_line");
    progress.each(function(){
        if (number != 0) {
            $(this).find('.square').css('background', color);
        }
        $(this).find('.circle').css('background', color);
        $(this).find('p').css('color', color);
    });
    $(".progress_line").find('.message').css('visibility', 'visible');
}