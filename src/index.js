class SmartCalculator {
  constructor(initialValue) {
    this.value = [];
    this.value[0] = initialValue;
  }

  add(number) {
    let l = this.value.length;
    this.value[l] = "+";
    this.value[l+1] = number;
    return this;
  }
  
  subtract(number) {
    let l = this.value.length;
    this.value[l] = "-";
    this.value[l+1] = number;
    return this;
  }

  multiply(number) {
    let l = this.value.length;
    this.value[l] = "*";
    this.value[l+1] = number;
    return this;
  }

  devide(number) {
    let l = this.value.length;
    this.value[l] = "/";
    this.value[l+1] = number;
    return this;
  }

  pow(number) {
    let l = this.value.length;
    this.value[l] = "^";
    this.value[l+1] = number;
    return this;
  }

  calc() {
    let l = this.value.length;
    let tmp;

    if (l === 1) {
      return this.value[0];
    }
      
    for (let i = l - 2; i >=1; i = i - 2) {
      if (this.value[i] === "^") {
        tmp = this.value[i-1] ** this.value[i+1];
        this.value.splice(i-1, 3, tmp);
        
      }
    }

    this.value = this.value.reverse();

    l = this.value.length;
    for (let i = l - 2; i >=1; i = i - 2) {
      if (this.value[i] === "*") {
        tmp = this.value[i-1] * this.value[i+1];
        this.value.splice(i-1, 3, tmp);
      }
      if (this.value[i] === "/") {
        tmp = this.value[i+1] / this.value[i-1];
        this.value.splice(i-1, 3, tmp);
      }
    }

    l = this.value.length;
    for (let i = l - 2; i >=1; i = i - 2) {
      if (this.value[i] === '+') {

        tmp = this.value[i-1] + this.value[i+1];
        this.value.splice(i-1, 3, tmp);
      }
      if (this.value[i] == '-') {
        tmp = this.value[i+1] - this.value[i-1];
        this.value.splice(i-1, 3, tmp);
      }
    }
  }

  toString() {
    this.calc();
    return this.value[0];
  }
}

module.exports = SmartCalculator;