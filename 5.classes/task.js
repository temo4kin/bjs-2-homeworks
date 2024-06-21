class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix(){
      this.state = this.state * 1.5;
    }
  
    get state(){
      return this._state;
    }
  
    set state(value) {
      if (value < 0) {
        this._state = 0;
      } else if (value > 100) {
        this._state = 100;
      } else {
        this._state = value;
      }
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount){
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }

  class Library {
    constructor(name){
      this.name = name;
      this.books = [];
    }
  
    addBook(book){
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(type, value){
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i][type] === value) {
          return this.books[i];
        }
      }
      return null;
    }
  
    giveBookByName(bookName){
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].name === bookName) {
          let book = this.books[i];
          this.books.splice(i, 1);
          return book;
        }
      }
      return null;
    }
  }


  class Student {
    constructor(name) {
      this.name = name;
      this.grade = {};
    }
  
    addMark(mark) {
      if (mark[0] < 2 || mark[0] > 5) {
        return;
      }
      if (this.grade.hasOwnProperty(mark)) {
        this.grade[mark].push(mark);
      } else {
        this.grade[mark] = [mark];
      }
    }
  
    getAverageBySubject(grade) {
      if (!this.grade.hasOwnProperty(grade)) {
        return 0;
      }
      const marks = this.grade[grade];
      const sum = marks.reduce((acc, mark) => acc + mark, 0);
      return sum / marks.length;
    }
  
    getAverage() {
      const subjects = Object.keys(this.grade);
      const averages = subjects.map(subject => this.getAverageBySubject(subject));
      const sum = averages.reduce((acc, average) => acc + average, 0);
      return sum / averages.length;
    }
  }