document.querySelector(".dice").addEventListener("click", genAdvice);
window.onload = genAdvice;

function genAdvice() {
  const allAdvice = new XMLHttpRequest();

  allAdvice.open("GET", "https://api.adviceslip.com/advice", true);

  allAdvice.onload = function () {
    if (this.status === 200) {
      const result = JSON.parse(this.responseText);

      document.querySelector(
        "#advice-text"
      ).innerHTML = `${result.slip.advice}`;
      document.querySelector("#advice-num").textContent = `${result.slip.id}`;
    }
  };

  allAdvice.send();
}
