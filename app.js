let buttons = document.getElementsByClassName("number");
let result = document.getElementById("result");
let table=[];
buttons[0].addEventListener("click",()=>{
    result.innerHTML+=7;
    table.push(7);
    result.innerHTML=table.join("");
});
buttons[1].addEventListener("click",()=>{
    result.innerHTML+=8;
    table.push(8);
    result.innerHTML=table.join("");
});
buttons[2].addEventListener("click",()=>{
    result.innerHTML+=9;
    table.push(9);
    result.innerHTML=table.join("");
});
buttons[3].addEventListener("click",()=>{
    result.innerHTML+="/";
    result.innerHTML = "";
    table.push("/");
    result.innerHTML=table.join("");
});
buttons[4].addEventListener("click",()=>{
    result.innerHTML+=4;
    table.push(4);
    result.innerHTML=table.join("");
});
buttons[5].addEventListener("click",()=>{
    result.innerHTML+=5;
    table.push(5);
    result.innerHTML=table.join("");
});
buttons[6].addEventListener("click",()=>{
    result.innerHTML+=6;
    table.push(6);
    result.innerHTML=table.join("");
});
buttons[7].addEventListener("click",()=>{
    result.innerHTML+="*";
    result.innerHTML = "";
    table.push("*");
    result.innerHTML=table.join("");
  
});
buttons[8].addEventListener("click",()=>{
    result.innerHTML+=1;
    table.push(1);
    result.innerHTML=table.join("");
});
buttons[9].addEventListener("click",()=>{
    result.innerHTML+=2;
    table.push(2);
    result.innerHTML=table.join("");
});
buttons[10].addEventListener("click",()=>{
    result.innerHTML+=3;
    table.push(3);
    result.innerHTML=table.join("");
});
buttons[11].addEventListener("click",()=>{
    result.innerHTML+="-";
    result.innerHTML = "";
    table.push("-");
    result.innerHTML=table.join("");
});
buttons[12].addEventListener("click",()=>{
    result.innerHTML+=0;
    table.push(0);
    result.innerHTML=table.join("");
});
buttons[13].addEventListener("click",()=>{
    result.innerHTML="";
    count();
    console.log(table);
   
});
buttons[14].addEventListener("click",()=>{
    result.innerHTML+="+";
    result.innerHTML = "";
    table.push("+");
    result.innerHTML=table.join("");
});
buttons[15].addEventListener("click",()=>{
    result.innerHTML = "";
    table.length = 0;
});


function count(){
    result.innerHTML=table.join("");
    result.innerHTML = eval(table.join(''));
    table.length = 0;
}