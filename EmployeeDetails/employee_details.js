const employees = [
  { id: 1, name: 'Shin Chan', age: 30, department: 'IT', salary: 50000 },
  { id: 2, name: 'Handy Maany', age: 28, department: 'HR', salary: 45000 },
  { id: 3, name: 'Bob the Builder', age: 35, department: 'Finance', salary: 60000 },
  { id: 4, name: 'Nobita Nobi', age: 32, department: 'HR', salary: 48000 },
  { id: 5, name: 'Michael Jackson', age: 40, department: 'IT', salary: 65000 }
  //... More employee records can be added here
];
 // Function to display all employees
function displayEmployees() {
  //map method iterates through each employee in the employees array.
  //For each employee, it constructs a string template literal encapsulated
  //within <p> tags, to represent employee details.
  const totalEmployees = employees.map(employee => `
    <p>
      <strong>ID:</strong> ${employee.id}<br>
      <strong>Name:</strong> ${employee.name}<br>
      <strong>Age:</strong> ${employee.age}<br>
      <strong>Department:</strong> ${employee.department}<br>
      <strong>Salary:</strong> $${employee.salary.toLocaleString()}
    </p>
  `).join('');
  document.getElementById('employeesDetails').innerHTML = totalEmployees;
  // resulting array of constructed strings is joined into a single string using join('').
  //This concatenation merges all the HTML-formatted employee details into one continuous string without separators.
}
  // to calculate employees' total salaries.
function calculateTotalSalaries() {
  // The reduce method iterates through each employee and accumulates their salaries to calculate the total.
  // The initial value of the accumulator (acc) is 0.
  const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
  alert(`Total Salaries: $${totalSalaries.toLocaleString()}`);
}
//  to display employees details based on department such as the HR department.
// filters the employees array using the filter array method,
// isolating and collecting employees whose department property matches 'HR' into a new array named hrEmployees.
function displayHREmployees() {
  const hrEmployees = employees.filter(employee => employee.department === 'HR');
  const hrEmployeesDisplay = hrEmployees.map(employee => `
    <p>
      <strong>ID:</strong> ${employee.id}<br>
      <strong>Name:</strong> ${employee.name}<br>
      <strong>Age:</strong> ${employee.age}<br>
      <strong>Department:</strong> ${employee.department}<br>
      <strong>Salary:</strong> $${employee.salary.toLocaleString()}
    </p>
  `).join('');
  document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay || '<p>No HR employees found.</p>';
}
//  to display employees' details based on ID.
function findEmployeeById(employeeId) {
  const foundEmployee = employees.find(employee => employee.id === employeeId);
  if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML = `
      <p>
        <strong>ID:</strong> ${foundEmployee.id}<br>
        <strong>Name:</strong> ${foundEmployee.name}<br>
        <strong>Age:</strong> ${foundEmployee.age}<br>
        <strong>Department:</strong> ${foundEmployee.department}<br>
        <strong>Salary:</strong> $${foundEmployee.salary.toLocaleString()}
      </p>`;
  } else {
    document.getElementById('employeesDetails').innerHTML = '<p class="error">No employee found with this ID</p>';
  }
}