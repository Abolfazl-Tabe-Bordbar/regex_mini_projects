let home_number_checker_button = document.getElementById("home_number_checker_button");
let home_number_input = document.getElementById("home_number_input");
let regxt_path3 = /^(0\d{2,3}-)(\d{8})$/g



home_number_checker_button.addEventListener("click",() => {
    
    let input = home_number_input.value;


    if (regxt_path3.test(input.trim())) {
        Swal.fire({
            title: 'Success',
            text: `The ${input.trim()} Is Correct Home Number.`,
            icon: 'success',
            confirmButtonText: 'Ok'
        });   
    } else {
        Swal.fire({
            title: 'Error!',
            text: `The ${input.trim()} Is Not Correct Home Number.`,
            icon: 'error',
            confirmButtonText: 'Try Again'
        });
    }



});