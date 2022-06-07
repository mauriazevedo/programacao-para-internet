let agenda = [];

do{
    const menu = `
    Gravar..........1
    Listar..........2
    Buscar..........3
    Excluir.........4
    `

    let opcaoMenu = prompt(menu);

    if(opcaoMenu == "1"){
        const nome = prompt("Digite seu nome");
        const telefone = prompt("Digite seu telefone (só números)");

        const pessoa = {
            nome,
            telefone
        }

        agenda.push(pessoa);
        alert("Cadastrado com sucesso!");

    }else if(opcaoMenu == "2"){
        let lista = "";

        for(let i = 0; i < agenda.length; i++){
            lista += `
            ---------------------------
            Contato ${i+1}:
            Nome: ${agenda[i].nome}
            Telefone: ${agenda[i].telefone}
            `;
        }

        alert(lista);

    }else if(opcaoMenu == "3"){
        const nome = prompt("Digite o nome para buscar: ");
        let achou = -1;

        for(let i = 0; i < agenda.length; i++){
            if(nome == agenda[i].nome){
                achou = i;
            }
        }

        if(achou == -1){
            alert("Não encontramos nenhuma pessoa com esse nome! =(");
        }else{
            alert(`
            Nome: ${agenda[achou].nome}
            Telefone: ${agenda[achou].telefone}
            `);
        }

    }else if(opcaoMenu == "4"){
        const nome = prompt("Digite o nome para excluir: ");
        let achou = -1;

        for(let i = 0; i < agenda.length; i++){
            if(nome === agenda[i].nome){
                achou = i;
            }
        }

        if(achou === -1){
            alert("Não encontramos nenhuma pessoa com esse nome! =(");
        }else{
            agenda.splice(achou, 1);
            alert("Removida com sucesso!");
        }
    }else{
        alert("Opção inválida!")
    }
}while(true);