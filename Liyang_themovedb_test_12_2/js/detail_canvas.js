////////canvas/////////
function inte(percent) {
    var canvas_1 = document.querySelector('#canvas_detail1');
    var canvas_2 = document.querySelector('#canvas_detail2');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');
    ctx_1.lineWidth = 5;
    ctx_1.strokeStyle = "#ccc";
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    ctx_1.font = '10px Arial';
    ctx_1.fillStyle = 'white';
    ctx_1.fillText('%', 39, 25);
    if (percent < 0 || percent > 100) {
        throw new Error('percent must be between 0 and 100');
        return
    }
    ctx_2.lineWidth = 5;

    $.getJSON("https://api.themoviedb.org/3/movie/335983?api_key=ddb907d69f1671fabdfd75c40b664a37&append_to_response=credits", function(data){


        if (data.vote_average<7){
            ctx_2.strokeStyle = "#cdd030";
        }

        else{
            ctx_2.strokeStyle = "#00d573";
        }

    });

    var angle = 0;
    var timer;
    (function draw() {
        timer = requestAnimationFrame(draw);
        ctx_2.clearRect(0, 0, canvas_2.width, canvas_2.height);
        ctx_2.beginPath();
        ctx_2.arc(canvas_2.width / 2, canvas_2.height / 2, canvas_2.width / 2 - ctx_2.lineWidth / 2, 0, angle * Math.PI / 180, false);
        angle+=3;
        var percentAge = parseInt((angle / 360) * 100);
        if (angle > (percent / 100 * 360)) {
            percentAge = percent;
            window.cancelAnimationFrame(timer);
        };
        ctx_2.stroke();
        ctx_2.closePath();
        ctx_2.save();
        ctx_2.beginPath();
        ctx_2.rotate(90 * Math.PI / 180);
        ctx_2.font = '23px Arial';
        ctx_2.fillStyle = 'white';
        var text = percentAge;
        ctx_2.fillText(text, 13, -20);
        ctx_2.closePath();
        ctx_2.restore();
    })()
}

$.getJSON("https://api.themoviedb.org/3/movie/335983?api_key=ddb907d69f1671fabdfd75c40b664a37&append_to_response=credits", function(data){



    window.onload = inte(data.vote_average*10);



});