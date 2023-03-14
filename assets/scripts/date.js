let data_checker_button = document.getElementById("data_checker_button");
let data_input = document.getElementById("data_input");
let regxt_path = /^([1-9](\d{3}))(-|\/|\.)(0[1-9]|1[0-2]|[1-9])(-|\/|\.)(0[1-9]|[0-2][0-9]|[1-9]|3[0-1])$/g



data_checker_button.addEventListener("click",() => {
    
    let input = data_input.value;


    if (regxt_path.test(input.trim())) {
        Swal.fire({
            title: 'Success',
            text: `The ${input.trim()} Is Correct Data.`,
            icon: 'success',
            confirmButtonText: 'Ok'
        });   
    } else {
        Swal.fire({
            title: 'Error!',
            text: `The ${input.trim()} Is Not Correct Data.`,
            icon: 'error',
            confirmButtonText: 'Try Again'
        });
    }



});