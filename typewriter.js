const sentence = "I love my two dogs! Jabba and Gus!!!  Gus is 20 lbs but jabba is 11lbs!";



const strLoop = function(sent) {
  let timer = 0;
  for (const char of sent) {
    
    setTimeout(() => {
      process.stdout.write(char);
    },timer)
    timer += 50
  }
   setTimeout(() => {
     console.log("\n");
    },sent.length * 50 + 100)
  
};


strLoop(sentence);