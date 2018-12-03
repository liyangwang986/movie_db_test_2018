
/***********popular_list*************/


$.getJSON("https://api.themoviedb.org/3/movie/top_rated?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){

    console.log(data);

    for(var i=0; i<data.results.length; i++) {

        $('.popular_all_content').append('<div class="popular_list_content"><a href="venom.html" class="popular_list_img"><img src="" alt="Fantastic Beasts: The Crimes of Grindelwald"><div><span style="font-size: 1em;"><i class="fas fa-bolt"></i></span></div></a><div class="popular_list_info"><div class="popular_info_top"><div class="popular_rate"><div class="circle">NR</div></div><div class="popular_info_title"><a href="venom.html"></a><span></span></div></div><div class="popular_info_content"></div><div class="info_more"><a href="venom.html">More Info</a></div></div></div>');


        $('.popular_all_content').find('.popular_list_content').eq(i).children('a').children('img').attr('src','https://image.tmdb.org/t/p/w185_and_h278_bestv2/'+data.results[i].poster_path);
        $('.popular_all_content').find('.popular_list_content').eq(i).find('.popular_info_title').children('a').html(data.results[i].original_title);

        $('.popular_all_content').find('.popular_list_content').eq(i).find('.circle').html(data.results[i].vote_average*10);


        var month=['January','February','March','April','May','June','July','August','September','October','November','December'];

        var year_number=data.results[i].release_date.substring(0,4);
        var month_number=data.results[i].release_date.substring(5,7)-1;
        var date_number=data.results[i].release_date.substring(8,10);

        $('.popular_all_content').find('.popular_list_content').eq(i).find('.popular_info_title').children('span').html(month[month_number]+' '+date_number+', '+year_number);

        $('.popular_all_content').find('.popular_list_content').eq(i).find('.popular_info_content').html(data.results[i].overview);

        $('.popular_all_content').find('.popular_list_content').eq(i).find('.info_more').children('a').attr('title',data.results[i].original_title+'');


    }


    /**************************compact_view************************/
    for(var i=0; i<data.results.length; i++) {
        $('.compact_all_content').append('<div class="compact_list"><a href="#" css="compact_img"><img src="" alt=""><div class="compact_detail"><div class="compact_date"></div><div class="compact_rate"><span></span><i class="fas fa-star"></i></div></div></a><div class="compact_name"><span></span></div></div>\n');

        if(i==0||i==5||i==9||i==15||i==19){
            $('.compact_all_content').find('.compact_list').eq(i).find('img').attr('src','https://image.tmdb.org/t/p/w500_and_h282_face'+data.results[i].backdrop_path);

        }else{
            $('.compact_all_content').find('.compact_list').eq(i).find('img').attr('src','https://image.tmdb.org/t/p/w185_and_h278_bestv2'+data.results[i].poster_path);

        }


        $('.compact_all_content').find('.compact_list').eq(i).find('.compact_date').html(data.results[i].release_date);
        $('.compact_all_content').find('.compact_list').eq(i).find('.compact_rate').children('span').html(data.results[i].vote_average);
        $('.compact_all_content').find('.compact_list').eq(i).find('.compact_name').children('span').html(data.results[i].original_title);




    }



});



