const data = [
    {
        name: "june",
        projs: [
            {
                name: "proj1",
                value: 4
            },
            {
                name: "proj77",
                value: 2
            }
        ]
    },
    {
        name: "jule",
        projs: [
            {
                name: "proj33",
                value: 1
            },
            {
                name: "proj123",
                value: 3
            }
        ]
    },
    {
        name: "august",
        projs: [
            {
                name: "proj918",
                value: 2
            },
            {
                name: "proj13",
                value: 1
            }
        ]
    }
];

const getMAxValue = (data) => {
    let sum = 0;
    for (let object of data) {
        sum += object.projs.reduce((acc, next) => acc.value + next.value);
    }
    return sum;
}

console.log(getMAxValue(data))