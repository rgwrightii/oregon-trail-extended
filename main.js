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
        if (this.food < 0) {
            this.food -= 1
        } else {
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
    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler) 
        } else {
            console.log('Not enough room')
        }
    }
    shouldQuarantine () {
        return this.passengers.some(traveler => traveler.isHealthy === false)

    }
    totalFood () {
        let total = 0
        for (let index = 0; index < this.passengers.length; index ++) {
            total += this.passengers[index].food
        }
        return total
    }
}