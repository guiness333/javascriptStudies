import api from './api';
class App {
    constructor() {
        this.repositories = JSON.parse(localStorage.getItem('repos')) || [];
        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');
        this.btnEl = document.querySelector('button[name=add]');
        this.registerhandlers();
        this.render();
    }
    registerhandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }
    saveToStorage() {
        localStorage.setItem('repos', JSON.stringify(this.repositories));
    }
    setFetching(loading = true){
        if(loading){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.setAttribute('id', 'loading');
            this.btnEl.setAttribute('disabled', true);
            this.formEl.appendChild(loadingEl);
        }else{
            document.getElementById('loading').remove();
            this.btnEl.removeAttribute('disabled');
        }
    }
    async addRepository() {
        event.preventDefault();
        const repoInput = this.inputEl.value;
        console.log(this.repositories)
        if (repoInput.length === 0) return;
        this.setFetching();
        try {

            const response = await api.get(`/repos/${repoInput}`);
            console.log(response);
            const { name, description, html_url, owner: { avatar_url } } = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            })

            this.inputEl.value = '';
            this.render();
            this.saveToStorage();
        }catch (err){
            alert('O repositorio não existe!', err);
        }
        this.setFetching(false);
    }
    render() {
        this.listEl.innerHTML = '';
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);

        })
    }
}
//Executar classe
new App();