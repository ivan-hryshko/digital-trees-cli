export class Tree {
    age: number

    constructor() {
        this.age = 0
    }

    getAge() {
        return this.age
    }

    getTreeConfig() {
        return {
            age: this.age,
        }
    }
}
