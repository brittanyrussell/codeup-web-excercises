
function showMultiplicationTable(num) {
    for (var i = 1; i < 11; i++) {
        console.log(num + " X " + i + " = " + num * i);
    }
}

showMultiplicationTable(7);
//
// var randomNum = Math.floor(Math.random() * 180) + 20;
for (var i = 1; i < 11; i++) {
    var randomNum = Math.floor(Math.random() * 180) + 20;
    if (randomNum % 2 === 0) {
        console.log(randomNum + " is even.");
    } else {
        console.log(randomNum + " is odd.");
    }
}

var output;
for (var i = 1; i <= 9; i++) {
    output = "";
    for ( var j = 1; j <= i; j++) {
        output += i;
    }
    console.log(output);
}


for (var i = 100; i > 0; i -= 5) {
    console.log(i);

}


