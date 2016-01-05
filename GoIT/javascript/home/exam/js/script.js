//при загрузке страниницы вызываем главную ф-цию с кодом игры
window.onload = fonUnderPopUp;

var currentHint=0, enemyHint=0, playerHint=0;

var map;
var ctxMap;

var pl;
var ctxPl;

//переменные для наших кнопок
var drawBtn;
var clearBtn;

// canvas size
var gameWidth = 800;
var gameHeight = 450;
var plWidth = 32;
var plHeight = 64;

var player;

var isPlaying;

var pixel;

//координаты курсора
var cX, sX, cY, sY;

var audioDuration;


// audio


var intro = document.createElement("audio");
intro.src="audio/intro.m4a";

var death = document.createElement("audio");
death.src="audio/death.m4a";

var fire = document.createElement("audio");
fire.src="audio/fire.m4a";

var foul = document.createElement("audio");
foul.src="audio/foul.m4a";

var shot = document.createElement("audio");
shot.src="audio/shot.m4a";

var shot_fall = document.createElement("audio");
shot_fall.src="audio/shot-fall.m4a";

var wait = document.createElement("audio");
wait.src="audio/wait.m4a";

var win = document.createElement("audio");
win.src="audio/win.m4a";

var background = new Image();
background.src = "img/bg3.png";
var tiles = new Image();
tiles.src = "img/gunman.png";

//переменная цикл = обновление всех изменений в коде
var requestAnimFrame = window.requestAnimationFrame || window.webkitCancelRequestAnimationFrame|| window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame;


function init(){

    //создаем канвасы
    create2dCanvase();

    //прописываем события кнопок
    addMyEvent();

    player = new Player();

    drawBg();
    playAud(intro);
    //console.log("audioDuration = " + audioDuration);

    setTimeout(startLoop, audioDuration);
    //startLoop();
}

// наша игра
function loop(){
    //рисем игрока
    draw();
    animationMotion();
}

// запуск игры
function startLoop(){
    isPlaying = true;
    loop();
}

//конец игры
function stopLoop(){
    isPlaying = false;
}

//обновление параметров игрока
function update (){
    player.update();
}

//рисуем
function draw(){
    player.draw();
}

//конструктор нашего игрока
function Player(){
    // коор-ы в самом файле
    this.srcX = 0;
    this.srcY = 0;
    // на канве
    this.drawX = 600;
    this.drawY = getRand(250, 310);

    this.width = 32;
    this.height = 64;

    this.speed = 5;
}

Player.prototype.draw = function(){
    clearCtxPlayer();
    ctxPl.drawImage(tiles, this.srcX, this.srcY, this.width, this.height, this.drawX, this.drawY, this.width, this.height);
}

Player.prototype.update = function() {
     this.drawX += -3;
}

//создаем канвасы
function create2dCanvase(){
    map = document.getElementById("map");
    ctxMap = map.getContext("2d");

    pl = document.getElementById("player");
    ctxPl = pl.getContext("2d");

    map.width = gameWidth;
    map.height = gameHeight;
    pl.width = gameWidth;
    pl.height = gameHeight;
}

function startGame() {
    init();
}

function stopGame(){
    clearCtxPlayer();
    document.getElementById("igrokResult").textContent = playerHint;
    document.getElementById("protivnikResult").textContent = enemyHint;
    if(playerHint > enemyHint){
        document.getElementById("pobeditel").textContent="Вы победили!!!";
    }
    if(playerHint < enemyHint){
        document.getElementById("pobeditel").textContent="Вы проиграли :(";
    }
    if(playerHint === enemyHint){
        document.getElementById("pobeditel").textContent="Ничья";
    }

    document.getElementById("popUpRsult").style.display = "block";
}
// рисуем бекграунд
function drawBg(){
    ctxMap.drawImage(background, 0, 0, 800, 450, 0, 0, gameWidth, gameHeight);
}
// очитка бекграунда от противника
function clearCtxPlayer(){
    ctxPl.clearRect(0, 0, gameWidth, gameHeight);
}
//проигрываем мелодии
function playAud(audioFile) {

    audioFile.play();
    audioDuration = audioFile.duration*1000;
}

// Получить случайное число между X и Y
function getRand(min, max) {
    return Math.random() * (max - min) + min;

}

function addMyEvent(){
    drawBtn = document.getElementById("start");
    clearBtn = document.getElementById("stop");

    drawBtn.addEventListener("click", startGame, false);
    clearBtn.addEventListener("click", stopGame, false);
    pl.addEventListener("click", myClick, false);
}

function addMyEvent22(){
    myPopUp = document.getElementById("start1");
    myPopUp.addEventListener("click", hidePopUp);
}

// ниже все что качается Охотника

//координаты курсора
function myClick(event){
    //координаты с "обнулением" под наш канвас
    pX = event.pageX;
     pY = event.pageY;


     var coordsPage = "page - X: " + event.pageX + ", Y coords: " + event.pageY;

    console.log(coordsPage);

    playAud(shot);
    getColorPixel();
    hitTesting();
}

function getColorPixel(){
    pixel = ctxPl.getImageData(pX, pY, 1, 1).data;
    console.log("pixel[] = " +pixel);
    console.log("pixel[3] = " + pixel[3]);
}


function  hitTesting(){
    if(pixel[3]!=0){

        playerHint+= 2;
        document.getElementById("igrok").textContent = playerHint;
        playAud(win);
        console.log("ВЫ ПОПАЛИ! - " + playerHint);

        player.drawX=600;
        player.drawY=getRand(250, 310);
        setTimeout(loop, audioDuration);
    }
    else {

        enemyHint+= 2;
        document.getElementById("protivnik").textContent = enemyHint;
        console.log("ВЫ ПРОМАХНУЛИСЬ - " + enemyHint);
        playAud(death);

        //как перезагрузить
        player.drawX=600;
        player.drawY=getRand(250, 310);
        setTimeout(loop, audioDuration);
    }

}

function animationMotion(){
    var i=2;
    var start = Date.now(); // сохранить время начала

    var timer = setInterval(function() {
        // вычислить сколько времени прошло с начала анимации
        var timePassed = Date.now() - start;

        if (timePassed >= 1000) {
            clearInterval(timer); // конец через 2 секунды
            return;
        }

        // рисует состояние анимации, соответствующее времени timePassed
        drawAn(timePassed);

    }, 150);

// в то время как timePassed идёт от 0 до 2000
    function drawAn(timePassed) {
        player.drawX += -30;
        draw();
    }
}

function hidePopUp(){
    document.getElementById("popUp").style.display = 'none';
    init();
}

function fonUnderPopUp(){
    addMyEvent22();
    create2dCanvase();
    drawBg();
}