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

// HashSet that keeps track of quantities of each key
exports.QHashSet = class QHashSet {
    constructor() {
      this.set = [];
      this.val = 1;
      this.maxCount = 0;
      this.maxKey = '';
    }

    // Set key and value as val (No specific value needed)
    add(key) {
        this.set[key] = this.val;
    }

    // If the key is in the set, it will equal this.val as it would
    // have been set in the "add" function
    contains(key) {
      return this.set[key] >= 1;
    }

    increment(key) {
      if(this.contains(key))
        this.set[key]++;
    }

    getCount(key) {
      return this.set[key];
    }

    getMaxCount() {
      if(this.set.length == 0)
        return null;

      var theSet = this.set;
      var theKeys = Object.keys(theSet);

      for(var i = 0; i < theKeys.length; i++) {
          if(this.maxCount < theSet[theKeys[i]]) {
            this.maxCount = theSet[theKeys[i]];
            this.maxKey = theKeys[i];
          }
      }

      return {
        'key' : this.maxKey,
        'count' : this.maxCount
      }
    }
};
