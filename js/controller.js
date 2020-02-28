class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
        this.updateState()
        this.view.bindDeletePlanet(this.handleDeletePlanet)
    }

    handleDeletePlanet = order => {
        this.model.deletePlanet(order)
        this.updateState()
    }

    updateState() {
        this.typeCount = this.model.countPlanetsByType(this.model.data)
        this.mostCommonSubstances = this.model.countMostCommonSubstances(this.model.commonSubstances)
        this.view.updateState(this.model.data, this.mostCommonSubstances, this.typeCount)
    }
}

let model = new Model
let view = new View
let controller = new Controller(model, view)