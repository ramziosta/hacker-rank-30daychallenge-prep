let input =
  "3 \nsam 99912222 \ntom 11122222 \nharry 12299933 \nsam \nedward \nharry";

  function processData(input) {
  
    var data = input.split("\n");
    var n = data.splice(0, 1); //get the number of entries out of the array
    var querry = data.splice(n); //dump the querry into their own array
  
    for (var i = 0; i < n; i++) {
      data[i] = data[i].split(" ");//split the names from the phones to prepare for mapping
    }
    
    var phoneBook = new Map(data);//turn the array into a map
    
    for (var i = 0; i < querry.length; i++) {
      if (phoneBook.has(querry[i])) {//check if the qeury (name) exists in the phone book 
        console.log(querry[i] + "=" + phoneBook.get(querry[i]));
      } else {
        console.log("Not found");
      }
    }
  }
  

processData(input);

const  object = {};
const a = {};
const b = {};
const c = {
    x: "aa",
    y: "bb",
    s: [ 99, [0,9] ]
}

c[a] = 777;
console.log(Object.keys(c));
console.log(Object.values(c));
console.log(object);


