let create_link_button = document.getElementById("create_link_button");
let create_link = document.getElementById("create_link");
let p_tag = document.getElementById("P");
let regxt_path7 = / @([\w\.]+) /g




create_link_button.addEventListener("click",() => {
    

    let input = create_link.value;

    // console.log(regxt_path7);


    if (regxt_path7.test(input)) {
        p_tag.innerHTML += input.replace(regxt_path7,(item) => {
            return `<a href='https://${item}'>${item}</a>`
        });
    }


});