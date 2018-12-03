
/**rate1**/
function popular1(percent) {
    var canvas_1 = document.querySelector('#canvas_1');
    var canvas_2 = document.querySelector('#canvas_2');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');
    ctx_1.lineWidth = 3;
    ctx_1.strokeStyle = "#ccc";
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    ctx_1.font = '4px Arial';
    ctx_1.fillStyle = 'white';
    ctx_1.fillText('%',22, 14);
    if (percent < 0 || percent > 100) {
        throw new Error('percent must be between 0 and 100');
        return
    }
    ctx_2.lineWidth = 3;

    $.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){


        if (data.results[0].vote_average<7){
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
        ctx_2.clearRect(0, 0, canvas_2.width, canvas_2.height)
        ctx_2.beginPath();
        ctx_2.arc(canvas_2.width / 2, canvas_2.height / 2, canvas_2.width / 2 - ctx_2.lineWidth / 2, 0, angle * Math.PI / 180, false);
        angle+=3;
        var percentAge = parseInt((angle / 360) * 100)
        if (angle > (percent / 100 * 360)) {
            percentAge = percent
            window.cancelAnimationFrame(timer);
        };
        ctx_2.stroke();
        ctx_2.closePath();
        ctx_2.save();
        ctx_2.beginPath();
        ctx_2.rotate(90 * Math.PI / 180)
        ctx_2.font = '12px Arial';
        ctx_2.fillStyle = 'white';
        var text = percentAge;
        ctx_2.fillText(text, 8, -10);
        ctx_2.closePath();
        ctx_2.restore();
    })()
}

/**rate2**/
function popular2(percent) {
    var canvas_1 = document.querySelector('#canvas_3');
    var canvas_2 = document.querySelector('#canvas_4');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');
    ctx_1.lineWidth = 3;
    ctx_1.strokeStyle = "#ccc";
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    ctx_1.font = '4px Arial';
    ctx_1.fillStyle = 'white';
    ctx_1.fillText('%',22, 14);
    if (percent < 0 || percent > 100) {
        throw new Error('percent must be between 0 and 100');
        return
    }
    ctx_2.lineWidth = 3;

    $.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){


        if (data.results[1].vote_average<7){
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
        var percentAge = parseInt((angle / 360) * 100)
        if (angle > (percent / 100 * 360)) {
            percentAge = percent
            window.cancelAnimationFrame(timer);
        };
        ctx_2.stroke();
        ctx_2.closePath();
        ctx_2.save();
        ctx_2.beginPath();
        ctx_2.rotate(90 * Math.PI / 180);
        ctx_2.font = '12px Arial';
        ctx_2.fillStyle = 'white';
        var text = percentAge;
        ctx_2.fillText(text, 8, -10);
        ctx_2.closePath();
        ctx_2.restore();
    })()
}

/**rate3**/
function popular3(percent) {
    var canvas_1 = document.querySelector('#canvas_5');
    var canvas_2 = document.querySelector('#canvas_6');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');
    ctx_1.lineWidth = 3;
    ctx_1.strokeStyle = "#ccc";
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    ctx_1.font = '4px Arial';
    ctx_1.fillStyle = 'white';
    ctx_1.fillText('%',22, 14);
    if (percent < 0 || percent > 100) {
        throw new Error('percent must be between 0 and 100');
        return
    }
    ctx_2.lineWidth = 3;
    $.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){


        if (data.results[2].vote_average<7){
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
            percentAge = percent
            window.cancelAnimationFrame(timer);
        };
        ctx_2.stroke();
        ctx_2.closePath();
        ctx_2.save();
        ctx_2.beginPath();
        ctx_2.rotate(90 * Math.PI / 180);
        ctx_2.font = '12px Arial';
        ctx_2.fillStyle = 'white';
        var text = percentAge;
        ctx_2.fillText(text, 8, -10);
        ctx_2.closePath();
        ctx_2.restore();
    })()
}

/**rate4**/
function popular4(percent) {
    var canvas_1 = document.querySelector('#canvas_7');
    var canvas_2 = document.querySelector('#canvas_8');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');
    ctx_1.lineWidth = 3;
    ctx_1.strokeStyle = "#ccc";
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    ctx_1.font = '4px Arial';
    ctx_1.fillStyle = 'white';
    ctx_1.fillText('%',22, 14);
    if (percent < 0 || percent > 100) {
        throw new Error('percent must be between 0 and 100');
        return
    }
    ctx_2.lineWidth = 3;
    $.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){


        if (data.results[3].vote_average<7){
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
        ctx_2.font = '12px Arial';
        ctx_2.fillStyle = 'white';
        var text = percentAge;
        ctx_2.fillText(text, 8, -10);
        ctx_2.closePath();
        ctx_2.restore();
    })()
}

/**rate5**/
function popular5(percent) {
    var canvas_1 = document.querySelector('#canvas_9');
    var canvas_2 = document.querySelector('#canvas_10');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');
    ctx_1.lineWidth = 3;
    ctx_1.strokeStyle = "#ccc";
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    ctx_1.font = '4px Arial';
    ctx_1.fillStyle = 'white';
    ctx_1.fillText('%',22, 14);
    if (percent < 0 || percent > 100) {
        throw new Error('percent must be between 0 and 100');
        return
    }
    ctx_2.lineWidth = 3;
    $.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){


        if (data.results[4].vote_average<7){
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
        ctx_2.font = '12px Arial';
        ctx_2.fillStyle = 'white';
        var text = percentAge;
        ctx_2.fillText(text, 8, -10);
        ctx_2.closePath();
        ctx_2.restore();
    })()
}

/**rate6**/
function popular6(percent) {
    var canvas_1 = document.querySelector('#canvas_11');
    var canvas_2 = document.querySelector('#canvas_12');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');
    ctx_1.lineWidth = 3;
    ctx_1.strokeStyle = "#ccc";
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    ctx_1.font = '4px Arial';
    ctx_1.fillStyle = 'white';
    ctx_1.fillText('%',22, 14);
    if (percent < 0 || percent > 100) {
        throw new Error('percent must be between 0 and 100');
        return
    }
    ctx_2.lineWidth = 3;
    $.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){


        if (data.results[5].vote_average<7){
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
        ctx_2.font = '12px Arial';
        ctx_2.fillStyle = 'white';
        var text = percentAge;
        ctx_2.fillText(text, 8, -10);
        ctx_2.closePath();
        ctx_2.restore();
    })()
}

/**rate7**/
function popular7(percent) {
    var canvas_1 = document.querySelector('#canvas_13');
    var canvas_2 = document.querySelector('#canvas_14');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');
    ctx_1.lineWidth = 3;
    ctx_1.strokeStyle = "#ccc";
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    ctx_1.font = '4px Arial';
    ctx_1.fillStyle = 'white';
    ctx_1.fillText('%',22, 14);
    if (percent < 0 || percent > 100) {
        throw new Error('percent must be between 0 and 100');
        return
    }
    ctx_2.lineWidth = 3;
    $.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){


        if (data.results[6].vote_average<7){
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
        ctx_2.font = '12px Arial';
        ctx_2.fillStyle = 'white';
        var text = percentAge;
        ctx_2.fillText(text, 8, -10);
        ctx_2.closePath();
        ctx_2.restore();
    })()
}

/**rate8**/
function popular8(percent) {
    var canvas_1 = document.querySelector('#canvas_15');
    var canvas_2 = document.querySelector('#canvas_16');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');
    ctx_1.lineWidth = 3;
    ctx_1.strokeStyle = "#ccc";
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    ctx_1.font = '4px Arial';
    ctx_1.fillStyle = 'white';
    ctx_1.fillText('%',22, 14);
    if (percent < 0 || percent > 100) {
        throw new Error('percent must be between 0 and 100');
        return
    }
    ctx_2.lineWidth = 3;
    $.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){


        if (data.results[7].vote_average<7){
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
        ctx_2.font = '12px Arial';
        ctx_2.fillStyle = 'white';
        var text = percentAge;
        ctx_2.fillText(text, 8, -10);
        ctx_2.closePath();
        ctx_2.restore();
    })()
}

/**rate9**/
function popular9(percent) {
    var canvas_1 = document.querySelector('#canvas_17');
    var canvas_2 = document.querySelector('#canvas_18');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');
    ctx_1.lineWidth = 3;
    ctx_1.strokeStyle = "#ccc";
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    ctx_1.font = '4px Arial';
    ctx_1.fillStyle = 'white';
    ctx_1.fillText('%',22, 14);
    if (percent < 0 || percent > 100) {
        throw new Error('percent must be between 0 and 100');
        return
    }
    ctx_2.lineWidth = 3;
    $.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){


        if (data.results[8].vote_average<7){
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
        ctx_2.font = '12px Arial';
        ctx_2.fillStyle = 'white';
        var text = percentAge;
        ctx_2.fillText(text, 8, -10);
        ctx_2.closePath();
        ctx_2.restore();
    })()
}

/**rate10**/
function popular10(percent) {
    var canvas_1 = document.querySelector('#canvas_19');
    var canvas_2 = document.querySelector('#canvas_20');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');
    ctx_1.lineWidth = 3;
    ctx_1.strokeStyle = "#ccc";
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    ctx_1.font = '4px Arial';
    ctx_1.fillStyle = 'white';
    ctx_1.fillText('%',22, 14);
    if (percent < 0 || percent > 100) {
        throw new Error('percent must be between 0 and 100');
        return
    }
    ctx_2.lineWidth = 3;
    $.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){


        if (data.results[9].vote_average<7){
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
        ctx_2.font = '12px Arial';
        ctx_2.fillStyle = 'white';
        var text = percentAge;
        ctx_2.fillText(text, 8, -10);
        ctx_2.closePath();
        ctx_2.restore();
    })()
}

/**rate11**/
function popular11(percent) {
    var canvas_1 = document.querySelector('#canvas_21');
    var canvas_2 = document.querySelector('#canvas_22');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');
    ctx_1.lineWidth = 3;
    ctx_1.strokeStyle = "#ccc";
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    ctx_1.font = '4px Arial';
    ctx_1.fillStyle = 'white';
    ctx_1.fillText('%',22, 14);
    if (percent < 0 || percent > 100) {
        throw new Error('percent must be between 0 and 100');
        return
    }
    ctx_2.lineWidth = 3;
    $.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){


        if (data.results[10].vote_average<7){
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
        ctx_2.font = '12px Arial';
        ctx_2.fillStyle = 'white';
        var text = percentAge;
        ctx_2.fillText(text, 8, -10);
        ctx_2.closePath();
        ctx_2.restore();
    })()
}

/**rate12**/
function popular12(percent) {
    var canvas_1 = document.querySelector('#canvas_23');
    var canvas_2 = document.querySelector('#canvas_24');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');
    ctx_1.lineWidth = 3;
    ctx_1.strokeStyle = "#ccc";
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    ctx_1.font = '4px Arial';
    ctx_1.fillStyle = 'white';
    ctx_1.fillText('%',22, 14);
    if (percent < 0 || percent > 100) {
        throw new Error('percent must be between 0 and 100');
        return
    }
    ctx_2.lineWidth = 3;
    $.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){


        if (data.results[11].vote_average<7){
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
        ctx_2.font = '12px Arial';
        ctx_2.fillStyle = 'white';
        var text = percentAge;
        ctx_2.fillText(text, 8, -10);
        ctx_2.closePath();
        ctx_2.restore();
    })()
}

/**rate13**/
function popular13(percent) {
    var canvas_1 = document.querySelector('#canvas_25');
    var canvas_2 = document.querySelector('#canvas_26');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');
    ctx_1.lineWidth = 3;
    ctx_1.strokeStyle = "#ccc";
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    ctx_1.font = '4px Arial';
    ctx_1.fillStyle = 'white';
    ctx_1.fillText('%',22, 14);
    if (percent < 0 || percent > 100) {
        throw new Error('percent must be between 0 and 100');
        return
    }
    ctx_2.lineWidth = 3;
    $.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){


        if (data.results[12].vote_average<7){
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
        ctx_2.font = '12px Arial';
        ctx_2.fillStyle = 'white';
        var text = percentAge;
        ctx_2.fillText(text, 8, -10);
        ctx_2.closePath();
        ctx_2.restore();
    })()
}

/**rate14**/
function popular14(percent) {
    var canvas_1 = document.querySelector('#canvas_27');
    var canvas_2 = document.querySelector('#canvas_28');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');
    ctx_1.lineWidth = 3;
    ctx_1.strokeStyle = "#ccc";
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    ctx_1.font = '4px Arial';
    ctx_1.fillStyle = 'white';
    ctx_1.fillText('%',22, 14);
    if (percent < 0 || percent > 100) {
        throw new Error('percent must be between 0 and 100');
        return
    }
    ctx_2.lineWidth = 3;
    $.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){


        if (data.results[13].vote_average<7){
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
        ctx_2.font = '12px Arial';
        ctx_2.fillStyle = 'white';
        var text = percentAge;
        ctx_2.fillText(text, 8, -10);
        ctx_2.closePath();
        ctx_2.restore();
    })()
}

/**rate15**/
function popular15(percent) {
    var canvas_1 = document.querySelector('#canvas_29');
    var canvas_2 = document.querySelector('#canvas_30');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');
    ctx_1.lineWidth = 3;
    ctx_1.strokeStyle = "#ccc";
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    ctx_1.font = '4px Arial';
    ctx_1.fillStyle = 'white';
    ctx_1.fillText('%',22, 14);
    if (percent < 0 || percent > 100) {
        throw new Error('percent must be between 0 and 100');
        return
    }
    ctx_2.lineWidth = 3;
    $.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){


        if (data.results[14].vote_average<7){
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
        ctx_2.font = '12px Arial';
        ctx_2.fillStyle = 'white';
        var text = percentAge;
        ctx_2.fillText(text, 8, -10);
        ctx_2.closePath();
        ctx_2.restore();
    })()
}

/**rate16**/
function popular16(percent) {
    var canvas_1 = document.querySelector('#canvas_31');
    var canvas_2 = document.querySelector('#canvas_32');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');
    ctx_1.lineWidth = 3;
    ctx_1.strokeStyle = "#ccc";
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    ctx_1.font = '4px Arial';
    ctx_1.fillStyle = 'white';
    ctx_1.fillText('%',22, 14);
    if (percent < 0 || percent > 100) {
        throw new Error('percent must be between 0 and 100');
        return
    }
    ctx_2.lineWidth = 3;
    $.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){


        if (data.results[15].vote_average<7){
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
        ctx_2.font = '12px Arial';
        ctx_2.fillStyle = 'white';
        var text = percentAge;
        ctx_2.fillText(text, 8, -10);
        ctx_2.closePath();
        ctx_2.restore();
    })()
}

/**rate17**/
function popular17(percent) {
    var canvas_1 = document.querySelector('#canvas_33');
    var canvas_2 = document.querySelector('#canvas_34');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');
    ctx_1.lineWidth = 3;
    ctx_1.strokeStyle = "#ccc";
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    ctx_1.font = '4px Arial';
    ctx_1.fillStyle = 'white';
    ctx_1.fillText('%',22, 14);
    if (percent < 0 || percent > 100) {
        throw new Error('percent must be between 0 and 100');
        return
    }
    ctx_2.lineWidth = 3;
    $.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){


        if (data.results[16].vote_average<7){
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
        ctx_2.font = '12px Arial';
        ctx_2.fillStyle = 'white';
        var text = percentAge;
        ctx_2.fillText(text, 8, -10);
        ctx_2.closePath();
        ctx_2.restore();
    })()
}

/**rate18**/
function popular18(percent) {
    var canvas_1 = document.querySelector('#canvas_35');
    var canvas_2 = document.querySelector('#canvas_36');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');
    ctx_1.lineWidth = 3;
    ctx_1.strokeStyle = "#ccc";
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    ctx_1.font = '4px Arial';
    ctx_1.fillStyle = 'white';
    ctx_1.fillText('%',22, 14);
    if (percent < 0 || percent > 100) {
        throw new Error('percent must be between 0 and 100');
        return
    }
    ctx_2.lineWidth = 3;
    $.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){


        if (data.results[17].vote_average<7){
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
        ctx_2.font = '12px Arial';
        ctx_2.fillStyle = 'white';
        var text = percentAge;
        ctx_2.fillText(text, 8, -10);
        ctx_2.closePath();
        ctx_2.restore();
    })()
}

/**rate19**/
function popular19(percent) {
    var canvas_1 = document.querySelector('#canvas_37');
    var canvas_2 = document.querySelector('#canvas_38');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');
    ctx_1.lineWidth = 3;
    ctx_1.strokeStyle = "#ccc";
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    ctx_1.font = '4px Arial';
    ctx_1.fillStyle = 'white';
    ctx_1.fillText('%',22, 14);
    if (percent < 0 || percent > 100) {
        throw new Error('percent must be between 0 and 100');
        return
    }
    ctx_2.lineWidth = 3;
    $.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){


        if (data.results[18].vote_average<7){
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
        ctx_2.font = '12px Arial';
        ctx_2.fillStyle = 'white';
        var text = percentAge;
        ctx_2.fillText(text, 8, -10);
        ctx_2.closePath();
        ctx_2.restore();
    })()
}

/**rate20**/
function popular20(percent) {
    var canvas_1 = document.querySelector('#canvas_39');
    var canvas_2 = document.querySelector('#canvas_40');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');
    ctx_1.lineWidth = 3;
    ctx_1.strokeStyle = "#ccc";
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    ctx_1.font = '4px Arial';
    ctx_1.fillStyle = 'white';
    ctx_1.fillText('%',22, 14);
    if (percent < 0 || percent > 100) {
        throw new Error('percent must be between 0 and 100');
        return
    }
    ctx_2.lineWidth = 3;
    $.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){


        if (data.results[19].vote_average<7){
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
            percentAge = percent
            window.cancelAnimationFrame(timer);
        };
        ctx_2.stroke();
        ctx_2.closePath();
        ctx_2.save();
        ctx_2.beginPath();
        ctx_2.rotate(90 * Math.PI / 180);
        ctx_2.font = '12px Arial';
        ctx_2.fillStyle = 'white';
        var text = percentAge;
        ctx_2.fillText(text, 8, -10);
        ctx_2.closePath();
        ctx_2.restore();
    })()
}










$.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=ddb907d69f1671fabdfd75c40b664a37&language=en-US&page=1", function(data){

    var canvas_id=[popular1,popular2,popular3,popular4,popular5,popular6,popular7,popular8,popular9,popular10,
        popular11,popular12,popular13,popular14,popular15,popular16,popular17,popular18,popular19,popular20];



    for(var i=0; i<20; i++) {

        window.onload = canvas_id[i](data.results[i].vote_average*10);

    }

});