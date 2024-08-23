const inputForm = document.querySelector("form");      // Form get kiya hai
const inputValue = document.querySelector("input");    //Form ka Input get kiya hai
const result = document.querySelector("#result-container");  // Result container get kiya hai

inputForm.addEventListener("submit",(event) => {
    event.preventDefault();  // for Page referesh na ho
   
    

    let tableValue = inputValue.value; // input ki value ko varaible mai save karwaya hai yaha

    result.innerHTML = ""; // result container khali krengai pehlai

    for (let i = 1; i <= 10; i++) {

        const message = `${tableValue} X ${i} = ${tableValue*i}`;
        result.innerHTML += `${message}<br/>`;
    }
});