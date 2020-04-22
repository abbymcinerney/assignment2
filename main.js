window.onload=function(){
    let input1 = document.getElementById("exampleFormControlInput1");
    let input2 = document.getElementById("exampleFormControlInput2");
    let input3 = document.getElementById("exampleFormControlInput3");
    let input4 = document.getElementById("exampleFormControlInput4");
    let submit = document.getElementById("submit");
    

    submit.addEventListener("click", form);

    function form() {
        if(input1.value==="" || input2.value===""|| input3.value===""|| input4.value===""){ //https://stackoverflow.com/questions/2363840/how-to-use-or-condition-in-a-javascript-if-statement
            alert("Some fields are empty, please fill all fields!");
        }
        
    }
}