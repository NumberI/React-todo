class Animal {
  constructor ( name, voice ) {
    this.name = name;
    this.voice = voice;
  }

  say(){
    console.log ( this.name, 'says', this.voice);
  }
}

class Bird extends Animal {
  constructor( name, voice, canFly) {
    super (name, voice);
    this.canFly = canFly;
  }
  go(){
    console.log(this.name, 'forward');
  }
}

const duck = new Bird('Duck', 'quack', true);
duck.say();
duck.go();