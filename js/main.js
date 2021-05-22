
//  let player1=('x')
//  let player2=('o')
//  let activePlayer = player1
let activePlayer = 'x'

// document.querySelector('#one').addEventListener('click',playGame)
// document.querySelector('#two').addEventListener('click',playGame)
// document.querySelector('#three').addEventListener('click',playGame)
// document.querySelector('#four').addEventListener('click',playGame)
// document.querySelector('#five').addEventListener('click',playGame)
// document.querySelector('#six').addEventListener('click',playGame)
// document.querySelector('#seven').addEventListener('click',playGame)
// document.querySelector('#eight').addEventListener('click',playGame)
// document.querySelector('#nine').addEventListener('click',playGame)

let boxes = {
    box1: document.getElementById('one'),
    box2: document.getElementById('two'),
    box3: document.getElementById('three'),
    box4: document.getElementById('four'),
    box5: document.getElementById('five'),
    box6: document.getElementById('six'),
    box7: document.getElementById('seven'),
    box8: document.getElementById('eight'),
    box9: document.getElementById('nine')
}

for(box in boxes){
    boxes[box].addEventListener('click', playGame)

function playGame(evt){
    document.querySelector('h3').innerText ='player'
    if(evt.target.innerText === 'x' || evt.target.innerText==='o'){
        alert('space unavailable')
    }else if(activePlayer==='x'){
        evt.target.innerText ='x'
        activePlayer = 'o'
        // document.querySelector('h3').innerText =''
        document.querySelector('h3').innerText += ' ' + activePlayer
    }else if(activePlayer==='o'){
        evt.target.innerText ='o'
        activePlayer='x'
        document.querySelector('h3').innerText +=' '+ activePlayer
    }
} 
}

for(box in boxes){
    boxes[box].addEventListener('click', checkWin)
function checkWin(){
if((one.innerText==='x' && two.innerText==='x' && three.innerText==='x') ||
  (one.innerText==='x' && four.innerText==='x' && seven.innerText==='x')||
  (one.innerText==='x' && five.innerText==='x' && nine.innerText==='x') ||
  (two.innerText==='x' && five.innerText==='x' && eight.innerText==='x') || 
  (three.innerText==='x' && six.innerText==='x' && nine.innerText==='x') ||
  (four.innerText==='x' && five.innerText==='x' && six.innerText==='x') || 
  (three.innerText==='x' && five.innerText==='x' && seven.innerText==='x') ||
  (seven.innerText==='x' && eight.innerText==='x' && nine.innerText==='x')){
    // document.querySelector('h2').innerText="Player x WIN"
    alert('player x won')
    document.location.reload()
    clearInterval()
   
  }else if(
      //check for o's
      (one.innerText==='o' && two.innerText==='o' && three.innerText==='o')|| 
      (one.innerText==='o' && four.innerText==='o' && seven.innerText==='o')||
      (one.innerText==='o' && five.innerText==='o' && nine.innerText==='o') ||
      (two.innerText==='o' && five.innerText==='o' && eight.innerText==='o') || 
      (three.innerText==='o' && six.innerText==='o' && nine.innerText==='o') ||
      (four.innerText==='o' && five.innerText==='o' && six.innerText==='o') || 
      (three.innerText==='o' && five.innerText==='o' && seven.innerText==='o') ||
      (seven.innerText==='o' && eight.innerText==='o' && nine.innerText==='o')){
        // document.querySelector('h2').innerText="Player o WIN"
        alert('player o won')
        document.location.reload()
        clearInterval()
    }
}
}
    // else if(){
    //     document.querySelector('h2').innerText="draw"
    //   }
    //   }
    // }

     



// document.querySelector('#win').addEventListener('click', checkWin)

//  function checkWin(){
// if((one.innerText==='x' && two.innerText==='x' && three.innerText==='x') ||
//   (one.innerText==='x' && four.innerText==='x' && seven.innerText==='x')||
//   (one.innerText==='x' && five.innerText==='x' && nine.innerText==='x') ||
//   (two.innerText==='x' && five.innerText==='x' && eight.innerText==='x') || 
//   (three.innerText==='x' && six.innerText==='x' && nine.innerText==='x') ||
//   (four.innerText==='x' && five.innerText==='x' && six.innerText==='x') || 
//   (three.innerText==='x' && five.innerText==='x' && seven.innerText==='x') ||
//   (seven.innerText==='x' && eight.innerText==='x' && nine.innerText==='x')){
//     document.querySelector('h2').innerText="Player x WIN"
//   }else if(
//   //check for o's
//   (one.innerText==='o' && two.innerText==='o' && three.innerText==='o')|| 
//   (one.innerText==='o' && four.innerText==='o' && seven.innerText==='o')||
//   (one.innerText==='o' && five.innerText==='o' && nine.innerText==='o') ||
//   (two.innerText==='o' && five.innerText==='o' && eight.innerText==='o') || 
//   (three.innerText==='o' && six.innerText==='o' && nine.innerText==='o') ||
//   (four.innerText==='o' && five.innerText==='o' && six.innerText==='o') || 
//   (three.innerText==='o' && five.innerText==='o' && seven.innerText==='o') ||
//   (seven.innerText==='o' && eight.innerText==='o' && nine.innerText==='o')){
//     document.querySelector('h2').innerText="Player o WIN"
// }else {
//     document.querySelector('h2').innerText="draw"
// }
//  }
 



// refresh page when game complete
// document.querySelector('button').addEventListener('click',refresh)
// function refresh(){
//     let startOver = checkWin()
//     if(startOver===true)
//     alert('start over')
//     window.location.reload()
// }




    
// }else if(evt.target.class=== 'box' && player1===true){
//     evt.target.innerText ="x"
//     player1 = false
//     player2 = true
// }
    

// if(document.querySelector('h2').innerText==='x' || document.querySelector('h2').innerText==='o'){
//             alert('game over')















// let player1= 'x'
// let player2= 'o'

// function box1(){
//     console.log(player1)
//     document.querySelector('#one').innerText= player1
// }
// function box2(){
    
// 
