/*
Criando um modulo no JavaScript.

(function(){
    //aqui dentro tudo é privado.
    var nome = "Weberson";
    alert(nome);


})()

Criando um modulo com arrow function.

var login = (()=> {
    //aqui dentro tudo é privado.
    var msg = "Bem vindo a central de login do Serratec!";
    var batata = "Comida";

    return {
        msg,
        batata
    }

})()
*/
(()=> {
    const emailUser = 'oi';
    const senhaUser = '123';

    var email = document.querySelector('#email');
    var senha = document.querySelector('#senha');
    var btnEntra = document.querySelector('#btn-entrar');
    var alerta = document.querySelector('div.alert');
    var close = document.querySelector('span.close');

    //Para pegar o click do mause.
    btnEntra.addEventListener('click', login);

    //para pegar as teclas que estao sendo precionadas.
    btnEntra.addEventListener('keypress', login);

    //pra pegar o click do mouse sobre o x
    close.addEventListener('click', esconderAlerta);

    function login(event) {

        //Utilizamos para avisar o codigo que daqui sou eu quem manda.
        event.preventDefault();

        //Aqui verifico se o enter foi clicado se nao retorno  
        if(event.keyCode != undefined && event.keyCode != 13){
            return;
        }

        if(!email.value|| !senha.value) {
            mostrarMensagem("Danadinho! Deves informar email e senha");
            return;
        }

        if(email.value.toLowerCase() != emailUser || senha.value != senhaUser) {
            mostrarMensagem("Danadinho! Usuário ou senha invalidos!")
            return;
        }

        //Aqui eu manod o usuario para a tela home.html que vamor criar.
        window.location.href = "./view/home.html"

    }

    function mostrarMensagem(msg) {

        mostrarAlerta();
        alerta.querySelector(".mensagem").textContent = msg;

        //Depois de 10 segundos eu quero que a mensagem suma.
        setTimeout(() => {
            esconderAlerta();    
        }, 5000);
        
    }

    function esconderAlerta() {
        alerta.classList.add('esconder');
    }

    function mostrarAlerta() {
        alerta.classList.remove('esconder');
    }

})();