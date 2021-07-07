const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let formattedCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      for (let i = 0; i < formattedCollection.length; i++) {
        callback(formattedCollection[i]);
      }
      return collection;
    },

    map: function(collection, callback) {
      if (!(collection instanceof Array)) collection = Object.values(collection);
      const newArr = [];
      for (let i = 0; i < collection.length; i++) {
        newArr.push(callback(collection[i]));
      }
      return newArr;
    },

    reduce: function(c = [], callback = () => {}, acc) {
      let collection = c.slice(0);
      if (!acc) {
        acc =  collection[0];
        collection = collection.slice(1);
      }
      for (let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i]);
      }
      return acc;
    },

    find: function(collection, callback) {
      let result;
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i])) {
          result = collection[i];
          return result;
        }
      }
      return result;
    },

    filter: function(collection, callback) {
      if (!(collection instanceof Array)) collection = Object.values(collection);
      let result = [];
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i])) {
          result.push(collection[i]);
        }
      }
      return result;
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.values(collection).length;
    },

    first: function(collection, number = 1) {
      let collected = collection.slice(0, number);
      if (collected.length == 1) {
        collected = collected.pop();
      }
      return collected;
    },

    last: function(collection, number = 1) {
      return number == 1 ? collection[collection.length-1] : collection.slice(collection.length - number, collection.length);
    },

    compact: function(collection) {
      let noFalsy = []
      for (let i = 0; i < collection.length; i++) {
        if (!!collection[i]) {
          noFalsy.push(collection[i]);
        }
      }
      return noFalsy;
    },

    sortBy: function(collection, callback) {
      const newCollection = [...collection];
      return newCollection.sort(function(a,b) {
        return callback(a) - callback(b)
      }) 
    }

  }
})()

fi.libraryMethod()
