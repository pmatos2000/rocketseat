import api from "./api";

class App{
    constructor(){
        this.repositories = [];
        this.formEl = document.getElementById("repo-form");
        this.listEl = document.getElementById("repo-list");
        this.inputEl = document.getElementById("input"); 
        this.registerHandlers();
    }

    //Registra eventos
    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event);
    }
    
    async addRepository(event){
        event.preventDefault();
        const repoInput = this.inputEl.value;
        
        if (repoInput.length === 0) return;

        const response = await api.get(`/repos/${repoInput}`);

        const {name, description, html_url, owner: {avatar_url}} = response.data;

        this.inputEl.value = "";

        const item = { name, description, avatar_url, html_url };
        
        this.repositories.push(item);
        
        this.render();
    }

    render(){
        this.listEl.innerHTML = "";
        this.repositories.forEach(repo => this._converteRepoHTML(repo));
    }

    _converteRepoHTML(repo){
        const imgEl = document.createElement("img");
        imgEl.setAttribute("src", repo.avatar_url);

        const titleEl = document.createElement("strong");
        titleEl.appendChild(document.createTextNode(repo.name));

        const descriptionEl = document.createElement("p");
        descriptionEl.appendChild(document.createTextNode(repo.description));

        const linkEl = document.createElement("a");
        linkEl.setAttribute("target", "_black");
        linkEl.setAttribute("href", repo.html_url)
        linkEl.appendChild(document.createTextNode("Acessar"));

        const listItemEl = document.createElement("li");
        listItemEl.appendChild(imgEl);
        listItemEl.appendChild(titleEl);
        listItemEl.appendChild(descriptionEl);
        listItemEl.appendChild(linkEl);

        this.listEl.appendChild(listItemEl);
    }
}

new App();