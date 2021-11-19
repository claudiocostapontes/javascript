const listaDeEspera = []

function adicionarLista() {
    console.log("DEBUGANDO O ADICIONAR LISTA")
    let paciente = document.querySelector("#paciente").value //campo do formulario
    let ulLista = document.querySelector("#listaEspera") // saida com lista

    //Verifica se o campo paciente foi preenchido
    if(paciente == ""){
        alert("Preencha o campo nome corretamente!");
        return false;
    }

    //adicionar o nome do paciente no array listaDeEspera que até o momento estava vazio
    listaDeEspera.push(paciente)
    //variavel que armazera a lista de itens para a tela
    let listaTela = ""

    //ocorre a montagem dos itens da lista de nomes (lista de espera)
    listaDeEspera.forEach(function(item, indice){
        listaTela += `<li class="list-group-item">${indice+1} - ${item}</li>`
    })

    //adiciono a ulLista todo o conteudo da variavel listaTela
    ulLista.innerHTML = listaTela

    //Limpar os dados do campo paciente
    document.querySelector("#paciente").value = ""
    //mandar o foco da tela para o campo paciente
    document.querySelector("#paciente").focus()

}

function adicionarUrgencia() {
    console.log("add urgencia")
}
//arrow function
const atender = () => {
    console.log("atender")
}

btnAdd.addEventListener("click", adicionarLista);
btnUrg.addEventListener("click", adicionarUrgencia);
btnAtender.addEventListener("click", atender);