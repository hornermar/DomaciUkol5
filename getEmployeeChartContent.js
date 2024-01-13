const getNames = (employees) => {
    return employees.reduce((namesCount, employee) => {
        namesCount[employee.name] = (namesCount[employee.name] || 0) + 1;
        return namesCount;
    }, {});
};

const getChartData = (names) => {
    return Object.entries(names)
        .map(([label, value]) => ({ label, value }))
        .sort((a, b) => b.value - a.value);
};

export function getEmployeeChartContent(employeeData) {
    const { male, female } = employeeData.reduce(
        (acc, employee) => {
            if (employee.gender === "male") acc.male.push(employee);
            else if (employee.gender === "female") acc.female.push(employee);
            return acc;
        },
        { male: [], female: [] }
    );

    const categories = {
        all: employeeData,
        male: male,
        female: female,
        femalePartTime: female.filter((employee) => employee.workload !== 40),
        maleFullTime: male.filter((employee) => employee.workload === 40),
    };

    const names = {};
    const chartData = {};

    for (const category in categories) {
        names[category] = getNames(categories[category]);
        chartData[category] = getChartData(names[category]);
    }

    return {
        names,
        chartData,
    };
}
