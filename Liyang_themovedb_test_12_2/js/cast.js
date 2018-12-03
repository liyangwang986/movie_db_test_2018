
///////tom///////

$.getJSON("https://api.themoviedb.org/3/person/2524?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US", function(data){


    $('.tom_first_left').children('img').attr('src','https://image.tmdb.org/t/p/w300_and_h450_bestv2/'+data.profile_path);

    $('.tom_first_right').children('div:first-child').children('h2').html(data.name);

    $('.tom_first_right').children('div:nth-child(3)').html(data.biography);

    $('.tom_third_left').children('div:nth-child(3)').html(data.known_for_department);

    var gender=['female','male'];
    $('.tom_third_left').children('div:nth-child(5)').html(gender[data.gender-1]);

    $('.tom_third_left').children('div:nth-child(9)').html(data.birthday);

    $('.tom_third_left').children('div:nth-child(11)').html(data.place_of_birth);

    $('.tom_third_left').children('a:nth-child(13)').html(data.homepage);
    $('.tom_third_left').children('a:nth-child(13)').attr('href',data.homepage);



    for(var i=0; i<data.also_known_as.length; i++) {

        $('.also_known').append('<li></li>');
        $('.also_known').children('li').eq(i).html(data.also_known_as[i]);

    }


});



///////details////////

$.getJSON("https://api.themoviedb.org/3/person/2524/movie_credits?api_key=ddb907d69f1671fabdfd75c40b664a37", function(data){

    console.log(data);

    for(var i=0; i<8; i++) {

        $('.tom_third_right').children('ul:nth-child(2)').append('<li><a href="#"><img src=""></a><p></p></li>');
        $('.tom_third_right').children('ul:nth-child(2)').children('li').eq(i).find('img').attr('src','https://image.tmdb.org/t/p/w150_and_h225_bestv2'+data.cast[i].poster_path);
        $('.tom_third_right').children('ul:nth-child(2)').children('li').eq(i).find('p').html(data.cast[i].title);
    }


    console.log('haha');
    console.log(data.cast[0].release_date.substring(0,4));
    console.log(data.cast.length);
    console.log(data.cast[42].release_date);

    /**none**/

    var none_number=-1;

    for(var i=0; i<data.cast.length; i++) {

        if(data.cast[i].release_date==""){

            none_number++;

            $('.acting_none').append('<div><p></p><p><i class="far fa-dot-circle"></i></p><p></p><p></p></div>');

            $('.acting_none').find('div').eq(none_number).children('P:first-child').html('—');

            $('.acting_none').find('div').eq(none_number).children('P:nth-child(3)').html(data.cast[i].title);

            if(data.cast[i].character==""){
                $('.acting_none').find('div').eq(none_number).children('P:nth-child(4)').html('');
            }else{
                $('.acting_none').find('div').eq(none_number).children('P:nth-child(4)').html(' as '+data.cast[i].character);
            }
        }
    }


    /**year_2019**/

    var number_2019=-1;

    for(var i=0; i<data.cast.length; i++) {
        var year=data.cast[i].release_date;


        if(year!=null&&typeof(year)!=undefined&&year!=''){

           var year_right=year.substring(0,4);
           if(year_right=='2019'){

               number_2019++;

               $('.year_2019').append('<div><p></p><p><i class="far fa-dot-circle"></i></p><p></p><p></p></div>');

               $('.year_2019').find('div').eq(number_2019).children('P:first-child').html(year_right);

               $('.year_2019').find('div').eq(number_2019).children('P:nth-child(3)').html(data.cast[i].title);

               $('.year_2019').find('div').eq(number_2019).children('P:nth-child(4)').html(' as '+data.cast[i].character);

           }
        }
    }


    /**year_2018**/

    var number_2018=-1;

    for(var i=0; i<data.cast.length; i++) {
        var year=data.cast[i].release_date;


        if(year!=null&&typeof(year)!=undefined&&year!=''){

            var year_right=year.substring(0,4);
            if(year_right=='2018'){

                number_2018++;

                $('.year_2018').append('<div><p></p><p><i class="far fa-dot-circle"></i></p><p></p><p></p></div>');

                $('.year_2018').find('div').eq(number_2018).children('P:first-child').html(year_right);

                $('.year_2018').find('div').eq(number_2018).children('P:nth-child(3)').html(data.cast[i].title);

                $('.year_2018').find('div').eq(number_2018).children('P:nth-child(4)').html(' as '+data.cast[i].character);

            }
        }
    }


    /**year_2017**/

    var number_2017=-1;

    for(var i=0; i<data.cast.length; i++) {
        var year=data.cast[i].release_date;


        if(year!=null&&typeof(year)!=undefined&&year!=''){

            var year_right=year.substring(0,4);
            if(year_right=='2017'){

                number_2017++;

                $('.year_2017').append('<div><p></p><p><i class="far fa-dot-circle"></i></p><p></p><p></p></div>');

                $('.year_2017').find('div').eq(number_2017).children('P:first-child').html(year_right);

                $('.year_2017').find('div').eq(number_2017).children('P:nth-child(3)').html(data.cast[i].title);

                $('.year_2017').find('div').eq(number_2017).children('P:nth-child(4)').html(' as '+data.cast[i].character);

            }
        }
    }



    /**year_2015**/

    var number_2015=-1;

    for(var i=0; i<data.cast.length; i++) {
        var year=data.cast[i].release_date;


        if(year!=null&&typeof(year)!=undefined&&year!=''){

            var year_right=year.substring(0,4);
            if(year_right=='2015'){

                number_2015++;

                $('.year_2015').append('<div><p></p><p><i class="far fa-dot-circle"></i></p><p></p><p></p></div>');

                $('.year_2015').find('div').eq(number_2015).children('P:first-child').html(year_right);

                $('.year_2015').find('div').eq(number_2015).children('P:nth-child(3)').html(data.cast[i].title);

                $('.year_2015').find('div').eq(number_2015).children('P:nth-child(4)').html(' as '+data.cast[i].character);

            }
        }
    }



    /**year_2014**/

    var number_2014=-1;

    for(var i=0; i<data.cast.length; i++) {
        var year=data.cast[i].release_date;


        if(year!=null&&typeof(year)!=undefined&&year!=''){

            var year_right=year.substring(0,4);
            if(year_right=='2014'){

                number_2014++;

                $('.year_2014').append('<div><p></p><p><i class="far fa-dot-circle"></i></p><p></p><p></p></div>');

                $('.year_2014').find('div').eq(number_2014).children('P:first-child').html(year_right);

                $('.year_2014').find('div').eq(number_2014).children('P:nth-child(3)').html(data.cast[i].title);

                $('.year_2014').find('div').eq(number_2014).children('P:nth-child(4)').html(' as '+data.cast[i].character);

            }
        }
    }



    /**year_2012**/

    var number_2012=-1;

    for(var i=0; i<data.cast.length; i++) {
        var year=data.cast[i].release_date;


        if(year!=null&&typeof(year)!=undefined&&year!=''){

            var year_right=year.substring(0,4);
            if(year_right=='2012'){

                number_2012++;

                $('.year_2012').append('<div><p></p><p><i class="far fa-dot-circle"></i></p><p></p><p></p></div>');

                $('.year_2012').find('div').eq(number_2012).children('P:first-child').html(year_right);

                $('.year_2012').find('div').eq(number_2012).children('P:nth-child(3)').html(data.cast[i].title);

                $('.year_2012').find('div').eq(number_2012).children('P:nth-child(4)').html(' as '+data.cast[i].character);

            }
        }
    }

    /**year_2011**/

    var number_2011=-1;

    for(var i=0; i<data.cast.length; i++) {
        var year=data.cast[i].release_date;


        if(year!=null&&typeof(year)!=undefined&&year!=''){

            var year_right=year.substring(0,4);
            if(year_right=='2011'){

                number_2011++;

                $('.year_2011').append('<div><p></p><p><i class="far fa-dot-circle"></i></p><p></p><p></p></div>');

                $('.year_2011').find('div').eq(number_2011).children('P:first-child').html(year_right);

                $('.year_2011').find('div').eq(number_2011).children('P:nth-child(3)').html(data.cast[i].title);

                $('.year_2011').find('div').eq(number_2011).children('P:nth-child(4)').html(' as '+data.cast[i].character);

            }
        }
    }

    /**year_2010**/

    var number_2010=-1;

    for(var i=0; i<data.cast.length; i++) {
        var year=data.cast[i].release_date;


        if(year!=null&&typeof(year)!=undefined&&year!=''){

            var year_right=year.substring(0,4);
            if(year_right=='2010'){

                number_2010++;

                $('.year_2010').append('<div><p></p><p><i class="far fa-dot-circle"></i></p><p></p><p></p></div>');

                $('.year_2010').find('div').eq(number_2010).children('P:first-child').html(year_right);

                $('.year_2010').find('div').eq(number_2010).children('P:nth-child(3)').html(data.cast[i].title);

                $('.year_2010').find('div').eq(number_2010).children('P:nth-child(4)').html(' as '+data.cast[i].character);

            }
        }
    }



    /**year_2009**/

    var number_2009=-1;

    for(var i=0; i<data.cast.length; i++) {
        var year=data.cast[i].release_date;


        if(year!=null&&typeof(year)!=undefined&&year!=''){

            var year_right=year.substring(0,4);
            if(year_right=='2009'){

                number_2009++;

                $('.year_2009').append('<div><p></p><p><i class="far fa-dot-circle"></i></p><p></p><p></p></div>');

                $('.year_2009').find('div').eq(number_2009).children('P:first-child').html(year_right);

                $('.year_2009').find('div').eq(number_2009).children('P:nth-child(3)').html(data.cast[i].title);

                $('.year_2009').find('div').eq(number_2009).children('P:nth-child(4)').html(' as '+data.cast[i].character);

            }
        }
    }

    /**year_2008**/

    var number_2008=-1;

    for(var i=0; i<data.cast.length; i++) {
        var year=data.cast[i].release_date;


        if(year!=null&&typeof(year)!=undefined&&year!=''){

            var year_right=year.substring(0,4);
            if(year_right=='2008'){

                number_2008++;

                $('.year_2008').append('<div><p></p><p><i class="far fa-dot-circle"></i></p><p></p><p></p></div>');

                $('.year_2008').find('div').eq(number_2008).children('P:first-child').html(year_right);

                $('.year_2008').find('div').eq(number_2008).children('P:nth-child(3)').html(data.cast[i].title);

                $('.year_2008').find('div').eq(number_2008).children('P:nth-child(4)').html(' as '+data.cast[i].character);

            }
        }
    }


    /**year_2007**/

    var number_2007=-1;

    for(var i=0; i<data.cast.length; i++) {
        var year=data.cast[i].release_date;


        if(year!=null&&typeof(year)!=undefined&&year!=''){

            var year_right=year.substring(0,4);
            if(year_right=='2007'){

                number_2007++;

                $('.year_2007').append('<div><p></p><p><i class="far fa-dot-circle"></i></p><p></p><p></p></div>');

                $('.year_2007').find('div').eq(number_2007).children('P:first-child').html(year_right);

                $('.year_2007').find('div').eq(number_2007).children('P:nth-child(3)').html(data.cast[i].title);

                $('.year_2007').find('div').eq(number_2007).children('P:nth-child(4)').html(' as '+data.cast[i].character);

            }
        }
    }


    /**year_2006**/

    var number_2006=-1;

    for(var i=0; i<data.cast.length; i++) {
        var year=data.cast[i].release_date;


        if(year!=null&&typeof(year)!=undefined&&year!=''){

            var year_right=year.substring(0,4);
            if(year_right=='2006'){

                number_2006++;

                $('.year_2006').append('<div><p></p><p><i class="far fa-dot-circle"></i></p><p></p><p></p></div>');

                $('.year_2006').find('div').eq(number_2006).children('P:first-child').html(year_right);

                $('.year_2006').find('div').eq(number_2006).children('P:nth-child(3)').html(data.cast[i].title);

                $('.year_2006').find('div').eq(number_2006).children('P:nth-child(4)').html(' as '+data.cast[i].character);

            }
        }
    }



    /**year_2005**/

    var number_2005=-1;

    for(var i=0; i<data.cast.length; i++) {
        var year=data.cast[i].release_date;


        if(year!=null&&typeof(year)!=undefined&&year!=''){

            var year_right=year.substring(0,4);
            if(year_right=='2005'){

                number_2005++;

                $('.year_2005').append('<div><p></p><p><i class="far fa-dot-circle"></i></p><p></p><p></p></div>');

                $('.year_2005').find('div').eq(number_2005).children('P:first-child').html(year_right);

                $('.year_2005').find('div').eq(number_2005).children('P:nth-child(3)').html(data.cast[i].title);

                $('.year_2005').find('div').eq(number_2005).children('P:nth-child(4)').html(' as '+data.cast[i].character);

            }
        }
    }


    /**year_2004**/

    var number_2004=-1;

    for(var i=0; i<data.cast.length; i++) {
        var year=data.cast[i].release_date;


        if(year!=null&&typeof(year)!=undefined&&year!=''){

            var year_right=year.substring(0,4);
            if(year_right=='2004'){

                number_2004++;

                $('.year_2004').append('<div><p></p><p><i class="far fa-dot-circle"></i></p><p></p><p></p></div>');

                $('.year_2004').find('div').eq(number_2004).children('P:first-child').html(year_right);

                $('.year_2004').find('div').eq(number_2004).children('P:nth-child(3)').html(data.cast[i].title);

                $('.year_2004').find('div').eq(number_2004).children('P:nth-child(4)').html(' as '+data.cast[i].character);

            }
        }
    }


    /**year_2003**/

    var number_2003=-1;

    for(var i=0; i<data.cast.length; i++) {
        var year=data.cast[i].release_date;


        if(year!=null&&typeof(year)!=undefined&&year!=''){

            var year_right=year.substring(0,4);
            if(year_right=='2003'){

                number_2003++;

                $('.year_2003').append('<div><p></p><p><i class="far fa-dot-circle"></i></p><p></p><p></p></div>');

                $('.year_2003').find('div').eq(number_2003).children('P:first-child').html(year_right);

                $('.year_2003').find('div').eq(number_2003).children('P:nth-child(3)').html(data.cast[i].title);

                $('.year_2003').find('div').eq(number_2003).children('P:nth-child(4)').html(' as '+data.cast[i].character);

            }
        }
    }

    /**year_2002**/

    var number_2002=-1;

    for(var i=0; i<data.cast.length; i++) {
        var year=data.cast[i].release_date;


        if(year!=null&&typeof(year)!=undefined&&year!=''){

            var year_right=year.substring(0,4);
            if(year_right=='2002'){

                number_2002++;

                $('.year_2002').append('<div><p></p><p><i class="far fa-dot-circle"></i></p><p></p><p></p></div>');

                $('.year_2002').find('div').eq(number_2002).children('P:first-child').html(year_right);

                $('.year_2002').find('div').eq(number_2002).children('P:nth-child(3)').html(data.cast[i].title);

                $('.year_2002').find('div').eq(number_2002).children('P:nth-child(4)').html(' as '+data.cast[i].character);

            }
        }
    }



    /**year_2001**/

    var number_2001=-1;

    for(var i=0; i<data.cast.length; i++) {
        var year=data.cast[i].release_date;


        if(year!=null&&typeof(year)!=undefined&&year!=''){

            var year_right=year.substring(0,4);
            if(year_right=='2001'){

                number_2001++;

                $('.year_2001').append('<div><p></p><p><i class="far fa-dot-circle"></i></p><p></p><p></p></div>');

                $('.year_2001').find('div').eq(number_2001).children('P:first-child').html(year_right);

                $('.year_2001').find('div').eq(number_2001).children('P:nth-child(3)').html(data.cast[i].title);

                $('.year_2001').find('div').eq(number_2001).children('P:nth-child(4)').html(' as '+data.cast[i].character);

            }
        }
    }






    /////////////////////////production//////////////////////


    /**none**/

    var production_none=-1;

    for(var i=0; i<data.crew.length; i++) {

        if(data.crew[i].release_date==""){

            production_none++;

            $('.production_none').append('<div><p></p><p><i class="far fa-dot-circle"></i></p><p></p><p></p></div>');

            $('.production_none').find('div').eq(production_none).children('P:first-child').html('—');

            $('.production_none').find('div').eq(production_none).children('P:nth-child(3)').html(data.crew[i].original_title);

            if(data.crew[i].character==""){
                $('.production_none').find('div').eq(production_none).children('P:nth-child(4)').html('');
            }else{
                $('.production_none').find('div').eq(production_none).children('P:nth-child(4)').html(' ... '+data.crew[i].job);
            }
        }
    }


    /**2018**/

    var production_2018=-1;

    for(var i=0; i<data.crew.length; i++) {
        var year=data.crew[i].release_date;


        if(year!=null&&typeof(year)!=undefined&&year!=''){

            var year_right=year.substring(0,4);
            if(year_right=='2018'){

                production_2018++;

                $('.production_2018').append('<div><p></p><p><i class="far fa-dot-circle"></i></p><p></p><p></p></div>');

                $('.production_2018').find('div').eq(production_2018).children('P:first-child').html(year_right);

                $('.production_2018').find('div').eq(production_2018).children('P:nth-child(3)').html(data.crew[i].original_title);

                $('.production_2018').find('div').eq(production_2018).children('P:nth-child(4)').html(' as '+data.crew[i].job);

            }
        }
    }


    /**2015**/

    var production_2015=-1;

    for(var i=0; i<data.crew.length; i++) {
        var year=data.crew[i].release_date;


        if(year!=null&&typeof(year)!=undefined&&year!=''){

            var year_right=year.substring(0,4);
            if(year_right=='2015'){

                production_2015++;

                $('.production_2015').append('<div><p></p><p><i class="far fa-dot-circle"></i></p><p></p><p></p></div>');

                $('.production_2015').find('div').eq(production_2015).children('P:first-child').html(year_right);

                $('.production_2015').find('div').eq(production_2015).children('P:nth-child(3)').html(data.crew[i].original_title);

                $('.production_2015').find('div').eq(production_2015).children('P:nth-child(4)').html(' as '+data.crew[i].job);

            }
        }
    }











});



//////underline///////

$('.tom_second_content').find("li").mousemove(function(){
    $(this).children("a").css('color','#bbb');
    $(this).find(".tom_content_underline").css('display','block');
    $(this).children('ul').css('display','block');
});

$('.tom_second_content').find("li").mouseout(function(){
    $(this).children("a").css('color','black');
    $(this).find(".tom_content_underline").css('display','none');
    $(this).children('ul').css('display','none');
});