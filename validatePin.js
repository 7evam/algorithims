// a PIN is valid if it's 4 or 6 digits
// write a function to check if a PIN is valid

function validatePIN (pin) {
  pin=pin.toString()
  if(pin.length===4 || pin.length===6){}
    else{return false}
  for(let i=0;i<pin.length;i++){
    if(!/[0-9]/.test(pin[i])){
        return false
      }
    }
  return true
}
