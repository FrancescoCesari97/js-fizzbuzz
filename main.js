const cardsRow = document.getElementById("cards-row");

// creare un for the stampi i numeri d a 1 a 100 consecutivamente

for (let i = 1; i <= 100; i++) {
  let textNumber = "";
  let backgroundColor = "";

  if (i % 15 == 0) {
    textNumber = "Fizzbuzz";
  } else if (i % 3 == 0) {
    textNumber = "Fizz";
  } else if (i % 5 == 0) {
    textNumber = "Buzz";
  } else {
    textNumber = i;
  }

  console.log(textNumber);

  cardsRow.innerHTML += `
     <div class="col-2">
        <div class="card p-3 ${textNumber}">
          <h4 class=" text-center"> ${textNumber}<h4/>
        <div/>

     <div/>
    `;
}
