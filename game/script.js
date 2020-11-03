const startscreen=document.querySelector('.StartScreen');
const gamearea=document.querySelector('.GameCanvas');
let player={speed:5};
startscreen.addEventListener('click',start);

let keys={ArrowUp: false, ArrowDown: false, ArrowRight: false, ArrowLeft: false};

        document.addEventListener('keydown',keyDown);
        document.addEventListener('keyup',keyUp);

        function moveLines(){
            let lines=document.querySelectorAll('.lines');
            lines.forEach(function(item){
                item.y+=player.speed;
                item.style.top=item.y+'px';

            })
        }
        function moveLines2(){
            let lines=document.querySelectorAll('.lines2');
            lines.forEach(function(item){
                item.y+=player.speed;
                item.style.top=item.y+'px';

            })
        }
        function moveLines3(){
            let lines=document.querySelectorAll('.lines3');
            lines.forEach(function(item){
                item.y+=player.speed;
                item.style.top=item.y+'px';

            })
        }
        function moveCar(car){
            let other_cars=document.querySelectorAll('.other_cars');
            other_cars.forEach(function(item){
                item.y+=player.speed;
                item.style.top=item.y+'px';

            })
        }
        function gamePlay(){

            let car=document.querySelector('.car');
            let road=gamearea.getBoundingClientRect();

            if(player.start){

                moveLines();
                moveLines2();
                moveLines3();
                moveCar(car);

                window.requestAnimationFrame(gamePlay);


            }
            
        }
        function start(){
            startscreen.classList.add('hide');
            gamearea.innerHTML="";

            player.start=true;
            player.score=0;
            window.requestAnimationFrame(gamePlay);



           for(x=0;x<5;x++){
                let roadline=document.createElement('div');
                roadline.setAttribute('class','lines');
                roadline.y=(x*150);
                roadline.style.top=roadline.y+'px';
                gamearea.appendChild(roadline);
            }

            for(x=0;x<5;x++){
                let roadline=document.createElement('div');
                roadline.setAttribute('class','lines2');
                roadline.y=(x*150);
                roadline.style.top=roadline.y+'px';
                gamearea.appendChild(roadline);
            }

            for(x=0;x<5;x++){
                let roadline=document.createElement('div');
                roadline.setAttribute('class','lines3');
                roadline.y=(x*150);
                roadline.style.top=roadline.y+'px';
                gamearea.appendChild(roadline);
            }
            
            let car=document.createElement('div');
            car.setAttribute('class','car');
            gamearea.appendChild(car);



            for(x=0;x<3;x++){
                let othercar=document.createElement('div');
                othercar.setAttribute('class','other_cars');
                othercar.y=((x+1)*650)* -1;
                othercar.style.top=othercar.y+'px';
                othercar.style.left=Math.floor(Math.random()*700) + 'px';
                gamearea.appendChild(othercar);
            }


        }