class Airplane {
    constructor(type) {
        this.type = type,
        this.passengerAccounted =[]
    };
    onBoard(passportNumber) {
        this.passengerAccounted.push(passportNumber)
    };
};

module.exports = Airplane
