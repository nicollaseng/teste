function SpaceShip(crew, maxSpeed, shipLenght, cargo, passengers){
    this.crew = crew
    this.maxSpeed = maxSpeed
    this.shipLenght = shipLenght
    this.cargo = cargo
    this.passengers = passengers
}

const MileniumFalcon = new SpaceShip(4, 1050, 34, 100, 6)
console.log(MileniumFalcon)

const DeathStar = new SpaceShip()
console.log(DeathStar)