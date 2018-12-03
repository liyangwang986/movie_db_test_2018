$('.detail_media_top').children('ul').children('li').mousemove(function(){
    $(this).children(".detail_media_underline").css('display','block');
    $(this).children(".detail_media_top_options").css('display','block');
});

$('.detail_media_top').children('ul').children('li').mouseout(function(){
    $(this).children(".detail_media_underline").css('display','none');
    $(this).children(".detail_media_top_options").css('display','none');
});








$.getJSON("https://api.themoviedb.org/3/movie/335983/reviews?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){

    console.log(data.results);

    for(var i=0; i<data.results.length; i++) {

        $('.review_page_all_right').append('<div class="review_content"><div class="review_content_top"><div class="review_profile"></div><div class="review_title"><div><div class="review_by"></div><div><i class="fas fa-star"></i><span class="review_rate"></span></div></div><div class="written_date"></div></div></div><div class="review_content_all"></div></div>');

        $('.review_content').find('.review_by').eq(i).html('A Review By'+data.results[i].author);
        console.log(data.results[i].author);

        $('.review_content').find('.review_content_all').eq(i).html('A Review By'+data.results[i].content);


        if(data.results[i].author=='javajohnny'){
            $('.review_content').find('.review_rate').eq(i).html('7.0');
            $('.review_content').find('.written_date').eq(i).html('Written by'+data.results[i].author+'on October 30,2018');
            $('.review_content').find('.review_profile').eq(i).css('background-color','#000');
        }

        else if(data.results[i].author=='gurteksingh'){
            $('.review_content').find('.review_rate').eq(i).html('7.0');
            $('.review_content').find('.written_date').eq(i).html('Written by'+data.results[i].author+'on October 27,2018');
            $('.review_content').find('.review_profile').eq(i).css('background-color','#999');
        }

        else if(data.results[i].author=='Gimly'){
            $('.review_content').find('.review_rate').eq(i).html('6.0');

            $('.review_content').find('.written_date').eq(i).html('Written by'+data.results[i].author+'on October 26,2018');
            $('.review_content').find('.review_profile').eq(i).css('background-color','#e4393c');
        }


    }



});