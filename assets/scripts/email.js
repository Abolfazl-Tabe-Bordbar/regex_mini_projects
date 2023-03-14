let email_checker_button = document.getElementById("email_checker_button");
let email_input = document.getElementById("email_input");
let regxt_path10 = /^(([a-zA-Z0-9]+)([\.]?)([a-zA-Z0-9]+)([\.]?))+@gmail\.com$/g



email_checker_button.addEventListener("click",() => {
    
    let input = email_input.value;


    if (regxt_path10.test(input.trim())) {
        Swal.fire({
            title: 'Success',
            text: `The ${input.trim()} Is Correct Email.`,
            icon: 'success',
            confirmButtonText: 'Ok'
        });   
    } else {
        Swal.fire({
            title: 'Error!',
            text: `The ${input.trim()} Is Not Correct Email.`,
            icon: 'error',
            confirmButtonText: 'Try Again'
        });
    }



});