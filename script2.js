var alunos = []
function matricular() {
    /*Seleciona todos os campos*/ 
    let nome = document.getElementById('nome')
    let cpf = document.getElementById('cpf')
    let sex = document.getElementsByName('radsex')
    var idade = document.getElementById('idade')
    let end = document.getElementById('end')
    let mae = document.getElementById('mae')
    let res1 = document.getElementById('res1')
    let list = document.getElementById('list')
    var genero = ''
    /*Verifica o genero*/
    if (sex[0].checked) {
        genero = 'Masculino'
    }else if (sex[1].checked) {
        genero = 'Feminino'
    }
    /*Verifica se há algum campo vazio*/
    if (nome.value.length == 0 || cpf.value.length == 0 || idade.value.length == 0 || end.value.length == 0 || mae.value.length == 0) {
        window.alert('ERRO. Preencha todos os campos para poder prosseguir.')
    }else if (Number(idade.value) < 0) { /*Verifica se a idade é menor que 0*/ 
        window.alert('ERRO. Informe uma idade válida.')
    }else {    /*Se não houver campo vazio nem idade inválida, continua e adiciona as variaveis à o objeto*/
        let aluno = {}
        aluno.nome = nome.value
        aluno.cpf = cpf.value
        aluno.idade = idade.value
        aluno.end = end.value
        aluno.mae = mae.value
        aluno.genero = genero
        alunos.push(aluno) /*Adiciona o objeto ao array*/ 
        res1.innerText = 'Aluno matriculado com sucesso!'
        list.innerText = 'Lista de alunos matriculados na escola'
        nome.value = ''
        cpf.value = ''
        idade.value = ''
        end.value = ''
        mae.value = ''
        mostrarLista()
    }
}


function mostrarLista() {
    let res2 = document.getElementById('res2')
    var linha = document.createElement('hr')
    res2.innerText = ''
    for(let i in alunos) {
        res2.innerHTML += `Aluno ${Number(i)+1} - `
        res2.innerHTML += `Nome: ${alunos[i]['nome']} `
        res2.innerHTML += `CPF: ${alunos[i]['cpf']} `
        res2.innerHTML += `Idade: ${alunos[i]['idade']} `
        res2.innerHTML += `Endereço: ${alunos[i]['end']} `
        res2.innerHTML += `Mae: ${alunos[i]['mae']} `
        res2.innerHTML += `Genero: ${alunos[i]['genero']}<br>`
        res2.appendChild(linha) 
    }
}


function remover() {
    let cpfRemov = document.getElementById('cpfRemov')
    if (cpfRemov.value.length == 0) { /*Se o campo CPF estiver vazio retorna erro*/
        alert('ERRO. Informe primeiro o CPF do aluno.')
    } else if (alunos.length == 0) { /*Se a lista estiver vazia retorna erro*/ 
        alert('Ainda não há alunos matriculados.')
    }else if (alunos.length != 0) { /*Se a lista não tiver vazia, procura o cpf e, se não existir, retorna erro*/
        var c = 0
        for (let i in alunos) {
            if (alunos[i]['cpf'] == cpfRemov.value) {
            alunos.splice(alunos.indexOf(alunos[i]), 1)
        }c++
        } if (c == alunos.length) {
            alert('O CPF informado não foi encontrado na lista')
        }
    }mostrarLista()
}


/*function mascara(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }

    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";

 }*/

 $("#cpf").keypress(function() {
    $(this).mask('000.000.000-00');
});
