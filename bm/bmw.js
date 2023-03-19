$(document).ready(function(){
    console.log("s1000")
    // btn = document.querySelector('#btn')
    black = document.getElementById('black')
    blue = document.getElementById('blue')
    image = document.getElementById('image')

    black.addEventListener('click',()=>{
        image.setAttribute("src","../images/BMW-S1000RR-black.png") 
    })
    blue.addEventListener('click' , ()=>{
        
        image.setAttribute("src","../images/BMW S 1000 RR.jpg") 
    })
   
})
let viewerCount = 40; 

function updateViewerCount() {
  viewerCount++; 
  document.getElementById('viewer-count').innerHTML = viewerCount; 
}

setInterval(updateViewerCount, 5000);