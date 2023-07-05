//Alex brown's
this.car = "Honda Civic w/ Ugly Spoiler"

var marksGarage ={
    car:"Aston Martin",
    getCar:function(){
        return this.car;
    }
};
//console.log(marksGarage.getCar());
//var storeGetCarForLater = marksGarage.getCar;
//console.log(storeGetCarForLater());
//var theRealGetCarFunction = storeGetCarForLater.bind(marksGarage);
var theRealGetCarFunction = marksGarage.getCar.bind(marksGarage);
console.log(theRealGetCarFunction());

//function Student(first, last, age){
//    this.fileName = first;
//    this.lastName = last;
//    this.age = age;
//    this.greeting = function(){
//        return "Hi, I'm " + this.fileName + " and I'm " + this.age + " years old.";
//    };
//}
//
//var students = [];
//students.push(new Student("jenney","Laga",9));
//students.push(new Student("Jim","Ass",10));
//students.push(new Student("Carl","Jacob",22));
//
//var student=students[0];
//for (var key in student){
//    console.log(student[key]);
//}

//for( var index = 0; index<students.length; index++){
//    var student = students[index];
//    console.log(student.greeting());
//}
//var s1=new student("Jenny","laga",6);
//console.log(s1);
//console.log(s1.greeting());


//var student0 ={
//    firstName : "Jayne",
//    lastName : "Loo",
//    age : 8,
//    
//};
//console.log(student0.greeting());
////Creates a new empty object
//var student1= new Object();
//student1.firstName = "John";
//student1.lastName = "Parker";
//student1.age = 7;
//
//var student2 = {};
//student2.firstName = "Zack";
//student2.lastName = "Bobo";
//student2.age = 5;
//
//var students =[];
//students.push(student0);
//students.push(student1);
//students.push(student2);

//for( var index = 0; index<students.length; index++){
//    console.log(students[index]);
//}

//console.log(student.firstName);
//console.log(student.lastName);
//console.log(student["firstName"]);
//console.log(student["lastName"]);

//var bankBalance  =500;
//
//function makeTransaction(priceOfSale){
//    if(priceOfSale<=bankBalance){
//        bankBalance-=priceOfSale;
//        console.log("Purchase Successful");
//    }
//    else{
//        console.log("Insufficient funds")
//    }
//}
//makeTransaction(79.00);
//console.log(bankBalance);
//makeTransaction(2.32);
//console.log(bankBalance);
//makeTransaction(10.45);
//console.log(bankBalance);
//makeTransaction(500.00);
//console.log(bankBalance);
//
//var transaction = function(priceOfSale){
//    if(priceOfSale<=bankBalance){
//        bankBalance-=priceOfSale;
//        console.log("Purchase Successful");
//    }
//    else{
//        console.log("Insufficient funds")
//    }
//};
//var printCustomerName = function(first, last){
//    console.log("First Name : " + first + " Last Name : " + last);
//}
//var applyForCreditCard = function(creditScore, soul){
//    //calls some function to process application
//}
//var bankOperations = [];
//bankOperations.push(transaction);
//bankOperations.push(printCustomerName);
//bankOperations.push(applyForCreditCard);

//var length1= 15;
//var width1= 10;
//var area1= length1 *width1;
//console.log(area1);

//function area(length, width){
//    return length * width;
//}
//var rectanglesAreas = []
//rectanglesAreas.push(area(10,15));
//rectanglesAreas.push(area(14,2));
//rectanglesAreas.push(area(2,5));
////var area1 = area(10,15);
//console.log(rectanglesAreas);

//var total=10
//var students = ["Timmy", "Janessa", "Arun", "John", "Jacob"];
//for (var x=0; x<students.length; x++){
//    // iterate until told not to
//    console.log(students[x]);
//}

//var balances = [50.45, 400.12, -300.50];
//var naughtyList = [];
//naughtyList.push(students[0]);
//var index = naughtyList.indexOf("Timmy");
//console.log(naughtyList);
//if (index > -1){
//    naughtyList.splice(index, 1);
//}
//console.log(index);

//if(1==1 && 2==2 || "joe"==="joe"){
//    console.log("These are both true")
//}
//if(true && true){
//    console.log("These are both the same")
//}
//if(1===3 || "joe"==="joe"){
//    console.log("One of these are true")
//}
//var cat1 = 5;
//var cat2 = 10;
//var cat3 = 1;
//var cat3DisabledHandicap = true;
//if ((cat1>cat2 && cat1>cat3) && !cat3DisabledHandicap){
//    console.log("cat 1 is the cutest");
//}
//else if ((cat2>cat1 && cat2>cat3) && !cat3DisabledHandicap){
//    console.log("cat 2 is the cutest");
//}
//else if ((cat3>cat1 && cat3>cat2) || cat3DisabledHandicap){
//    console.log("cat 3 is the cutest");
//}

//var name = "Jack";
//var age = 23;
//var shootingScore = 45.6;
//var message = "Hi, my name is " +name+ " and I am " +age+ " years old!";
////alert(message);
//
//var firstName = "John";
//var lastName = "JacobJingleHeimerSmith";
//var dateOfBirth = "10-09-82";
//var age = 23;
//var profileImgUrl = "http://coolpicks.com/johnjacob.jpg";
//var loginWelcomeMessage = "Welcome, " + firstName + ". Happy " + age + "rd birthday!";
//console.log(loginWelcomeMessage);
//
//var sum = 10 + 15;
//var sum = 15 - 10;
//var mul = 10 * 3;
//var div = 10 / 3;
//var mod = 10 % 3;
//var msg = "10 /3 = 3 with a remainder of " + mod;
//var result = 10 * ((5 + 3) - 4);
//console.log(result);

//var myAccountBalance = 300;
//var nikeSBShoes = 799.23;
//var coupon = 500;
/// === check if value and type are same
//var val1 = 23;
//var val2 ="23";
//if(val1===val2){
//    console.log("These are the same");
//}
//else{
//    console.log("These are not the same");
//}
//if (nikeSBShoes<=myAccountBalance){
//    myAccountBalance -= nikeSBShoes;
//    console.log("We just bought some dope shoes");
//    console.log("Account Balance :" +myAccountBalance);
//}
//else if(nikeSBShoes - coupon <= myAccountBalance){
//    myAccountBalance -= nikeSBShoes - coupon;
//    console.log("We just bought some dope shoes with a coupon");
//    console.log("Account Balance :" +myAccountBalance);
//}
//else{
//    console.log("You too broke for shoes bra!")
//}