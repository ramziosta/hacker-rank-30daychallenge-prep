


// function minNum(samDaily, kellyDaily, difference) {

//    if ( kellyDaily <= samDaily ) {
//     return -1;
//    }
//    return difference/ (kellyDaily - samDaily);

// }

// class Node {
//    constructor(data, next=null){
//       this.data = data;
//       this.next = next;
//    }
// }

// class LinkedList {
//    constructor(){
//       this.size = 0;
//       this.head = null
//    }

//    insertAtHead(data){
//       this.head = new Node(data, this.head)
//    }
// }

// function getMaxUnits(boxes, unitsPerBox, truckSize) {
//    var sortedBoxes = boxes.sort((a,b) => b[1] - a[1])
//    var maxUnits = 0;
//    for (let i = 0; truckSize && i < boxes.length; i++) {
//        let boxCount = Math.min(boxes[i][0], truckSize);
//        maxUnits += boxCount * boxes[i][1];
//        truckSize -= boxCount;
//    }
//       console.log(Number(maxUnits));
// }

// getMaxUnits(2,2,3)

var maximumUnits = function(B, T) {
    B.sort((a,b) => b[1] - a[1])
    let ans = 0
    for (let i = 0; T && i < B.length; i++) {
        let count = Math.min(B[i][0], T)
        ans += count * B[i][1], T -= count
    }
    return ans
};
