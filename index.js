// Write your solution in this file!
let employee = {
    name: "Tonny",
    streetAddress: "11 Broadway",
  };
  function updateEmployeeWithKeyAndValue(employee, key, value){
      
      return { ...employee, [key]: value };
                                                                                
}
const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee;
  };
  const deleteFromEmployeeByKey = (employee, key) => {
    let newEmployee = {...employee}
    delete newEmployee[key];

    return newEmployee;
}
const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
}
//  {
//     employee[key] = v; 
  
//     return employee;
//   }
  
