function calc() {
    let n = Number(document.querySelector('#ex4 input').value)
    let first = 1
    let second = 1
    let result = `${first}, ${second}`
    for(let i = 0; i < n; i++) {
        let third = first + second
        result = result + `, ${third}`
        first = second
        second = third
    }
    document.querySelector("#ex4 p").innerHTML = result
}

function isPrime(num) {

    if (num === 2) {
      return true;
    } else if (num > 1) {
      for (var i = 2; i < num; i++) {
  
        if (num % i !== 0) {
          return true;
        } else if (num === i * i) {
          return false
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  
  }