// recuperar o hamburguer-colocar uma variável
const meuHamburguer = document.querySelector('.hamburguer');

// recuperar o elemento que sofrerá a ação
const meuMenuLink= document.querySelector('.menu_link');

// evento do usuário - escutando os eventos e quando for o evento click, aplicar ou retirar a classe open
meuHamburguer.addEventListener('click',()=>{
    meuMenuLink.classList.toggle('open');
} )




const html = querySelector("html")
const checkbox = document.querySelector("input[name=theme")

const getStyle = (element, style) => window.getComputedStyle(html).getPropertyValue

const initialColors = {
    cor01:getStyle(root, "--cor01"),
    cor02:getStyle(root, "--cor02"),
    cor03:getStyle(root, "--cor03"),
    cor04:getStyle(root, "--cor04"),
}
const DarkMode = {
    cor01:"#333333",
    cor02:"#434343",
    cor03:"#3664ff",
    cor04:"#b5b5b5"
}
const changeColors = (colors) =>{

}

checkbox.addEventListener("change", ({target})=>{
    target.checked ? changeColors() : changeColors()
})