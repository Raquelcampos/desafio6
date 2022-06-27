// Crie um objeto que receba ao menos três propriedades sobre você.
const sobreMim = {
    nome: "Raquel",
    idade: 22,
    estudante:true
}


// Adicione uma nova propriedade sem alterar seu objeto inicial.
sobreMim.tecnologia = "HTML"

// Remova uma propriedade desse objeto.
delete sobreMim.estudante

//Mostre no console todas as propriedades desse objeto.
console.log(sobreMim)
// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
// Mostre no console o nome de um amigo de cada lista.

let cadastro = [ {
    nome: "nome1",
    idade: "idade1",
    telefone: "(xx) xxxxx-xxxx",
    amigos: ["amigo1", "amigo1","amigo1","amigo1"]

},
{
    nome: "nome2",
    idade: "idade2",
    telefone: "(xx) xxxxx-xxxx",
    amigos: ["amigo2", "amigo2","amigo2","amigo2"]
   
},
{
    nome: "nome3",
    idade: "idade3",
    telefone: "(xx) xxxxx-xxxx",
    amigos: ["amigo3", "amigo3","amigo3","amigo3"]

},
{    
    nome: "nome4",
    idade: "idade4",
    telefone: "(xx) xxxxx-xxxx",
    amigos: ["amigo4", "amigo4","amigo4","amigo4"]
},
{
    nome: "nome5",
    idade: "idade5",
    telefone: "(xx) xxxxx-xxxx",
    amigos: ["amigo5", "amigo5","amigo5","amigo5"]

}]
console.log(cadastro[0].amigos[1],cadastro[1].amigos[1],cadastro[2].amigos[1],cadastro[3].amigos[1],cadastro[4].amigos[1])

for(let i = 0; i < cadastro.length; i++){;
    let f = Math.floor(Math.random()*4)
    console.log(`${cadastro[i].nome} possui umx amigx que se chama ${cadastro[i].amigos[f]}`);
}
