var employee = {
    id: 101,
    name: "John Doe",
    position: "Software Engineer",
    department: "IT",
    daysOff: ["Monday", "Friday"],
    isTodayOff: function() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = daysOfWeek[new Date().getDay()];
        return this.daysOff.includes(today);
    }
};

// Example usage:
console.log(employee.isTodayOff());
