$.getJSON("https://api.themoviedb.org/3/movie/335983?api_key=ddb907d69f1671fabdfd75c40b664a37&append_to_response=credits", function(data){


    $('.main_cast').children('div').children('span:nth-child(2)').html(data.credits.cast.length);

    $('.main_crew').children('div').children('span:nth-child(2)').html(data.credits.crew.length);

    console.log(data.credits.crew);

    /**crew**/

    /**art**/

    var art_number=-1;

    for(var i=0; i<data.credits.crew.length; i++) {

        if(data.credits.crew[i].department=="Art"){

            art_number++;

            $('.art').append('<li><a href=""><img src=""></a><div><span class="crew_name"></span><span class="crew_job"></span></div></li>');

            if(data.credits.crew[i].profile_path == null){
                $('.art').find('a').eq(art_number).css('background-color','#cccccc');
            }
            else{
                $('.art').find('img').eq(art_number).attr('src','https://image.tmdb.org/t/p/w138_and_h175_face/'+data.credits.crew[i].profile_path);
            }

            $('.art').find('.crew_name').eq(art_number).html(data.credits.crew[i].name);

            $('.art').find('.crew_job').eq(art_number).html(data.credits.crew[i].job);
        }
    }



    /**camera**/

    var camera_number=-1;

    for(var i=0; i<data.credits.crew.length; i++) {

        if(data.credits.crew[i].department=="Camera"){

            camera_number++;

            $('.Camera').append('<li><a href=""><img src=""></a><div><span class="crew_name"></span><span class="crew_job"></span></div></li>');

            if(data.credits.crew[i].profile_path == null){
                $('.Camera').find('a').eq(camera_number).css('background-color','#cccccc');
            }
            else{
                $('.Camera').find('img').eq(camera_number).attr('src','https://image.tmdb.org/t/p/w138_and_h175_face/'+data.credits.crew[i].profile_path);
            }

            $('.Camera').find('.crew_name').eq(camera_number).html(data.credits.crew[i].name);

            $('.Camera').find('.crew_job').eq(camera_number).html(data.credits.crew[i].job);
        }
    }



    /**Costume_&_Make-Up**/

    var Costume_number=-1;

    for(var i=0; i<data.credits.crew.length; i++) {

        if(data.credits.crew[i].department=="Costume & Make-Up"){

            Costume_number++;

            $('.Costume').append('<li><a href=""><img src=""></a><div><span class="crew_name"></span><span class="crew_job"></span></div></li>');

            if(data.credits.crew[i].profile_path == null){
                $('.Costume').find('a').eq(Costume_number).css('background-color','#cccccc');
            }
            else{
                $('.Costume').find('img').eq(Costume_number).attr('src','https://image.tmdb.org/t/p/w138_and_h175_face/'+data.credits.crew[i].profile_path);
            }

            $('.Costume').find('.crew_name').eq(Costume_number).html(data.credits.crew[i].name);

            $('.Costume').find('.crew_job').eq(Costume_number).html(data.credits.crew[i].job);
        }
    }


    /**Directing**/

    var Directing_number=-1;

    for(var i=0; i<data.credits.crew.length; i++) {

        if(data.credits.crew[i].department=="Directing"){

            Directing_number++;

            $('.Directing').append('<li><a href=""><img src=""></a><div><span class="crew_name"></span><span class="crew_job"></span></div></li>');

            if(data.credits.crew[i].profile_path == null){
                $('.Directing').find('a').eq(Directing_number).css('background-color','#cccccc');
            }
            else{
                $('.Directing').find('img').eq(Directing_number).attr('src','https://image.tmdb.org/t/p/w138_and_h175_face/'+data.credits.crew[i].profile_path);
            }

            $('.Directing').find('.crew_name').eq(Directing_number).html(data.credits.crew[i].name);

            $('.Directing').find('.crew_job').eq(Directing_number).html(data.credits.crew[i].job);
        }
    }


    /**Editing**/

    var Editing_number=-1;

    for(var i=0; i<data.credits.crew.length; i++) {

        if(data.credits.crew[i].department=="Editing"){

            Directing_number++;

            $('.Editing').append('<li><a href=""><img src=""></a><div><span class="crew_name"></span><span class="crew_job"></span></div></li>');

            if(data.credits.crew[i].profile_path == null){
                $('.Editing').find('a').eq(Editing_number).css('background-color','#cccccc');
            }
            else{
                $('.Editing').find('img').eq(Editing_number).attr('src','https://image.tmdb.org/t/p/w138_and_h175_face/'+data.credits.crew[i].profile_path);
            }

            $('.Editing').find('.crew_name').eq(Editing_number).html(data.credits.crew[i].name);

            $('.Editing').find('.crew_job').eq(Editing_number).html(data.credits.crew[i].job);
        }
    }



    /**Production**/

    var Production_number=-1;

    for(var i=0; i<data.credits.crew.length; i++) {

        if(data.credits.crew[i].department=="Production"){

            Production_number++;

            $('.Production').append('<li><a href=""><img src=""></a><div><span class="crew_name"></span><span class="crew_job"></span></div></li>');

            if(data.credits.crew[i].profile_path == null){
                $('.Production').find('a').eq(Production_number).css('background-color','#cccccc');
            }
            else{
                $('.Production').find('img').eq(Production_number).attr('src','https://image.tmdb.org/t/p/w138_and_h175_face/'+data.credits.crew[i].profile_path);
            }

            $('.Production').find('.crew_name').eq(Production_number).html(data.credits.crew[i].name);

            $('.Production').find('.crew_job').eq(Production_number).html(data.credits.crew[i].job);
        }
    }


    /**Sound**/

    var Sound_number=-1;

    for(var i=0; i<data.credits.crew.length; i++) {

        if(data.credits.crew[i].department=="Sound"){

            Sound_number++;

            $('.Sound').append('<li><a href=""><img src=""></a><div><span class="crew_name"></span><span class="crew_job"></span></div></li>');

            if(data.credits.crew[i].profile_path == null){
                $('.Sound').find('a').eq(Sound_number).css('background-color','#cccccc');
            }
            else{
                $('.Sound').find('img').eq(Sound_number).attr('src','https://image.tmdb.org/t/p/w138_and_h175_face/'+data.credits.crew[i].profile_path);
            }

            $('.Sound').find('.crew_name').eq(Sound_number).html(data.credits.crew[i].name);

            $('.Sound').find('.crew_job').eq(Sound_number).html(data.credits.crew[i].job);
        }
    }



    /**Sound**/

    var Visual_Effects_number=-1;

    for(var i=0; i<data.credits.crew.length; i++) {

        if(data.credits.crew[i].department=="Visual Effects"){

            Visual_Effects_number++;

            $('.Visual_Effects').append('<li><a href=""><img src=""></a><div><span class="crew_name"></span><span class="crew_job"></span></div></li>');

            if(data.credits.crew[i].profile_path == null){
                $('.Visual_Effects').find('a').eq(Visual_Effects_number).css('background-color','#cccccc');
            }
            else{
                $('.Visual_Effects').find('img').eq(Visual_Effects_number).attr('src','https://image.tmdb.org/t/p/w138_and_h175_face/'+data.credits.crew[i].profile_path);
            }

            $('.Visual_Effects').find('.crew_name').eq(Visual_Effects_number).html(data.credits.crew[i].name);

            $('.Visual_Effects').find('.crew_job').eq(Visual_Effects_number).html(data.credits.crew[i].job);
        }
    }


    /**Writing**/

    var Writing_number=-1;

    for(var i=0; i<data.credits.crew.length; i++) {

        if(data.credits.crew[i].department=="Writing"){

            Writing_number++;

            $('.Writing').append('<li><a href=""><img src=""></a><div><span class="crew_name"></span><span class="crew_job"></span></div></li>');

            if(data.credits.crew[i].profile_path == null){
                $('.Writing').find('a').eq(Writing_number).css('background-color','#cccccc');
            }
            else{
                $('.Writing').find('img').eq(Writing_number).attr('src','https://image.tmdb.org/t/p/w138_and_h175_face/'+data.credits.crew[i].profile_path);
            }

            $('.Writing').find('.crew_name').eq(Writing_number).html(data.credits.crew[i].name);

            $('.Writing').find('.crew_job').eq(Writing_number).html(data.credits.crew[i].job);
        }
    }








    /**cast**/

    for(var i=0; i<data.credits.cast.length; i++) {

        $('.cast_all').append('<li><a href="cast.html"><img src="" alt=""></a><div><span class="cast_name"></span><span class="cast_character"></span></div></li>');

        $('.cast_all').find('img').eq(i).attr('src','https://image.tmdb.org/t/p/w138_and_h175_face/'+data.credits.cast[i].profile_path);

        $('.cast_all').find('.cast_name').eq(i).html(data.credits.cast[i].name);

        $('.cast_all').find('.cast_character').eq(i).html(data.credits.cast[i].character);

        if(data.credits.cast[i].profile_path == null){
            $('.cast_all').find('a').eq(i).css('background-color','#cccccc');
        }
    }




});

