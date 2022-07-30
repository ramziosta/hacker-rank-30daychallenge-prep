


function convertToBinary1(n) {
    let binary = n.toString(2);  // change the number to binary 
      let bits =  binary.split(0) // split the bits at 0
      let sortedBits = bits.reduce((a,b)=> a > b ? a:b ); // sort the bits and we get the one with most 1's
  
   console.log(sortedBits.length)
  
    }
  
  

// function convertToBinary1(number) {
//   let binary = number.toString(2);
//   let arr = [];
//   let counter = 1;

//   for (let i = 0; i <= binary.length; i++) {
//     if (binary[i] ==  1 && binary[i+1] == 1) {
//       arr.push(binary[i])
//       counter++
//     }
//   console.log(counter)
//   console.log(arr)
//   }
// }



// convertToBinary1(6);
