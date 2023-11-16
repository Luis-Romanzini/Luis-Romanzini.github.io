console.log("dale");
const n1 = 9,
  n2 = 3;

console.log(n1 + n2);

function somar(n1: number, n2: number) {
  return n1 + n2;
}

console.log(somar(1, 5));

console.log("daskodask");

const randomDogImg = document.getElementById(
  "dogImgRandom"
) as HTMLImageElement;

async function randomDogGenerate() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const randomDog = await response.json();
    console.log("Dog mau : ", randomDog);
    randomDogImg.src = randomDog.message;
  } catch (erro) {
    console.log("Deu erro meu dog : ", erro);
  }
}

const randomDogBtn = document.getElementById(
  "btn_random_dog_generator"
) as HTMLButtonElement;

randomDogBtn.addEventListener("click", randomDogGenerate);
