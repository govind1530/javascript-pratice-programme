let names={
    firstname:"govind",
    lastname:"maheshwari",
}

let printFullName = function (hometown,state) {
    console.log('full name',this.firstname+this.lastname+' '+hometown+' '+state);
}

printFullName.call(names,"jaipur","rajasthan")

let names2 ={
    firstname:"mayank",
    lastname:"maheshwari",
}

// function borrowing
printFullName.call(names2,"udaipur","rajasthan")

printFullName.apply(names2,["mount abu","rajasthan"]);

// in call method we can pass parameter seperterly 
// in apply method we can pass parameter in arrey list

// bind method is give you copy and invoke letter.
let printmyname = printFullName.bind(names2,"jodhpur","rajasthan");
printmyname()
console.log(printmyname);
