//weight in lbs
class Bag {
    constructor(weight) {
        this.weight = weight,
        this.isOverLimit = function () {
            if (this.weight > 0 && this.weight < 25) {
                return false
            }
            else {
                return true
            }
        }
    };
};

module.exports = Bag;