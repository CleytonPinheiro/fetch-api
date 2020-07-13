const formCadastroPet = document.querySelector("[data-form-pet]")

formCadastroPet.addEventListener("submit",event => {
        event.preventDefault()

        const nomePet = event.target.querySelector('[data-nome-pet]').value
        const nomeDono = event.target.querySelector("[data-nome-dono]").value
        const tipo = event.target.querySelector("[data-tipo]").value
        const observacao = event.target.querySelector('[data-obs]')

        if(nomePet.length >= 3){

            cadastrarPet(nomePet,nomeDono,tipo,observacao)
        } else {
            alert('erro ao cadastrar pet')
        }

    }
)

