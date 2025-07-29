// login user 
let user =prompt("enter user (admin/user)");
let pass=prompt("pass please");

let access="";
if ((user ==="admin"||user==="user")&& pass==="1234"){
    access=(user==="admin")?"high":"low";
    alert("Login ok,welcome"+user+"!(access:"+access+")");
}else{
    alert("wrong login info! try again later...");
    throw"Login faild";
}
// order info
let nameInput = prompt("what's ur name?");
let userAge= parseInt(prompt("your age?"));
let coffeKind=prompt("coffee type? espresso/latte/cappuccino");
let howMany=parseInt(prompt("how many cups?"));

let cupPrice=0;
if(coffeKind==="espresso"){
    cupPrice=2.5;
}else if(coffeKind==="latte"){cupPrice=3.5;
}else if (coffeKind==="cappuccino"){cupPrice=4.0;
}else{
    alert("coffee not found!");
    throw"Invalid coffee choise";
}

let totalBefore=cupPrice*howMany;
let dis=0;

if (userAge< 18||userAge>60){
    dis=totalBefore*0.1;
    // age discount
}
let afterDiscount = totalBefore - dis ;

let splitBy = parseInt(prompt("split with how many people?(1-3)"));
let tipP = parseInt(prompt("tip percent? 0, 5, 10, 15"));

let tipVal = afterDiscount *(tipP/100)
let totalFinal= afterDiscount + tipVal;
let perEach=totalFinal/splitBy;

let temp=0;
// final result

alert("Hi" +nameInput+ "!\n"+
    "You Ordered"+howMany+""+coffeKind+"(s).\n"+
    "Total before:$"+totalBefore.toFixed(2)+"\n"+
    "Discount:$"+dis.toFixed(2)+"\n"+
    "Tip:$" +tipVal.toFixed(2)+"\n"+
    "Final total:$" +totalFinal.toFixed(2)+"\n"+
    "split for"+splitBy+"=$" +perEach.toFixed(2)+"each"
);