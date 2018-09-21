Array.prototype.myEach = function(callback) {
  for (i = 0; i < this.length; i ++) {
    callback(this[i]);
  }
};


Array.prototype.myMap = function (callback) {
  let result = [];
  // for (i = 0; i < this.length; i ++) {
  //   result.push(callback(this[i]));
  // }
//   this.myEach(el =>
//   result.push(callback(el)));

  this.myEach ( function(el) {
    result.push(callback(el));
  });
  return result;
};

let a = function (el) {
  return (el * 2);
};

Array.prototype.myReduce  = function (callback, acc) {
  if (typeof acc === 'undefined') {
    acc = this.shift();
  }
  
  this.myEach (el =>
    acc = callback(acc, el)
  );
  return acc;
};

function cb(acc, el) {
  return acc + el;
}


