class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.size = 0
        this.data = new Array(capacity)
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.data[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.data[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.size == this.capacity) this.resize()
        this.data[this.size] = n
        this.size++
    }

    /**
     * @returns {number}
     */
    popback() {
        let datareturned = this.data[this.size - 1]
        this.size--
        return datareturned
    }

    /**
     * @returns {void}
     */
    resize() {
        const oldData = this.data
        this.capacity = this.capacity*2
        this.data = new Array(this.capacity)
        for(let i = 0; i < this.size; i++) this.data[i] = oldData[i]
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity
    }
}
