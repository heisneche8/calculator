const night = document.getElementById("night")
const day = document.getElementById("day")
const containbg = document.getElementById("containbg")
const change = document.getElementById("change")
const btnWrapper = document.getElementById("buttin")




night.addEventListener("click", function(e){
    // e.preventDefault
    // alert("new")
    containbg.style.backgroundColor ="black";
    icon.style.backgroundColor ="black";
    buttin.style.background = "#1e1e1e";
    screen.style.color = "white";
    result.style.color = "white";

    // document.getElementById('containbg').classList.toggle('dark')

})
day.addEventListener("click", function(){
    containbg.style.backgroundColor ="white";
    icon.style.backgroundColor ="whitesmoke";
    buttin.style.background = "whitesmoke";
    screen.style.color = "black";
    result.style.color = "black";
    // document.getElementById("containbg").classList.toggle('light')

})


const clear = document.getElementById("clear")
const dell = document.getElementById("dell")
const percent = document.getElementById("%")
const divide = document.getElementById("/")
const seven = document.getElementById("7")
const eight = document.getElementById("8")
const nine = document.getElementById("9")
const multiply = document.getElementById("x")
const four = document.getElementById("4")
const five = document.getElementById("5")
const six = document.getElementById("6")
const minus = document.getElementById("-")
const one = document.getElementById("1")
const two = document.getElementById("2")
const three = document.getElementById("3")
const plus = document.getElementById("+")
const zeros = document.getElementById("00")
const zero = document.getElementById("0")
const dot = document.getElementById(".")
const equal = document.getElementById("=")


const screen = document.getElementById("screen")
const result = document.getElementById("result")

function appendAll(val){
    screen.textContent = screen.textContent + val;
    screen.style.fontSize = "30px";
    
}

function resultDisplay(){
    if(screen.innerText.includes("%")){
        let num = screen.innerText.split('%');
        let per = (parseInt(num[0]) * parseInt(num[1])) / 100;
        result.textContent = per;
        // console.log(per);
    }else{
        result.textContent = eval(screen.innerText);
        console.log(result.innerText);
    }
    

    result.style.fontSize = "50px";
    
    

}

function clearScreen(){
    screen.textContent ="";
    result.textContent = "";
}

function dellOption(){
    let newval = screen.innerText.slice(0, screen.innerText.length -1);
    screen.textContent = newval;

    if( screen.innerText == ""){
        let newvalue = result.innerText.slice(0, result.innerText.length -1)
        result.textContent = newvalue;

    }

}

