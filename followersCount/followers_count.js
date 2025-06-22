let count =0; // initialize count to 0
function increaseCount(){
    count++; //increment count to 1
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages
}
function displayCount(){
    document.grtElemnentById('countDisplay').innerHTML =count;
    // displays the count in html
}

function checkCountValue() {
    if (count === 10) {
      alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
      alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}
