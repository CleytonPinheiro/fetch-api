const pegaURL = new URL(window.location)

const id = pegaURL.searchParams.get('id')

const inputPet = document.querySelector('[data-nome-pet]')
const inputDono = document.querySelector('[data-nome-dono]')
const inputTipo = document.querySelector('[data-tipo]')
const inputObs = document.querySelector('[data-obs]')

detalhaPet (id).then( dados => {
    inputPet.value = dados[0].nome
    inputDono.value = dados[0].donoId
    inputTipo.value = dados[0].tipo
    inputObs.value = dados[0].observacoes
})

const formEdicao = document.querySelector('[data-form-pet]')

const alerta = (classe, mensagem) => {
    const linha = document.createElement('tr');

    const conteudoLinha = `
    <div class="${classe}">${mensagem}</div>

`
    linha.innerHTML = conteudoLinha;
    return linha;
}
formEdicao.addEventListener('submit', event => {
    event.preventDefault()

    editaPet(id, inputPet.value, inputDono.value, inputTipo.value, inputObs.value)
    .then( resposta => {
        if( resposta.status === 200){
            formEdicao.appendChild(alerta(
                "alert alert-success",
                "PET EDITADO COM SUCESSO !"
            ))
        } else {
            formEdicao.appendChild(alerta(
                "alert alert-warning",
                "O PET NÃO PODE SER EDITADO !"
            ))
        }
    })

})
