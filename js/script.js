function marks(num) {
    if (num >= 85) {
        console.log("D");
    }
    else if (num >= 65) {
        console.log("FC");
    }
    else if (num >= 35) {
        console.log("SC");
    }
    else {
        console.log("fail");
    }

}

function c() {
    console.log("called c function");
}
function b() {
    c();
    console.log("called b function");
}
function a() {
    b();
    console.log("called a function");
}
a();

function integration() {
    console.log("integration");
}
function diff() {
    console.log("diff");
}
function greetUser(firstName, lastName) {
    console.log("Hello" + firstName + " " + lastName);
}
integration();
diff();
greetUser(" varshini C appaji ");
var num = prompt("enter the number");
marks(num);

