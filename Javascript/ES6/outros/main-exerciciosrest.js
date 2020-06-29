/* Exercicio 1

class Usuario {
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }
    isAdmin(){
        return this.admin;
    }
    getUser(){
        return this.email+this.senha;
    }
}

class Admin extends Usuario{
    constructor(email, senha){
        super(email, senha);
        this.admin = true;
    }
}

const User1 = new Usuario('usuario@teste.com','124');
const adm = new Admin('admin@teste.com','12354');
console.log(User1.isAdmin());
console.log(adm.isAdmin());*/

/*
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

let idades = [];
usuarios.map(e => idades.push(e.idade))
console.log(idades);
let users = [];
users = usuarios.filter(e => e.idade > 18 && e.empresa === 'Rocketseat');
console.log(users);
*/
/* 4.2
function mostraInfo({ nome, idade}) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }))
*/
/*5.1
const arr = [1, 2, 3, 4, 5, 6];
const {x, ...y} = arr;
console.log(x,y)
*/
const soma = (...numbers) =>{
    let sum = numbers.reduce((sum, next)=>sum+next);
    return sum; 
}
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3