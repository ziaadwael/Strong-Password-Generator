let input = document.getElementsByTagName("input")[0];
let btn = document.getElementsByTagName("button")[0];
let copy = document.getElementsByTagName("button")[1];

btn.addEventListener("click", () => {
    const charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=";
    let password = "";

    for (let i = 0; i <= 12; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
        input.value = password;
    }
    
    ShowCopyButton();
});

function ShowCopyButton() {
    copy.style.display = "block";
}

copy.addEventListener("click", () => {
    input.select();
    document.execCommand("copy");
    input.setSelectionRange(0, 0);
    alert("Successfully Copied Password..!");
});
