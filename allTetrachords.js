

function allTetrachords() {
  let tetrachords = [];

  function iterate(currentChords, note, depth) {

    if(note > 11) return;

    if(depth == 4) {
      if (currentChords.length == 4 && currentChords[0] == 0){
        tetrachords.push(Array.from(currentChords));
      }
      return;
    }

    currentChords.push(note);
    iterate(currentChords, note+1, depth+1);
    currentChords.pop();
    currentChords.push(note+1);
    iterate(currentChords, note+2, depth+1);
    currentChords.pop();
    currentChords.push(note+2);
    iterate(currentChords, note + 3, depth + 1);
    currentChords.pop();
    currentChords.push(note+3);
    iterate(currentChords, note + 4, depth + 1);
    currentChords.pop();
    currentChords.push(note+4);
    iterate(currentChords, note + 5, depth + 1);
    currentChords.pop();
  }

  iterate([], 0, 0);
  return tetrachords;
}

console.log(allTetrachords());
