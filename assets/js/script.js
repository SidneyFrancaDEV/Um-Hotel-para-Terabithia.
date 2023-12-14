let nomeDoHotel;
let nomeDoUsuario;
let senhaDoUsuario = 2678;
nomeDoUsuario = localStorage.getItem("nomeDoUsuario");
senhaDoUsuario = localStorage.getItem("senhaDoUsuario");
nomeDoHotel = localStorage.getItem("nomeDoHotel");

let reservas = [];


if (nomeDoHotel && nomeDoUsuario && senhaDoUsuario == 2678) {
    document.getElementById("modalNomeDoHotel").style.display = "none";
    document.getElementById("dadosDoUsuario").style.display = "none";
    document.getElementById("nomeDoHotelSpan").innerText = nomeDoHotel;
    document.getElementById("mensagemSaudacao").innerText = `Bem vindo ao Hotel ${nomeDoHotel}, ${nomeDoUsuario}. É um imenso prazer ter você por aqui!`;
    document.getElementById("mensagemSaudacao").style.display = "block";
    setTimeout(function () {
        document.getElementById("mensagemSaudacao").style.display = "none";
        document.getElementById("menu").style.display = "flex";
    }, 0.1);
}

function escolherNomeDoHotel() {
    nomeDoHotel = document.getElementById("nomeDoHotelInput").value;
    localStorage.setItem("nomeDoHotel", nomeDoHotel);

    if (nomeDoHotel) {
        document.getElementById("modalNomeDoHotel").style.display = "none";
        document.getElementById("dadosDoUsuario").style.display = "flex";
        document.getElementById("nomeDoHotelSpan").innerText = nomeDoHotel;
    } else {
        document.querySelector(".mensagemErro").innerText = "Por favor, insira um nome para o Hotel.";
    }
}

function validarDadosDoUsuario() {
    nomeDoUsuario = document.getElementById("nomeDoUsuario").value;
    senhaDoUsuario = document.getElementById("senhaDoUsuario").value;

    if (nomeDoUsuario && senhaDoUsuario == 2678) {
        localStorage.setItem("nomeDoUsuario", nomeDoUsuario);
        localStorage.setItem("senhaDoUsuario", senhaDoUsuario);

        document.getElementById("dadosDoUsuario").style.display = "none";
        document.getElementById("mensagemSaudacao").innerText = `Bem vindo ao Hotel ${nomeDoHotel}, ${nomeDoUsuario}. É um imenso prazer ter você por aqui!`;
        document.getElementById("mensagemSaudacao").style.display = "block";
        setTimeout(function () {
            document.getElementById("mensagemSaudacao").style.display = "none";
            document.getElementById("menu").style.display = "flex";
        }, 3000);
    } else if (!nomeDoUsuario) {
        document.querySelector(".mensagemErroDados").innerText = "Por favor, insira um nome de usuário.";
    } else if (senhaDoUsuario != 2678) {
        document.querySelector(".mensagemErroDados").innerText = "Senha incorreta, por favor tente novamente.";
    }
}

document.getElementById("nomeDoUsuarioSpan").innerText = `Olá, ${nomeDoUsuario}`;

function verSenha() {
    var passwordInput = document.getElementById("senhaDoUsuario");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}


function reservarQuarto() {
    let valorDaDiaria = parseFloat(prompt(`Olá, ${nomeDoUsuario}, informe o valor da diária para este quarto:`));

    if (valorDaDiaria === "" || isNaN(valorDaDiaria) || valorDaDiaria === null) {
        alert(`Por favor, digite um valor válido para a diária, ${nomeDoUsuario}.`);
        return;
    } else if (valorDaDiaria < 0) {
        alert(`${nomeDoUsuario}, valor da diária não pode ser menor que 0`);
        return;
    }


    let diasDeHospedagem = parseInt(prompt(`Informe a quantidade de dias de hospedagem:`));

    if (diasDeHospedagem === "" || isNaN(diasDeHospedagem) || diasDeHospedagem === null) {
        alert("Digite um valor válido para os dias de hospedagem");
        return;
    } else if (diasDeHospedagem > 30) {
        alert("A quantidade de dias de hospedagem não pode ser maior que 30");
        return;
    } else if (diasDeHospedagem < 0) {
        alert("A quantidade de dias de hospedagem não pode ser menor que 0");
        return;
    }


    let valorTotal = valorDaDiaria * diasDeHospedagem;
    alert(`O valor total da sua reserva é de R$ ${valorTotal.toFixed(2)}`);


    let nomeDoHospede = prompt("Informe o nome do hóspede:");

    while (nomeDoHospede === "" || nomeDoHospede === null || nomeDoHospede.length < 5) {
        if (nomeDoHospede === null) {
            return;
        } else {
            nomeDoHospede = prompt("Por favor, informe um nome válido para o hóspede:");
            if (nomeDoHospede === "" || nomeDoHospede.length < 5) {
                alert("Por favor, informe um nome válido para o hóspede.");
            }
        }
    }

    let confirmaReserva = prompt(`${nomeDoUsuario}, confirma a reserva de ${nomeDoHospede} por ${diasDeHospedagem} dias no valor de R$ ${valorTotal.toFixed(2)} a diária? (Digite S para sim e N para não)`);

    while (confirmaReserva !== "S" && confirmaReserva !== "N") {
        confirmaReserva = prompt(`${nomeDoUsuario}, por favor, digite S para sim e N para não`);
        if (confirmaReserva === null) {
            return;
        }
    }

    if (confirmaReserva == "N") {
        alert(`${nomeDoUsuario}, a reserva de ${nomeDoHospede} não foi realizada.`);
        return;
    }

    if (confirmaReserva == "S") {
        reserva = {
            nome: nomeDoHospede,
            dias: diasDeHospedagem,
            valor: valorTotal
        };
        reservas.push(reserva);
        console.log(reservas);
        alert(`${nomeDoUsuario}, a reserva de ${nomeDoHospede} no valor total de R$ ${valorTotal} foi realizada com sucesso!`);
    }
}

function cadastrarHospedes() {
    let valorDiaria = parseFloat(prompt("Qual o valor padrão da diária?"));
    if (valorDiaria === "" || isNaN(valorDiaria) || valorDiaria == "0") {
        alert("Por favor, digite um valor válido para a diária.");
        return;
    } else if (valorDiaria < 0) {
        alert("Valor da diária não pode ser menor que 0");
        return;
    }

    let nomeHospede = "";
    let idadeHospede = 0;
    let total = 0;
    let gratuidades = 0;
    let meias = 0;

    while (true) {
        nomeHospede = prompt("Qual o nome do Hóspede?. Digite 'PARE' para encerrar o programa de cadastros.");

        if (nomeHospede.toUpperCase() === "PARE") {

            break;
        }

        idadeHospede = parseInt(prompt("Qual a idade do Hóspede?"));

        if (idadeHospede <= 6) {
            gratuidades++;
            alert(`${nomeHospede} cadastrada(o) com sucesso. ${nomeHospede} possui gratuidade.`);
        } else if (idadeHospede >= 60) {
            meias++;
            total += valorDiaria / 2;
            alert(`${nomeHospede} cadastrada(o) com sucesso. ${nomeHospede} paga meia.`);
        } else {
            total += valorDiaria;
            alert(`${nomeHospede} cadastrada(o) com sucesso.`);
        }
    }

    alert(`${nomeDoUsuario}, o valor total das hospedagens é: R$${total.toFixed(2)}; ${gratuidades} gratuidade(s); ${meias} meia(s)`);
}

function cadastrarLista() {
    let hospedes = [];


    while (true) {
        let escolha = parseInt(prompt("Selecione uma opção: 1) cadastrar; 2) pesquisar; 3) listar; 4) sair."));

        if (escolha == 1) {
            if (hospedes.length < 15) {
                let nomeHospede = prompt("Qual o nome do Hóspede?");
                hospedes.push(nomeHospede);
                alert(`Hóspede ${nomeHospede} foi cadastrada(o) com sucesso!`);
            } else {
                alert("Máximo de cadastros atingido");
            }
        } else if (escolha == 2) {
            let nomeHospede = prompt("Qual o nome do Hóspede?");
            if (hospedes.includes(nomeHospede)) {
                alert(`Hóspede ${nomeHospede} foi encontrada(o)!`);
            } else {
                alert("Hóspede não encontrado");
            }
        } else if (escolha == 3) {
            if (hospedes.length === 0) {
                alert("Não há hóspedes cadastrados");
            } else {
                alert(`Os hóspedes cadastrados são:\n${hospedes.join('\n')}`);
            }
        }
        else if (escolha == 4) {
            break;
        } else {
            alert(`${nomeDoUsuario}, por favor, informe um número entre 1 e 4`);
        }
    }
}

function cadastrarEvento() {

    let duracaoEvento = parseInt(prompt("Qual a duração do evento em horas?"));
    if (duracaoEvento === "" || isNaN(duracaoEvento) || duracaoEvento === null) {
        alert("Por favor, digite um valor válido para a duração do evento.");
        return;
    } else if (duracaoEvento < 0) {
        alert("Duração do evento não pode ser menor que 0");
        return;
    }
    let numGarcons = parseInt(prompt("Quantos garçons serão necessários?"));
    if (numGarcons === "" || isNaN(numGarcons) || numGarcons === null) {
        alert("Por favor, digite um valor válido para a quantidade de garçons.");
        return;
    } else if (numGarcons < 0) {
        alert("Quantidade de garçons não pode ser menor que 0");
        return;
    }
    let custoGarcom = 10.5;

    let custoTotal = numGarcons * custoGarcom * duracaoEvento;

    alert(`Custo total: R$ ${custoTotal.toFixed(2)}`);

    let resposta = prompt("Gostaria de efetuar a reserva? S/N");

    while (resposta.toUpperCase() !== "S" && resposta.toUpperCase() !== "N") {
        resposta = prompt("Por favor, digite S para sim e N para não");

        if (resposta.toUpperCase() === "S") {
            alert(`${nomeDoUsuario}, reserva efetuada com sucesso.`);
        } else if (resposta.toUpperCase() === "N") {
            alert(`${nomeDoUsuario}, reserva não efetuada.`);
        } else {
            alert("Resposta inválida.");
        }
    }

}

function cadastrarBuffet() {
    let numConvidados = parseInt(prompt("Qual o número de convidados para o evento?"));
    if (numConvidados > 350) {
        alert("Quantidade de convidados superior à capacidade máxima de 350 pessoas.");
        return;
    } else if (numConvidados <= 0) {
        alert("Quantidade de convidados não pode ser menor ou igual a 0");
        return;
    } else if (numConvidados === "" || isNaN(numConvidados)) {
        alert("Por favor, digite um valor válido para a quantidade de convidados.");
        return;
    }


    let cafe = numConvidados * 0.2;
    let agua = numConvidados * 0.5;
    let salgados = numConvidados * 7;

    let custoCafe = cafe * 0.80;
    let custoAgua = agua * 0.40;
    let custoSalgados = (salgados / 100) * 34;

    let custoTotal = custoCafe + custoAgua + custoSalgados;

    alert(`O evento precisará de ${cafe} litros de café, ${agua} litros de água, ${salgados} salgados. O custo total do evento será de R$ ${custoTotal.toFixed(2)}`);

    let resposta = prompt("Gostaria de efetuar a reserva? S/N");

    while (resposta.toUpperCase() !== "S" && resposta.toUpperCase() !== "N") {
        resposta = prompt("Por favor, digite S para sim e N para não");
        if (resposta.toUpperCase() === 'S') {
            alert(`${nomeDoUsuario}, reserva efetuada com sucesso.`);
        } else {
            alert(`${nomeDoUsuario}, digite S para sim e N para não`);
        }
    }
}

function escolherAuditorio() {
    let numConvidados = prompt("Qual o número de convidados para o seu evento?");

    while (numConvidados === "" || isNaN(numConvidados) || numConvidados <= 0 || numConvidados > 350) {
        alert("Por favor, insira um número válido de convidados (entre 1 e 350).");
        numConvidados = prompt("Qual o número de convidados para o seu evento?");
    }

    numConvidados = parseInt(numConvidados);

    if (numConvidados <= 150) {
        alert("Use o auditório Laranja");
    } else if (numConvidados <= 220) {
        let cadeirasAdicionais = numConvidados - 150;
        alert(`Use o auditório Laranja (inclua mais ${cadeirasAdicionais} cadeiras)`);
    } else {
        alert("Use o auditório Colorado");
    }

    let resposta = prompt("Gostaria de efetuar a reserva? S/N");

    while (resposta.toUpperCase() !== "S" && resposta.toUpperCase() !== "N") {
        alert("Por favor, insira 'S' para sim ou 'N' para não.");
        resposta = prompt("Gostaria de efetuar a reserva? S/N");
    }

    if (resposta.toUpperCase() === "S") {
        alert(`${nomeDoUsuario}, reserva efetuada com sucesso.`);
    } else {
        alert(`${nomeDoUsuario}, reserva não efetuada.`);
    }
}

function reservarRestaurante() {
    let diaDaSemana = prompt("Qual o dia do seu evento?").toLowerCase();

    if (diaDaSemana === "" || diaDaSemana === null) {
        alert("Por favor, informe um dia válido para o seu evento.");
        return;
    } else if (diaDaSemana !== "segunda" && diaDaSemana !== "terca" && diaDaSemana !== "quarta" && diaDaSemana !== "quinta" && diaDaSemana !== "sexta" && diaDaSemana !== "sabado" && diaDaSemana !== "domingo") {
        alert("Por favor, informe um dia válido para o seu evento.");
        return;
    }

    let hora = parseInt(prompt("Qual a hora do seu evento?"));

    if (hora === "" || isNaN(hora) || hora === null) {
        alert("Por favor, informe uma hora válida para o seu evento.");
        return;
    } else if (hora < 7 || hora > 23) {
        alert("Por favor, informe um horario entre 7h e 23h para o seu evento.");
        return;
    }

    let diasUteis = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'];
    let fimDeSemana = ['sabado', 'domingo'];

    if ((diasUteis.includes(diaDaSemana) && hora >= 7 && hora <= 23) ||
        (fimDeSemana.includes(diaDaSemana) && hora >= 7 && hora <= 15)) {
        let nomeEmpresa = prompt("Qual o nome da empresa?");
        alert(`${nomeDoUsuario}, restaurante reservado para ${nomeEmpresa}: ${diaDaSemana} às ${hora}hs.`);
    } else {
        alert(`${nomeDoUsuario}, restaurante indisponível`);
    }
}

function abastecerCarros() {
    let precoAlcoolWayne = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"));
    let precoGasolinaWayne = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?"));
    let precoAlcoolStark = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"));
    let precoGasolinaStark = parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol?"));

    let custoAlcoolWayne = precoAlcoolWayne * 42;
    let custoGasolinaWayne = precoGasolinaWayne * 42;
    let custoAlcoolStark = precoAlcoolStark * 42;
    let custoGasolinaStark = precoGasolinaStark * 42;

    let custoWayne = custoAlcoolWayne < custoGasolinaWayne * 0.7 ? { combustivel: 'álcool', custo: custoAlcoolWayne } : { combustivel: 'gasolina', custo: custoGasolinaWayne };
    let custoStark = custoAlcoolStark < custoGasolinaStark * 0.7 ? { combustivel: 'álcool', custo: custoAlcoolStark } : { combustivel: 'gasolina', custo: custoGasolinaStark };

    let postoMaisBarato = custoWayne.custo < custoStark.custo ? { posto: 'Wayne Oil', combustivel: custoWayne.combustivel } : { posto: 'Stark Petrol', combustivel: custoStark.combustivel };

    alert(`É mais barato abastecer com ${postoMaisBarato.combustivel} no posto ${postoMaisBarato.posto}`);
}


function calcularManutençao() {
    let empresas = [];
    let continuar = 'S';

    while (continuar.toUpperCase() === 'S') {
        let nomeEmpresa = prompt("Qual o nome da empresa?");
        if (nomeEmpresa === "" || nomeEmpresa === null) {
            alert("Por favor, informe um nome válido para a empresa.");
            return;
        }

        let valorPorAparelho = parseFloat(prompt("Qual o valor por aparelho?"));
        if (valorPorAparelho === "" || isNaN(valorPorAparelho) || valorPorAparelho === null) {
            alert("Por favor, informe um valor válido para o aparelho.");
            return;
        } else if (valorPorAparelho < 0) {
            alert("Valor do aparelho não pode ser menor que 0");
            return;
        }

        let quantidadeAparelhos = parseInt(prompt("Qual a quantidade de aparelhos?"));
        if (quantidadeAparelhos === "" || isNaN(quantidadeAparelhos) || quantidadeAparelhos === null) {
            alert("Por favor, informe uma quantidade válida de aparelhos.");
            return;
        } else if (quantidadeAparelhos < 0) {
            alert("Quantidade de aparelhos não pode ser menor que 0");
            return;
        }

        let percentualDesconto = parseFloat(prompt("Qual a porcentagem de desconto?"));
        if (percentualDesconto === "" || isNaN(percentualDesconto) || percentualDesconto === null) {
            alert("Por favor, informe uma porcentagem válida de desconto.");
            return;
        } else if (percentualDesconto < 0) {
            alert("Porcentagem de desconto não pode ser menor que 0");
            return;
        }

        let minimoAparelhosDesconto = parseInt(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"));
        if (minimoAparelhosDesconto === "" || isNaN(minimoAparelhosDesconto) || minimoAparelhosDesconto === null) {
            alert("Por favor, informe um número mínimo válido de aparelhos para conseguir o desconto.");
            return;
        } else if (minimoAparelhosDesconto < 0) {
            alert("Número mínimo de aparelhos para conseguir o desconto não pode ser menor que 0");
            return;
        }

        let valorTotal = valorPorAparelho * quantidadeAparelhos;

        if (quantidadeAparelhos >= minimoAparelhosDesconto) {
            valorTotal -= valorTotal * (percentualDesconto / 100);
        }

        empresas.push({ nome: nomeEmpresa, valor: valorTotal });

        alert(`O serviço de ${nomeEmpresa} custará R$ ${valorTotal.toFixed(2)}`);

        continuar = prompt("Deseja informar novos dados? (S/N)");
    }

    let empresaMenorValor = empresas.reduce((prev, current) => (prev.valor < current.valor) ? prev : current);

    alert(`O orçamento de menor valor é o de ${empresaMenorValor.nome} por R$ ${empresaMenorValor.valor.toFixed(2)}`);
}

function sair() {
    var confirma = confirm("Você deseja sair?");
    if (confirma) {
        document.getElementById("mensagemDespedida").innerText = `Muito obrigado e até logo, ${nomeDoUsuario}.`;
        document.getElementById("menu").style.display = "none"; //
        document.getElementById("mensagemDespedida").style.display = "flex";
        setTimeout(function () {
            window.close();
        }, 5000);
    } else {
        inicio();
    }
}
