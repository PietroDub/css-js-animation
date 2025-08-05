
let MyObserver = new IntersectionObserver( (parametros) => {
    parametros.forEach( (entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('show')
        } else {
             entrada.target.classList.remove('show')
        }
    })
});
//importando o inter...

let div = document.querySelectorAll(".hidden")

// MyObserver.observe()
div.forEach( (element) => MyObserver.observe(element))