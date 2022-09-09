function randomNumber() {
  let randomNumber = Math.floor(Math.random() * (10 - 0 + 1) + 0)

  let input = parseInt(document.getElementById('input').value)
  let resultNumber = document.getElementById('result-number')
  let result = document.getElementById('result')
  let correct = document.getElementById('correct')
  let flag = document.getElementById('flag')
  var numero = parseInt(input)

  flag.style.opacity = 1
  setTimeout(function () {
    flag.style.opacity = 0
  }, 8000)

  flag.classList.add('show')

  if (Number.isNaN(numero)) input = 0

  if (input > 10 || input < 0) {
    alert('Escolha um numero entre 0 e 10')
  } else if (input === randomNumber) {
    correct.innerHTML = 'Parabéns você acertou!!'
    resultNumber.innerHTML = 'O número pensado foi ' + randomNumber
    result.innerHTML = 'E você escolheu ' + input
  } else {
    correct.innerHTML = 'Que pena, você errou!!'
    resultNumber.innerHTML = 'O número pensado foi ' + randomNumber
    result.innerHTML = 'E você escolheu ' + input
  }

  if (Number.isNaN(numero)) input = 0
}
