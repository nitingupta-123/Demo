function testGS() {

    var url = "https://script.google.com/macros/s/AKfycbymFvPvFXLUJFlJ65d2emZhCIchgLhZzc-Izzi7l5kEgUQEi_g/exec";
    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });

}


document.getElementById("btn").addEventListener("click",testGS);