let num1 = NaN;
let num2 = NaN;
let op=''; // + - * /
let prev_op='';
let Display = "";
let firstminus=false;

const Mold = document.querySelector('#main_body');
const screen = document.createElement('div');
const all_buttons = document.createElement('div');
const curr_display = document.createElement('div');
const prev_display = document.createElement('div');
const flah = document.createElement('div');
flah.textContent="Vk";
all_buttons.classList.add('button_panel');
screen.classList.add("screen");
flah.classList.add('flah');
curr_display.classList.add('curr');
prev_display.classList.add('prev');
screen.appendChild(flah);
screen.appendChild(prev_display);
screen.appendChild(curr_display);

Mold.appendChild(screen);


//row0
const row0 = document.createElement('div');
row0.classList.add('rows');
const AC = document.createElement('button'); AC.classList.add('btn'); AC.textContent="AC"; AC.style.cssText="background-color: darkred;"
const DEL = document.createElement('button'); DEL.classList.add('btn');DEL.textContent="DEL"; DEL.style.cssText="background-color: white; color:black"
const equal = document.createElement('button'); equal.classList.add('btn'); equal.textContent="="; equal.style.cssText="background-color:grey";
const dvd = document.createElement('button'); dvd.classList.add('btn'); dvd.textContent="/"; dvd.style.cssText="background-color:grey";
row0.appendChild(AC);
row0.appendChild(DEL);
row0.appendChild(dvd);
row0.appendChild(equal);



//row 1
const row1 = document.createElement('div');
row1.classList.add('rows');
const seven = document.createElement('button'); seven.classList.add('btn'); seven.textContent="7";
const eight = document.createElement('button'); eight.classList.add('btn'); eight.textContent="8";
const nine = document.createElement('button'); nine.classList.add('btn');   nine.textContent="9";
const mult = document.createElement('button'); mult.classList.add('btn');   mult.textContent="x"; mult.style.cssText="background-color:grey";
row1.appendChild(seven);
row1.appendChild(eight);
row1.appendChild(nine);
row1.appendChild(mult);


//row 2
const row2 = document.createElement('div');
row2.classList.add('rows');
const four = document.createElement('button'); four.classList.add('btn'); four.textContent="4";
const five = document.createElement('button'); five.classList.add('btn'); five.textContent="5";
const six = document.createElement('button'); six.classList.add('btn');   six.textContent="6";
const minus = document.createElement('button'); minus.classList.add('btn'); minus.textContent="-"; minus.style.cssText="background-color:grey";
row2.appendChild(four);
row2.appendChild(five);
row2.appendChild(six);
row2.appendChild(minus);


//row 3
const row3 = document.createElement('div');
row3.classList.add('rows');
const one = document.createElement('button'); one.classList.add('btn');  one.textContent="1";
const two = document.createElement('button'); two.classList.add('btn');  two.textContent="2";
const three = document.createElement('button'); three.classList.add('btn'); three.textContent="3";
row3.appendChild(one);
row3.appendChild(two);
row3.appendChild(three);
// row3.appendChild(plus);


//row 4
const row4 = document.createElement('div');
row4.classList.add('rows');
const zero = document.createElement('button'); zero.classList.add('btn'); zero.textContent="0";
const dot = document.createElement('button'); dot.classList.add('btn'); dot.textContent=".";
zero.style.cssText = "flex-basis: 220%"
row4.appendChild(zero);
row4.appendChild(dot);
// row4.appendChild(equal);

// left of row 5
const left = document.createElement('div');
left.classList.add('rows')
left.style.cssText = "flex-direction: column; flex-basis: 358%;";


left.appendChild(row3);
left.appendChild(row4);

//right of row 5
const plus = document.createElement('button'); plus.textContent="+";
plus.classList.add('btn');
plus.style.cssText="height:80%; background-color:grey "


//row 5
const row5 = document.createElement('div');
row5.classList.add('rows');
row5.style.cssText = "flex-basis: 200%;"
row5.appendChild(left);
row5.appendChild(plus);



all_buttons.appendChild(row0);
all_buttons.appendChild(row1);
all_buttons.appendChild(row2);
// all_buttons.appendChild(row3);
// all_buttons.appendChild(row4);
all_buttons.appendChild(row5);
Mold.appendChild(all_buttons);
function add(num1,num2)
{
    return num1+num2;
}
function subtract(num1,num2)
{
    return num1-num2;
}
function multiply(num1,num2)
{
    return num1*num2;
}
function divide(num1,num2)
{
    if(num2===0) return undefined;
    return num1/num2;
}
function operate(num1,num2,op)
{
   if(isNaN(num1)||(isNaN(num2))) return undefined;
    if(op==='+') return add(num1,num2);
    if(op==='-') return subtract(num1,num2);
    if(op==='x') return multiply(num1,num2);
    if(op==='/') return divide(num1,num2);
    return undefined;
}
function filldisplay(s='')
{
    if(s==='~')
    {
        Display = "";
        num1 = NaN;
        num2 = NaN;
        op = "";
        firstminus=false;
    }else if(s==='$')
    {
         Display = Display.slice(0,-1);
         
    }else if(s==='.')
    {
        if(Display.indexOf(s)==-1)
        {
            Display+=s;
        }
    }else{
        if(Display.length<10)  Display = Display + s;
    }
    curr_display.textContent=Display;
    prev_display.textContent=op;
}

function signs(si)
{
    op = si;
    if(isNaN(num1)) 
    {
        if(Display!="")
        {
            num1 = parseFloat(Display);
            prev_op = op;
        }else if(si==='-'){
           filldisplay('-');
           firstminus=true;
        }
     
    }else{
        num2 = parseFloat(Display);
        const re = operate(num1,num2,prev_op);
        prev_op = op;
        num1=re;
        num2=NaN;
    }
    if(!firstminus) Display="";
    else firstminus=false;
    prev_display.textContent = op;
    
}
function output(op)
{
    num2 = parseFloat(Display);
    Display = ""
    let res = operate(num1,num2,op);
    num1 = NaN;
    num2 = NaN;
    if(!isNaN(res))
    {
      Display = String(res);
      if(Display.length>9)
      {
        const roundExp = Number(res.toPrecision(5)).toExponential();
        Display = String(roundExp);
      }
      curr_display.textContent=Display;
    }else{
      curr_display.textContent="INVALID INPUTS"
    }
  
   
}
one.addEventListener('click',()=>{filldisplay('1')});
two.addEventListener('click',()=>{filldisplay('2')});
three.addEventListener('click',()=>{filldisplay('3')});
four.addEventListener('click',()=>{filldisplay('4')});
five.addEventListener('click',()=>{filldisplay('5')});
six.addEventListener('click',()=>{filldisplay('6')});
seven.addEventListener('click',()=>{filldisplay('7')});
eight.addEventListener('click',()=>{filldisplay('8')});
nine.addEventListener('click',()=>{filldisplay('9')});
zero.addEventListener('click',()=>{filldisplay('0')});
dot.addEventListener('click',()=>{filldisplay('.')});
plus.addEventListener('click',()=>{signs('+')});
minus.addEventListener('click',()=>{signs('-')});
mult.addEventListener('click',()=>{signs('x')});
dvd.addEventListener('click',()=>{signs('/')});
equal.addEventListener('click',()=>{output(op)});
AC.addEventListener('click',()=>{filldisplay('~')});
DEL.addEventListener('click',()=>{filldisplay('$')});
