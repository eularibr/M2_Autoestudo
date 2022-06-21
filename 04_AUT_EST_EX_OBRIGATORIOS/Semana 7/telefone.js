function validar() {
    // (XX)XXXXX-XXXX
    let telefone = document.querySelector('#telefone').value
    let validChar = []
    let areNumbers = false

    for(char of telefone) {
        if(["(", ")", "-", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(char)) {
            validChar.push(char)
        }
    }

    if (validChar.length == 14) {
        areNumbers = true
    } else {
        areNumbers = false
    }

    if(telefone.trim()[0] == '(' && telefone.trim()[3] == ')' && telefone.trim().length == 14 && telefone.trim()[9] == '-' && areNumbers == true) {
        document.querySelector('#validar').innerHTML = 'O formato está válido.'
    } else {
        document.querySelector('#validar').innerHTML = 'O formato está inválido. <br> Escreva o número no formato (XX)XXXXX-XXXX .'
    }
}