let display = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button');

let buttonsArray = [...buttons]; // OR let buttonsArray = Array.from(buttons); 
let string = '';

buttonsArray.forEach(btn =>{
    btn.addEventListener('click', (e)=>{
        let calBtn = e.target.innerHTML;
        if(calBtn == 'DEL'){
            string = string.substring(0,string.length-1);
            display.value = string;
        } else if(calBtn == 'AC'){
            string = '';
            display.value = string
        } else if(calBtn == '='){
            string = eval(string)
            display.value = string
        }else{
            string += calBtn;
            display.value = string;
        }


    });
});