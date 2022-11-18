let input = document.getElementById('input-tarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('area-lista')
let contador = 0;    // para saber qual o item adicionado

btnAdd.addEventListener('click', addTarefa);

//ADD EVENTO DE TECLADO
input.addEventListener('keyup', function(event){
    if(event.key === 'Enter') {
        btnAdd.click();
    }
})

//ADD EVENTO DE ADICIONAR A TAREFA
function addTarefa() {
    // pegar o valor digitado no imput
    let valorImput = input.value;

    //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    if(valorImput !== '' && valorImput !== null && valorImput !== undefined) {
        contador ++;  // para add 1 ao contador em cada item adicionado
        let novoItem = `
        <div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
             </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valorImput}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
            </div>
        </div>`;

        //ADD NOVO ITEM
        main.innerHTML += novoItem;

        //DEIXAR O IMPUT VAZIO
        input.value = '';
        input.focus();
    } else {
        alert('digite alguma coisa')
    }
}

// criar a funçao deletar recebendo o id do contador e remover a tarefa
function deletar(id) {
    let tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    let item = document.getElementById(id);
    let classe = item.getAttribute('class');  // pegar qual classe esta no item


    if(classe == 'item') {
        item.classList.add('clicado')

        let icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);  //jogar o item clicado pro final
    } else {
        item.classList.remove('clicado')

        let icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');

    }
}

