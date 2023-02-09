$(document).ready(function(){
    console.log("tmax")
    // btn = document.querySelector('#btn')
    black = document.getElementById('black')
    green = document.getElementById('green')
    image = document.getElementById('image')

    black.addEventListener('click',()=>{
        image.setAttribute("src","../images/z1000black.jfif") 
    })
    green.addEventListener('click' , ()=>{
        
        image.setAttribute("src","../images/z1000green.jfif") 
    })
    $(document).on('click',)
})