document.getElementById("menu").innerHTML = `
<a class="navbar-brand" href="./index.html">
    <img class="d-inline-block align-top" id="logo" src="./img/logo.png" alt="Logo ARC" loading="lazy">                
</a>            
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">                
        <li class="nav-item ">
            <a class="nav-link" href="./cadastro.html">Cadastro</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./solicitacao.html">Solicitação</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./resposta.html">Resposta a Solicitação</a>
        </li>
    <li class="nav-item">
        <a class="nav-link" href="http://www.itaocara.rj.gov.br/" target="_blank">Prefeitura</a>
    </li>
    </ul>              
</div>
`;