

    let input1 = document.getElementById("exampleFormControlInput1");
    let input2 = document.getElementById("exampleFormControlInput2");
    let input3 = document.getElementById("exampleFormControlInput3");
    let input4 = document.getElementById("exampleFormControlInput4");
    let submit = document.getElementById("submit");
    let empty1 = document.getElementById("empty1");
    let empty2 = document.getElementById("empty2");
    let empty3 = document.getElementById("empty3");
    let empty4 = document.getElementById("empty4");
    let twitter= document.getElementById("twitter");
    let me= document.getElementById("abby");
    let quit=document.getElementById("quit");
    let option1= document.getElementById("option1");
    let option2= document.getElementById("option2");
    let option3= document.getElementById("option3");
    let option4= document.getElementById("option4");
    let hamburger=document.getElementById("hamburger");
    let title=document.getElementById("title")

    //hamburger menu
    if (hamburger!=null){
    quit.style.display="none";
    option1.style.display="none";
    option2.style.display="none";
    option3.style.display="none";
    option4.style.display="none";

    hamburger.addEventListener("click", menu);
    quit.addEventListener("click",closeMenu);
    }
    function menu(){
        quit.style.display="inline";
        option1.style.display="inline";
        option2.style.display="inline";
        option3.style.display="inline";
        option4.style.display="inline";
        hamburger.style.display="none";
        title.style.display="none";
    }

    function closeMenu(){
        quit.style.display="none";
        option1.style.display="none";
        option2.style.display="none";
        option3.style.display="none";
        option4.style.display="none";
        hamburger.style.display="inline";
        title.style.display="inline";
    }
    
    //about page
    function changePic() {
        me.src = "images/melaugh.jpg";
      }
    function normalPic() {
        me.src = "images/me.jpg";
      }

   
    //contact page
    if (submit!=null){
        submit.addEventListener("click", form);
        empty1.style.display="none";
        empty2.style.display="none";
        empty3.style.display="none";
        empty4.style.display="none";
        
    }
   
    function form() {
        if(input1.value==="" ||  input2.value===""|| input3.value===""|| input4.value===""){ //https://stackoverflow.com/questions/2363840/how-to-use-or-condition-in-a-javascript-if-statement
            alert("Some fields are empty, please fill all fields!");
            if(input1.value===""){
                empty1.style.display = "inline";
                
            }
            if(input2.value===""){
                empty2.style.display = "inline";
            }
            if(input3.value===""){
                empty3.style.display = "inline";
            }
            if(input4.value===""){
                empty4.style.display = "inline";
            }
        }
        else{
            empty1.style.display="none";
            empty2.style.display="none";
            empty3.style.display="none";
            empty4.style.display="none";
            

        }
        
    }

   

    


