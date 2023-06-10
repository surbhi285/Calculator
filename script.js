let string =""; // it used to store the input that will be manipulated by calculator

let buttons = document.querySelectorAll('.button'); 
// use to select all with class name "button" and return result stor in button variable

Array.from(buttons).forEach((button)=>{ 
    // convert 'NodeList' object returned by querySelectorAll() into an array and 
    //then forEach() method is called on that array to iterate over each button

    button.addEventListener('click', (event)=>{ // eventListener is added to each button specifically listening for click , the provided callbackfunction is executed and event object is passed as an argument.
        
        if(event.target.innerHTML=='='){ // if clicked button has an innerHTML content of "=" the user wants to evaluate input string. if so "eval()" is used the string as JS code and the result is stored back in string variable. the value of input element is then updated with evaluated result. 
            string = eval(string);// eval evaluates js code represented as string and returns it completion value
            document.querySelector('input').value = string;
        }
        else if(event.target.innerHTML=='AC'){ // if clicked button has an innerHTML content of "AC" the string variable is reset to empty string and value of the input element is updated to reflect change
            string ="";
            document.querySelector('input').value = string;
        }
        else{ // if anyother button clicked then It appends the inner HTML content of the clicked button to the string variable. Then, it updates the value of the input element with the updated string.
        console.log(event.target)
        string=string+event.target.innerHTML; // takes the existing value of the string variable and appends the value of event.target.innerHTML to it. The result is then stored back into the string variable.
        document.querySelector('input').value = string; //->sets the value of the first <input> element in the document to the value stored in the string variable.
        }
    })
})