const calcular = document.getElementById('calcular')

function imc() {
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if (altura !== '' && peso !== '') {
        
        const valorImc = (peso / (altura * altura)).toFixed(1)

        resultado.textContent = valorImc

    } else {
        document.getElementById('resultado').innerHTML = resultado
        
    }

}

calcular.addEventListener('click', imc)