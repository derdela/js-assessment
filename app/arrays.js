exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(total, value) {
      return total + value;
    }, 0);
  },

  remove : function(arr, item) {
    do {
      arr.splice(arr.indexOf(item), 1);
    } while(arr.indexOf(item) >= 0);
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    do {
      arr.splice(arr.indexOf(item), 1);
    } while(arr.indexOf(item) >= 0);
    return arr;
  },

  append : function(arr, item) {
    return arr.concat(item);
  },

  truncate : function(arr) {
    arr.splice(-1, 1);
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    var tail = arr.splice(index);
    arr.push(item);
    return arr.concat(tail);
  },

  count : function(arr, item) {
    return arr.reduce(function(count, value) {
      return item === value ? count + 1 : count;
    }, 0);
  },

  duplicates : function(arr) {
    return arr.reduce(function(set, value) {
      if (arr.indexOf(value) !== arr.lastIndexOf(value) && set.indexOf(value) === -1) {
        set.push(value);
      }
      return set;
    }, []);
  },

  square : function(arr) {
    return arr.map(function(value) {
      return value * value;
    });
  },

  findAllOccurrences : function(arr, target) {
    var result = [];
    arr.forEach(function(value, index) {
      if(value === target) result.push(index);
    });
    return result;
  }
};
