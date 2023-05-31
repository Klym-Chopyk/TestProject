class Marker {
  constructor(color, inkLevel) {
    this.color = color;
    this.inkLevel = inkLevel;
  }

  print(text) {
    let printedText = '';
    for (let i = 0; i < text.length; i++) {
      const character = text[i];
      if (character !== ' ' && this.inkLevel > 0) {
        printedText += character;
        this.inkLevel -= 0.5;
      } else {
        printedText += ' ';
      }
    }
    console.log(`Printed text: ${printedText}`);
  }
}

class RefillableMarker extends Marker {
  refill() {
    this.inkLevel = 100;
    console.log('Marker refilled.');
  }
}

// Приклад використання

const marker = new Marker('blue', 50);
console.log(marker.color); // blue
console.log(marker.inkLevel); // 50

marker.print('Hello World'); // Printed text: Hello Worl
console.log(marker.inkLevel); // 42.5

const refillableMarker = new RefillableMarker('red', 75);
console.log(refillableMarker.color); // red
console.log(refillableMarker.inkLevel); // 75

refillableMarker.print('Lorem ipsum dolor sit amet'); // Printed text: Lorem ipsum dolor s
console.log(refillableMarker.inkLevel); // 52.5

refillableMarker.refill(); // Marker refilled.
console.log(refillableMarker.inkLevel); // 100
