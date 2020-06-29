import axios from 'axios';
// Função delay aciona o .then após 1s // Sem ASYNC/AWAIT
/*const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
function umPorSegundo() {
 delay().then(() => {
 console.log('1s');
 delay().then(() => {
 console.log('2s');
 delay().then(() => {
 console.log('3s');
 });
 })
 });
}
umPorSegundo();*/

//COM ASYNC/AWAIT
/*
const delay = async () => new Promise(resolve => setTimeout(resolve, 1000));
async function umPorSegundo() {
    await delay()
    console.log('1s');
    await delay()
    console.log('2s');
    await delay(),
    console.log('3s');
}
umPorSegundo();*/

/* //Sem ASYNC/AWAIT
import axios from 'axios';
function getUserFromGithub(user) {
 axios.get(`https://api.github.com/users/${user}`)
 .then(response => {
 console.log(response.data);
 })
 .catch(err => {
 console.log('Usuário não existe');
 })
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');*/

//COM ASYNC/AWAIT
/*async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response);
    } catch (err) {
        console.warn('Usuário não existe');
    }

}
getUserFromGithub('guiness333');
getUserFromGithub('diego3g124123');*/

/** // SEM ASYNC/AWAIT
 class Github {
 static getRepositories(repo) {
 axios.get(`https://api.github.com/repos/${repo}`)
 .then(response => {
 console.log(response.data);
 })
 .catch(err => {
 console.log('Repositório não existe');
 })
 }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');
 */

//COM ASYNC/AWAIT

class Github {
    static async getRepositories(repo) {
        try{
        const response = await axios.get(`https://api.github.com/repos/${repo}`);
        console.log(response);
        }catch(err){
            console.log('Repositório não existe');
        }
    }
}
Github.getRepositories('guiness333/billingCycles-frontend');
Github.getRepositories('rocketseat/dslkvmskv');