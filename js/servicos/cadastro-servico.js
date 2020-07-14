const formCadastroServico = document.querySelector("[data-form-servico]")

formCadastroServico.addEventListener("submit",event => {
        event.preventDefault()

        const servico = event.target.querySelector('[data-servico]').value
        const preco = event.target.querySelector("[data-preco]").value
        const desc = event.target.querySelector("[data-desc]").value

        if(servico.length >= 3){
            cadastrarServico(servico,preco,desc)
        } else {
            alert('erro ao cadastrar serviço')
        }
    }
)

