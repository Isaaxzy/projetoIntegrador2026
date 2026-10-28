export function register() {
    var conta = [document.getElementById('email').value, document.getElementById('password').value, document.getElementById('confpassw').value];

    if (conta[2] != conta[1] || conta[1] == '' || conta[0] == '') {
        alert('Insira os dados corretamente');
        document.getElementById('password').value = '';
        document.getElementById('confpassw').value = '';
        
    }
    else{
        localStorage.setItem('conta', JSON.stringify(conta));
        window.location.href = 'http://localhost:8081/componentes/intro_comecar';
    }

}

// ...existing code...

export function etapa1(indicesMarcados = []) {
    var voce = [
        document.getElementById('nome').value,
        document.getElementById('pessoas').value,
        document.getElementById('idade').value
    ];

    if (voce[0] == '' || voce[1] == '' || voce[2] == '' || indicesMarcados.length == 0) {
        alert('Insira os dados corretamente');
    }
    else {
        localStorage.setItem('voce', JSON.stringify(voce));
        localStorage.setItem('nivelExperienciaIndices', JSON.stringify(indicesMarcados));
        window.location.href = 'http://localhost:8081/componentes/intro_etapa_2';
    }
}

export function etapa2(indicesMarcados = []) {

    if (indicesMarcados.length == 0) {
        alert('Insira os dados corretamente');
    }
    else{
        localStorage.setItem('Alimentacao', JSON.stringify(indicesMarcados));
        window.location.href = 'http://localhost:8081/componentes/intro_etapa_3';
    }
}

export function etapa3(indicesMarcados = []) {
    var outros = document.getElementById('outros').value;

    localStorage.setItem('Alergias', JSON.stringify(indicesMarcados));
    localStorage.setItem('OutrosA', JSON.stringify(outros));
    window.location.href = 'http://localhost:8081/componentes/intro_etapa_4';

}

export function etapa4(indicesMarcados = []) {
    var outros = document.getElementById('outros').value;

    localStorage.setItem('Desgostos', JSON.stringify(indicesMarcados));
    localStorage.setItem('OutrosD', JSON.stringify(outros));
    window.location.href = 'http://localhost:8081/componentes/intro_etapa_5';

}

export function etapa5(indicesMarcados = []) {
    var outros = document.getElementById('outros').value;

    localStorage.setItem('Gostos', JSON.stringify(indicesMarcados));
    localStorage.setItem('OutrosG', JSON.stringify(outros));
    window.location.href = 'http://localhost:8081/componentes/intro_etapa_6';

}

export function etapa6(indicesMarcados = []) {

    if (indicesMarcados.length == 0) {
        alert('Selecione pelo menos um objetivo');
    } else {
        localStorage.setItem('Objetivos', JSON.stringify(indicesMarcados));
        window.location.href = 'http://localhost:8081/componentes/intro_etapa_7';
    }
}

export function etapa7(indicesMarcados = []) {
    var tempo = document.getElementById('tempo').value;

    if (indicesMarcados.length == 0) {
        alert('Insira os dados corretamente');
    } else {
        localStorage.setItem('Tempo', JSON.stringify(tempo));
        localStorage.setItem('Tipo', JSON.stringify(indicesMarcados));
        window.location.href = 'http://localhost:8081/componentes/paginaInicial';
    }
}