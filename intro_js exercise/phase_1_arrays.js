Array.prototype.myUniq = function() {
  let result = [] ; 
  for (i= 0 ; i < this.length; i++){
    if (result.includes(this[i])){
      
    } else {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.myTwoSum = function() {
  let result = [];
  for (i = 0; i < this.length - 1; i++) {
    for (j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

Array.prototype.myTranspose = function() {
  let result = new Array(this[0].length);
  
  for (i = 0; i < this[0].length; i++) {
    result[i] = new Array(this.length);
  }
  
  for (i = 0; i < this.length ; i++) {
    for (j = 0 ; j < this[i].length; j++) {
      result[j][i] = this[i][j];
    }
  }
  return result;
};
  














