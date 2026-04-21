let text = "";
loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { continue loop1; }
    console.log(i);
   }
}
console.log("\n");
let text2 = "";
loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { continue loop2; }
    console.log(i);
   }
}
