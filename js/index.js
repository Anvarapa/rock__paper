function start(){
    let cUser = 0;
    let cComputer = 0;
    function startGame(){ // start game
        const intro = document.querySelector('.intro');
        const match = document.querySelector('.match');
        intro.classList.add('fadeOut');
        match.classList.add('fadeIn')
    }

    const startBtn = document.querySelector('.intro button')
    startBtn.addEventListener('click', startGame)


    function win(){
        cUser++
        const winner = document.querySelector('.winner')
        const score = document.querySelector('.player-score p')
        winner.innerText='players wins';
        score.innerText = cUser;
    }
    function lose(){
        cComputer++
        const winner = document.querySelector('.winner')
        const score = document.querySelector('.comp-score p')
        winner.innerText='Machine wins';
        score.innerText = cComputer;
    }

    function compare(u, c){
        const winner = document.querySelector('.winner')
        //tie
    if(u === c){
        winner.innerText="it is tie";
        return;
    }
    // compare rock
    if(u === 'r'){
        if(c === 's'){
            win()
        }else{
            lose();
        }
        return;
    }
    // compare paper
    if(u === 'p'){
        if(c === 'r'){
            win()
        }else{
            lose();
        }
        return;
    }
    // compare Scissors
    if(u === 's'){
        if(c === 'p'){
            win()
        }else{
            lose();
        }
        return;
    }
    }
    const optionBtn = document.querySelectorAll('.options button')
    const arr = ['r', 'p', 's']
    for(let i = 0; i < optionBtn.length; i++){
        optionBtn[i].addEventListener('click', function(){
            const myChoose = arr[i];// мой выбор
            const cChoose = arr[Math.trunc(Math.random()*3)]//выбор машины// и мы тут умножали на 3. хотя можно и на ббольше 
            compare(myChoose, cChoose)
        })
    }
}
start()