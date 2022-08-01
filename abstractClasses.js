class MyBook{
    constructor(title, author, price){
        this.author = author;
        this.title = title;
        this.price = price;
    }
    display(title, author, price){
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Price: ${this.price}`);
    }
}

//week13