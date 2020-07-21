class Traveler {
    constructor (name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt () {
        this.food += 2
    }
    eat () {
        this.food -= 1
        if (this.food < 0) {
            this.isHealthy = false
        }
    }
}
class Wagon {
    constructor (capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers
        .length
    }
    join(Traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(Traveler) 
        }
    }
    shouldQuarantine () {
        return this.passengers.some(Traveler => Traveler.isHealthy === false)

    }
    totalFood () {
        let total = 0
        for (let index = 0; index < this.passengers.length; index ++) {
            total += this.passengers[index].food
        }
        return total
    }
}

class Doctor extends Traveler {
    constructor(name) {
        super(name);
    }
    heal(Traveler) {
        if (Traveler.isHealthy === false)
        this.food += 1
    }
}

class Hunter extends Traveler {
    constructor(name) {
        super(name);
        this.food = 2
    }
    hunt() {
        this.food += 5
    }
    eat() {
        this.food -= 2
        if (this.food < 2)
        this.food -= 1
        if (this.food === 0)
        this.isHealthy === false
    }
    giveFood(Traveler, numOfFoodUnits) {
        let foodUnits = Hunter - numOfFoodUnits
        foodUnits += Traveler

    }
    
}