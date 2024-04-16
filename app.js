//Tüm panele ulaşımı sağlar
const panels = document.querySelectorAll(".panel");


//Gezinme
panels.forEach( panel => {
    //tıklandığında
    panel.addEventListener("click", () => {
        
           removeActive();

        //tıklandığında active olur
        panel.classList.add("active");

    })

})

function removeActive (){
    panels.forEach(panel => {
        //diğer panele tıklandığında active olan paneli kapatacak kod
        panel.classList.remove("active");
    })
}