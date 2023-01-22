let playerChoise = prompt('Пожалуйста, введите: камень, ножницы или бумага?');
if (playerChoise) {
  let playerOne = playerChoise.trim().toLocaleLowerCase();
  if (playerOne === 'камень' || playerOne === 'бумага' || playerOne === 'ножницы') {

    let computerChoise = Math.floor(Math.random() * 3 + 1);
    let computer = computerChoise === 1 ? "камень" 
      : computerChoise === 2 ? "бумага" 
      : "ножницы"

    let result = 
      playerOne === computer 
      ? "Вы и компьютер ввели одинаковые значения, победила дружба!"
      : playerOne === "камень" && computer === "бумага"
      ? `Вы показали ${playerOne}, компьютер показывает ${computer}, победил компьютер!`
      : playerOne === "бумага" && computer === "ножницы"
      ? `Вы показали ${playerOne}, компьютер показывает ${computer}, победил компьютер!`
      : playerOne === "ножницы" && computer === "камень"
      ? `Вы показали ${playerOne}, компьютер показывает ${computer}, победил компьютер!`
      : `Вы показали ${playerOne}, компьютер показывает ${computer}, Вы победили!`
    alert(result);
  }
  else { alert("Вы не ввели камень, ножницы или бумага, введите правильное значение!")}
}
