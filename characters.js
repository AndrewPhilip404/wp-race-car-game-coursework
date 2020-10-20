let robot1 = document.getElementById('robot1');
let robot2 = document.getElementById('robot2');
let robot3 = document.getElementById('robot3');
let robot4 = document.getElementById('robot4');

var player;

robot1Click = function(){
    player = 1;
    localStorage.setItem('player', player)
}
robot2Click = function(){
    player = 2;
    localStorage.setItem('player', player)
}
robot3Click = function(){
    player = 3;
    localStorage.setItem('player', player)
}
robot4Click = function(){
    player = 4;
    localStorage.setItem('player', player)
}

player1.addEventListener('click', robot1Click);
player2.addEventListener('click', robot2Click);
player3.addEventListener('click', robot3Click);
player4.addEventListener('click', robot4Click);
