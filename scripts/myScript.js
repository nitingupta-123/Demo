


function testGS() {

    var url = "https://script.google.com/macros/s/AKfycbymFvPvFXLUJFlJ65d2emZhCIchgLhZzc-Izzi7l5kEgUQEi_g/exec";
    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });

}



function postFormData() {

    var url = "https://script.google.com/macros/s/AKfycbymFvPvFXLUJFlJ65d2emZhCIchgLhZzc-Izzi7l5kEgUQEi_g/exec";
    const data=formData();
    console.log(data);
    fetch(url,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'omit', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //data ={email:"nitingupta@gmail.com",name:"Nitin Gupta",password:"nitin@123"}
        body: JSON.stringify({data:data}) // body data type must match "Content-Type" header
      });

}

function formData(){
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const data={
        name:name,
        email:email,
        password:password,
        purpose:"signup"
    }
    return data;
}

document.getElementById("random").addEventListener("click",testGS);
document.getElementById("signup").addEventListener("click",postFormData);