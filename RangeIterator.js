class Range {
    #Array = [];
    constructor(min, max) {
      min = Math.ceil(min);
      max = Math.ceil(max);
      this.from = min;
      this.to = max;
    //   This way is will require the code to run completly which may slow down the performance but with Iterator and Generators the elements will be generated only when the programs require it.
    //   for (let i = min; i <= max; ++i) {
    //     this.#Array.push(i);
    //   }
    }
  
    toString() {
      return `{ x | ${this.from} ≤ x ≤ ${this.to} }`;
    }
  
    //Using iterator method
    [Symbol.iterator]() {
      let next = this.from;
      let to = this.to;
  
      return {
        // Fat arrow function will allow the use of this keyword pointing to the object
        next : ()=>{
          if (next <= to) {
            this.#Array.push(next);
            return { value: next++, done: false };
          } else {
            return { value: to, done: true };
          }
        },
        [Symbol.iterator]() {
          return this;
        },
      };
    }
  
    //Using generator method
    *next() {
      let next = this.from;
      let to = this.to;
      while (next < to) {
        yield next++;
      }
    }
  }
  
  export { Range };
  