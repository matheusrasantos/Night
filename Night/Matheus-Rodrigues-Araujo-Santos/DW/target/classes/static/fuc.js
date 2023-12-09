let tabelaCarros = document.getElementById('tabelaCarros').getElementsByTagName('tbody')[0];
let formulario = document.getElementById('formulario');
let editar;

function incluir() {
    // Limpa o formulário
    formulario.reset();

    // Ativa o botão Salvar
    let botaoSalvar = document.querySelector('#formulario button[type="submit"]');
    botaoSalvar.onclick = event => {
        event.preventDefault();
        salvar();
    };

    // Exibe o formulário
    formulario.style.display = 'block';
}

function alterar() {
    let linhas = tabelaCarros.getElementsByTagName('tr');

    if (linhas.length > 0) {
        // Obtem a linha selecionada
        let linhaSelecionada = linhas[editar];

        // Define os valores do formulário com os dados da linha selecionada
        formulario.modelo.value = linhaSelecionada.cells[0].innerText;
        formulario.fabricante.value = linhaSelecionada.cells[1].innerText;
        formulario.ano.value = linhaSelecionada.cells[2].innerText;

        // Ativa o botão Salvar
        let botaoSalvar = document.querySelector('#formulario button[type="submit"]');
        botaoSalvar.onclick = event => {
            event.preventDefault();
            salvar();
        };

        // Exibe o formulário
        formulario.style.display = 'block';
    } else {
        alert('Nenhum carro para alterar.');
    }
}

function remover() {
    let linhas = tabelaCarros.getElementsByTagName('tr');

    if (linhas.length > 0) {
        // Remove a linha selecionada
        tabelaCarros.deleteRow(editar);
    } else {
        alert('Nenhum carro para remover.');
    }
}

function cancelar() {
    // Limpa o formulário
    formulario.reset();

    // Oculta o formulário
    formulario.style.display = 'none';
}

function salvar() {
    let linha;

    if (editar === undefined) {
        // Insere uma nova linha no fim da tabela
        linha = tabelaCarros.insertRow();
    } else {
        // Obtem a linha a ser editada
        linha = tabelaCarros.rows[editar];
    }

    // Preenche os campos da linha com os valores do formulário
    linha.insertCell().innerText = formulario.modelo.value;
    linha.insertCell().innerText = formulario.fabricante.value;
    linha.insertCell().innerText = formulario.ano.value;

    // Adiciona um botão para editar a linha
    let botaoEditar = document.createElement('button');
    botaoEditar.innerText = 'Editar';
    botaoEditar.onclick = () => {
        editar = linha.rowIndex;
        alterar();
    };
    linha.insertCell().appendChild(botaoEditar);

    // Oculta o formulário
    formulario.style.display = 'none';
}



async function listar() {
    try {
        const dados = await getJson('http:localhost:8081/carros/lista');
        const resultadoTbody = document.getElementById('resultado');
        
        resultadoTbody.innerHTML = '';

        dados.forEach(dados => {
            const dadosHtml = montarHtml(dado);
            resultadoTbody.insertAdjacentHTML('beforeend', dadosHtml);
        });
    } catch(err) {
        alert('ERRO: ' + err.codigo + '' + err.mensagem);
    }
}
    
function addRow(dado) {
    var row = document.createElement('tr');
    var cell = document.createElement('td');
 
    var button = document.createElement('button');
    button.textContent ='Adicionar';
    button.addEventListener('click', function() {
        adicionaCarro(dado);
    });

    cell.appendChild(button);

    row.appendChild(cell);

    for (var i = 0; i < data.length; i++) {
        var newCell = document.createElement('td');
        newCell.textContent = data[i];
        row.appendChild(newCell);
    }

    document.getElementById('tableId').appendChild(row);
}