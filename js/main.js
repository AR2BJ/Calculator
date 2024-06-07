const bodyDOM = document.getElementsByTagName("body")[0];
const schemeDOM = document.querySelector(".switch input");
schemeDOM.addEventListener("change" , function(event){
    const thisElement = event.target;
    if(thisElement.checked){
        // Dark Mode
        bodyDOM.classList.add("dark-mode");
        document.getElementById("nav").setAttribute("style", "background-color: #212529;");
        document.getElementById("footer").setAttribute("style", "background-color: #212529;");
        document.getElementById("calculate_body").setAttribute("style", "background-color: #212529;");
        document.getElementById("Field_1").setAttribute("style", "background-color: #212529;");
        document.getElementById("bar1").setAttribute("style", "background-color: #0dcaf0;");
        document.getElementById("bar2").setAttribute("style", "background-color: #0dcaf0;");
        document.getElementById("bar3").setAttribute("style", "background-color: #0dcaf0;");
        document.getElementById("logo").setAttribute("style", "color: #0dcaf0;");
        document.body.style.backgroundColor = "#6c757d";
    }
    else{
        // Light Mode
        bodyDOM.classList.remove("dark-mode");
        document.getElementById("nav").setAttribute("style", "background-color: #0547a9;");
        document.getElementById("footer").setAttribute("style", "background-color: #0547a9;");
        document.getElementById("calculate_body").setAttribute("style", "background-color: #545a5f;");
        document.getElementById("Field_1").setAttribute("style", "background-color: #545a5f;");
        document.getElementById("bar1").setAttribute("style", "background-color: #ffbf00;");
        document.getElementById("bar2").setAttribute("style", "background-color: #ffbf00;");
        document.getElementById("bar3").setAttribute("style", "background-color: #ffbf00;");
        document.getElementById("logo").setAttribute("style", "color: #ffbf00;");
        document.body.style.backgroundColor = "#fff";
    }
});

let key_press = document.querySelector("body");
key_press.addEventListener("keydown", (e) => {
    if(e.key == "Backspace"){
        if ((document.querySelector("input[type=text]").value).length - 1 == 0)
            document.querySelector("input[type=text]").value = 0;
        else
            document.querySelector("input[type=text]").value = (document.querySelector("input[type=text]").value).slice(0, ((document.querySelector("input[type=text]").value).length - 1));
    }
    else if (e.key == "Delete") {
        document.querySelector("input[type=text]").value = 0
    }
    else if (e.key == "Escape") {
        document.querySelector("#Field_1").innerText = ""
    }
    else if (e.key == ".") {
        if ((document.querySelector("input[type=text]").value).includes(".") == false) {
            document.querySelector("input[type=text]").value += ".";
        }
        else {
            document.querySelector("input[type=text]").value += "";
        }
    }
    else if (e.key == "+") {
        if ((document.querySelector("#Field_1").innerText).includes("+") == false) {
            document.querySelector("#Field_1").innerText += document.querySelector("input[type=text]").value + " +";
            document.querySelector("input[type=text]").value = 0
        }
        else {
            document.querySelector("#Field_1").innerText += " " + document.querySelector("input[type=text]").value;
        }
    }
    else if (e.key == "-") {
        if ((document.querySelector("#Field_1").innerText).includes("-") == false) {
            document.querySelector("#Field_1").innerText += document.querySelector("input[type=text]").value + " -";
            document.querySelector("input[type=text]").value = 0
        }
        else {
            document.querySelector("#Field_1").innerText += " " + document.querySelector("input[type=text]").value;
        }
    }
    else if (e.key == "*") {
        if ((document.querySelector("#Field_1").innerText).includes("\u00D7") == false) {
            document.querySelector("#Field_1").innerText += document.querySelector("input[type=text]").value + " \u00D7";
            document.querySelector("input[type=text]").value = 0
        }
        else {
            document.querySelector("#Field_1").innerText += " " + document.querySelector("input[type=text]").value;
        }
    }
    else if (e.key == "/") {
        if ((document.querySelector("#Field_1").innerText).includes("\u00F7") == false) {
            document.querySelector("#Field_1").innerText += document.querySelector("input[type=text]").value + " \u00F7";
            document.querySelector("input[type=text]").value = 0
        }
        else {
            document.querySelector("#Field_1").innerText += " " + document.querySelector("input[type=text]").value;
        }
    }
    else if (e.key == "Enter") {
        if ((document.querySelector("#Field_1").innerText).includes("=") == false) {
            document.querySelector("#Field_1").innerText += " " + document.querySelector("input[type=text]").value + " =";
            if ((document.querySelector("#Field_1").innerText).includes("+"))
                document.querySelector("input[type=text]").value = parseFloat((document.querySelector("#Field_1").innerText).match(/-?([0-9]*[.])?[0-9]+/g)[0]) + parseFloat((document.querySelector("#Field_1").innerText).match(/-?([0-9]*[.])?[0-9]+/g)[1]);
            if ((document.querySelector("#Field_1").innerText).includes("-"))
                document.querySelector("input[type=text]").value = parseFloat((document.querySelector("#Field_1").innerText).match(/-?([0-9]*[.])?[0-9]+/g)[0]) - parseFloat((document.querySelector("#Field_1").innerText).match(/-?([0-9]*[.])?[0-9]+/g)[1]); 
            if ((document.querySelector("#Field_1").innerText).includes("\u00D7"))
                document.querySelector("input[type=text]").value = parseFloat((document.querySelector("#Field_1").innerText).match(/-?([0-9]*[.])?[0-9]+/g)[0]) * parseFloat((document.querySelector("#Field_1").innerText).match(/-?([0-9]*[.])?[0-9]+/g)[1]);
            if ((document.querySelector("#Field_1").innerText).includes("\u00F7"))
                document.querySelector("input[type=text]").value = parseFloat((document.querySelector("#Field_1").innerText).match(/-?([0-9]*[.])?[0-9]+/g)[0]) / parseFloat((document.querySelector("#Field_1").innerText).match(/-?([0-9]*[.])?[0-9]+/g)[1]);
        }
        else {
            document.querySelector("#Field_1").innerText += " " ;
        }
    }
    else if (Number(e.key) || e.key == "0") {
        if (String(document.querySelector("input[type=text]").value).includes(".")) {
            document.querySelector("input[type=text]").value += e.key;
        }
        else if (document.querySelector("input[type=text]").value == 0) {
            document.querySelector("input[type=text]").value = e.key;
        }
        else {
            document.querySelector("input[type=text]").value += e.key;
        }
    }
})


function Coefficient_sin(num){
    if (num % 180 == 0){
        return 1;
    }
    else if (num % 200 == 0){
        return 2;
    }
    else if (num % Math.PI == 0){
        return 3;
    }
    else {
        return 0
    }
}

function Coefficient_cos(num){
    if (num % 180 == 90 || num % -180 == -90){
        return 1;
    }
    else if (num % 200 == 100 || num % -200 == -100){
        return 2;
    }
    else if (num % Math.PI == (Math.PI / 2) || num % (-1 * Math.PI) == (-1 * (Math.PI / 2))){
        return 3;
    }
    else {
        return 0
    }
}

function click_inp_1(id_2, id_3){
    let inp_1 = document.getElementById("inp_1");
    let inp_2 = document.getElementById(id_2);
    let inp_3 = document.getElementById(id_3);
    inp_1.setAttribute("checked", "");
    inp_2.removeAttribute("checked");
    inp_3.removeAttribute("checked");
    let value = document.getElementById("Field_2");
    let inner = document.getElementById("Field_1");
    let Ext_num = inner.innerText.match(/-?([0-9]*[.])?[0-9]+|- ([0-9]*[.])?[0-9]+/g);
    Ext_num = String(Ext_num).replace(" ", "").match(/-?([0-9]*[.])?[0-9]+/g);
    let abs = Complex(Ext_num[0], Ext_num[1]).abs() + "\u279B r";
    let arg_deg_2 = ((Complex(Ext_num[0], Ext_num[1]).arg() * 180) / Math.PI) + " \u279B " + String.fromCodePoint(0x1D703);
    let arg_rad_2 = Complex(Ext_num[0], Ext_num[1]).arg() + " \u279B " + String.fromCodePoint(0x1D703);
    let arg_gra_2 = ((Complex(Ext_num[0], Ext_num[1]).arg() * 200) / Math.PI) + " \u279B " + String.fromCodePoint(0x1D703);
    let arg_deg_1 = ((Complex(0, Ext_num[0]).arg() * 180) / Math.PI) + " \u279B " + String.fromCodePoint(0x1D703);
    let arg_rad_1 = Complex(0, Ext_num[0]).arg() + " \u279B " + String.fromCodePoint(0x1D703);
    let arg_gra_1 = ((Complex(0, Ext_num[0]).arg() * 200) / Math.PI) + " \u279B " + String.fromCodePoint(0x1D703);
    if (value.value == abs){
        value.value = abs;
    }
    else if ( value.value == arg_rad_2 || value.value == arg_gra_2){
        value.value = arg_deg_2;
    }
    else if ( value.value == arg_rad_1 || value.value == arg_gra_1){
        value.value = arg_deg_1;
    }
}
function click_inp_2(id_1, id_3){
    let inp_1 = document.getElementById(id_1);
    let inp_2 = document.getElementById("inp_2");
    let inp_3 = document.getElementById(id_3);
    inp_1.removeAttribute("checked");
    inp_2.setAttribute("checked", "");
    inp_3.removeAttribute("checked");
    let value = document.getElementById("Field_2");
    let inner = document.getElementById("Field_1");
    let Ext_num = inner.innerText.match(/-?([0-9]*[.])?[0-9]+|- ([0-9]*[.])?[0-9]+/g);
    Ext_num = String(Ext_num).replace(" ", "").match(/-?([0-9]*[.])?[0-9]+/g);
    let abs = Complex(Ext_num[0], Ext_num[1]).abs() + "\u279B r";
    let arg_deg_2 = ((Complex(Ext_num[0], Ext_num[1]).arg() * 180) / Math.PI) + " \u279B " + String.fromCodePoint(0x1D703);
    let arg_rad_2 = Complex(Ext_num[0], Ext_num[1]).arg() + " \u279B " + String.fromCodePoint(0x1D703);
    let arg_gra_2 = ((Complex(Ext_num[0], Ext_num[1]).arg() * 200) / Math.PI) + " \u279B " + String.fromCodePoint(0x1D703);
    let arg_deg_1 = ((Complex(0, Ext_num[0]).arg() * 180) / Math.PI) + " \u279B " + String.fromCodePoint(0x1D703);
    let arg_rad_1 = Complex(0, Ext_num[0]).arg() + " \u279B " + String.fromCodePoint(0x1D703);
    let arg_gra_1 = ((Complex(0, Ext_num[0]).arg() * 200) / Math.PI) + " \u279B " + String.fromCodePoint(0x1D703);
    if (value.value == abs){
        value.value = abs;
    }
    else if ( value.value == arg_deg_2 || value.value == arg_gra_2){
        value.value = arg_rad_2;
    }
    else if ( value.value == arg_deg_1 || value.value == arg_gra_1){
        value.value = arg_rad_1;
    }
}

function click_inp_3(id_1, id_2){
    let inp_1 = document.getElementById(id_1);
    let inp_2 = document.getElementById(id_2);
    let inp_3 = document.getElementById("inp_3");
    inp_1.removeAttribute("checked");
    inp_2.removeAttribute("checked");
    inp_3.setAttribute("checked", "");
    let value = document.getElementById("Field_2");
    let inner = document.getElementById("Field_1");
    let Ext_num = inner.innerText.match(/-?([0-9]*[.])?[0-9]+|- ([0-9]*[.])?[0-9]+/g);
    Ext_num = String(Ext_num).replace(" ", "").match(/-?([0-9]*[.])?[0-9]+/g);
    let abs = Complex(Ext_num[0], Ext_num[1]).abs() + "\u279B r";
    let arg_deg_2 = ((Complex(Ext_num[0], Ext_num[1]).arg() * 180) / Math.PI) + " \u279B " + String.fromCodePoint(0x1D703);
    let arg_rad_2 = Complex(Ext_num[0], Ext_num[1]).arg() + " \u279B " + String.fromCodePoint(0x1D703);
    let arg_gra_2 = ((Complex(Ext_num[0], Ext_num[1]).arg() * 200) / Math.PI) + " \u279B " + String.fromCodePoint(0x1D703);
    let arg_deg_1 = ((Complex(0, Ext_num[0]).arg() * 180) / Math.PI) + " \u279B " + String.fromCodePoint(0x1D703);
    let arg_rad_1 = Complex(0, Ext_num[0]).arg() + " \u279B " + String.fromCodePoint(0x1D703);
    let arg_gra_1 = ((Complex(0, Ext_num[0]).arg() * 200) / Math.PI) + " \u279B " + String.fromCodePoint(0x1D703);
    if (value.value == abs){
        value.value = abs;
    }
    else if ( value.value == arg_deg_2 || value.value == arg_rad_2){
        value.value = arg_gra_2;
    }
    else if ( value.value == arg_deg_1 || value.value == arg_rad_1){
        value.value = arg_gra_1;
    }
}

function click_inp_4(id_5, id_6, id_7){
    let value = document.getElementById("Field_2");
    let inp_4 = document.getElementById("inp_4");
    let inp_5 = document.getElementById(id_5);
    let inp_6 = document.getElementById(id_6);
    let inp_7 = document.getElementById(id_7);
    if (inp_4.checked == true){
        inp_5.checked = false;
        inp_6.checked = false;
        inp_7.checked = false;
        value.value = "0d"
    }
    else {
        value.value = "0"
    }
    inp_4.setAttribute("checked", "");
    inp_5.removeAttribute("checked");
    inp_6.removeAttribute("checked");
    inp_7.removeAttribute("checked");
}

function click_inp_5(id_4, id_6, id_7){
    let value = document.getElementById("Field_2");
    let inp_4 = document.getElementById(id_4);
    let inp_5 = document.getElementById("inp_5");
    let inp_6 = document.getElementById(id_6);
    let inp_7 = document.getElementById(id_7);
    if (inp_5.checked == true){
        inp_4.checked = false;
        inp_6.checked = false;
        inp_7.checked = false;
        value.value = "0b"
    }
    else {
        value.value = "0"
    }
    inp_4.removeAttribute("checked");
    inp_5.setAttribute("checked", "");
    inp_6.removeAttribute("checked");
    inp_7.removeAttribute("checked");
}

function click_inp_6(id_4, id_5, id_7){
    let value = document.getElementById("Field_2");
    let inp_4 = document.getElementById(id_4);
    let inp_5 = document.getElementById(id_5);
    let inp_6 = document.getElementById("inp_6");
    let inp_7 = document.getElementById(id_7);
    if (inp_6.checked == true){
        inp_4.checked = false;
        inp_5.checked = false;
        inp_7.checked = false;
        value.value = "0o"
    }
    else {
        value.value = "0"
    }
    inp_4.removeAttribute("checked");
    inp_5.removeAttribute("checked");
    inp_6.setAttribute("checked", "");
    inp_7.removeAttribute("checked");
}

function click_inp_7(id_4, id_5, id_6){
    let value = document.getElementById("Field_2");
    let inp_4 = document.getElementById(id_4);
    let inp_5 = document.getElementById(id_5);
    let inp_6 = document.getElementById(id_6);
    let inp_7 = document.getElementById("inp_7");
    if (inp_7.checked == true){
        inp_4.checked = false;
        inp_5.checked = false;
        inp_6.checked = false;
        value.value = "0x"
    }
    else {
        value.value = "0"
    }
    inp_4.removeAttribute("checked");
    inp_5.removeAttribute("checked");
    inp_6.removeAttribute("checked");
    inp_7.setAttribute("checked", "");
}

function butt_sin(Field){
    let value = document.getElementById(Field);
    let mode_1 = document.getElementById("inp_1");
    let mode_3 =document.getElementById("inp_3");
    if (value.value == 0){
        document.getElementById("Field_1").innerText = "sin(0)";
        value.value = 0;
    }
    else if (mode_1.hasAttribute("checked")) {
        if (value.value == 30){
            document.getElementById("Field_1").innerText = "sin(" + value.value + ")";
            value.value = 0.5;
        }
        else if (value.value == -30){
            document.getElementById("Field_1").innerText = "sin(" + value.value + ")";
            value.value = -0.5;
        }
        else if (Coefficient_sin(value.value) == 1){
            document.getElementById("Field_1").innerText = "sin(" + value.value + ")";
            value.value = 0;
        }
        else {
        document.getElementById("Field_1").innerText = "sin(" + value.value + ")";
        value.value = Math.sin((Number(value.value) * Math.PI) / 180);
        }
    }
    else if (mode_3.hasAttribute("checked")){
        if (Coefficient_sin(value.value) == 2){
            document.getElementById("Field_1").innerText = "sin(" + value.value + ")";
            value.value = 0;
        }
        else {
            document.getElementById("Field_1").innerText = "sin(" + value.value + ")";
            value.value = Math.sin((Number(value.value) * Math.PI) / 200);
        }
    }
    else{
        if (value.value == (Math.PI / 6)){
            document.getElementById("Field_1").innerText = "sin(" + value.value + ")";
            value.value = 0.5;
        }
        else if (value.value == (-1 * (Math.PI / 6))){
            document.getElementById("Field_1").innerText = "sin(" + value.value + ")";
            value.value = -0.5;
        }
        else if (Coefficient_sin(value.value) == 3){
            document.getElementById("Field_1").innerText = "sin(" + value.value + ")";
            value.value = 0;
        }
        else {
            document.getElementById("Field_1").innerText = "sin(" + value.value + ")";
            value.value = Math.sin(Number(value.value));
        }
    }
}

function butt_cos(Field){
    let value = document.getElementById(Field);
    let mode_1 = document.getElementById("inp_1");
    let mode_3 = document.getElementById("inp_3");
    if (value.value == 0){
        document.getElementById("Field_1").innerText = "cos(0)";
        value.value = 1;
    }
    else if (mode_1.hasAttribute("checked")) {
        if (value.value == 60){
            document.getElementById("Field_1").innerText = "cos(" + value.value + ")";
            value.value = 0.5;
        }
        else if (value.value == -60){
            document.getElementById("Field_1").innerText = "cos(" + value.value + ")";
            value.value = 0.5;
        }
        else if (Coefficient_cos(value.value) == 1){
            document.getElementById("Field_1").innerText = "cos(" + value.value + ")";
            value.value = 0;
        }
        else {
            document.getElementById("Field_1").innerText = "cos(" + value.value + ")";
            value.value = Math.cos((Number(value.value) * Math.PI) / 180);
        }
    }
    else if (mode_3.hasAttribute("checked")){
        if (value.value == (200 / 3)){
            document.getElementById("Field_1").innerText = "cos(" + value.value + ")";
            value.value = 0.5;
        }
        else if (value.value == (-1 * (200 / 3))){
            document.getElementById("Field_1").innerText = "cos(" + value.value + ")";
            value.value = 0.5;
        }
        else if (Coefficient_cos(value.value) == 2){
            document.getElementById("Field_1").innerText = "cos(" + value.value + ")";
            value.value = 0;
        }
        else {
            document.getElementById("Field_1").innerText = "cos(" + value.value + ")";
            value.value = Math.cos((Number(value.value) * Math.PI) / 200);
        }
    }
    else{
        if (value.value == (Math.PI / 3)){
            document.getElementById("Field_1").innerText = "cos(" + value.value + ")";
            value.value = 0.5;
        }
        else if (value.value == (-1 * (Math.PI / 3))){
            document.getElementById("Field_1").innerText = "cos(" + value.value + ")";
            value.value = 0.5;
        }
        else if (Coefficient_cos(value.value) == 3){
            document.getElementById("Field_1").innerText = "cos(" + value.value + ")";
            value.value = 0;
        }
        else {
            document.getElementById("Field_1").innerText = "cos(" + value.value + ")";
            value.value = Math.cos(Number(value.value));
        }
    }
}

function butt_tan(Field){
    let value = document.getElementById(Field);
    let mode_1 = document.getElementById("inp_1");
    let mode_3 = document.getElementById("inp_3");
    if (value.value == 0){
        document.getElementById("Field_1").innerText = "tan(0)";
        value.value = 0;
    }
    else if (mode_1.hasAttribute("checked")) {
        if (value.value == 45){
            document.getElementById("Field_1").innerText = "tan(" + value.value + ")";
            value.value = 1;
        }
        else if (value.value == -45){
            document.getElementById("Field_1").innerText = "tan(" + value.value + ")";
            value.value = -1;
        }
        else if (Coefficient_sin(value.value) == 1){
            document.getElementById("Field_1").innerText = "tan(" + value.value + ")";
            value.value = 0;
        }
        else if (Coefficient_cos(value.value) == 1){
            document.getElementById("Field_1").innerText = "tan(" + value.value + ")";
            value.value = "Error";
        }
        else {
            document.getElementById("Field_1").innerText = "tan(" + value.value + ")";
            value.value = Math.tan((Number(value.value) * Math.PI) / 180);
        }
    }
    else if (mode_3.hasAttribute("checked")){
        if (value.value == 50){
            document.getElementById("Field_1").innerText = "tan(" + value.value + ")";
            value.value = 1;
        }
        else if (value.value == -50){
            document.getElementById("Field_1").innerText = "tan(" + value.value + ")";
            value.value = -1;
        }
        else if (Coefficient_sin(value.value) == 2){
            document.getElementById("Field_1").innerText = "tan(" + value.value + ")";
            value.value = 0;
        }
        else if (Coefficient_cos(value.value) == 2){
            document.getElementById("Field_1").innerText = "sin(" + value.value + ")";
            value.value = "Error";
        }
        else {
            document.getElementById("Field_1").innerText = "tan(" + value.value + ")";
            value.value = Math.tan((Number(value.value) * Math.PI) / 200);
        }
    }
    else{
        if (value.value == (Math.PI / 4)){
            document.getElementById("Field_1").innerText = "tan(" + value.value + ")";
            value.value = 1;
        }
        if (value.value == (-1 * (Math.PI / 4))){
            document.getElementById("Field_1").innerText = "tan(" + value.value + ")";
            value.value = -1;
        }
        else if (Coefficient_sin(value.value) == 3){
            document.getElementById("Field_1").innerText = "tan(" + value.value + ")";
            value.value = 0;
        }
        else if (Coefficient_cos(value.value) == 3){
            document.getElementById("Field_1").innerText = "sin(" + value.value + ")";
            value.value = "Error";
        }
        else {
            document.getElementById("Field_1").innerText = "cos(" + value.value + ")";
            value.value = Math.tan(Number(value.value));
        }
    }
}

function butt_sinh(Field){
    let value = document.getElementById(Field);
    document.getElementById("Field_1").innerText = "sinh(" + value.value + ")";
    value.value = Math.sinh(Number(value.value));
}

function butt_cosh(Field){
    let value = document.getElementById(Field);
    document.getElementById("Field_1").innerText = "cosh(" + value.value + ")";
    value.value = Math.cosh(Number(value.value));
}

function butt_tanh(Field){
    let value = document.getElementById(Field);
    document.getElementById("Field_1").innerText = "tanh(" + value.value + ")";
    value.value = Math.tanh(Number(value.value));
}

function butt_sin_1(Field){
    let value = document.getElementById(Field);
    let mode_1 = document.getElementById("inp_1");
    let mode_3 = document.getElementById("inp_3");
    if (value.value == 0){
        document.getElementById("Field_1").innerText = "sin\u207B\u00B9(0)";
        value.value = 0;
    }
    else if (mode_1.hasAttribute("checked")) {
        if (value.value == 0.5){
            document.getElementById("Field_1").innerText = "sin\u207B\u00B9(" + value.value + ")";
            value.value = 30;
        }
        else if (value.value == ((Math.sqrt(2)) / 2)){
            document.getElementById("Field_1").innerText = "sin\u207B\u00B9(" + value.value + ")";
            value.value = 45;
        }
        else if (value.value == ((Math.sqrt(3)) / 2)){
            document.getElementById("Field_1").innerText = "sin\u207B\u00B9(" + value.value + ")";
            value.value = 60;
        }
        else if (value.value == -0.5){
            document.getElementById("Field_1").innerText = "sin\u207B\u00B9(" + value.value + ")";
            value.value = -30;
        }
        else if (value.value == (-1 * ((Math.sqrt(2)) / 2))){
            document.getElementById("Field_1").innerText = "sin\u207B\u00B9(" + value.value + ")";
            value.value = -45;
        }
        else if (value.value == (-1 * ((Math.sqrt(3)) / 2))){
            document.getElementById("Field_1").innerText = "sin\u207B\u00B9(" + value.value + ")";
            value.value = -60;
        }
        else {
            document.getElementById("Field_1").innerText = "sin\u207B\u00B9(" + value.value + ")";
            value.value = (Math.asin(Number(value.value)) * 180) / Math.PI;
        }
    }
    else if (mode_3.hasAttribute("checked")){
        if (value.value == ((Math.sqrt(2)) / 2)){
            document.getElementById("Field_1").innerText = "sin\u207B\u00B9(" + value.value + ")";
            value.value = 50;
        }
        else if (value.value == (-1 * ((Math.sqrt(2)) / 2))){
            document.getElementById("Field_1").innerText = "sin\u207B\u00B9(" + value.value + ")";
            value.value = -50;
        }
        else {
            document.getElementById("Field_1").innerText = "sin\u207B\u00B9(" + value.value + ")";
            value.value = (Math.asin(Number(value.value)) * 200) / Math.PI;
        }
    }
    else{
        document.getElementById("Field_1").innerText = "sin\u207B\u00B9(" + value.value + ")";
        value.value = Math.asin(Number(value.value));
    }
}

function butt_cos_1(Field){
    let value = document.getElementById(Field);
    let mode_1 = document.getElementById("inp_1");
    let mode_3 = document.getElementById("inp_3");
    if (value.value == 1){
        document.getElementById("Field_1").innerText = "cos\u207B\u00B9(1)";
        value.value = 0;
    }
    else if (mode_1.hasAttribute("checked")) {
        if (value.value == ((Math.sqrt(3)) / 2)){
            document.getElementById("Field_1").innerText = "cos\u207B\u00B9(" + value.value + ")";
            value.value = 30;
        }
        else if (value.value == 0.5){
            document.getElementById("Field_1").innerText = "cos\u207B\u00B9(" + value.value + ")";
            value.value = 60;
        }
        else if (value.value == (-1 * ((Math.sqrt(3)) / 2))){
            document.getElementById("Field_1").innerText = "cos\u207B\u00B9(" + value.value + ")";
            value.value = -30;
        }
        else if (value.value == -0.5){
            document.getElementById("Field_1").innerText = "cos\u207B\u00B9(" + value.value + ")";
            value.value = -60;
        }
        else {
            document.getElementById("Field_1").innerText = "cos\u207B\u00B9(" + value.value + ")";
            value.value = (Math.acos(Number(value.value)) * 180) / Math.PI;
        }
    }
    else if (mode_3.hasAttribute("checked")){
        document.getElementById("Field_1").innerText = "cos\u207B\u00B9(" + value.value + ")";
        value.value = (Math.acos(Number(value.value)) * 200) / Math.PI;
    }
    else{
        document.getElementById("Field_1").innerText = "cos\u207B\u00B9(" + value.value + ")";
        value.value = Math.acos(Number(value.value));
    }
}

function butt_tan_1(Field){
    let value = document.getElementById(Field);
    let mode_1 = document.getElementById("inp_1");
    let mode_3 = document.getElementById("inp_3");
    if (value.value == 0){
        document.getElementById("Field_1").innerText = "tan\u207B\u00B9(0)";
        value.value = 0;
    }
    else if (mode_1.hasAttribute("checked")) {
        if (value.value == ((Math.sqrt(3)) / 3)){
            document.getElementById("Field_1").innerText = "tan\u207B\u00B9(" + value.value + ")";
            value.value = 30;
        }
        else if (value.value == (Math.sqrt(3))){
            document.getElementById("Field_1").innerText = "tan\u207B\u00B9(" + value.value + ")";
            value.value = 60;
        }
        else if (value.value == (-1 * ((Math.sqrt(3)) / 3))){
            document.getElementById("Field_1").innerText = "tan\u207B\u00B9(" + value.value + ")";
            value.value = -30;
        }
        else if (value.value == (-1 * (Math.sqrt(3)))){
            document.getElementById("Field_1").innerText = "tan\u207B\u00B9(" + value.value + ")";
            value.value = -60;
        }
        else {
            document.getElementById("Field_1").innerText = "tan\u207B\u00B9(" + value.value + ")";
            value.value = (Math.atan(Number(value.value)) * 180) / Math.PI;
        }
    }
    else if (mode_3.hasAttribute("checked")){
        document.getElementById("Field_1").innerText = "tan\u207B\u00B9(" + value.value + ")";
        value.value = (Math.atan(Number(value.value)) * 200) / Math.PI;
    }
    else{
        document.getElementById("Field_1").innerText = "tan\u207B\u00B9(" + value.value + ")";
        value.value = Math.atan(Number(value.value));
    }
}

function butt_sinh_1(Field){
    let value = document.getElementById(Field);
    document.getElementById("Field_1").innerText = "sinh\u207B\u00B9(" + value.value + ")";
    value.value = Math.asinh(Number(value.value));
}

function butt_cosh_1(Field){
    let value = document.getElementById(Field);
    document.getElementById("Field_1").innerText = "cosh\u207B\u00B9(" + value.value + ")";
    value.value = Math.acosh(Number(value.value));
}

function butt_tanh_1(Field){
    let value = document.getElementById(Field);
    document.getElementById("Field_1").innerText = "tanh\u207B\u00B9(" + value.value + ")";
    value.value = Math.atanh(Number(value.value));
}

function butt_sup2(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    if (String(value.value).includes(".")){
        if (inner.innerText == ""){
            let f_dot = String(value.value).indexOf(".");
            let flo_num_length = Number(String(value.value).slice(f_dot + 1, String(value.value).length).length);
            inner.innerText = value.value + " \u00B2 = ";
            value.value = Math.pow(value.value, 2).toFixed((flo_num_length * 2));
        }
        else {
            let f_dot = String(value.value).indexOf(".");
            let flo_num_length = Number(String(value.value).slice(f_dot + 1, String(value.value).length).length);
            inner.innerText = "( " + inner.innerText.slice(0, inner.innerText.length - 1) + ") \u00B2 = ";
            value.value = Math.pow(value.value, 2).toFixed((flo_num_length * 2));
        }
    }
    else if (inner.innerText == ""){
        inner.innerText = value.value + " \u00B2 = ";
        value.value = Math.pow(value.value, 2);
    }
    else {
        inner.innerText = "( " + inner.innerText.slice(0, inner.innerText.length - 1) + ") \u00B2 = ";
        value.value = Math.pow(value.value, 2);
    }
}

function butt_sup3(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1")
    if (String(value.value).includes(".")){
        if (inner.innerText == ""){
            let f_dot = String(value.value).indexOf(".");
            let flo_num_length = Number(String(value.value).slice(f_dot + 1, String(value.value).length).length);
            inner.innerText = value.value + " \u00B3 = ";
            value.value = Math.pow(value.value, 3).toFixed((flo_num_length * 3));
        }
        else {
            let f_dot = String(value.value).indexOf(".");
            let flo_num_length = Number(String(value.value).slice(f_dot + 1, String(value.value).length).length);
            inner.innerText = "( " + inner.innerText.slice(0, inner.innerText.length - 1) + ") \u00B3 = ";
            value.value = Math.pow(value.value, 3).toFixed((flo_num_length * 3));
        }
    }
    else if (inner.innerText == ""){
        inner.innerText = value.value + " \u00B3 = ";
        value.value = Math.pow(value.value, 3);
    }
    else {
        inner.innerText = "( " + inner.innerText.slice(0, inner.innerText.length - 1) + ") \u00B3 = ";
        value.value = Math.pow(value.value, 3);
    }
}

function butt_sup4(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    if (String(value.value).includes(".")){
        if (inner.innerText == ""){
            let f_dot = String(value.value).indexOf(".");
            let flo_num_length = Number(String(value.value).slice(f_dot + 1, String(value.value).length).length);
            inner.innerText = value.value + " \u2074 = ";
            value.value = Math.pow(value.value, 4).toFixed((flo_num_length * 4));
        }
        else {
            let f_dot = String(value.value).indexOf(".");
            let flo_num_length = Number(String(value.value).slice(f_dot + 1, String(value.value).length).length);
            inner.innerText = "( " + inner.innerText.slice(0, inner.innerText.length - 1) + ") \u2074 = ";
            value.value = Math.pow(value.value, 4).toFixed((flo_num_length * 4));
        }
    }
    else if (inner.innerText == ""){
        inner.innerText = value.value + " \u2074 = ";
        value.value = Math.pow(value.value, 4);
    }
    else {
        inner.innerText = "( " + inner.innerText.slice(0, inner.innerText.length - 1) + ") \u2074 = ";
        value.value = Math.pow(value.value, 4);
    }
}

function butt_supy(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    let sup = document.createElement("sup");
    let span = document.createElement("span");
    let dot = document.getElementById("btn_dot");
    let CE = document.getElementById("btn_CE");
    let C = document.getElementById("btn_C");
    let back = document.getElementById("btn_back");
    let click_0 = document.getElementById("btn_0");
    let click_1 = document.getElementById("btn_1");
    let click_2 = document.getElementById("btn_2");
    let click_3 = document.getElementById("btn_3");
    let click_4 = document.getElementById("btn_4");
    let click_5 = document.getElementById("btn_5");
    let click_6 = document.getElementById("btn_6");
    let click_7 = document.getElementById("btn_7");
    let click_8 = document.getElementById("btn_8");
    let click_9 = document.getElementById("btn_9");
    let val = value.value;
    if (inner.innerHTML == ""){
        inner.innerHTML = value.value + " ";
        value.value = 0;
        inner.appendChild(sup);
        sup.setAttribute("style", "display: inline-block; border: 2px solid white; " +
            "padding: 5px; border-radius: 4px");
        inner.appendChild(span);
        span.setAttribute("id", "span");
        span.innerText = " = ";
    }
    else {
        inner.removeChild(document.getElementById("span"));
        inner.innerHTML = "( " + inner.innerHTML + " ) ";
        value.value = 0;
        inner.appendChild(sup);
        sup.setAttribute("style", "display: inline-block; border: 2px solid white; " +
            "padding: 5px; border-radius: 4px");
        inner.appendChild(span);
        span.setAttribute("id", "span");
        span.innerText = " = ";
    }
    dot.onclick = () => {
        sup.innerText += ".";
        sup.removeAttribute("style");
    }
    click_0.onclick = () => {
        if (sup.innerText == "" || sup.innerText == 0){
            if (sup.innerText.includes(".")){
                sup.innerText += "0";
                sup.removeAttribute("style");
                value.value = Math.pow(val, Number(sup.innerText));
            }
            else {
                sup.innerText = "0";
                sup.removeAttribute("style");
                value.value = Math.pow(val, 0);
            }
        }
        else {
            if (String(val).includes(".")){
                let f_dot = String(val).indexOf(".");
                let flo_num_length = Number(String(val).slice(f_dot + 1, String(val).length).length);
                sup.innerText += "0";
                value.value = Math.pow(val, Number(sup.innerText)).toFixed((flo_num_length * Number(sup.innerText)));
            }
            else {
                sup.innerText += "0";
                value.value = Math.pow(val, Number(sup.innerText));
            }
        }
    }
    click_1.onclick = () => {
        if (sup.innerText == "" || sup.innerText == 0){
            if (sup.innerText.includes(".")){
                sup.innerText += "1";
                sup.removeAttribute("style");
                value.value = Math.pow(val, Number(sup.innerText));
            }
            else {
                sup.innerText = "1";
                sup.removeAttribute("style");
                value.value = Math.pow(val, 1);
            }
        }
        else {
            if (String(val).includes(".")){
                let f_dot = String(val).indexOf(".");
                let flo_num_length = Number(String(val).slice(f_dot + 1, String(val).length).length);
                sup.innerText += "1";
                value.value = Math.pow(val, Number(sup.innerText)).toFixed((flo_num_length * Number(sup.innerText)));
            }
            else {
                sup.innerText += "1";
                value.value = Math.pow(val, Number(sup.innerText));
            }
        }
    }
    click_2.onclick = () => {
        if (sup.innerText == "" || sup.innerText == 0){
            if (sup.innerText.includes(".")){
                sup.innerText += "2";
                sup.removeAttribute("style");
                value.value = Math.pow(val, Number(sup.innerText));
            }
            else if (String(val).includes(".")){
                let f_dot = String(val).indexOf(".");
                let flo_num_length = Number(String(val).slice(f_dot + 1, String(val).length).length);
                sup.innerText = "2";
                sup.removeAttribute("style");
                value.value = Math.pow(val, 2).toFixed((flo_num_length * 2));
            }
            else {
                sup.innerText = "2";
                sup.removeAttribute("style");
                value.value = Math.pow(val, 2);
            }
        }
        else {
            if (String(val).includes(".")){
                let f_dot = String(val).indexOf(".");
                let flo_num_length = Number(String(val).slice(f_dot + 1, String(val).length).length);
                sup.innerText += "2";
                value.value = Math.pow(val, Number(sup.innerText)).toFixed((flo_num_length * Number(sup.innerText)));
            }
            else {
                sup.innerText += "2";
                value.value = Math.pow(val, Number(sup.innerText));
            }
        }
    }
    click_3.onclick = () => {
        if (sup.innerText == "" || sup.innerText == 0){
            if (sup.innerText.includes(".")){
                sup.innerText += "3";
                sup.removeAttribute("style");
                value.value = Math.pow(val, Number(sup.innerText));
            }
            else if (String(val).includes(".")){
                let f_dot = String(val).indexOf(".");
                let flo_num_length = Number(String(val).slice(f_dot + 1, String(val).length).length);
                sup.innerText = "3";
                sup.removeAttribute("style");
                value.value = Math.pow(val, 3).toFixed((flo_num_length * 3));
            }
            else {
                sup.innerText = "3";
                sup.removeAttribute("style");
                value.value = Math.pow(val, 3);
            }
        }
        else {
            if (String(val).includes(".")){
                let f_dot = String(val).indexOf(".");
                let flo_num_length = Number(String(val).slice(f_dot + 1, String(val).length).length);
                sup.innerText += "3";
                value.value = Math.pow(val, Number(sup.innerText)).toFixed((flo_num_length * Number(sup.innerText)));
            }
            else {
                sup.innerText += "3";
                value.value = Math.pow(val, Number(sup.innerText));
            }
        }
    }
    click_4.onclick = () => {
        if (sup.innerText == "" || sup.innerText == 0){
            if (sup.innerText.includes(".")){
                sup.innerText += "4";
                sup.removeAttribute("style");
                value.value = Math.pow(val, Number(sup.innerText));
            }
            else if (String(val).includes(".")){
                let f_dot = String(val).indexOf(".");
                let flo_num_length = Number(String(val).slice(f_dot + 1, String(val).length).length);
                sup.innerText = "4";
                sup.removeAttribute("style");
                value.value = Math.pow(val, 4).toFixed((flo_num_length * 4));
            }
            else {
                sup.innerText = "4";
                sup.removeAttribute("style");
                value.value = Math.pow(val, 4);
            }
        }
        else {
            if (String(val).includes(".")){
                let f_dot = String(val).indexOf(".");
                let flo_num_length = Number(String(val).slice(f_dot + 1, String(val).length).length);
                sup.innerText += "4";
                value.value = Math.pow(val, Number(sup.innerText)).toFixed((flo_num_length * Number(sup.innerText)));
            }
            else {
                sup.innerText += "4";
                value.value = Math.pow(val, Number(sup.innerText));
            }
        }
    }
    click_5.onclick = () => {
        if (sup.innerText == "" || sup.innerText == 0){
            if (sup.innerText.includes(".")){
                sup.innerText += "5";
                sup.removeAttribute("style");
                value.value = Math.pow(val, Number(sup.innerText));
            }
            else if (String(val).includes(".")){
                let f_dot = String(val).indexOf(".");
                let flo_num_length = Number(String(val).slice(f_dot + 1, String(val).length).length);
                sup.innerText = "5";
                sup.removeAttribute("style");
                value.value = Math.pow(val, 5).toFixed((flo_num_length * 5));
            }
            else {
                sup.innerText = "5";
                sup.removeAttribute("style");
                value.value = Math.pow(val, 5);
            }
        }
        else {
            if (String(val).includes(".")){
                let f_dot = String(val).indexOf(".");
                let flo_num_length = Number(String(val).slice(f_dot + 1, String(val).length).length);
                sup.innerText += "5";
                value.value = Math.pow(val, Number(sup.innerText)).toFixed((flo_num_length * Number(sup.innerText)));
            }
            else {
                sup.innerText += "5";
                value.value = Math.pow(val, Number(sup.innerText));
            }
        }
    }
    click_6.onclick = () => {
        if (sup.innerText == "" || sup.innerText == 0){
            if (sup.innerText.includes(".")){
                sup.innerText += "6";
                sup.removeAttribute("style");
                value.value = Math.pow(val, Number(sup.innerText));
            }
            else if (String(val).includes(".")){
                let f_dot = String(val).indexOf(".");
                let flo_num_length = Number(String(val).slice(f_dot + 1, String(val).length).length);
                sup.innerText = "6";
                sup.removeAttribute("style");
                value.value = Math.pow(val, 6).toFixed((flo_num_length * 6));
            }
            else {
                sup.innerText = "6";
                sup.removeAttribute("style");
                value.value = Math.pow(val, 6);
            }
        }
        else {
            if (String(val).includes(".")){
                let f_dot = String(val).indexOf(".");
                let flo_num_length = Number(String(val).slice(f_dot + 1, String(val).length).length);
                sup.innerText += "6";
                value.value = Math.pow(val, Number(sup.innerText)).toFixed((flo_num_length * Number(sup.innerText)));
            }
            else {
                sup.innerText += "6";
                value.value = Math.pow(val, Number(sup.innerText));
            }
        }
    }
    click_7.onclick = () => {
        if (sup.innerText == "" || sup.innerText == 0){
            if (sup.innerText.includes(".")){
                sup.innerText += "7";
                sup.removeAttribute("style");
                value.value = Math.pow(val, Number(sup.innerText));
            }
            else if (String(val).includes(".")){
                let f_dot = String(val).indexOf(".");
                let flo_num_length = Number(String(val).slice(f_dot + 1, String(val).length).length);
                sup.innerText = "7";
                sup.removeAttribute("style");
                value.value = Math.pow(val, 7).toFixed((flo_num_length * 7));
            }
            else {
                sup.innerText = "7";
                sup.removeAttribute("style");
                value.value = Math.pow(val, 7);
            }
        }
        else {
            if (String(val).includes(".")){
                let f_dot = String(val).indexOf(".");
                let flo_num_length = Number(String(val).slice(f_dot + 1, String(val).length).length);
                sup.innerText += "7";
                value.value = Math.pow(val, Number(sup.innerText)).toFixed((flo_num_length * Number(sup.innerText)));
            }
            else {
                sup.innerText += "7";
                value.value = Math.pow(val, Number(sup.innerText));
            }
        }
    }
    click_8.onclick = () => {
        if (sup.innerText == "" || sup.innerText == 0){
            if (sup.innerText.includes(".")){
                sup.innerText += "8";
                sup.removeAttribute("style");
                value.value = Math.pow(val, Number(sup.innerText));
            }
            else if (String(val).includes(".")){
                let f_dot = String(val).indexOf(".");
                let flo_num_length = Number(String(val).slice(f_dot + 1, String(val).length).length);
                sup.innerText = "8";
                sup.removeAttribute("style");
                value.value = Math.pow(val, 8).toFixed((flo_num_length * 8));
            }
            else {
                sup.innerText = "8";
                sup.removeAttribute("style");
                value.value = Math.pow(val, 8);
            }
        }
        else {
            if (String(val).includes(".")){
                let f_dot = String(val).indexOf(".");
                let flo_num_length = Number(String(val).slice(f_dot + 1, String(val).length).length);
                sup.innerText += "8";
                value.value = Math.pow(val, Number(sup.innerText)).toFixed((flo_num_length * Number(sup.innerText)));
            }
            else {
                sup.innerText += "8";
                value.value = Math.pow(val, Number(sup.innerText));
            }
        }
    }
    click_9.onclick = () => {
        if (sup.innerText == "" || sup.innerText == 0){
            if (sup.innerText.includes(".")){
                sup.innerText += "9";
                sup.removeAttribute("style");
                value.value = Math.pow(val, Number(sup.innerText));
            }
            else if (String(val).includes(".")){
                let f_dot = String(val).indexOf(".");
                let flo_num_length = Number(String(val).slice(f_dot + 1, String(val).length).length);
                sup.innerText = "9";
                sup.removeAttribute("style");
                value.value = Math.pow(val, 9).toFixed((flo_num_length * 9));
            }
            else {
                sup.innerText = "9";
                sup.removeAttribute("style");
                value.value = Math.pow(val, 9);
            }
        }
        else {
            if (String(val).includes(".")){
                let f_dot = String(val).indexOf(".");
                let flo_num_length = Number(String(val).slice(f_dot + 1, String(val).length).length);
                sup.innerText += "9";
                value.value = Math.pow(val, Number(sup.innerText)).toFixed((flo_num_length * Number(sup.innerText)));
            }
            else {
                sup.innerText += "9";
                value.value = Math.pow(val, Number(sup.innerText));
            }
        }
    }
    CE.onclick = () => {
        if (inner.innerText == ""){
            location.reload();
        }
        else {
            value.value = 0;
        }
    };
    C.onclick = () => {
        if (value.value == "0"){
            location.reload();
        }
        else {
            inner.innerText = "";
        }
    };
    back.onclick = () => {
        if (sup.innerText == "" || sup.innerText.length - 1 == 0){
            sup.innerText = "";
            sup.setAttribute("style", "display: inline-block; border: 2px solid white; " +
                "padding: 5px; border-radius: 4px");
            value.value = 0;
        }
        else {
            if (String(val).includes(".")){
                let f_dot = String(val).indexOf(".");
                let flo_num_length = Number(String(val).slice(f_dot + 1, String(val).length).length);
                sup.innerText = sup.innerText.slice(0, (sup.innerText.length - 1));
                value.value = Math.pow(val, Number(sup.innerText)).toFixed((flo_num_length * Number(sup.innerText)));
            }
            else {
                sup.innerText = sup.innerText.slice(0, (sup.innerText.length - 1));
                value.value = Math.pow(val, Number(sup.innerText));
            }
        }
    };
}

function butt_root2(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    if (inner.innerText == ""){
        inner.innerText = "\u221A" + value.value + " = ";
        value.value = Math.sqrt(value.value);
    }
    else {
        inner.innerText = "\u221A( " + inner.innerText.slice(0, inner.innerText.length - 1) + ") = ";
        value.value = Math.sqrt(value.value);
    }
}

function butt_root3(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    if (inner.innerText == ""){
        inner.innerText = "\u221B" + value.value + " = ";
        value.value = Math.cbrt(value.value);
    }
    else {
        inner.innerText = "\u221B( " + inner.innerText.slice(0, inner.innerText.length - 1) + ") = ";
        value.value = Math.cbrt(value.value);
    }
}

function butt_root4(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    if (inner.innerText == ""){
        inner.innerText = "\u221C" + value.value + " = ";
        value.value = Math.sqrt(Math.sqrt(value.value));
    }
    else {
        inner.innerText = "\u221C( " + inner.innerText.slice(0, inner.innerText.length - 1) + ") = ";
        value.value = Math.sqrt(Math.sqrt(value.value));
    }
}

function butt_rooty(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    let sup = document.createElement("sup");
    let span_1 = document.createElement("span");
    let span_2 = document.createElement("span");
    let dot = document.getElementById("btn_dot");
    let CE = document.getElementById("btn_CE");
    let C = document.getElementById("btn_C");
    let back_r = document.getElementById("btn_back");
    let click_0 = document.getElementById("btn_0");
    let click_1 = document.getElementById("btn_1");
    let click_2 = document.getElementById("btn_2");
    let click_3 = document.getElementById("btn_3");
    let click_4 = document.getElementById("btn_4");
    let click_5 = document.getElementById("btn_5");
    let click_6 = document.getElementById("btn_6");
    let click_7 = document.getElementById("btn_7");
    let click_8 = document.getElementById("btn_8");
    let click_9 = document.getElementById("btn_9");
    let val = value.value;
    if (inner.innerHTML == ""){
        inner.appendChild(sup);
        sup.setAttribute("style", "display: inline-block; border: 2px solid white; " +
            "padding: 5px; margin-right: 2px; border-radius: 4px");
        inner.appendChild(span_1);
        span_1.innerText = "\u221A" + value.value;
        inner.appendChild(span_2);
        span_2.setAttribute("id", "span");
        span_2.innerText = " = ";
        value.value = 0;
    }
    else {
        inner.removeChild(document.getElementById("span"));
        let inn = inner.innerHTML;
        inner.innerHTML = "";
        inner.appendChild(sup);
        sup.setAttribute("style", "display: inline-block; border: 2px solid white; " +
            "padding: 5px; margin-right: 2px; border-radius: 4px");
        inner.appendChild(span_1);
        span_1.innerHTML = "\u221A ( " + inn + " )";
        inner.appendChild(span_2);
        span_2.setAttribute("id", "span");
        span_2.innerText = " = ";
        value.value = 0;
    }
    dot.onclick = () =>{
        sup.innerText += ".";
        sup.removeAttribute("style");
    }
    click_0.onclick = () => {
        if (sup.innerText == "" || sup.innerText == 0){
            if (sup.innerText.includes(".")){
                sup.innerText += "0";
                sup.removeAttribute("style");
                value.value = Math.pow(val, (1 / Number(sup.innerHTML)));
            }
            else {
                sup.innerHTML = "0";
                sup.removeAttribute("style");
                value.value = Math.pow(val, (1 / 0));
            }
        }
        else {
            sup.innerHTML += "0";
            value.value = Math.pow(val, (1 / Number(sup.innerHTML)));
        }
    }
    click_1.onclick = () => {
        if (sup.innerText == "" || sup.innerText == 0){
            if (sup.innerText.includes(".")){
                sup.innerText += "1";
                sup.removeAttribute("style");
                value.value = Math.pow(val, (1 / Number(sup.innerHTML)));
            }
            else {
                sup.innerHTML = "1";
                sup.removeAttribute("style");
                value.value = Math.pow(val, 1);
            }
        }
        else {
            sup.innerHTML += "1";
            value.value = Math.pow(val, (1 / Number(sup.innerHTML)));
        }
    }
    click_2.onclick = () => {
        if (sup.innerText == "" || sup.innerText == 0){
            if (sup.innerText.includes(".")){
                sup.innerText += "2";
                sup.removeAttribute("style");
                value.value = Math.pow(val, (1 / Number(sup.innerHTML)));
            }
            else {
                sup.innerHTML = "2";
                sup.removeAttribute("style");
                value.value = Math.sqrt(val);
            }
        }
        else {
            sup.innerHTML += "2";
            value.value = Math.pow(val, (1 / Number(sup.innerHTML)));
        }
    }
    click_3.onclick = () => {
        if (sup.innerText == "" || sup.innerText == 0){
            if (sup.innerText.includes(".")){
                sup.innerText += "3";
                sup.removeAttribute("style");
                value.value = Math.pow(val, (1 / Number(sup.innerHTML)));
            }
            else {
                sup.innerHTML = "3";
                sup.removeAttribute("style");
                value.value = Math.cbrt(val);
            }
        }
        else {
            sup.innerText += "3";
            value.value = Math.pow(val, (1 / Number(sup.innerText)));
        }
    }
    click_4.onclick = () => {
        if (sup.innerText == "" || sup.innerText == 0){
            if (sup.innerText.includes(".")){
                sup.innerText += "4";
                sup.removeAttribute("style");
                value.value = Math.pow(val, (1 / Number(sup.innerHTML)));
            }
            else {
                sup.innerHTML = "4";
                sup.removeAttribute("style");
                value.value = Math.sqrt(Math.sqrt(val));
            }
        }
        else {
            sup.innerText += "4";
            value.value = Math.pow(val, (1 / Number(sup.innerText)));
        }
    }
    click_5.onclick = () => {
        if (sup.innerText == "" || sup.innerText == 0){
            if (sup.innerText.includes(".")){
                sup.innerText += "5";
                sup.removeAttribute("style");
                value.value = Math.pow(val, (1 / Number(sup.innerHTML)));
            }
            else {
                sup.innerHTML = "5";
                sup.removeAttribute("style");
                value.value = Math.pow(val, (1 / 5));
            }
        }
        else {
            sup.innerText += "5";
            value.value = Math.pow(val, (1 / Number(sup.innerText)));
        }
    }
    click_6.onclick = () => {
        if (sup.innerText == "" || sup.innerText == 0){
            if (sup.innerText.includes(".")){
                sup.innerText += "6";
                sup.removeAttribute("style");
                value.value = Math.pow(val, (1 / Number(sup.innerHTML)));
            }
            else {
                sup.innerHTML = "6";
                sup.removeAttribute("style");
                value.value = Math.pow(val, (1 / 6));
            }
        }
        else {
            sup.innerText += "6";
            value.value = Math.pow(val, (1 / Number(sup.innerText)));
        }
    }
    click_7.onclick = () => {
        if (sup.innerText == "" || sup.innerText == 0){
            if (sup.innerText.includes(".")){
                sup.innerText += "7";
                sup.removeAttribute("style");
                value.value = Math.pow(val, (1 / Number(sup.innerHTML)));
            }
            else {
                sup.innerHTML = "7";
                sup.removeAttribute("style");
                value.value = Math.pow(val, (1 / 7));
            }
        }
        else {
            sup.innerText += "7";
            value.value = Math.pow(val, (1 / Number(sup.innerText)));
        }
    }
    click_8.onclick = () => {
        if (sup.innerText == "" || sup.innerText == 0){
            if (sup.innerText.includes(".")){
                sup.innerText += "8";
                sup.removeAttribute("style");
                value.value = Math.pow(val, (1 / Number(sup.innerHTML)));
            }
            else {
                sup.innerHTML = "8";
                sup.removeAttribute("style");
                value.value = Math.pow(val, (1 / 8));
            }
        }
        else {
            sup.innerText += "8";
            value.value = Math.pow(val, (1 / Number(sup.innerText)));
        }
    }
    click_9.onclick = () => {
        if (sup.innerText == "" || sup.innerText == 0){
            if (sup.innerText.includes(".")){
                sup.innerText += "9";
                sup.removeAttribute("style");
                value.value = Math.pow(val, (1 / Number(sup.innerHTML)));
            }
            else {
                sup.innerHTML = "9";
                sup.removeAttribute("style");
                value.value = Math.pow(val, (1 / 9));
            }
        }
        else {
            sup.innerText += "9";
            value.value = Math.pow(val, (1 / Number(sup.innerText)));
        }
    }
    C.onclick = () => {
        if (value.value == "0"){
            location.reload();
        }
        else {
            inner.innerText = "";
        }
    };
    CE.onclick = () => {
        if (inner.innerText == ""){
            location.reload();
        }
        else {
            value.value = 0;
        }
    };
    back_r.onclick = () => {
        if (sup.innerText == "" || sup.innerText.length - 1 == 0){
            sup.innerText = "";
            sup.setAttribute("style", "display: inline-block; border: 2px solid white; " +
                "padding: 5px; margin-right: 2px; border-radius: 4px");
            value.value = 0;
        }
        else {
            sup.innerText = sup.innerText.slice(0, (sup.innerText.length - 1));
            value.value = Math.pow(val, (1 / Number(sup.innerText)));
        }
    };
}

function butt_2x(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    let sup = document.createElement("sup");
    inner.innerHTML = "2";
    inner.appendChild(sup);
    sup.innerText = String(value.value);
    inner.innerHTML += " = "
    value.value = Math.pow(2, value.value);
}

function butt_10x(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    let sup = document.createElement("sup");
    inner.innerHTML = "10";
    inner.appendChild(sup);
    sup.innerText = String(value.value);
    inner.innerHTML += " = "
    value.value = Math.pow(10, value.value);
}

function butt_esupx(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    let sup = document.createElement("sup");
    inner.innerHTML = String.fromCodePoint(0x1D486) + " ";
    inner.appendChild(sup);
    sup.innerText = String(value.value);
    inner.innerHTML += "  = "
    value.value = Math.exp(value.value);
}

function butt_1_divi_x(Field) {
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    inner.innerText = "( " + value.value + " ) \u207B\u00B9 = ";
    value.value = Math.pow(value.value, -1);
}

function butt_Log10(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    if (inner.innerText == ""){
        inner.innerText = "Log\u2081\u2080" + value.value + " = ";
        value.value = Math.log10(value.value);
    }
    else {
        inner.innerText = "Log\u2081\u2080( " + inner.innerText.slice(0, inner.innerText.length - 1) + ") = ";
        value.value = Math.log10(value.value);
    }
}

function butt_Log2(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    if (inner.innerText == ""){
        inner.innerText = "Log\u2082" + value.value + " = ";
        value.value = Math.log2(value.value);
    }
    else {
        inner.innerText = "Log\u2082( " + inner.innerText.slice(0, inner.innerText.length - 1) + ") = ";
        value.value = Math.log2(value.value);
    }
}

function butt_Ln(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    if (inner.innerText == ""){
        inner.innerText = "Ln " + value.value + " = ";
        value.value = Math.log(value.value);
    }
    else {
        inner.innerText = "Ln( " + inner.innerText.slice(0, inner.innerText.length - 1) + ") = ";
        value.value = Math.log(value.value);
    }
}

function butt_Logxy(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    let sup = document.createElement("sup");
    let sub = document.createElement("sub");
    let span = document.createElement("span");
    let dot = document.getElementById("btn_dot");
    let CE = document.getElementById("btn_CE");
    let C = document.getElementById("btn_C");
    let back_l = document.getElementById("btn_back");
    let click_0 = document.getElementById("btn_0");
    let click_1 = document.getElementById("btn_1");
    let click_2 = document.getElementById("btn_2");
    let click_3 = document.getElementById("btn_3");
    let click_4 = document.getElementById("btn_4");
    let click_5 = document.getElementById("btn_5");
    let click_6 = document.getElementById("btn_6");
    let click_7 = document.getElementById("btn_7");
    let click_8 = document.getElementById("btn_8");
    let click_9 = document.getElementById("btn_9");
    let sup_val = value.value;
    if (inner.innerHTML == ""){
        inner.innerHTML = "Log";
        inner.appendChild(sub);
        sub.setAttribute("style", "display: inline-block; border: 2px solid white; " +
            "padding: 5px; margin-left: 2px; border-radius: 4px");
        inner.appendChild(sup);
        sup.innerText = value.value;
        inner.appendChild(span);
        span.setAttribute("id", "span");
        span.innerText = " = ";
        value.value = 0;
    }
    else {
        inner.removeChild(document.getElementById("span"));
        let inn = inner.innerHTML;
        inner.innerHTML = "";
        inner.innerHTML = "Log";
        inner.appendChild(sub);
        sub.setAttribute("style", "display: inline-block; border: 2px solid white; " +
            "padding: 5px; margin-left: 2px; border-radius: 4px");
        inner.appendChild(sup);
        sup.innerHTML = "( " + inn + " )";
        inner.appendChild(span);
        span.setAttribute("id", "span");
        span.innerText = " = ";
        value.value = 0;
    }
    dot.onclick = () =>{
        sub.innerText += ".";
        sub.removeAttribute("style");
    }
    click_0.onclick = () => {
        if (sub.innerText == "" || sub.innerText == 0){
            if (sub.innerText.includes(".")){
                sub.innerText += "0";
                sub.removeAttribute("style");
                value.value = (Math.log(Number(sup_val)) / Math.log(Number(sub.innerText)));
            }
            else {
                sub.innerHTML = "0";
                sub.removeAttribute("style");
                value.value = (Math.log(sup_val) / Math.log(0));
            }
        }
        else {
            sub.innerHTML += "0";
            value.value = (Math.log(Number(sup_val)) / Math.log(Number(sub.innerText)));
        }
    }
    click_1.onclick = () => {
        if (sub.innerText == "" || sub.innerText == 0){
            if (sub.innerText.includes(".")){
                sub.innerText += "1";
                sub.removeAttribute("style");
                value.value = (Math.log(Number(sup_val)) / Math.log(Number(sub.innerText)));
            }
            else {
                sub.innerHTML = "1";
                sub.removeAttribute("style");
                value.value = (Math.log(sup_val) / Math.log(1));
            }
        }
        else {
            sub.innerHTML += "1";
            value.value = (Math.log(Number(sup_val)) / Math.log(Number(sub.innerText)));
        }
    }
    click_2.onclick = () => {
        if (sub.innerText == "" || sub.innerText == 0){
            if (sub.innerText.includes(".")){
                sub.innerText += "2";
                sub.removeAttribute("style");
                value.value = (Math.log(Number(sup_val)) / Math.log(Number(sub.innerText)));
            }
            else {
                sub.innerHTML = "2";
                sub.removeAttribute("style");
                value.value = (Math.log(sup_val) / Math.log(2));
            }
        }
        else {
            sub.innerHTML += "2";
            value.value = (Math.log(Number(sup_val)) / Math.log(Number(sub.innerText)));
        }
    }
    click_3.onclick = () => {
        if (sub.innerText == "" || sub.innerText == 0){
            if (sub.innerText.includes(".")){
                sub.innerText += "3";
                sub.removeAttribute("style");
                value.value = (Math.log(Number(sup_val)) / Math.log(Number(sub.innerText)));
            }
            else {
                sub.innerHTML = "3";
                sub.removeAttribute("style");
                value.value = (Math.log(sup_val) / Math.log(3));
            }
        }
        else {
            sub.innerHTML += "3";
            value.value = (Math.log(Number(sup_val)) / Math.log(Number(sub.innerText)));
        }
    }
    click_4.onclick = () => {
        if (sub.innerText == "" || sub.innerText == 0){
            if (sub.innerText.includes(".")){
                sub.innerText += "4";
                sub.removeAttribute("style");
                value.value = (Math.log(Number(sup_val)) / Math.log(Number(sub.innerText)));
            }
            else {
                sub.innerHTML = "4";
                sub.removeAttribute("style");
                value.value = (Math.log(sup_val) / Math.log(4));
            }
        }
        else {
            sub.innerHTML += "4";
            value.value = (Math.log(Number(sup_val)) / Math.log(Number(sub.innerText)));
        }
    }
    click_5.onclick = () => {
        if (sub.innerText == "" || sub.innerText == 0){
            if (sub.innerText.includes(".")){
                sub.innerText += "5";
                sub.removeAttribute("style");
                value.value = (Math.log(Number(sup_val)) / Math.log(Number(sub.innerText)));
            }
            else {
                sub.innerHTML = "5";
                sub.removeAttribute("style");
                value.value = (Math.log(sup_val) / Math.log(5));
            }
        }
        else {
            sub.innerHTML += "5";
            value.value = (Math.log(Number(sup_val)) / Math.log(Number(sub.innerText)));
        }
    }
    click_6.onclick = () => {
        if (sub.innerText == "" || sub.innerText == 0){
            if (sub.innerText.includes(".")){
                sub.innerText += "6";
                sub.removeAttribute("style");
                value.value = (Math.log(Number(sup_val)) / Math.log(Number(sub.innerText)));
            }
            else {
                sub.innerHTML = "6";
                sub.removeAttribute("style");
                value.value = (Math.log(sup_val) / Math.log(6));
            }
        }
        else {
            sub.innerHTML += "6";
            value.value = (Math.log(Number(sup_val)) / Math.log(Number(sub.innerText)));
        }
    }
    click_7.onclick = () => {
        if (sub.innerText == "" || sub.innerText == 0){
            if (sub.innerText.includes(".")){
                sub.innerText += "7";
                sub.removeAttribute("style");
                value.value = (Math.log(Number(sup_val)) / Math.log(Number(sub.innerText)));
            }
            else {
                sub.innerHTML = "7";
                sub.removeAttribute("style");
                value.value = (Math.log(sup_val) / Math.log(7));
            }
        }
        else {
            sub.innerHTML += "7";
            value.value = (Math.log(Number(sup_val)) / Math.log(Number(sub.innerText)));
        }
    }
    click_8.onclick = () => {
        if (sub.innerText == "" || sub.innerText == 0){
            if (sub.innerText.includes(".")){
                sub.innerText += "8";
                sub.removeAttribute("style");
                value.value = (Math.log(Number(sup_val)) / Math.log(Number(sub.innerText)));
            }
            else {
                sub.innerHTML = "8";
                sub.removeAttribute("style");
                value.value = (Math.log(sup_val) / Math.log(8));
            }
        }
        else {
            sub.innerHTML += "8";
            value.value = (Math.log(Number(sup_val)) / Math.log(Number(sub.innerText)));
        }
    }
    click_9.onclick = () => {
        if (sub.innerText == "" || sub.innerText == 0){
            if (sub.innerText.includes(".")){
                sub.innerText += "9";
                sub.removeAttribute("style");
                value.value = (Math.log(Number(sup_val)) / Math.log(Number(sub.innerText)));
            }
            else {
                sub.innerHTML = "9";
                sub.removeAttribute("style");
                value.value = (Math.log(sup_val) / Math.log(9));
            }
        }
        else {
            sub.innerHTML += "9";
            value.value = (Math.log(Number(sup_val)) / Math.log(Number(sub.innerText)));
        }
    }
    C.onclick = () => {
        if (value.value == "0"){
            location.reload();
        }
        else {
            inner.innerText = "";
        }
    };
    back_l.onclick = () => {
        if (sub.innerText == "" || sub.innerText.length - 1 == 0){
            sub.innerText = "";
            sub.setAttribute("style", "display: inline-block; border: 2px solid white; " +
                "padding: 5px; margin-left: 2px; border-radius: 4px");
            value.value = 0;
        }
        else {
            sub.innerText = sub.innerText.slice(0, (sub.innerText.length - 1));
            value.value = (Math.log(Number(sup_val)) / Math.log(Number(sub.innerText)));
        }
    };
    CE.onclick = () => {
        if (inner.innerText == ""){
            location.reload();
        }
        else {
            value.value = 0;
        }
    };
}


function butt_floor(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    inner.innerText = "\u230A " + value.value + " \u230B = ";
    value.value = Math.floor(value.value);
}

function butt_ceil(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    inner.innerText = "\u2308 " + value.value + " \u2309 = ";
    value.value = Math.ceil(value.value);
}

function butt_abs(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    inner.innerText = "\u23AA " + value.value + " \u23AA = ";
    value.value = Math.abs(value.value);
}

function butt_x_factor(Field){
    function factor(num){
        if (num < 2){
            return 1
        }
        else {
            return num * factor(num - 1);
        }
    }
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    inner.innerText = value.value + " ! = ";
    value.value = factor(value.value);
}

function butt_i(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    inner.innerText = value.value + " " + String.fromCodePoint(0x1D456);
    value.value = 0;
}

function butt_Re_Im(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    let Ext_num = inner.innerText.match(/-?([0-9]*[.])?[0-9]+|- ([0-9]*[.])?[0-9]+/g);
    Ext_num = String(Ext_num).replace(" ", "").match(/-?([0-9]*[.])?[0-9]+/g);
    if (Ext_num.length == 2) {
        if (value.value == 0) {
            value.value = Complex(Ext_num[0], Ext_num[1]).re;
        }
        else if (value.value == Complex(Ext_num[0], Ext_num[1]).re) {
            value.value = Complex(Ext_num[0], Ext_num[1]).im + " " + String.fromCodePoint(0x1D456);
        }
        else {
            value.value = Complex(Ext_num[0], Ext_num[1]).re;
        }
    }
    else {
        if (value.value == 0){
            value.value = Complex(0, Ext_num[0]).im + " " + String.fromCodePoint(0x1D456);
        }
        else {
            value.value = Complex(0, Ext_num[0]).re;
        }
    }
}

function butt_abs_arg(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    let mode_1 = document.getElementById("inp_1");
    let mode_3 = document.getElementById("inp_3");
    let Ext_num = inner.innerText.match(/-?([0-9]*[.])?[0-9]+|- ([0-9]*[.])?[0-9]+/g);
    Ext_num = String(Ext_num).replace(" ", "").match(/-?([0-9]*[.])?[0-9]+/g);
    if (Ext_num.length == 2) {
        if (value.value == 0){
            value.value = Complex(Ext_num[0], Ext_num[1]).abs() + " \u279B r";
        }
        else if (value.value == Complex(Ext_num[0], Ext_num[1]).abs() + " \u279B r"){
            if (mode_1.hasAttribute("checked")){
                value.value = ((Complex(Ext_num[0], Ext_num[1]).arg() * 180) / Math.PI) + " \u279B " + String.fromCodePoint(0x1D703);
            }
            else if (mode_3.hasAttribute("checked")){
                value.value = ((Complex(Ext_num[0], Ext_num[1]).arg() * 200) / Math.PI) + " \u279B " + String.fromCodePoint(0x1D703);
            }
            else {
                value.value = Complex(Ext_num[0], Ext_num[1]).arg() + " \u279B " + String.fromCodePoint(0x1D703);
            }
        }
        else {
            value.value = Complex(Ext_num[0], Ext_num[1]).abs() + " \u279B r";
        }
    }
    else {
        if (value.value == 0){
            value.value = Complex(0, Ext_num[0]).abs() + " \u279B r";
        }
        else if (value.value == Complex(0, Ext_num[0]).abs() + " \u279B r"){
            if (mode_1.hasAttribute("checked")){
                value.value = ((Complex(0, Ext_num[0]).arg() * 180) / Math.PI) + " \u279B " + String.fromCodePoint(0x1D703);
            }
            else if (mode_3.hasAttribute("checked")){
                value.value = ((Complex(0, Ext_num[0]).arg() * 200) / Math.PI) + " \u279B " + String.fromCodePoint(0x1D703);
            }
            else {
                value.value = Complex(0, Ext_num[0]).arg() + " \u279B " + String.fromCodePoint(0x1D703);
            }
        }
        else {
            value.value = Complex(0, Ext_num[0]).abs() + " \u279B r";
        }
    }
}

function butt_conj(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    let Ext_num = inner.innerText.match(/-?([0-9]*[.])?[0-9]+|- ([0-9]*[.])?[0-9]+/g);
    Ext_num = String(Ext_num).replace(" ", "").match(/-?([0-9]*[.])?[0-9]+/g);
    if (Ext_num.length == 2) {
        if (value.value == 0){
            value.value = Complex(Ext_num[0], Ext_num[1]).conjugate().re;
        }
        else if (value.value == Complex(Ext_num[0], Ext_num[1]).conjugate().re) {
            value.value = Complex(Ext_num[0], Ext_num[1]).conjugate().im + " " + String.fromCodePoint(0x1D456);
        }
        else {
            value.value = Complex(Ext_num[0], Ext_num[1]).conjugate().re;
        }
    }
    else {
        if (value.value == 0){
            value.value = Complex(0, Ext_num[0]).conjugate().im + " " + String.fromCodePoint(0x1D456);
        }
        else {
            value.value = Complex(0, Ext_num[0]).conjugate().re;
        }
    }
}

function butt_PI(Field){
    let value = document.getElementById(Field);
    value.innerText = "\u03C0" + "  =";
    document.getElementById("Field_2").value = Math.PI;
}

function butt_E(Field){
    let value = document.getElementById(Field);
    value.innerText = String.fromCodePoint(0x1D486) + "  =";
    document.getElementById("Field_2").value = Math.E;
}


function butt_C(Field){
    let value = document.getElementById(Field);
    value.innerHTML = "";
}

function butt_CE(Field){
    let val = document.getElementById(Field);
    val.value = 0;
}

function butt_BIN(Field){
    let value = document.getElementById(Field);
    let val = String(value.value);
    let num = val.slice(2, val.length);
    if (value.value == "" || value.value == 0){
        document.getElementById("Field_1").innerText = "BIN (0)  = ";
        value.value = "0";
    }
    else if (val.slice(0, 2) == "0d"){
        document.getElementById("Field_1").innerText = "BIN (" + value.value + ")  = ";
        value.value = parseInt(num).toString(2);
    }
    else if (val.slice(0, 2) == "0o"){
        document.getElementById("Field_1").innerText = "BIN (" + value.value + ")  = ";
        value.value = parseInt(num, 8).toString(2);
    }
    else if (val.slice(0, 2) == "0x"){
        document.getElementById("Field_1").innerText = "BIN (" + value.value + ")  = ";
        value.value = parseInt(num, 16).toString(2);
    }
    else {
        document.getElementById("Field_1").innerText = "BIN (" + value.value + ")  = ";
        value.value = num;
    }
}

function butt_OCT(Field){
    let value = document.getElementById(Field);
    let val = String(value.value);
    let num = val.slice(2, val.length);
    if (value.value == "" || value.value == 0){
        document.getElementById("Field_1").innerText = "OCT (0)  = ";
        value.value = "0";
    }
    else if (val.slice(0, 2) == "0b"){
        document.getElementById("Field_1").innerText = "OCT (" + value.value + ")  = ";
        value.value = parseInt(num, 2).toString(8);
    }
    else if (val.slice(0, 2) == "0d"){
        document.getElementById("Field_1").innerText = "OCT (" + value.value + ")  = ";
        value.value = parseInt(num).toString(8);
    }
    else if (val.slice(0, 2) == "0x"){
        document.getElementById("Field_1").innerText = "OCT (" + value.value + ")  = ";
        value.value = parseInt(num, 16).toString(8);
    }
    else {
        document.getElementById("Field_1").innerText = "OCT (" + value.value + ")  = ";
        value.value = num;
    }
}

function butt_HEX(Field){
    let value = document.getElementById(Field);
    let val = String(value.value);
    let num = val.slice(2, val.length);
    if (value.value == "" || value.value == 0){
        document.getElementById("Field_1").innerText = "HEX (0)  = ";
        value.value = "0";
    }
    else if (val.slice(0, 2) == "0b"){
        document.getElementById("Field_1").innerText = "HEX (" + value.value + ")  = ";
        value.value = parseInt(num, 2).toString(16);
    }
    else if (val.slice(0, 2) == "0o"){
        document.getElementById("Field_1").innerText = "HEX (" + value.value + ")  = ";
        value.value = parseInt(num, 8).toString(16);
    }
    else if (val.slice(0, 2) == "0d"){
        document.getElementById("Field_1").innerText = "HEX (" + value.value + ")  = ";
        value.value = parseInt(num).toString(16);
    }
    else {
        document.getElementById("Field_1").innerText = "HEX (" + value.value + ")  = ";
        value.value = num;
    }
}

function butt_DEC(Field){
    let value = document.getElementById(Field);
    let val = String(value.value);
    let num = val.slice(2, val.length);
    if (value.value == "" || value.value == 0){
        document.getElementById("Field_1").innerText = "DEC (0)  = ";
        value.value = "0";
    }
    else if (val.slice(0, 2) == "0b"){
        document.getElementById("Field_1").innerText = "DEC (" + value.value + ")  = ";
        value.value = parseInt(num, 2);
    }
    else if (val.slice(0, 2) == "0o"){
            document.getElementById("Field_1").innerText = "DEC (" + value.value + ")  = ";
            value.value = parseInt(num, 8);
    }
    else if (val.slice(0, 2) == "0x"){
        document.getElementById("Field_1").innerText = "DEC (" + value.value + ")  = ";
        value.value = parseInt(num, 16);
    }
    else {
        document.getElementById("Field_1").innerText = "DEC (" + value.value + ")  = ";
        value.value = num;
    }
}

function butt_plus_minus(Field){
    let value = document.getElementById(Field);
    if (Math.sign(value.value) == 1){
        value.value *= (-1);
    }
    else if(Math.sign(value.value) == -1){
        value.value *= (-1);
    }
    else if (String(value.value).includes("(")){
        let val = String(value.value).replace("(", "");
        value.value = " ( " + (val * (-1));
    }
    else {
        value.value *= value.value;
    }
}

function butt_dot(Field){
    let value = document.getElementById(Field);
    if (String(value.value).includes(".") == false){
        value.value += ".";
    }
    else {
        value.value += "";
    }
}

function butt_right_parenthesis(Field){
    let value = document.getElementById(Field);
    if (value.value == 0){
        value.value = " ( ";
    }
    else {
        value.value += " ( ";
    }
}

function butt_left_parenthesis(Field){
    let value = document.getElementById(Field);
    let check_rp = String(value.value).includes("(");
    if (check_rp == true){
        value.value += " ) ";
    }
    else {
        value.value += "";
    }
}

function butt_Ans(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    let plus = document.getElementById("btn_plus");
    let minus = document.getElementById("btn_minus");
    let multi = document.getElementById("btn_multi");
    let divis = document.getElementById("btn_division");
    let equal = document.getElementById("btn_equal");
    let C = document.getElementById("btn_C");
    let CE = document.getElementById("btn_CE");
    let operator = inner.innerText.slice(-1);
    let valu = value.value;
    if (operator == "="){
        inner.innerText = "Ans";
        value.value = 0;
    }
    plus.onclick = () => {
        inner.innerText = "Ans +";
        value.value = 0;
    };
    minus.onclick = () => {
        inner.innerText = "Ans -";
        value.value = 0;
    };
    multi.onclick = () => {
        inner.innerText = "Ans \u00D7";
        value.value = 0;
    };
    divis.onclick = () => {
        inner.innerText = "Ans \u00F7";
        value.value = 0;
    };
    equal.onclick = () => {
        let val = String(value.value).match(/-?([0-9]*[.])?[0-9]+/g);
        let operator = inner.innerText.slice(-1);
        let num_1 = inner.innerText.match(/\.\d+/g);
        let num_2 = value.value.match(/\.\d+/g);
        var l_1 = String(num_1).replace(".", "").length;
        var l_2 = String(num_2).replace(".", "").length;
        if (num_1 == null) {
            l_1 = 0;
        }
        if (num_2 == null) {
            l_2 = 0;
        }
        if (operator == "+") {
            if (String(value.value).includes("(") == true || Math.sign(Number(val)) == -1){
                inner.innerText = "Ans " + operator + " ( " + val + " ) = ";
                value.value = (Number(valu) + Number(val));
            }
            else {
                inner.innerText = "Ans " + operator + " " + val + " = ";
                value.value = (Number(valu) + Number(val));
            }
        }
        else if (operator == "-") {
            if (String(value.value).includes("(") == true || Math.sign(Number(val)) == -1){
                inner.innerText = "Ans " + operator + " ( " + val + " ) = ";
                value.value = (Number(valu) - Number(val));
            }
            else {
                inner.innerText = "Ans " + operator + " " + val + " = ";
                value.value = (Number(valu) - Number(val));
            }
        }
        else if (operator == "\u00D7") {
            if (String(value.value).includes("(") == true || Math.sign(Number(val)) == -1){
                inner.innerText = "Ans " + operator + " ( " + val + " ) = ";
                value.value = (Number(valu) * Number(val)).toFixed((l_1 + l_2));
            }
            else {
                inner.innerText = "Ans " + operator + " " + val + " = ";
                value.value = (Number(valu) * Number(val)).toFixed((l_1 + l_2));
            }
        }
        else if (operator == "\u00F7") {
            if (String(value.value).includes("(") == true || Math.sign(Number(val)) == -1){
                inner.innerText = "Ans " + operator + " ( " + val + " ) = ";
                value.value = (Number(valu) / Number(val));
            }
            else {
                inner.innerText = "Ans " + operator + " " + val + " = ";
                value.value = (Number(valu) / Number(val));
            }
        }
    };
    C.onclick = () => {
        if (value.value == "0"){
            location.reload();
        }
        else {
            inner.innerText = "";
        }
    };
    CE.onclick = () => {
        if (inner.innerText == ""){
            location.reload();
        }
        else {
            value.value = 0;
        }
    };
}

function butt_percent(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    inner.innerText = value.value + "%";
    if (value.value.includes(".") == false){
        value.value = (value.value / 100).toFixed(2);
    }
    else {
        let Ext_num = value.value.replace(/[^0-9]/g, "");
        value.value = (value.value / 100).toFixed(Ext_num.length + 1);
    }
}

function butt_0(Field){
    let value = document.getElementById(Field);
    if (String(value.value).includes(".")){
        value.value += 0;
    }
    else if (value.value == 0){
        value.value = 0;
    }
    else{
        value.value += 0;
    }
}

function butt_1(Field){
    let value = document.getElementById(Field);
    if (String(value.value).includes(".")){
        value.value += 1;
    }
    else if (value.value == 0){
        value.value = 1;
    }
    else{
        value.value += 1;
    }
}

function butt_2(Field){
    let value = document.getElementById(Field);
    if (String(value.value).includes(".")){
        value.value += 2;
    }
    else if (value.value == 0){
        value.value = 2;
    }
    else{
        value.value += 2;
    }
}

function butt_3(Field){
    let value = document.getElementById(Field);
    if (String(value.value).includes(".")){
        value.value += 3;
    }
    else if (value.value == 0){
        value.value = 3;
    }
    else{
        value.value += 3;
    }
}

function butt_4(Field){
    let value = document.getElementById(Field);
    if (String(value.value).includes(".")){
        value.value += 4;
    }
    else if (value.value == 0){
        value.value = 4;
    }
    else{
        value.value += 4;
    }
}

function butt_5(Field){
    let value = document.getElementById(Field);
    if (String(value.value).includes(".")){
        value.value += 5;
    }
    else if (value.value == 0){
        value.value = 5;
    }
    else{
        value.value += 5;
    }
}

function butt_6(Field){
    let value = document.getElementById(Field);
    if (String(value.value).includes(".")){
        value.value += 6;
    }
    else if (value.value == 0){
        value.value = 6;
    }
    else{
        value.value += 6;
    }
}

function butt_7(Field){
    let value = document.getElementById(Field);
    if (String(value.value).includes(".")){
        value.value += 7;
    }
    else if (value.value == 0){
        value.value = 7;
    }
    else{
        value.value += 7;
    }
}

function butt_8(Field){
    let value = document.getElementById(Field);
    if (String(value.value).includes(".")){
        value.value += 8;
    }
    else if (value.value == 0){
        value.value = 8;
    }
    else{
        value.value += 8;
    }
}

function butt_9(Field){
    let value = document.getElementById(Field);
    if (String(value.value).includes(".")){
        value.value += 9;
    }
    else if (value.value == 0){
        value.value = 9;
    }
    else{
        value.value += 9;
    }
}

function butt_plus(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    let equal = document.getElementById("btn_equal");
    let C = document.getElementById("btn_C");
    let CE = document.getElementById("btn_CE");
    let operator = inner.innerText.slice(-1);
    let click = document.getElementById("btn_i");
    let valu = value.value;
    if (inner.innerText == "" && value.value == 0){
        inner.innerText = 0 + " +";
        value.value = 0;
    }
    else if (operator != "+" && operator != "=" && inner.innerText != ""){
        inner.innerText = inner.innerText.replace(operator, "+");
    }
    else if (operator == "="){
        inner.innerText = "Ans +";
        value.value = 0;
        equal.onclick = () => {
            let val = String(value.value).match(/-?([0-9]*[.])?[0-9]+/g);
            let operator = inner.innerText.slice(-1);
            if (operator == "+"){
                if (String(value.value).includes("(") == true || Math.sign(Number(val)) == -1){
                    inner.innerText = "Ans " + operator + " ( " + val + " ) = ";
                    value.value = (Number(valu) + Number(val));
                }
                else {
                    inner.innerText = "Ans " + operator + " " + val + " = ";
                    value.value = (Number(valu) + Number(val));
                }
            }
        };
        C.onclick = () => {
            if (value.value == "0"){
                location.reload();
            }
            else {
                inner.innerText = "";
            }
        };
        CE.onclick = () => {
            if (inner.innerText == ""){
                location.reload();
            }
            else {
                value.value = 0;
            }
        };
    }
    else{
        inner.innerText = value.value + " +";
        value.value = 0;
    }
    click.onclick = () => {
        inner.innerText += " " + value.value + " " + String.fromCodePoint(0x1D456);
        value.value = 0;
    };
}

function butt_minus(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    let equal = document.getElementById("btn_equal");
    let C = document.getElementById("btn_C");
    let CE = document.getElementById("btn_CE");
    let operator = inner.innerText.slice(-1);
    let click = document.getElementById("btn_i");
    let valu = value.value;
    if (inner.innerText == "" && value.value == 0){
        inner.innerText = 0 + " -";
        value.value = 0;
    }
    else if (operator != "-" && operator != "=" && inner.innerText != ""){
        inner.innerText = inner.innerText.replace(operator, "-");
    }
    else if (operator == "="){
        inner.innerText = "Ans -";
        value.value = 0;
        equal.onclick = () => {
            let val = String(value.value).match(/-?([0-9]*[.])?[0-9]+/g);
            let operator = inner.innerText.slice(-1);
            if (operator == "-"){
                if (String(value.value).includes("(") == true || Math.sign(Number(val)) == -1){
                    inner.innerText = "Ans " + operator + " ( " + val + " ) = ";
                    value.value = (Number(valu) - Number(val));
                }
                else {
                    inner.innerText = "Ans " + operator + " " + val + " = ";
                    value.value = (Number(valu) - Number(val));
                }
            }
        };
        C.onclick = () => {
            if (value.value == "0"){
                location.reload();
            }
            else {
                inner.innerText = "";
            }
        };
        CE.onclick = () => {
            if (inner.innerText == ""){
                location.reload();
            }
            else {
                value.value = 0;
            }
        };
    }
    else{
        inner.innerText = value.value + " -";
        value.value = 0;
    }
    click.onclick = () => {
        inner.innerText += " " + value.value + " " + String.fromCodePoint(0x1D456);
        value.value = 0;
    };
}

function butt_multiplication(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    let equal = document.getElementById("btn_equal");
    let C = document.getElementById("btn_C");
    let CE = document.getElementById("btn_CE");
    let operator = inner.innerText.slice(-1);
    let valu = value.value;
    if (inner.innerText == "" && value.value == 0){
        inner.innerText = 0 + " \u00D7";
        value.value = 0;
    }
    else if (operator != "\u00D7" && operator != "=" && inner.innerText != ""){
        inner.innerText = inner.innerText.replace(operator, "\u00D7");
    }
    else if (operator == "="){
        inner.innerText = "Ans \u00D7";
        value.value = 0;
        equal.onclick = () => {
            let num_1 = inner.innerText.match(/\.\d+/g);
            let num_2 = value.value.match(/\.\d+/g);
            var l_1 = String(num_1).replace(".", "").length;
            var l_2 = String(num_2).replace(".", "").length;
            let val = String(value.value).match(/-?([0-9]*[.])?[0-9]+/g);
            let operator = inner.innerText.slice(-1);
            if (num_1 == null) {
                l_1 = 0;
            }
            if (num_2 == null) {
                l_2 = 0;
            }
            if (String(value.value).includes("(") == true || Math.sign(Number(val)) == -1){
                inner.innerText = "Ans " + operator + " ( " + val + " ) = ";
                value.value = (Number(valu) * Number(val)).toFixed((l_1 + l_2));
            }
            else {
                inner.innerText = "Ans " + operator + " " + val + " = ";
                value.value = (Number(valu) * Number(val)).toFixed((l_1 + l_2));
            }
        };
        C.onclick = () => {
            if (value.value == "0"){
                location.reload();
            }
            else {
                inner.innerText = "";
            }
        };
        CE.onclick = () => {
            if (inner.innerText == ""){
                location.reload();
            }
            else {
                value.value = 0;
            }
        };
    }
    else{
        inner.innerText = value.value + " \u00D7";
        value.value = 0;
    }
}

function butt_division(Field){
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    let equal = document.getElementById("btn_equal");
    let C = document.getElementById("btn_C");
    let CE = document.getElementById("btn_CE");
    let operator = inner.innerText.slice(-1);
    let valu = value.value;
    if (inner.innerText == "" && value.value == 0){
        inner.innerText = 0 + " \u00F7";
        value.value = 0;
    }
    else if (operator != "\u00F7" && operator != "=" && inner.innerText != ""){
        inner.innerText = inner.innerText.replace(operator, "\u00F7");
    }
    else if (operator == "="){
        inner.innerText = "Ans \u00F7";
        value.value = 0;
        equal.onclick = () => {
            let val = String(value.value).match(/-?([0-9]*[.])?[0-9]+/g);
            let operator = inner.innerText.slice(-1);
            if (String(value.value).includes("(") == true || Math.sign(Number(val)) == -1){
                inner.innerText = "Ans " + operator + " ( " + val + " ) = ";
                value.value = (Number(valu) / Number(val));
            }
            else {
                inner.innerText = "Ans " + operator + " " + val + " = ";
                value.value = (Number(valu) / Number(val));
            }
        };
        C.onclick = () => {
            if (value.value == "0"){
                location.reload();
            }
            else {
                inner.innerText = "";
            }
        };
        CE.onclick = () => {
            if (inner.innerText == ""){
                location.reload();
            }
            else {
                value.value = 0;
            }
        };
    }
    else{
        inner.innerText = value.value + " \u00F7";
        value.value = 0;
    }
}

function butt_equal(Field) {
    let value = document.getElementById(Field);
    let inner = document.getElementById("Field_1");
    let Ext_num = inner.innerText.match(/-?([0-9]*[.])?[0-9]+/g);
    let val = String(value.value).match(/-?([0-9]*[.])?[0-9]+/g);
    let operator = inner.innerText.slice(-1);
    let num_1 = inner.innerText.match(/\.\d+/g);
    let num_2 = value.value.match(/\.\d+/g);
    var l_1 = String(num_1).replace(".", "").length;
    var l_2 = String(num_2).replace(".", "").length;
    if (num_1 == null) {
        l_1 = 0;
    }
    if (num_2 == null) {
        l_2 = 0;
    }
    if (operator == "+") {
        if (String(value.value).includes("(") == true || Math.sign(Number(val)) == -1){
            inner.innerText = Ext_num + " " + operator + " ( " + val + " ) = ";
            value.value = (Number(Ext_num) + Number(val));
        }
        else {
            inner.innerText = Ext_num + " " + operator + " " + val + " = ";
            value.value = (Number(Ext_num) + Number(val));
        }
    }
    else if (operator == "-") {
        if (String(value.value).includes("(") == true || Math.sign(Number(val)) == -1){
            inner.innerText = Ext_num + " " + operator + " ( " + val + " ) = ";
            value.value = (Number(Ext_num) - Number(val));
        }
        else {
            inner.innerText = Ext_num + " " + operator + " " + val + " = ";
            value.value = (Number(Ext_num) - Number(val));
        }
    }
    else if (operator == "\u00D7") {
        if (String(value.value).includes("(") == true || Math.sign(Number(val)) == -1){
            inner.innerText = Ext_num + " " + operator + " ( " + val + " ) = ";
            value.value = (Number(Ext_num) * Number(val)).toFixed((l_1 + l_2));
        }
        else {
            inner.innerText = Ext_num + " " + operator + " " + val + " = ";
            value.value = (Number(Ext_num) * Number(val)).toFixed((l_1 + l_2));
        }
    }
    else if (operator == "\u00F7") {
        if (String(value.value).includes("(") == true || Math.sign(Number(val)) == -1){
            inner.innerText = Ext_num + " " + operator + " ( " + val + " ) = ";
            value.value = (Number(Ext_num) / Number(val));
        }
        else {
            inner.innerText = Ext_num + " " + operator + " " + val + " = ";
            value.value = (Number(Ext_num) / Number(val));
        }
    }
}

function backspace(Field){
    let val = document.getElementById(Field);
    let v = val.value;
    if (v.length - 1 == 0){
        document.getElementById(Field).value = 0;
    }
    else {
        val.value = v.slice(0, (v.length - 1));
    }
}
