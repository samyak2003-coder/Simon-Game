var name=['yellow','red','green','blue']
var randomChosenPattern=[]
var userChosenPattern=[]
var level=0
var started=false

$(document).keydown(function() {
    if(started=true) {
    $('h1').text('Level '+level)
    gameStart()
    started=true
}})

$('.button').click(function() {
     var clickedButton=this.id
     buttonanimation(clickedButton)
     sounds(clickedButton)
     userChosenPattern.push(clickedButton)
     checkAnswer(userChosenPattern.length-1)
})



function checkAnswer(currentLevel) {
    if(randomChosenPattern[currentLevel]===userChosenPattern[currentLevel]) {
        if(userChosenPattern.length===randomChosenPattern.length) {
            setTimeout(function() {
                gameStart()
            },1000)
        }
    } else {
        sounds('wrong')
        $('h1').text('Game Over')
        $('body').addClass('game-over')

        setTimeout(function() {
            $('body').removeClass('game-over')
           
        },200)
        setTimeout(function() {
            $('h1').text('Press Key to Restart')
        },3200)
        startOver()
    }
 }

 function gameStart() {
    var name=['yellow','red','green','blue']
    userChosenPattern=[]
    level++
 
    $('h1').text('Level '+level)
    var randomNumber= Math.floor(Math.random()*4)
    var randomButton= name[randomNumber]
    randomChosenPattern.push(randomButton)
    $('#'+randomButton).fadeIn(100).fadeOut(100).fadeIn(100)
    sounds(randomButton)
}

 function buttonanimation(name) {
    $('#'+name).addClass('pressed')
       setTimeout(function() {
           $('#'+name).removeClass('pressed')
       },100)
   }

function sounds(name) {
    var audio= new Audio('sounds/'+name+'.mp3')
    audio.play()
}

 function startOver() {

    level=0
    randomChosenPattern=[]
    started=false
    
 }