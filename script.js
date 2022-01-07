let object = [document.querySelector('.image1'),document.querySelector('.image2'),document.querySelector('.image3'),document.querySelector('.image7'),document.querySelector('.image8'),document.querySelector('.image9'),]
let randomPic1 = document.querySelector(".image4")
let randomPic2 = document.querySelector(".image5")
let randomPic3 = document.querySelector(".image6")
let button = document.querySelector('.button1')
let winnerMessage = document.querySelector(".result1")
let loserMessage = document.querySelector(".result2")
let tokens = document.querySelector(".tokens")
let points = 1000
tokens.innerHTML = 1000
let gameOverMessage = document.querySelector('.gameover')
let winnerMessage1 = document.querySelector('.winnermessage')
let youWin = document.querySelector('.youwin')
let youLose = document.querySelector('.youlose')
let slider = document.querySelector('.parent')
let child = document.querySelector('.child')
let scoreBoard = document.querySelector('.scoreboardimage')

function randomPictureGenerator(){
    return object[Math.floor(Math.random() * object.length)]
}
function randomPicture(){
    randomPic1.src = randomPictureGenerator().src
}
function randomPicture2(){
    randomPic2.src = randomPictureGenerator().src
}
function randomPicture3(){
    randomPic3.src = randomPictureGenerator().src
}
function increaseTokenValue2000(){
    points += 2000
    tokens.innerHTML = points
    if (points > 0 && points < 2000 ){
        return tokens.innerHTML = points, tokens.style.color = 'green'
    }
    else if (points >= 2000){
        return youWin.style.display = "block", tokens.style.display = "none", 
        winnerMessage1.style.display = "block", winnerMessage.style.display = "none",
        loserMessage.style.display = "none", button.style.display = "none", slider.style.display = 'none',
        scoreBoard.style.display= "none"
    }
}
function decreaseTokenValue(){
    points += -100
    tokens.innerHTML = points
    if (points > 0 && points < 2000){
        return tokens.innerHTML = points, tokens.style.color = 'red'
    }
    else if (points <= 0){
        return youLose.style.display = "block", tokens.style.display = "none",
         gameOverMessage.style.display = "block", loserMessage.style.display = "none", 
         winnerMessage.style.display = "none", button.style.display = "none", slider.style.display = 'none',
         scoreBoard.style.display= "none"
    }
}
function increaseTokenValue250(){
    points += 250
    tokens.innerHTML = points
    if (points > 0 && points < 2000 ){
        return tokens.innerHTML = points, tokens.style.color = 'green'
    }
    else if (points >= 2000){
        return youWin.style.display = "block", tokens.style.display = "none", 
        winnerMessage1.style.display = "block", winnerMessage.style.display = "none",
        loserMessage.style.display = "none", button.style.display = "none", slider.style.display = 'none',
        scoreBoard.style.display= "none"
    }
}
function lotteryResult(){
    if (randomPic1.src === randomPic2.src && randomPic1.src === randomPic3.src)
        return winnerMessage.style.display = "block", loserMessage.style.display = "none", increaseTokenValue2000()
    if (randomPic1.src === randomPic2.src || randomPic2.src === randomPic3.src)
        return winnerMessage.style.display = "block", loserMessage.style.display = "none", increaseTokenValue250()
    else 
        return loserMessage.style.display = "block", winnerMessage.style.display = "none", decreaseTokenValue()
}
function lotteryFunction(){
    randomPicture()
    setTimeout(randomPicture2, 250)
    setTimeout(randomPicture3, 500)
    setTimeout(lotteryResult, 500)
}
function translateChild(){
    return child.style.transform = 'translateX(100%)', child.style.transition = "1s"
}
function stopTranslate(){
    return child.style.transform = 'translateX(0%)', child.style.transition = 'none'
}
button.addEventListener("click", ()=>{
    winnerMessage.style.display = "none", loserMessage.style.display = "none"
    translateChild()
    setTimeout(stopTranslate, 1650)
})
slider.addEventListener('transitionend', ()=>{
    lotteryFunction() 
})