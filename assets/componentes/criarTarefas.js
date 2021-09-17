import BotaoConclui from "./concluiTarefa.js";
import BotaoDeleta from "./deletaTarefas.js";
import { carregaTarefa } from "./carregaTarefa.js";


      export const handleNovoItem = (evento) => {
            evento.preventDefault();

            const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

            const input = document.querySelector('[data-form-input]');
            const valor = input.value;


            const calendario = document.querySelector('[data-form-calendar]');
            const data = moment(calendario.value);
            const dataFormatada = data.format('DD/MM/YYYY');
            const concluida = false;

            const dados = {
                valor,
                dataFormatada,
                concluida
            }
            const tarefasAtualizadas = [... tarefas, dados]
            localStorage.setItem("tarefas",JSON.stringify(tarefasAtualizadas))

            input.value = ' '
            carregaTarefa()
            
        }

       export const Tarefa = ({ valor, dataFormatada, concluida }) => {        
            const tarefa = document.createElement('li');
            tarefa.classList.add('task');
        
            const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`
            if(concluida) {
                tarefa.classList.add('done')
            }
            tarefa.classList.add('task')
            tarefa.innerHTML = conteudo;
            
            tarefa.appendChild(BotaoConclui())
            tarefa.appendChild(BotaoDeleta())
                     
            return tarefa;
            
        }
