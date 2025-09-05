document.addEventListener("mousemove", function(e){
    let rocket = document.querySelector(".rocket");
    rocket.style.left = e.offsetX + 'px';
    rocket.style.top = e.offsetY + 'px';

})