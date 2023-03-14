let phone_checker_button = document.getElementById("phone_checker_button");
let phone_input = document.getElementById("phone_input");
let regxt_path4 = /^09\d{9}$/g



phone_checker_button.addEventListener("click",() => {
    
    let input = phone_input.value;


    if (regxt_path4.test(input.trim())) {
        Swal.fire({
            title: 'Success',
            text: `The ${input.trim()} Is Correct Phone Number.`,
            icon: 'success',
            confirmButtonText: 'Ok'
        });   
    } else {
        Swal.fire({
            title: 'Error!',
            text: `The ${input.trim()} Is Not Phone Number.`,
            icon: 'error',
            confirmButtonText: 'Try Again'
        });
    }



});