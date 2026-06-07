class Employee {
    constructor(name, role, salary) {
        this.name = name;
        this.role = role;
        this.salary = salary;
    }

    displayDetails() {
        console.log(
            `Name: ${this.name}vdvdv, Role: ${this.role}, Salary: ₹${this.salary}`
        );
    }
}

const employees = [
    new Employee("Abhinandan", "Frontend Developer", 80000),
    new Employee("Rahul", "Backend Developer", 75000),
    new Employee("Priya", "UI/UX Designer", 70000),
];