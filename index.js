let btn1=document.querySelector(".btn1");
let inputvalue=document.getElementById("tex");
inputvalue.style.textAlign="center";
inputvalue.style.fontSize="1em";
inputvalue.style.color="white";
let div=document.querySelector(".container");
let p=document.querySelector(".d");
let di=document.querySelector(".r");


//  let p=document.querySelector("p");
// div.appendChild(p);



let arr=[];
inputvalue.addEventListener('click', function(){
    arr.push(inputvalue.value);
    if(arr.length<=6){
        div.style.display="none";
        di.style.display="initial"
        p.style.display="initial";
        
        
          

    }
    
})

btn1.innerHTML="1";
function fun1(){
    // console.log(btn1.innerHTML);
inputvalue.value+=btn1.innerHTML;


}
let btn2=document.querySelector(".btn2");
btn2.innerHTML="2";
function fun2(){
    // console.log(btn2.innerHTML);
    inputvalue.value+=btn2.innerHTML;
    
}
let btn3=document.querySelector(".btn3");
btn3.innerHTML="3";
function fun3(){
    // console.log(btn3.innerHTML);
    inputvalue.value+=btn3.innerHTML;
    

    
}let btn4=document.querySelector(".btn4");
btn4.innerHTML="4";
function fun4(){
    // console.log(btn4.innerHTML);
    inputvalue.value+=btn4.innerHTML;
    

    
}
let btn5=document.querySelector(".btn5");
btn5.innerHTML="5";
function fun5(){
    // console.log(btn5.innerHTML);
    inputvalue.value+=btn5.innerHTML;
    

    
}

let btn6=document.querySelector(".btn6");
btn6.innerHTML="6";
function fun6(){
    // console.log(btn6.innerHTML);
    inputvalue.value+=btn6.innerHTML;
    


    
}
let btn7=document.querySelector(".btn7");
btn7.innerHTML="7";
function fun7(){
    // console.log(btn7.innerHTML);
    inputvalue.value+=btn7.innerHTML;
    


    
}
let btn8=document.querySelector(".btn8");
btn8.innerHTML="8";
function fun8(){
    // console.log(btn8.innerHTML);
    inputvalue.value+=btn8.innerHTML;
    

    
}
let btn9=document.querySelector(".btn9");
btn9.innerHTML="9";
function fun9(){
    // console.log(btn9.innerHTML);
    inputvalue.value+=btn9.innerHTML;
    

    
}
let btn0=document.querySelector(".btn0");
btn0.innerHTML="0";
function fun0(){
    // console.log(btn0.innerHTML);
    inputvalue.value+=btn0.innerHTML;
    

    
}