export default class Character {
    constructor(name, type) {
        if (name.length >= 2 && name.length <= 10 ) {
            this.name = name;
            this.health = 100;
            this.level = 1;
        } else {
            throw new Error("10 >= name >= 2");
        }
    }
}