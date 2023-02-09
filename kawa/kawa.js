$(document).ready(function(){
    console.log("tmax")
    // btn = document.querySelector('#btn')
    black = document.getElementById('black')
    green = document.getElementById('green')
    image = document.getElementById('image')

    black.addEventListener('click',()=>{
        image.setAttribute("src","../images/kawasaki h22.jfif") 
    })
    green.addEventListener('click' , ()=>{
        
        image.setAttribute("src","../images/kawasaki h2.jpg") 
    })
    $(document).on('click',)
})