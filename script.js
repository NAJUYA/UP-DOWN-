//랜덤번호를 지정한다
// 유저는 숫자를 입력할 수 있다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 작으면 Up! 이라고 알려준다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 크면 Down! 이라고 알려준다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자와 일치하다면 That’s right이라고 뜨고 게임이 종료된다.
// 유저는 총 5번의 기회가 있다
// 게임이 종료되면 버튼은 비활성화된다
// 리셋버튼을 누르면 게임이 초기화된다
// 유저가 1~100범위 밖에 숫자를 입력할시에 경고메세지가 뜬다
// 유저가 이미 입력한 값을 또 입력할 시에 경고메세지가 뜬다
// 반응형 UI

let computerNum = 0 
let userInput = document.getElementById("user-Input")
let goButton = document.getElementById("go-button")
let resultArea = document.getElementById("result-area")
let chanceArea = document.getElementById("chance")
let chances = 5
let resetButton = document.getElementById("reset-button")
let gameover = false
let history = []

goButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)
userInput.addEventListener("focus", function(){userInput.value=""})


function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1
    console.log("정답", computerNum)
}

pickRandomNum()

function play(){
    if(userInput.value<1||userInput.value>100){
        resultArea.textContent="1~100 사이의 숫자를 입력하라고 해찌??!!!!"
        return;
    }

    if(history.includes(userInput.value)){
        resultArea.textContent="이미 UP or DOWN 알려줬지롱~"
        return;
    }

    chances --;
    chanceArea.textContent=`남은 기회: ${chances}`
    

    if(userInput.value<computerNum){
        resultArea.textContent="UP!!"  
    }else if(userInput.value>computerNum){
        resultArea.textContent="DOWN!!"
    }else{
        resultArea.textContent="정답입니당~!"
        gameover=true;
    }

    history.push(userInput.value)
    console.log(history)

    if(chances<1){
        gameover=true;
        resultArea.textContent="기회를 모두 사용하였습니다ㅠ 다시 시도?"
    }

    if(gameover==true){
        goButton.disabled=true;
    }


}


function reset(){
    userInput.value=""
    pickRandomNum();
    resultArea.textContent="한 번 더!! 가보자고!!"
    chanceArea.textContent="남은 기회: 5번"
    gameover=false;
    goButton.disabled=false;
    chances=5
    history=[]
}

