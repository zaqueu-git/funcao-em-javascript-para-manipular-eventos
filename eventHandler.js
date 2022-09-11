document.addEventListener("DOMContentLoaded", myPage);

function myPage() {
    const contentPage = document.querySelector('.js-content-page');
    const keypressTag = contentPage.querySelector('.js-keypress-tag');
    const changeTag = contentPage.querySelector('.js-change-tag');
    const clickTag = contentPage.querySelector('.js-click-tag');

    keypressTag.addEventListener('keypress', keypressTagHandler);
    changeTag.addEventListener('change', changeTagHandler);
    clickTag.addEventListener('click', clickTagHandler);

    function keypressTagHandler() {
        console.log("keypres: função ATIVADA ao digitar");
    }

    function changeTagHandler() {
        console.log("change: função ATIVADA ao selecionar uma da opções do campo de seleção");
    }

    function clickTagHandler() {
        console.log("click: função ATIVADA ao clicar no botão");
    }
}
