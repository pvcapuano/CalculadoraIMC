const calcular = document.getElementById('calcular')

function imc() {
    const altura = parseFloat(document.getElementById('altura').value)/100
    const peso = parseFloat(document.getElementById('peso').value)
    const resultado = document.getElementById('resultado')

    const valorImc = (peso / (altura * altura)).toFixed(2)
    document.getElementById('resultado').innerHTML = resultado
    if (altura !== '' && peso !== '') {
        
        

        resultado.textContent = valorImc

    } else {
        
     }

}

calcular.addEventListener('click', imc)