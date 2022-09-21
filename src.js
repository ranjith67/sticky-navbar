window.addEventListener('scroll', function(){
    let navbar = document.getElementById("screen");
    if(this.window.scrollY >= 218){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
})