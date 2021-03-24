var math=+prompt("Enter Your Maths MArk out of 100");
var physics=+prompt("Enter Your physics MArk out of 100");
var english=+prompt("Enter Your english MArk out of 100");
var urdu=+prompt("Enter Your urdu MArk out of 100");
var chemistry=+prompt("Enter Your chemistry MArk out of 100");

document.write(" Your Maths MArks is" +""+ math + "<br>");
document.write(" Your physics MArks is" +""+ physics + "<br>");
document.write(" Your English MArks is" +""+ english + "<br>");
document.write(" Your Urdu MArks is" +""+ urdu + "<br>");
document.write(" Your Chemistry MArks is" +""+ chemistry + "<br>")
var add=(math +physics+english+urdu+chemistry)
document.write("Your Total Marks out of 500 /" + add +"<br>")
var per=(add/500*100);
document.write("your Percentage is " +""+ per +"<br>");
if ( per>=80 && per<=100){
    document.write( "Your Grade is A+") 
}
else if (per>=70 && per<=80){
    document.write("Your Grade is A")
}
else if (per>= 60 && per<=70){
    document.write("Your Grade is B")
}
else if (per>= 50 && per<=60){
    document.write(" Your Grade is C")
}
else if (per>= 40 && per<=50){
    document.write(" Your Grade is D")
}
else {
    document.write ("your percentage is to much below")
}

