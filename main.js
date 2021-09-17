import { handleNovoItem } from "./assets/componentes/criarTarefas.js";
import { carregaTarefa } from "./assets/componentes/carregaTarefa.js";
        
        const novaTarefa = document.querySelector('[data-form-button]');       
        novaTarefa.addEventListener('click', handleNovoItem);
        carregaTarefa()


