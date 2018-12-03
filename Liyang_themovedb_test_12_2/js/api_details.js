/***********details*************/

$.getJSON("https://api.themoviedb.org/3/movie/335983?api_key=ddb907d69f1671fabdfd75c40b664a37&append_to_response=credits", function(data){

    console.log(data);


    /////////detail_top/////////

    $('.details_top').children('div:nth-child(2)').css('background-image','url(https://image.tmdb.org/t/p/w1400_and_h450_face/'+data.backdrop_path+')');

    $('.details_left_img').css('background-image','url(https://image.tmdb.org/t/p/w300_and_h450_bestv2/'+data.poster_path+')');

    $('.expand_details').children('div:first-child').css('background-image','url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/'+data.poster_path+')');

    var year_number=data.release_date.substring(0,4);


    ////////detial_top_info////////

    $('.detail_right_title').find('h2').html(data.original_title);

    $('.detail_right_title').children('span').html('('+year_number+')');

    $('.detail_overview').html(data.overview);


    /**featured crew**/

    $('.detail_right_main').children('ul').children('li:first-child').find('a').html(data.credits.crew[7].name);
    $('.detail_right_main').children('ul').children('li:first-child').find('div').html(data.credits.crew[7].job);

    $('.detail_right_main').children('ul').children('li:nth-child(2)').find('a').html(data.credits.crew[5].name);
    $('.detail_right_main').children('ul').children('li:nth-child(2)').find('div').html(data.credits.crew[5].job);

    $('.detail_right_main').children('ul').children('li:nth-child(3)').find('a').html(data.credits.crew[9].name);
    $('.detail_right_main').children('ul').children('li:nth-child(3)').find('div').html(data.credits.crew[9].job);

    $('.detail_right_main').children('ul').children('li:nth-child(4)').find('a').html(data.credits.crew[1].name);
    $('.detail_right_main').children('ul').children('li:nth-child(4)').find('div').html(data.credits.crew[1].job);

    $('.detail_right_main').children('ul').children('li:nth-child(5)').find('a').html(data.credits.crew[8].name);
    $('.detail_right_main').children('ul').children('li:nth-child(5)').find('div').html(data.credits.crew[8].job);

    $('.detail_right_main').children('ul').children('li:nth-child(6)').find('a').html(data.credits.crew[6].name);
    $('.detail_right_main').children('ul').children('li:nth-child(6)').find('div').html(data.credits.crew[6].job);

    $('.detail_right_main').children('ul').children('li:nth-child(7)').find('a').html(data.credits.crew[0].name);
    $('.detail_right_main').children('ul').children('li:nth-child(7)').find('div').html(data.credits.crew[0].job);



    /**cast**/

    for(var i=0; i<5; i++) {


        $('.cast_ul').append('<li><a href="cast.html"></a><p></p><div></div></li>');

        $('.cast_ul').find('a').eq(i).css('background-image','url("https://image.tmdb.org/t/p/w138_and_h175_face/'+data.credits.cast[i].profile_path+'")');

        $('.cast_ul').find('p').eq(i).html(data.credits.cast[i].name);

        $('.cast_ul').find('div').eq(i).html(data.credits.cast[i].character);
    }



    /******detail_right******/
    $('.movie_detail_release').html(data.status);

    if(data.original_language=='en'){
        $('.detail_language').html('English');
    }

    var duration=data.runtime;

    var h;
    var min;

    if(duration>60){
        h=parseInt(duration/60);
        min=data.runtime-60*h;
        $('.detail_language').html(h+'h'+min+'m');
    }


    var money=data.budget+'';

    var all_money="";

    for(var i=parseInt(money.length/3)-1; i>=0; i--) {

        all_money+=money.substring(money.length - 3*i, money.length-3*i-3);
        if(i!=0){
            all_money+=",";
        }else{
            all_money+=".";
        }

    }

    $('.budget').html(all_money+'00');


    var money2=data.revenue+'';

    var all_revenue="";

    for(var i=parseInt(money2.length/3)-1; i>=0; i--) {

        all_revenue+=money2.substring(money2.length - 3*i, money2.length-3*i-3);
        if(i!=0){
            all_revenue+=",";
        }else{
            all_revenue+=".";
        }

    }

    $('.revenue').html(all_revenue+'00');

    $('.genres').html(data.genres[0].name);




});





/*****release_date*****/

$.getJSON("https://api.themoviedb.org/3/movie/335983/release_dates?api_key=ddb907d69f1671fabdfd75c40b664a37", function(data){









    for(var i=0; i<data.results[20].release_dates.length; i++) {

        $('.release_date_info').append('<li><div><img src="https://www.themoviedb.org/assets/1/flags_v2/24/US-e86237650fc6e4b6f2255f3266bab2099e441962200f2da54d1aa34a3205ee86.png" alt=""></div><div><div class="release_dates"></div><div><span class="certification"></span><span>Digital</span></div></div></li>');


        var month=['January','February','March','April','May','June','July','August','September','October','November','December'];

        var year_number=data.results[20].release_dates[i].release_date.substring(0,4);
        var month_number=data.results[20].release_dates[i].release_date.substring(5,7)-1;
        var date_number=data.results[20].release_dates[i].release_date.substring(8,10);


        var time=month[month_number]+" "+date_number+", "+year_number;

        $('.release_date_info').find('.release_dates').eq(i).html(time);

        if(data.results[20].release_dates[i].certification==""){
            $('.release_date_info').find('.certification').eq(i).css('display','none');
        }else{
            $('.release_date_info').find('.certification').eq(i).html(data.results[20].release_dates[i].certification);
        }

    }



});








/****videos****/

$.getJSON("https://api.themoviedb.org/3/movie/335983/videos?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US", function(data){



    $('.expand_trailer').children('iframe').attr('src','https://www.youtube.com/embed/'+data.results[2].key);


});



/**expand**/
$(document).ready(function(){

    var width1=($(window).width()-746)/2;
    var height1=($(window).height()-578)/2;

    var width2=($(window).width()-972)/2;
    var height2=($(window).height()-524)/2;

    $('.expand_details').css('left',width1).css('top',height1);
    $('.expand_trailer').css('left',width2).css('top',height2);

});

$('.details_left_img').click(function(){

    $('.expand_details').css('display','block');

    $('.expand_mask').css('display','block');


});

$('.expand_info_close').click(function(){

    $('.expand_details').css('display','none');

    $('.expand_mask').css('display','none');


});

$('.expand_mask').click(function(){

    $(this).css('display','none');

    $('.expand_details').css('display','none');
    $('.expand_trailer').css('display','none');


});



$('.detail_play_trailer').click(function(){

    $('.expand_trailer').css('display','block');

    $('.expand_mask').css('display','block');


});

$('.expand_trailer_close').click(function(){

    $('.expand_trailer').css('display','none');

    $('.expand_mask').css('display','none');


});



$('.detail_media_top').children('ul').children('li').mousemove(function(){
    $(this).children(".detail_media_underline").css('display','block');
    $(this).children(".detail_media_top_options").css('display','block');
});

$('.detail_media_top').children('ul').children('li').mouseout(function(){
    $(this).children(".detail_media_underline").css('display','none');
    $(this).children(".detail_media_top_options").css('display','none');
});





$(window).load(function (){

    $('.change_review').children('div').css('display','none');

    $(this).children('div').css('display','block');

    var randomNumber=Math.floor( (Math.random() * 3 -1)+1  );


    var color_random = ['#000','#e4393c','#999'];

    var color_final=color_random[randomNumber];

    $.getJSON("https://api.themoviedb.org/3/movie/335983/reviews?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){



        $('.review_profile').css('background-color',color_final);

        $('.review_by').html('A Review By'+data.results[randomNumber].author);

        $('.review_content_all').html('A Review By'+data.results[randomNumber].content);

        if(data.results[randomNumber].author=='javajohnny'){
            $('.review_rate').html('7.0');
            $('.written_date').html('Written by'+data.results[randomNumber].author+'on October 30,2018');
        }

        else if(data.results[randomNumber].author=='gurteksingh'){
            $('.review_rate').html('7.0');
            $('.written_date').html('Written by'+data.results[randomNumber].author+'on October 27,2018');
        }

        else if(data.results[randomNumber].author=='Gimly'){
            $('.review_rate').html('6.0');

            $('.written_date').html('Written by'+data.results[randomNumber].author+'on October 26,2018');
        }

    });

});



/****************************review*************************/
$('.change_review').click(function(){
    $('.change_review').children('div').css('display','none');

    $(this).children('div').css('display','block');

    var randomNumber=Math.floor( (Math.random() * 3 -1)+1  );


    var color_random = ['#000','#e4393c','#999'];

    var color_final=color_random[randomNumber];



    $.getJSON("https://api.themoviedb.org/3/movie/335983/reviews?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){



        $('.review_profile').css('background-color',color_final);

        $('.review_by').html('A Review By'+data.results[randomNumber].author);

        $('.review_content_all').html('A Review By'+data.results[randomNumber].content);

        if(data.results[randomNumber].author=='javajohnny'){
            $('.review_rate').html('7.0');
            $('.written_date').html('Written by'+data.results[randomNumber].author+'on October 30,2018');
        }

        else if(data.results[randomNumber].author=='gurteksingh'){
            $('.review_rate').html('7.0');
            $('.written_date').html('Written by'+data.results[randomNumber].author+'on October 27,2018');
        }

        else if(data.results[randomNumber].author=='Gimly'){
            $('.review_rate').html('6.0');

            $('.written_date').html('Written by'+data.results[randomNumber].author+'on October 26,2018');
        }

    });

});









////////////similar_videos//////////////////////


$.getJSON("https://api.themoviedb.org/3/movie/335983/similar?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){


    for(var i=0; i<8; i++) {

        $('.similar_videos_content_frame').append('<div class="similar_video_details"><div><img src="" alt=""></div><div class="similar_video_details_bottom"><div></div><div><span></span><i class="fas fa-star"></i></div></div></div>\n');


        $('.similar_videos_content_frame').find('.similar_video_details').eq(i).find('img').attr('src','https://image.tmdb.org/t/p/w250_and_h141_face'+data.results[i].poster_path);


        $('.similar_videos_content_frame').find('.similar_video_details').eq(i).find('.similar_video_details_bottom').children('div:first-child').html(data.results[i].original_title);


        $('.similar_videos_content_frame').find('.similar_video_details').eq(i).find('span').html(data.results[i].vote_average);


    }



});














