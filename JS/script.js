/*--------PEGAR ELEMENTOS-----------*/
const signinbtn = window.document.querySelector('.signinbtn');
const signupbtn = window.document.querySelector('.signupbtn');
const formBox = window.document.querySelector('.formBox');
const body = window.document.querySelector('body')
/*------AO CLICAR NO BOTÃO ATIVAR A FUNÇÃO----*/
signupbtn.onclick = function(){
    formBox.classList.add('active')
    body.classList.add('active')
}
/*------AO CLICAR NO BOTÃO DESATIVAR A FUNÇÃO----*/
signinbtn.onclick = function(){
    formBox.classList.remove('active')
    body.classList.remove('active')
}