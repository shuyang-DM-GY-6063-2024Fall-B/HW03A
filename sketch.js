function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(235,215,5)
  fill('black')
  let distance = 45
  // use if-else to deal with it in one loop.
  for(let a = 0; a < windowWidth; a += distance){
    for(let b = 0; b < windowHeight; b+=distance){
      if (a / distance % 2 === 1 && b / distance % 2 === 1||a / distance % 2 === 0 && b / distance % 2 === 0) {
        ellipse(a, b, 10)
      }
      else{
        ellipse(a, b, 25)
      }

    }
  }

  // use translate() to deal with it in 3 loop.
  // for(let a = 0; a < windowWidth; a += distance){
  //   for(let b = 0; b < windowHeight; b+= distance){  
  //     ellipse(a, b, 10) 
  //     }
  //   }
  // push()
  // translate(0, distance)

  // for(let a = 0; a < windowWidth; a += 2*distance){
  //   for(let b = 0; b < windowHeight; b+=2*distance){  
  //     ellipse(a, b, 25) 
  //     }
  //   }
  // pop()
  // push()
  // translate(distance, 0)

  // for(let a = 0; a < windowWidth; a += 2*distance){
  //   for(let b = 0; b < windowHeight; b+=2*distance){  
  //     ellipse(a, b, 25) 
  //     }
  //   }
  // pop()
}

