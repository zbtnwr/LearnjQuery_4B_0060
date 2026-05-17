const inputNama = $("#inputNama");
const inputEmail = $("#inputEmail");
const inputNim = $("#inputNIM");
const btn = $("#btnSubmit");


const result = $("#results");


btn.click(function () {
    let newNama = inputNama.val();
    let newEmail = inputEmail.val();
    let newNim = inputNim.val();


    let pNama = $("<p></p>")
        .text(newNama)
        .addClass("nama");

    let pEmail = $("<p></p>")
        .text(newEmail)
        .addClass("email");

    let pNim = $("<p></p>")
        .text(newNim)
        .addClass("nim");

    result.appendChild(pNama);
    result.appendChild(pEmail);
    result.appendChild(pNIM);
});
