// Two tortoises named A and B must run a race.
// A starts with an average speed of 720 feet per hour.
// Young B knows she runs faster than A, and furthermore
// has not finished her cabbage.
//
// When she starts, at last, she can see that A has a
// 70 feet lead but B's speed is 850 feet per hour.
// How long will it take B to catch A?
//
// More generally: given two speeds v1 (A's speed, integer > 0)
// and v2 (B's speed, integer > 0) and a lead g (integer > 0)
// how long will it take B to catch A?
//
// The result will be an array [hour, min, sec]
// which is the time needed in hours, minutes and seconds
// (round down to the nearest second) or a
// string in some languages.

function race(v1, v2, g) {
    if(v1>=v2){
      return null
    } else {
      let secondsToCatch = Math.floor((g/(v2-v1))*60*60)
      let hours = Math.floor(secondsToCatch/(60*60))
      secondsToCatch-= hours*60*60
      let minutes = Math.floor(secondsToCatch/60)
      secondsToCatch-= minutes*60
      let seconds = secondsToCatch
      return [hours,minutes,seconds]
    }
}
race(60,120,60)

// var date = new Date(null);
// date.setSeconds(234987234); // specify value for SECONDS here
// var result = date.toISOString().substr(11, 8);
