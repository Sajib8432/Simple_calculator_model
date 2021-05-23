let output = document.getElementById('output');
let buttons = document.querySelectorAll('button');
let outputValue = "";


for(item of buttons){
    item.addEventListener('click' , (e) =>{
        buttontext = e.target.innerText;

        if( buttontext == 'X'){
            buttontext = '*';
            outputValue += buttontext;
            output.value = outputValue;
        } 
        else if( buttontext == 'AC'){
            outputValue = "";
            output.value = outputValue;
        }
        else if( buttontext == '=' ){
            output.value = eval(outputValue);
            outputValue = "";
        } 
        else{
            outputValue += buttontext;
            output.value = outputValue;
        }
    })
}


