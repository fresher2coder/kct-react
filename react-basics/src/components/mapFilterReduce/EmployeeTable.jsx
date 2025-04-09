import React from "react";

const employees = [
  { name: "Aarav", department: "Engineering", salary: 80000 },
  { name: "Ishita", department: "Marketing", salary: 50000 },
  { name: "Ravi", department: "Engineering", salary: 70000 },
  { name: "Priya", department: "HR", salary: 60000 },
  { name: "Neha", department: "Engineering", salary: 75000 },
  { name: "Vikram", department: "Marketing", salary: 55000 },
  { name: "Arjun", department: "Sales", salary: 65000 },
  { name: "Simran", department: "Sales", salary: 62000 },
  { name: "Pooja", department: "HR", salary: 58000 },
  { name: "Sandeep", department: "Engineering", salary: 72000 },
  { name: "Rita", department: "Marketing", salary: 53000 },
  { name: "Karan", department: "Sales", salary: 71000 },
  { name: "Anjali", department: "HR", salary: 62000 },
  { name: "Manish", department: "Sales", salary: 60000 },
  { name: "Vishal", department: "Engineering", salary: 79000 },
  { name: "Sonali", department: "Marketing", salary: 54000 },
  { name: "Sonali Singh", department: "Finance", salary: 54000 },
  { name: "Rahul", department: "Sales", salary: 69000 },
  { name: "Rahul Reddy", department: "Operations", salary: 69000 },
];

//filter employees from engineering department
const engineeringEmployees = employees.filter(
  (emp) => emp.department === "Engineering"
);

const totalSalary = employees.reduce((sum, emp) => {
  sum + emp.salary;
}, 0);

function EmployeeTable() {
  return (
    <>
      <div className="container-employee">
        <h1>Employee Data Viewer</h1>

        {/* list rendering  */}

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.name}>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>{emp.salary}</td>
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </>
  );
}

export default EmployeeTable;
