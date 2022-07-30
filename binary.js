




function convertToBinary1(n) {
  let binary = n.toString(2);  // change the number to binary 
    let bits =  binary.split(0) // split the bits at 0
    let sortedBits = bits.reduce((a,b)=> a > b ? a:b ); // sort the bits and we get the one with most 1's

 console.log(sortedBits.length)

  }








convertToBinary1(6);
