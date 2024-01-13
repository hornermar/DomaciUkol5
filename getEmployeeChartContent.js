export function getEmployeeChartContent(employeeData) {
    const employeeChartContent = {
        names: {
            all: { Aneta: 2, Jan: 5, Jana: 3, Jiřina: 1, Jiří: 1, Josef: 1 },
            male: { Jan: 5, Jiří: 1, Josef: 1 },
            female: { Aneta: 2, Jana: 3, Jiřina: 1 },
            femalePartTime: { Aneta: 2, Jana: 1 },
            maleFullTime: { Jan: 3, Josef: 1 },
        },
        chartData: {
            all: [
                { label: "Jan", value: 5 },
                { label: "Jana", value: 3 },
                { label: "Aneta", value: 2 },
                { label: "Jiřina", value: 1 },
                { label: "Jiří", value: 1 },
                { label: "Josef", value: 1 },
            ],
            male: [
                { label: "Jan", value: 5 },
                { label: "Jiří", value: 1 },
                { label: "Josef", value: 1 },
            ],
            female: [
                { label: "Jana", value: 3 },
                { label: "Aneta", value: 2 },
                { label: "Jiřina", value: 1 },
            ],
            femalePartTime: [
                { label: "Jana", value: 1 },
                { label: "Aneta", value: 2 },
            ],
            maleFullTime: [
                { label: "Jan", value: 3 },
                { label: "Josef", value: 1 },
            ],
        },
    };

    return employeeChartContent;
}
