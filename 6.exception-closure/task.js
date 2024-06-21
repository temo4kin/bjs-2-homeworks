﻿function parseCount (value){
    let parsedValue = Number.parseFloat(value);
    if (Number.isNaN(parsedValue)){
      throw new Error("Невалидное значение");
    }
    return parsedValue;
  }

  function validateCount (value) {
    try {
      return parseCount(value);
    } catch (error) {
      return error;
    }
  }

  class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
      if (a + b < c || a + c < b || b + c < a) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
    }
  
    getPerimeter() {
      return this.a + this.b + this.c;
    }
  
    getArea() {
      let p = this.getPerimeter() / 2;
      return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
    }
  }