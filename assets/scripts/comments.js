let comments_input = document.getElementById("comments_input");
let regxt_path6 = /:\)/g


comments_input.addEventListener("keyup",() => {
    
    let input = comments_input.value;

    if (regxt_path6.test(input)) {
        comments_input.value = input.replace(regxt_path6,"😊")
    }

});