import { catsData } from "./data.js";

const catBtns = document.querySelectorAll('.cat-btns');
const catEmotionBtn = document.getElementById('cat-emotion-btn')
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal')
const memeModalCloseBtn = document.querySelector('#meme-modal-close-btn')
let isGif = false
const gifsOnlyOption = document.querySelector('#gifs-only-option')

memeModalCloseBtn.addEventListener('click', function() {
    memeModal.style.display = 'none'
    console.log('click')
})



function getMatchingCatsArray(emotion){
    const matchingCatsArray = catsData.filter((cat)=>{
        if (isGif) {
            return cat.emotionTags.includes(emotion) && cat.isGif
        }else {
            return cat.emotionTags.includes(emotion)
        }
        
    })
    return matchingCatsArray
}

function getSingleCatObject(){
    const catsArray = getMatchingCatsArray()
    if(catsArray.length === 1){
        return catsArray[0]
    }else {
        const randomNumber = Math.floor(Math.random() * catsArray.length)
        return catsArray[randomNumber]
    }
}


function renderCatImage() {
    let catObject = ''
    for (let pic of catsData){
        catObject +=`
        <img
        class='cat-img'
        src='${pic.image}'
        alt=''
        >` 
    }
    memeModalInner.innerHTML = catObject
    
    memeModal.style.display = 'flex'

 return catObject
}


for (let btn of catBtns){
    btn.addEventListener('click', () => {
        const selectedEmotion = getSingleCatObject()
        // Get matching objects
        const matchingCatsArray = getMatchingCatsArray(selectedEmotion)
        // Pink on randomly
        const randomIndex = Math.floor(Math.random() * matchingCatsArray)
        // Render
        renderCatImage(matchingCatsArray[randomIndex])
    })
}



