class App{
    constructor(){
        this.repositories = [];
        this.formEl = document.getElementById("repo-form");
        this.listEl = document.getElementById("repo-list");
        this.registerHandlers();
    }

    //Registra eventos
    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event);
    }
    
    addRepository(event){
        event.preventDefault();
        const item = {
            name: "rocketseat.com.br",
            description: "Tire a sua ideia do papel e der vida à sua startup",
            avatar_url: "https://avatars0.githubusercontent.com/u/28929274?v=4",
            html_url: "http://github.com/rocketseat/rocketseat.com.br",
        };
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