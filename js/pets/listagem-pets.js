const removePet = (id) => {
    if(confirm("Deseja deletar o pet?")){
        debugger;
        deletaPet(id)
        document.location.reload()
    }
}


const corpoTabela = document.querySelector("[data-conteudo-tabela]");

const exibePet = (nome, dono, tipo, obs, id ) => {
    const linha = document.createElement('tr');

    const conteudoLinha = `
    <td>${nome}</td>
    <td>${dono}</td>
    <td>${tipo}</td>
    <td>${obs}</td>

  <button type="button" class="btn btn-danger" onclick="removePet(${id})">Excluir</button>
  <a href="../../html/pets/edita-pets.html?id=${id}">
  <button type="button" class="btn btn-info">Editar</button>
  </a>
`

    linha.innerHTML = conteudoLinha;
    return linha;
  };

listarPets().then( exibe => {
  exibe.forEach(indice => {
    corpoTabela.appendChild(exibePet(indice.nome, indice.donoId, indice.tipo,
        indice.observacoes, indice.id))
  })
 }
 )




