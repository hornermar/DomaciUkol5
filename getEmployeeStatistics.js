function getWorkloadStatistics(workloads, value) {
    return workloads.filter((w) => w === value).length;
}

function getMedian(array) {
    const sortedArray = array.sort((a, b) => a - b);
    console.log(sortedArray);

    if (sortedArray.length % 2 === 0) {
        return (
            (sortedArray[sortedArray.length / 2 - 1] +
                sortedArray[sortedArray.length / 2]) /
            2
        );
    } else {
        return sortedArray[Math.floor(sortedArray.length / 2)];
    }
}

function getAgeFromBirthdate(birthdate) {
    const diff = Date.now() - new Date(birthdate).getTime();
    return new Date(diff).getUTCFullYear() - 1970;
}

function getAverage(array) {
    return array.reduce((a, b) => a + b, 0) / array.length;
}

export function getEmployeeStatistics(employeeData) {
    const workloads = employeeData.map((e) => e.workload);
    const ages = employeeData.map((e) => getAgeFromBirthdate(e.birthdate));
    const womensWorkloads = employeeData
        .filter((e) => e.gender === "female")
        .map((e) => e.workload);

    const employeeStatistics = {
        total: employeeData.length,
        workload10: getWorkloadStatistics(workloads, 10),
        workload20: getWorkloadStatistics(workloads, 20),
        workload30: getWorkloadStatistics(workloads, 30),
        workload40: getWorkloadStatistics(workloads, 40),
        averageAge: Math.round((getAverage(ages) + Number.EPSILON) * 10) / 10,
        minAge: Math.min(...ages),
        maxAge: Math.max(...ages),
        medianAge: getMedian(ages),
        medianWorkload: getMedian(workloads),
        averageWomenWorkload: getMedian(womensWorkloads),
        sortedByWorkload: employeeData.sort((a, b) => a.workload - b.workload),
    };

    return employeeStatistics;
}
