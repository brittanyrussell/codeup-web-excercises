var count = 2;
while (count <= 65536) {
    console.log(count);
    count *= 2;

}


var allCones = Math.floor(Math.random() * 50) + 50;
// var perPerson = Math.floor(Math.random() * 5) + 1;
console.log("Good morning! I'm starting my day " + allCones + " cones in my inventory");

 do {
     var perPerson = Math.floor(Math.random() * 5) + 1;
     if (allCones >= perPerson) {
         console.log(perPerson + " cones sold.");
         allCones = allCones - perPerson;

     } else if (allCones < perPerson)
         console.log("can not sell you " + perPerson + " I only have " + allCones + "left.");

 }   while (allCones > 0);
         console.log("Yay I sold them all!!!");
