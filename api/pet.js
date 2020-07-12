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
