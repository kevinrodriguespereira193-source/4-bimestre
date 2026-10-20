const inputNome = document.querySelector("#nome");
const inputIdade = document.querySelector("#idade");
const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function (event) {
  const nome = inputNome.value;
  const idade = inputIdade.value;

  alert(nome + idade);
});
