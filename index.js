// Q-1

var membership="standard membership";
if(membership=="basic membership"){
    console.log("Access to only free books");
}
else if(membership=="standard membership"){
    console.log("Access to free books and discounted paid books");
}
else if(membership=="Premium Membership"){
    console.log("Access to all books, including exclusive content")
}
else{
    console.log("invalid");
}
console.log("................................................................"); 

// Q-2

var customer="Vip customer";
var purchases="400";
if(customer==="Regular customer"){
    if(purchases>0 && purchases<100){
        console.log("no discount for purchases under 100");
    }
    else if(purchases>=100 && purchases<=500){
        console.log("after applying 5% discount",":",purchases=purchases-purchases*0.05);
    }
    else{
        console.log("after applying 10% discount",":",purchases=purchases-purchases*0.1);
    }
    
}
else if(customer==="Vip customer"){
    if(purchases>0 && purchases<100){
        console.log("after applying 10% discount",":",purchases=purchases-purchases*0.1);
    }
    else if(purchases>=100 && purchases<=500){
        console.log("after applying 15% discount",":",purchases=purchases-purchases*0.15);
    }
    else{
        console.log("after applying 20% discount",":",purchases=purchases-purchases*0.20);
    }
}
else{
    console.log("your purshases was invalid");
}

console.log("....................................................");

// Q-3

var GPA="3";
var extracurricularactivities="2";
var communityservice=110;
if(GPA>=3.5){
    console.log("eligible for merit based scholarship");
}
else if(GPA>=3 && extracurricularactivities>="2"){
    console.log("eligible for leadership scholarship");
}
else if(GPA>=2.5 && communityservice>=100){
    console.log("eligible for community service scholarship");
}
else{
    console.log("not eligible for scholorship");
}


console.log(".................................................................");

//  Q-4

var day="weekends";
var age="70";
if(day==="weekdays" && (age>0 && age<12)){
    price=12;
    console.log("50% discount for under 12 years",":",price=price-price*0.5);
}
else if(day==="weekdays" && age>=65){
    price=12
    console.log("50% discount for 65 and old years" ,":",price=price-price*0.5);
}
else if(day==="weekends" && (age>0 && age<12)){
    price=15;
    console.log("30% discount for under 12 years",":",price=price-price*0.3);
}
else if(day==="weekends" && (age>=65)){
    price=15;
    console.log("30% discount for 65 and old years",":",price=price-price*0.3);
}
else{
    console.log("no discount");
}


console.log("..................................................");

//  Q-5

var age="19";
var numberofparticipates="80";
var email="@email.com";
if((age>=18 && numberofparticipates<=100) && email==="@email.com"){
    console.log("you can register for event");
}
else if(age>100){
    console.log("the event is full,no more registrations are accepted");
}
else{
    console.log("not eligible for regissration");

}








   






