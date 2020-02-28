class Model {
    constructor(){

        this.unsortedData = [
            {
              "name": "Saturn",
              "order": 6,
              "type": "Gas planet",
              "atmospheric_composition": [
                "H2",
                "He"
              ],
              "discovery": "Antiquity"
            },
            {
              "name": "Venus",
              "order": 2,
              "type": "Terrestrial planet",
              "atmospheric_composition": [
                "CO2",
                "N2",
                "SO2"
              ],
              "discovery": "Antiquity"
            },
            {
              "name": "Jupiter",
              "order": 5,
              "type": "Gas planet",
              "atmospheric_composition": [
                "H2",
                "He"
              ],
              "discovery": "Antiquity"
            },
            {
              "name": "Mars",
              "order": 4,
              "type": "Terrestrial planet",
              "atmospheric_composition": [
                "CO2",
                "N2",
                "Ar"
              ],
              "discovery": "Antiquity"
            },
            {
              "name": "Mercury",
              "order": 1,
              "type": "Terrestrial planet",
              "atmospheric_composition": [
                "He",
                "Na+",
                "P+"
              ],
              "discovery": "Antiquity"
            },
            {
              "name": "Neptune",
              "order": 8,
              "type": "Gas planet",
              "atmospheric_composition": [
                "H2",
                "He",
                "CH4"
              ],
              "discovery": "Urbain Le Verrier, 1846"
            },
            {
              "name": "Earth",
              "order": 3,
              "type": "Terrestrial planet",
              "atmospheric_composition": [
                "N2",
                "O2",
                "Ar",
                "CO2"
              ],
              "discovery": "Antiquity"
            },
            {
              "name": "Sun",
              "order": 0,
              "type": "Star",
              "atmospheric_composition": [
                "H",
                "He",
                "O",
                "C",
                "Fe",
                "S"
              ],
              "discovery": "Antiquity"
            },
            {
              "name": "Uranus",
              "order": 7,
              "type": "Gas planet",
              "atmospheric_composition": [
                "H2",
                "He",
                "CH4"
              ],
              "discovery": "William Herschel, 1781"
            }
          ]
        this.data = this.unsortedData.sort((a, b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0))
        this.commonSubstances = this.countCommonSubstances(this.data)
    }

    removeClosestPlanet(data){
        return this.data = data.splice(1, 1)
    }

    countPlanetsByType(data){
        let obj = {"gasPlanets": 0, "stars": 0, "terrestrialPlanets": 0}
        //alt. skapa tomt objekt och lägg till alla objekt som har property "type"

        for (let planet of data){
            if (planet.type == "Gas planet"){
                obj["gasPlanets"]++
            }
            if (planet.type == "Star"){
                obj["stars"]++
            }
            if (planet.type == "Terrestrial planet"){
                obj["terrestrialPlanets"]++
            }
        }
        return obj
    }

    countCommonSubstances(data){
        let obj = {}
        
        for (let planet of data){
            for (let substance of planet.atmospheric_composition){ 
                
                    if (obj.hasOwnProperty(substance)){
                        obj[substance]++
                    } else {
                        obj[substance] = 1
                    }
            }
        }
        let objArr = []
        for (let index of Object.entries(obj)){
            objArr.push(index)
        }
        objArr.sort((a, b) => (a[1] < b[1]) ? 1 : ((b[1] < a[1]) ? -1 : 0))
        return objArr
    }

    countMostCommonSubstances(substances){
            //ränka hur många grundämnen som förekommer 
            //lika många gåner som den som förekommer mest
            let mostCommonArr = []
            for (let i = 0; i < 3; i++){
                if (substances.length == 0) return mostCommonArr
                let max = substances[0][1]
                let mostCommon = substances.filter(substance => substance[1] == max)
                substances = substances.filter(substance => substance[1] != max)
                mostCommonArr.push(mostCommon)
            }
            return mostCommonArr
    }

    deletePlanet = (order) => {
        this.data = this.data.filter(data => data.order != order)
        for (let i = order; i < this.data.length; i++){
            this.data[i].order-- 
        }
        this.commonSubstances = this.countCommonSubstances(this.data) //UPDATE STATE
    }
}
