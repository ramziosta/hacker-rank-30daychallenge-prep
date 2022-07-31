

function max(arr){
    let max = -63; // the max is -9* 7 as -9 is the minimum  value we can obtain for the hour glass

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] // first row
                    + arr[i+1][j+1] // second row
                    + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2] // third row
        }
        if (sum > max) {
            max = sum;  // set max to be the sum as its more than -63, next time around if the sum is more its updated as higher value other wise we keep the current value 
            return max
        }
    }

    console.log(max);
}