// function play(){
//    const homeSection=document.getElementById('home');
//    homeSection.classList.add('hidden')

// //    play ground
// const playgroundSection=document.getElementById('play-ground')
// playgroundSection.classList.remove('hidden')
// // console.log(playgroundSection)
// }
 
function continueGame(){
    // step-1 generate a random alphabet
    const alphabet =getARandomAlphabet();
    console.log('your random alphabet',alphabet)

    // randomly generate alphabet to the screen
    const currentAlphabetElement=document.getElementById('current-alphabet')
    currentAlphabetElement.innerText=alphabet;
    // set background color
setBackgroundColorId(alphabet);

}

function play(){
    hideElementById('home')
    showElementById('play-ground')
    continueGame()
}