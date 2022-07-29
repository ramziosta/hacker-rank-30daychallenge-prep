
let s = "2 \nhacker \nrank";

function a(input) {
  let str = input.split("\n").slice(1);
  let evenStr = "";
  let oddStr = "";

  str.forEach((str) => {
    for (let i = 0; i < str.length; i++) {
      i % 2 == 0 ? (evenStr += str[i]) : (oddStr += str[i]);
    }
    console.log(`${evenStr} ${oddStr}`);
  });
}


a(s);
