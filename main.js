const Screen = document.getElementById("Screen");
const ButtonsNumber = document.querySelectorAll('input.AdButton');
const Equal = document.getElementById("Equal");
const Result = document.getElementById("Result");
let ans = 0;

const power=Math.pow;
const Sroot=Math.sqrt;

Equal.addEventListener('click', () => {
    let text = Screen.value;
    Result.value = text + " = ";
    text = eval(text);
    Result.value += text;
    ans = text;
    Screen.value = ""
})

ButtonsNumber.forEach((button) => {
    button.addEventListener('click', () => {
        if (Screen.value == "")
        {
            switch(button.value)
            {
                case "+":
                    Screen.value += "ans" + button.value;
                break;
                    
                case "-":
                    Screen.value += "ans" + button.value;
                break;

                case "*":
                    Screen.value += "ans" + button.value;
                break;

                case "/":
                    Screen.value += "ans" + button.value;
                break;

                default:
                    Screen.value += button.value;
                break;
            }
        }
        else{
            Screen.value += button.value
        }
    });
});