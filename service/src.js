console.log("Employee Records:\n");

employees.forEach(emp => emp.displayDetails());

const highestPaid = employees.reduce((max, emp) =>
    emp.salary > max.salary ? emp : max
);