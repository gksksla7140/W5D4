Array.prototype.bubbleSort = function () {
  let sorted = false;
  
  while (sorted === false) {
    sorted = true;
    for (i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        this[i] = this[i + 1];
        this[i + 1] = this[i];
        sorted = false;
      }
    }
  }
  return this;
};

String.prototype.substrings = function () {
  let result = [];
  for (i = 0; i <= this.length; i++) {
    for (j = i; j <= this.length; j++) {
      if (i === j) {
        continue;
      }
      if (result.includes(this.slice(i, j))) {

      } else {
        result.push(this.slice(i, j));
      }
    }
  }
  return result;
};