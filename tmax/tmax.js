$(document).ready(function(){
    console.log("tmax")
    // btn = document.querySelector('#btn')
    black = document.getElementById('black')
    dark = document.getElementById('dark')
    image = document.getElementById('image')

    black.addEventListener('click',()=>{
        image.setAttribute("src","../images/blacktech.jpg") 
    })
    dark.addEventListener('click' , ()=>{
        
        image.setAttribute("src","../images/techmaxx.jpg") 
    })
    $(document).on('click',)
})