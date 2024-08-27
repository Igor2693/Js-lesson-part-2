"use strict";

"use strict";

class First {
  constructor () {
    
  }
  hello() {
    console.log('Привет я метод родителя!')
  }
}

class Second extends First {
  constructor () {
    super()
  }
  hello() {
    super.hello()
    console.log('А я следуемый метод!')
  }
}

const run = new Second()

run.hello()