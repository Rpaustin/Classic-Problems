var exports = module.exports = {};

exports.HashSet = class HashSet {
    constructor() {
      this.set = [];
      this.val = [];
    }

    // Set key and value as val (No specific value needed)
    add(key) {
        this.set[key] = this.val;
    }

    // If the key is in the set, it will equal this.val as it would
    // have been set in the "add" function
    contains(key) {
      return this.set[key] === this.val;
    }
};
