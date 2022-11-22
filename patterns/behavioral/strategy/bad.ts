// https://youtu.be/v9ejT8FO-7I

class BadSuperDuck {
  quack() {
    console.log('quack from superduck')
  }

  fly() {
    console.log('fly from superduck')
  }
}

class CityDuck extends BadSuperDuck {
  fly() {
    console.log('fly from cityduck')
  }
}


const CD = new CityDuck()
CD.fly()
