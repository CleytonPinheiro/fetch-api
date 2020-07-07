function verificaCpfInvalidos(cpf){
    const cpfsInvalidos =[
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"
    ]

    return cpfsInvalidos.indexOf(cpf) === -1
}

function somaNumerosCpf(cpf, totalDigitos, peso){
    let soma = 0
    for(let i =1; i <= totalDigitos; i++){
        soma += parseInt(cpf.substring(i -1, i)) * (peso - i)
    }
    return soma
}

function verificaDigito(cpf, totalDeDigitos, peso, digitoVerificacao){
    const soma = somaNumerosCpf(cpf, totalDeDigitos, peso)
    const resto = (soma * 10) % 11

    return resto === digitoVerificacao
}

function verificaPrimeiroDigito(cpf){
    const peso = 11
    const totalDeDigitosPrimeiraParte = 9
    const digitoDeVerificacao = parseInt(cpf.substring(9,10))

    return verificaDigito(
        cpf,
        totalDeDigitosPrimeiraParte,
        peso,
        digitoDeVerificacao
    )
}

function verificaSegundoNumero(cpf){
    const peso =12
    const totalDeDigitosSegundaParte = 10
    const digitoDeVerificacao = parseInt(cpf.substring(10,11)
    )
    return verificaDigito(
        cpf,
        totalDeDigitosSegundaParte,
        peso,
        digitoDeVerificacao
    )
}

function validaCpf(cpf){
    return(
        verificaPrimeiroDigito(cpf) &&
        verificaSegundoNumero(cpf)&&
        verificaCpfInvalidos(cpf)
    )
}