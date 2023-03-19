$(document).ready(function(){
    console.log("tmax")
    
    black = document.getElementById('black')
    dark = document.getElementById('dark')
    image = document.getElementById('image')

    black.addEventListener('click',()=>{
        image.setAttribute("src","../images/blacktech.jpg") 
    })
    dark.addEventListener('click' , ()=>{
        
        image.setAttribute("src","../images/techmaxx.jpg") 
    })
    
})
let viewerCount = 40; 

function updateViewerCount() {
  viewerCount++; 
  document.getElementById('viewer-count').innerHTML = viewerCount; 
}

setInterval(updateViewerCount, 5000);