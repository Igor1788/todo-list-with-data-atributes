    const BotaoConclui = () => {
        const botaoConclui = document.createElement('button')

        botaoConclui.classList.add('check-button')
        botaoConclui.innerText = 'Concluir'
        botaoConclui.addEventListener('click', concluiTarefa)

        return botaoConclui
    }

    const concluiTarefa = () => {
        const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))

        tarefasCadastradas[id].concluida = !tarefasCadastradas.concluida
    }
export default BotaoConclui