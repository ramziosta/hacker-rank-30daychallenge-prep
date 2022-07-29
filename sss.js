function timeConversion(s) {
  let militaryTime;
  let time = [];
  const arr = s.split(":");
  let hours = Number(arr[0]);
  let minutes = Number(arr[1]);
  let seconds = Number(arr[2].slice(0, 2));
  let amPm = arr[2].slice(2, 4).toUpperCase();

  for (let i = 0; i < 3; i++) {
    if (amPm == "AM") {
      if (hours == 12) {
        hours = "0" + 0;
      }
    } else if (hours < 12) {
      hours += 12;
    }
    time = [hours, minutes, seconds];
    console.log(time);
    militaryTime = time.join(":");
  }
  return militaryTime;
}

let t = "11:01:20PM";
timeConversion(t);
