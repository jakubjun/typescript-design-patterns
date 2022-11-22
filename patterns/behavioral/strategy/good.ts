interface IDuckBehavior {
  quack: () => any
}

class LoudQuackBehavior implements IDuckBehavior {
  quack() {
    console.log('a loud quack !!!')
  }
}

class GoodSuperDuck implements IDuckBehavior {
  quack() {}

  constructor(behavior: IDuckBehavior) {
    this.quack = behavior.quack
  }
} 

const duck = new GoodSuperDuck(new LoudQuackBehavior())

duck.quack()
