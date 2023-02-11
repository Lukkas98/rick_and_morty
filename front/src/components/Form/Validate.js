
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function validate(inputs){
    let errors = {};
    if (!inputs.username) errors.username = "A name is required";
    if (!regexEmail.test(inputs.username)) errors.username = "Must be an email";
    if (inputs.username.length > 35) errors.username =  "Must not be more than 35 characters";

    if(!inputs.password.match(/\d/)) errors.password = "Password must have a number";
    if(inputs.password.length < 5 || inputs.password.length > 10) errors.password = "The password must be between 6 and 10 characters long";
    
    return errors;
}