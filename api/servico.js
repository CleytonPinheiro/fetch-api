
const cadastrarServico = (nome, preco, desc) => {
    const json = JSON.stringify({
        nome: nome,
        preco: preco,
        desc: desc
    });
    return fetch("http://localhost:4000/servicos/servico", {
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
