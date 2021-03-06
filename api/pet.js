const listarPets = () => {
    return fetch("http://localhost:4000/pets", {
        method: "GET"
    })
        .then(resp => {
            return resp.json();

        })
        .then(json => {
            return json;
        });
};

const deletaPet = id => {
    return fetch(`http:localhost:4000/pets/pet/${id}`, {
        method: "DELETE",
    })}


const detalhaPet = id => {
    return fetch(`http://localhost:4000/pets/pet/${id}`,{
        method: 'GET'
    })
        .then(resposta => {
            return resposta.json()
        })
}

const editaPet = (id, nome, donoId, tipo, obs) => {
    const json = JSON.stringify({
        nome: nome,
        donoId: donoId,
        tipo: tipo,
        observacoes: obs
    });
    return fetch(`http://localhost:4000/pets/pet/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: json
    })
}

const cadastrarPet = (nome, donoId, tipo, obs) => {
    debugger
    const json = JSON.stringify({
        nome: nome,
        donoId: donoId,
        tipo: tipo,
        observacoes: obs
    });
    return fetch("http://localhost:4000/pets/pet", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: json
    }).then(resp => {
            return resp.body;
        }
    );
}

