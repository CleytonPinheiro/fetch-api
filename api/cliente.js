
const listarClientes = () => {
    fetch('http://localhost:4000/clientes')
        .then( resposta => {
            return resposta.json()
        })
}

const cadastrarClientes = (nome, cpf) => {
    const json = JSON.stringify({
        nome: nome,
        cpf: cpf
    })
    return fetch('http://localhost:4000/clientes/cliente', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: json
    })
        .then( resp => {
            return resp.body
        })
}


