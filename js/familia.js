const tabPhotos = document.querySelectorAll(".fotosfamilia li");
const tabDescription = document.querySelectorAll(".dadosfamilia section");

tabDescription[0].classList.replace("inativo", "ativo");

function activeTab(index) {
  tabDescription.forEach((section) => {
    section.classList.replace("ativo", "inativo");
  });
  tabDescription[index].classList.replace("inativo", "ativo");
}

tabPhotos.forEach((x, index) => {
  x.addEventListener("click", () => {
    activeTab(index);
  });
});

const testeDeDimensao = document.querySelector(".imgheader img ");

const altura = testeDeDimensao.clientHeight;
const largura = testeDeDimensao.clientWidth;

var perimetro = 2 * (altura + largura);
var area = altura * largura;
console.log(perimetro);
console.log(area);

const distanciaProTop = testeDeDimensao.offsetTop;
const distanciaProLeft = testeDeDimensao.offsetLeft;
const distanciaProRight = testeDeDimensao.offsetRight;
const distanciaProBottom = testeDeDimensao.offsetBottom;
console.log(distanciaProTop);
console.log(distanciaProLeft);
console.log(distanciaProRight);
console.log(distanciaProBottom);

const Rect = testeDeDimensao.getBoundingClientRect();
console.log(Rect.x);
