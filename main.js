let resultOne = document.getElementById("result_one");


for (let i = 0; i <= 10; i++) {
    resultOne.innerHTML += `<p>${i}</p>`
}

// ------------------------------------------ 2-misol ------------------------------------------ //

let resultTwo = document.getElementById("result_two");
let count = 0;
for (let i = 0; i <= 10; i++) {
    count += i;
}

resultTwo.innerHTML = `<p>${count}</p>`

// ------------------------------------------ 3-misol ------------------------------------------ //

let resultThree = document.getElementById("result_three");

for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        resultThree.innerHTML += `<p>${i}</p>`
    }

}

// ------------------------------------------ 4-misol ------------------------------------------ //

let formOne = document.getElementById("formOne");
let inputOne = document.getElementById("inputOne");
let resultFour = document.getElementById("result_four");

formOne.addEventListener("submit", (e) => {
    e.preventDefault();
    resultSeven.innerHTML = "";

    for (let i = 0; i < inputOne.value; i++) {
        if (i % 2 === 0) {
            resultFour.innerHTML += `<p>${i}</p>`
        }
    }

    inputOne.value = "";
})


// ------------------------------------------ 5-misol ------------------------------------------ //

let resultFive = document.getElementById("result_five");

for (let i = 5; i >= 1; i--) {
    resultFive.innerHTML += `<p>${i}</p>`
}


// ------------------------------------------ 6-misol ------------------------------------------ //

let resultSix = document.getElementById("result_six");

for (let i = 0; i <= 10; i++) {
    let countSecond =  i ** 2;

    resultSix.innerHTML += `<p>${countSecond}</p>`
}

// ------------------------------------------ 7-misol ------------------------------------------ //

let formTwo = document.getElementById("formTwo");
let inputTwo = document.getElementById("inputTwo");
let resultSeven = document.getElementById("result_seven");

formTwo.addEventListener("submit", (e) => {
    e.preventDefault();
    resultSeven.innerHTML = "";

    for (let i = 0; i < inputTwo.value.length; i++) {
        resultSeven.innerHTML += `<p>${inputTwo.value[i]}</p>`
    }

    inputTwo.value = "";
})

// ------------------------------------------ 8-misol ------------------------------------------ //

let resultEight = document.getElementById("result_eight");

for (let i = 0; i < 100; i++) {
    if (i % 3 === 0) {
        resultEight.innerHTML += `<p>${i}</p>`
    }
}

// ------------------------------------------ 9-misol ------------------------------------------ //

let formThree = document.getElementById("formThree");
let inputThree = document.getElementById("inputThree");
let resultNine = document.getElementById("result_nine");

formThree.addEventListener("submit", (e) => {
    e.preventDefault();
    resultNine.innerHTML = "";

    if (inputThree.value % 2 === 0) {
        resultNine.innerHTML += `<p>${inputThree.value} bu son tub</p>`
    } else {
        resultNine.innerHTML += `<p>${inputThree.value} bu son tub emas</p>`
    }

    inputThree.value = "";
})

// ------------------------------------------ 10-misol ------------------------------------------ //

let formFour = document.getElementById("formFour");
let inputFour = document.getElementById("inputFour");
let resultTen = document.getElementById("result_ten");

formFour.addEventListener("submit", (e) => {
    e.preventDefault();
    resultTen.innerHTML = "";

    
    for (let i = 0; i <= inputFour.value; i++) {
        let countThird = 0;

        if (inputFour.value % i == 0) {
            countThird+=i;
            resultTen.innerHTML += `<p>${countThird}</p>`
        }
    }

    inputFour.value = "";
})

// ------------------------------------------ 11-misol ------------------------------------------ //

let formFive = document.getElementById("formFive");
let inputFive = document.getElementById("inputFive");
let resultTwelwe = document.getElementById("result_twelwe");

formFive.addEventListener("submit", (e) => {
    e.preventDefault();
    resultTwelwe.innerHTML = "";

    for (let i = 0; i < inputFive.value.length; i++) {
        if (inputFive.value[i] == "a" || inputFive.value[i] == "e" || inputFive.value[i] == "i" || inputFive.value[i] == "o" || inputFive.value[i] == "u") {
            resultTwelwe.innerHTML += `<p>${inputFive.value[i]}</p>`
            
        }else {
            resultTwelwe.innerHTML = `<p>Bu so'zda unli harflar yo'q boshqa so'z kiriting!</p>`
        }
    }
})