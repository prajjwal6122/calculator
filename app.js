let darkmode=false;

function appendValue(value){
    document.getElementById('input').value+=value;
}

function clearDisplay(){
    document.getElementById('input').value='';
}

function deleteCharacter(){
    let input = document.getElementById('input')
    input.value=input.value.slice(0,-1);
}

function calculate(){
    let input=document.getElementById('input').value
    let output=document.getElementById('output')
    try {
        
        input = input.replace(/Math\.sin\(([^)]+)\)/g, "Math.sin(($1)*Math.PI/180)");
        input = input.replace(/Math\.cos\(([^)]+)\)/g, "Math.cos(($1)*Math.PI/180)");
        input = input.replace(/Math\.tan\(([^)]+)\)/g, "Math.tan(($1)*Math.PI/180)");

        let result=eval(input)
        if (Math.abs(result) < 1e-12) result = 0;
        document.getElementById('input').value=result;
        output.innerText=''
    }
    catch{
        document.getElementById('output').innerText='Incorrect input'
    }
}

function toggleMode(){
    let calculator=document.querySelector('.calculator')
    darkmode=!darkmode;
    if(darkmode) {
        calculator.classList.add('dark-mode')
    }
    else{
        calculator.classList.remove('dark-mode')
       
    }
}