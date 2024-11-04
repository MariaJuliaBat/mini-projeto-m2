class Make {
  constructor(tipo, marca, preco) {
    this.tipo = tipo;
    this.marca = marca;
    this.preco = preco;
  }
}

let makes = [];

function cadastrarMake() {
  var nomeMake = document.getElementById('tipoMake').value;
  var marca = document.getElementById('marca').value;
  var preco = document.getElementById('preco').value;

  if (nomeMake && marca && preco) {
      var make = [nomeMake, marca, preco];
      makes.push(make);
      exibirMakes();
      document.getElementById('cadastroMakeForm').reset();
  }
}

function exibirMakes() {
  var table = document.getElementById('cadastroMakeTable');
  table.innerHTML = `
    <tr>
      <th>Tipo</th>
      <th>Marca</th>
      <th>Preço</th>
      <th>Editar Estoque</th>
    </tr>
    
    ${makes.map((make, index) => `
        <tr>
          <td>${make[0]}</td>
          <td>${make[1]}</td>
          <td>${make[2]}</td>
          <td>
          <div class="render">
            <button onclick="editarMake(${index})" id="botoes-1">Editar</button>
            <button onclick="excluirMake(${index})" id="botoes-1">Excluir</button>
          </div>
          </td>
        </tr>
    `).join('')}
  `;
}

function editarMake(index) {
  var make = makes[index];
  document.getElementById('tipoMake').value = make[0];
  document.getElementById('marca').value = make[1];
  document.getElementById('preco').value = make[2];
  makes.splice(index, 1);
  exibirMakes();
}

function excluirMake(index) {
  makes.splice(index, 1);
  exibirMakes();
}