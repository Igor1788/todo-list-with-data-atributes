import { ordernaDatas, removeDatasRepetidas } from "../../services/data.js"
import { criaData } from "./criaData.js"


export const carregaTarefa = ( ) => {
    const lista = document.querySelector('[data-list]')

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []


    lista.innerHTML = " "
    const datasUnicas = removeDatasRepetidas(tarefasCadastradas)
    ordernaDatas(datasUnicas)
    datasUnicas.forEach((dia) =>{
        lista.appendChild(criaData(dia))

        
    })
} 
