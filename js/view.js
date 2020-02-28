class View {
    constructor(){
        this.view = document.querySelector("#view")
        this.header = this.createElement("h1", "header", null, "The Solar System")
        this.model = this.createElement("article", "model")
        this.planetList = this.createElement("ul")
        this.deleteButton = this.createElement("button", null, "deleteButton", "Burn planet")
        this.factBox = this.createElement("section", "factBox")
        this.distance = this.createElement("p", "distance")
        this.stars = this.createElement("p", "stars")
        this.terrestrialPlanets = this.createElement("p", "terrestrialPlanets")
        this.gasPlanets = this.createElement("p", "gasPlanets")
        this.elements = this.createElement("p", "elements")
        this.view.append(this.header, this.model, this.factBox)
        this.model.append(this.planetList, this.deleteButton)
        this.factBox.append(this.distance, this.stars, this.terrestrialPlanets,
                            this.gasPlanets, this.elements)
    }

    createElement(tag, id, className, innerText){
        const element = document.createElement(tag)
        if (id) element.id = id
        if (className) element.classList.add(className)
        if (innerText) element.innerText = innerText
        return element
    }

    updateState(planets, substances, typeCount){
        this.renderPlanets(planets)
        this.renderClosestPlanets(planets)
        this.renderMostCommonSubstances(substances)
        this.renderTypesofPlanets(typeCount)
    }

    renderPlanets(data){
        while (this.planetList.firstChild){
            this.planetList.firstChild.remove()
        }
        for (let planet of data){
            let li = this.createElement("li", null, "planet")
            li.innerText = planet.name
            this.planetList.appendChild(li)
        }
    }

    renderClosestPlanets(data){
        let planets = []
        let str = ''
        for (let i = 1; i < data.length; i++){
            planets.push(data[i].name)
            str = planets.join(', ')
        }
        this.distance.innerHTML = `Planets in order of distance from the sun: ${str}`
    }

    renderMostCommonSubstances(substances){
        let arr = []
        let str = ""
        for (let i = 0; i < substances.length; i++){
            str += substances[i][0][0].toString() + ', '
            for (let j = 1; j < substances[i].length; j++){
                str += substances[i][j][0].toString() + ', '
            }
        }
        str = str.substring(0, str.length - 2)
        this.elements.innerHTML = `The most common substances in the Solar system: ${str}`
    }

    renderTypesofPlanets(typeCount){
        let str = ""
        let planets = ""
        this.stars.innerHTML = `Number of stars in the Solar system: ${typeCount["stars"]} (duhh)`
        this.terrestrialPlanets.innerHTML = `Number of terrestrial planets in the Solar system: ${typeCount["terrestrialPlanets"]}`
        this.gasPlanets.innerHTML = `Number of gas planets in the Solar system: ${typeCount["gasPlanets"]}`
    }

    bindDeletePlanet(handleDeletePlanet) {
        this.deleteButton.addEventListener("click", event => {
                handleDeletePlanet(1)
        })
    }

}