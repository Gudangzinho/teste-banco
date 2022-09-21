
export class Banco{
    clienteNome: string;
    saldo: number;
    contaCorrente: number;
    contaPoupanca: number;
    contaInvest: number

    nome() {
        console.log(`Olá, ${interacao.clienteNome}. \n`)
    }

    mostrarSaldo() {
        console.log(`Seu saldo é de R$${interacao.saldo},00`)
    }

    mostrarInvest() {
        console.log(`Você investiu o total de: ${interacao.contaInvest}`)
    }

    corrente() {
        console.log(`Apenas o valor depositado na conta Corrente: ${interacao.contaCorrente}.`)
    }

    poupanca() {
        console.log(`Apenas o valor depositado na poupança: ${interacao.contaPoupanca}.`)
    }
    invest() {
        console.log(`Você investiu uma grana aí.`)
    }

}

    var interacao = new Banco();
        interacao.clienteNome = "Igor Nascimento"
        interacao.contaCorrente = 100
        interacao.contaPoupanca = 100
        interacao.saldo = interacao.contaCorrente + interacao.contaPoupanca
        interacao.contaInvest = interacao.saldo * 0.10
        

        interacao.nome()
        interacao.mostrarSaldo()
        interacao.mostrarInvest()
        interacao.poupanca()
