var http = require("http");

//TODO - Use Employee Module here
var employees = require("./employee")

console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"

            res.write("<h1>Welcome to Lab Exercise 03</h1>")
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format

            res.write(JSON.stringify(employees))
            console.log(employees)
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]

            let employeeFirstLast = [];
            for(let i = 0; i < employees.length; i++){
                employeeFirstLast.push(employees[i].firstName + " " + employees[i].lastName);
            }

            employeeFirstLast.sort(function(a, b){
                if(a > b) return 1;
                if(a < b) return -1;
                return 0;
            })
            //const employeeFirstLast = employees.map(employee => employee.firstName + " " + employee.lastName);
            res.write(JSON.stringify(employeeFirstLast))
            console.log(employeeFirstLast)

            /* const employeeFirstLast = employees.map(employee => employee.firstName + " " + employee.lastName);
            res.write(JSON.stringify(employeeFirstLast))
            console.log(employeeFirstLast) */
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  

            const totalsalary = employees.reduce((previousValue, currentValue) => previousValue + currentValue.Salary, 0);
            res.write(JSON.stringify(totalsalary));
            console.log(`Total salary of employees: ${totalsalary}`)
    }
    res.end()
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})