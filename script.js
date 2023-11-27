function losujkolor() {
    function generujlosowykolor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    let losowykolorTla = generujlosowykolor();

    document.body.style.backgroundColor = losowykolorTla;

    let spanElement = document.querySelector(".color");
    spanElement.textContent = losowykolorTla;
    spanElement.style.color = losowykolorTla;
}
let btn = document.querySelector("#btn").addEventListener("click", losujkolor);