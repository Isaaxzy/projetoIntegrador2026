export function register() {
    var email = document.getElementById('email').value
    var senha = document.getElementById('password').value
    var consenha = document.getElementById('confpassw').value

    if (consenha != senha) {
        console.alert('confirme a senha')
        document.getElementById('password').value
        document.getElementById('confpassw').value
    }

    fetch('http://localhost:3000/registro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: senha
        })
    })
        .then((response) => response.json())
        .then((dados) => {
            if (dados.hasOwnProperty('error')) {
                document.getElementById('email').value = ''
                document.getElementById('password').value = ''
                document.getElementById('confpassw').value = ''
                return
            }
            alert(dados.message)
            window.location.href = './app/(tabs)/intro_comecar.tsx'
        })
}