
/*****top_left****/
$('.sub_media_left').children("ul").children("li").mousemove(function(){
    $(this).children("div").children("ul").css('display','block');
});

$('.sub_media_left').children("ul").children("li").mouseout(function(){
    $(this).children("div").children("ul").css('display','none');
});


/**top_right**/
$('.movie_plus').mousemove(function(){
    $(this).children("div").css('display','block');
    $(this).children("a").css('border','1px solid #000000')
                           .css('border-radius','3px')
                            .css('border-bottom','none')
                            .css('border-bottom-left-radius','0')
                            .css('border-bottom-right-radius','0')
                            .css('background','-webkit-linear-gradient(top,rgb(13,41,52),rgb(8,28,36))')
                            .css('background','-moz-linear-gradient(top,rgb(13,41,52),rgb(8,28,36))')
                            .css('background','-o-linear-gradient(top,rgb(13,41,52),rgb(8,28,36))');
});

$('.movie_plus').mouseout(function(){
    $(this).children("div").css('display','none');
    $(this).children("a").css('border','1px solid rgba(0,0,0,0)')
        .css('background','none');
});


/******search_bar******/
$('#mdb_search').focus(function(){
    $('.search_bar_list').css('display','block');
    $('.search_bar').children('span:last-child').css('display','inline-block');
});

$('.fa-times').click(function(){
    $('.search_bar_list').css('display','none');
    $('.search_bar').children('span:last-child').css('display','none');
});

$('.header_top').click(function(){
    $('.search_bar_list').css('display','none');
    $('.search_bar').children('span:last-child').css('display','none');
});

$('.mdb_home_content').click(function(){
    $('.search_bar_list').css('display','none');
    $('.search_bar').children('span:last-child').css('display','none');
});

$('.mdb_footer').click(function(){
    $('.search_bar_list').css('display','none');
    $('.search_bar').children('span:last-child').css('display','none');
});



////////////////////////////////top///////////////////////////////////////

window.onscroll=function(){
    //var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
    var h=parseFloat(Math.max(document.body.scrollTop,document.documentElement.scrollTop));
    if(h>=50){
        $('.sub_media_right_top').css('display','none');
        $('.sub_media_left_list').children('li:first-child').children('a').css('width','45px').css('height','40px');
        $('.header_top').css('height','64px');
        $('.sub_media_left').css('height','64px').css('top','-3px');
        $('.sub_media_right').css('height','64px').css('top','8px');
        $('.sub_media_left_list').children('li').css('line-height','64px').css('height','64px');
        $('.movie_db_logo').css('top','15px');
        $('.sub_media_left_list').children('li').children('div').css('display','none');
        $('.sub_media').css('top','0');
        $('.search_bar_list').css('top','100px');
    }else{
        $('.sub_media_right_top').css('display','block');
        $('.sub_media_left_list').children('li:first-child').children('a').css('width','81px').css('height','72px');
        $('.header_top').css('height','111px');
        $('.sub_media_left').css('height','72px').css('top','0');
        $('.sub_media_right').css('height','64px').css('top','0');
        $('.sub_media_left_list').children('li').css('line-height','70px').css('height','64px');
        $('.movie_db_logo').css('top','0');
        $('.sub_media_left_list').children('li').children('div').css('display','block');
        $('.sub_media').css('top','19.5px');
        $('.search_bar_list').css('top','147px');
    }
};




/////////////////////////////footer//////////////////////////////////////
var randomFooterBgNumber =['https://www.themoviedb.org/assets/1/v4/footers_v2/TheDarkKnight-7bc76e8795dbf0a2ac7995f4e47f330ba3d4a58ffe952ab86582f666ab0215e9.jpg',
                        'https://www.themoviedb.org/assets/1/v4/footers_v2/TheMartian-cef692c96b25ed627cb2cc6b2762858b6f047550f28916d17acb37f418a7ac0d.jpg',
                        'https://www.themoviedb.org/assets/1/v4/footers_v2/IndianaJones-9f4b6f02f597ecfd9d4fc026359a105e483b129254a0e8d07870169561bff8ec.jpg',
                        'https://www.themoviedb.org/assets/1/v4/footers_v2/MrRobot-b40ea33e538ff2a92acf477a0de603681597455c74e27ccb00d9001cb08b2f72.jpg',
                        'https://www.themoviedb.org/assets/1/v4/footers_v2/BreakingBad-0541701c71d1c77aae2d4487be97b9a879fc41e881911fd3d32558f1f5f75d44.jpg',
                        'https://www.themoviedb.org/assets/1/v4/footers_v2/ToyStory-8a52629a740122f599c3d21599897a219ecb936efd6131b0a4667103ffff6375.jpg',
                        'https://www.themoviedb.org/assets/1/v4/footers_v2/GameOfThrones-dc37cf50a3cb2df1e837832f719996ec737c9e58cf0328f2302f1497859ad41c.jpg',
                        'https://www.themoviedb.org/assets/1/v4/footers_v2/FamilyGuy-157ce987f45266a74584f1b695db2e23edb6e14b600bdd8ea1aa27edd710a3fb.jpg',
                        'https://www.themoviedb.org/assets/1/v4/footers_v2/Jaws-0738d22d1f7eb26437e4f410d42ce2239b34688ad972da1155989e0a9de121ac.jpg'
                        ];

var randomNumber=Math.floor( (Math.random() * randomFooterBgNumber.length -1)+1  );

var randomFooterBg=randomFooterBgNumber[randomNumber];

$(window).load(function (){
    $('.mdb_footer').css('background-image','url("'+randomFooterBg+'")');
});



$.getJSON("https://api.themoviedb.org/3/movie/335983?api_key=ddb907d69f1671fabdfd75c40b664a37&append_to_response=credits", function(data){



    $('.movie_top_img').attr('src','https://image.tmdb.org/t/p/w58_and_h87_bestv2/'+data.poster_path);

    $('.movie_top_right').children('h2').children('a').html(data.original_title);

    var year_number=data.release_date.substring(0,4);

    $('.movie_top_right').children('span').html('('+year_number+')');
});






