function onButtonClick() {
    if (document.forms.pass_form.pass.value == "Darker Than Anything.") {
        if(confirm("Do you really enter?")) {
            open("Darker/index.html");
        }else {
            alert("You can't run away!!");
            open("../index.html");
        }
    }
}