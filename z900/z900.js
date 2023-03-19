$(document).ready(function(){
    console.log("tmax")
    
    black = document.getElementById('black')
    green = document.getElementById('green')
    image = document.getElementById('image')

    black.addEventListener('click',()=>{
        image.setAttribute("src","../images/kawasakiz9.jfif") 
    })
    green.addEventListener('click' , ()=>{
        
        image.setAttribute("src","../images/z900green.jfif") 
    })
    
})
let viewerCount = 40; 

function updateViewerCount() {
  viewerCount++; 
  document.getElementById('viewer-count').innerHTML = viewerCount; 
}

setInterval(updateViewerCount, 5000);