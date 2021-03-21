let employee = [];
const employees = {
    name: "Sam",
streetAdress: "11 Broadway",}

function updateEmployeeWithKeyAndValue (employee,key,value) 
{ let newemployee = {...employee}; 
newemployee[key]= value;
    return newemployee
}


function destructivelyUpdateEmployeeWithKeyAndValue (employee,key,value) { employee [key] =value;
    return employee}

function deleteFromEmployeeByKey (employee,key) {let newEmployee= {...employee};
delete newEmployee [key];
return newEmployee;}
function destructivelyDeleteFromEmployeeByKey (employee,key) {delete employee [key];
return employee}