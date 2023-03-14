let number_checker_button = document.getElementById("number_checker_button");
let number_input = document.getElementById("number_input");
let regxt_path2 = /^([-+]?)(\.?)(\d+)(\.\d+)?$/g



number_checker_button.addEventListener("click",() => {
    
    let input = number_input.value;


    if (regxt_path2.test(input.trim())) {
        Swal.fire({
            title: 'Success',
            text: `The ${input.trim()} Is Correct Size.`,
            icon: 'success',
            confirmButtonText: 'Ok'
        });   
    } else {
        Swal.fire({
            title: 'Error!',
            text: `The ${input.trim()} Is Not Correct Size.`,
            icon: 'error',
            confirmButtonText: 'Try Again'
        });
    }



});