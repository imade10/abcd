$(document).ready(function(){
    console.log("harley")
    // btn = document.querySelector('#btn')
    black = document.getElementById('black')
    dark = document.getElementById('red')
    image = document.getElementById('image')

    black.addEventListener('click',()=>{
        image.setAttribute("src","../images/harleyblack.jfif") 
    })
    red.addEventListener('click' , ()=>{
        
        image.setAttribute("src","../images/harleyred.jfif") 
    })
    $(document).on('click',)
})