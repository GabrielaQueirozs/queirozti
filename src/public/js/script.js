
// data atualizada no rodape

function obterData(){
    const dataAtual = new Date()
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return dataAtual.toLocaleDateString('pt-br', options)
}

// executar a função ao iniciar a janela principal
document.getElementById('dataAtual').innerHTML = obterData()





