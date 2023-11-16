"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("dale");
const n1 = 9, n2 = 3;
console.log(n1 + n2);
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(1, 5));
console.log("daskodask");
const randomDogImg = document.getElementById("dogImgRandom");
function randomDogGenerate() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://dog.ceo/api/breeds/image/random");
            const randomDog = yield response.json();
            console.log("Dog mau : ", randomDog);
            randomDogImg.src = randomDog.message;
        }
        catch (erro) {
            console.log("Deu erro meu dog : ", erro);
        }
    });
}
const randomDogBtn = document.getElementById("btn_random_dog_generator");
randomDogBtn.addEventListener("click", randomDogGenerate);
