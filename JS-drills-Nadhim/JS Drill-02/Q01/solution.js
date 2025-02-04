// Q1 Find all users who are interested in playing video games.

function solutionFunction(users){

    if (typeof users !== "object" ){
        return "Invalid input format"
    }

    if (  Object.keys(users).length === 0 ){
        return "Data is empty"
    }



    const usersList =[] 

    for (let key in users){

        if ( users[key]["interests"] && users[key]["interests"].toString().toLowerCase().includes("video games") ){
            usersList.push(key)
        }
    }
    return usersList
}

const users = {

    "John": {
        age: 24,
        desgination: "Senior Golang Developer",
        interests: ["Chess, Reading Comics, Playing Video Games"],
        qualification: "Masters",
        nationality: "Greenland"
    },
    "Ron": {
        age: 19,
        desgination: "Intern - Golang",
        interests: ["Video Games"],
        qualification: "Bachelor",
        nationality: "UK"
    },
    "Wanda": {
        age: 24,
        desgination: "Intern - Javascript",
        interests: null,
        qualification: "Bachaelor",
        nationality: "Germany"
    },
    "Rob": {
        age: 34,
        desgination: "Senior Javascript Developer",
        interest: ["Walking his dog", "Cooking"],
        qualification: "Masters",
        nationality: "USA"
    },
    "Pike": {
        age: 23,
        desgination: "Python Developer",
        interests: "Hi",
        qualification: "Bachaelor's Degree",
        nationality: "Germany"
    }

}

module.exports = {solutionFunction , users}

/*


Q2 Find all users staying in Germany.
Q3 Find all users with masters Degree.
Q4 Group users based on their Programming language mentioned in their designation.


*/ 
