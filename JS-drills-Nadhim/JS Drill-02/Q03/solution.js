// Q3 Find all users with masters Degree.

function solutionFunction(users){

    if (typeof users !== "object" ){
        return "Invalid input format"
    }

    if (  Object.keys(users).length === 0 ){
        return "Data is empty"
    }

    const usersList =[] 

    for (let key in users){

        if ( users[key]["qualification"] && users[key]["qualification"].toLowerCase().includes("masters") ){
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
        nationality: "UK"
    },
    "Wanda": {
        age: 24,
        desgination: "Intern - Javascript",
        interests: ["Piano"],
        qualification: null,
        nationality: "Germany"
    },
    "Rob": {
        age: 34,
        desgination: "Senior Javascript Developer",
        interest: ["Walking his dog, Cooking"],
        qualification: "masters Degree",
        nationality: "USA"
    },
    "Pike": {
        age: 23,
        desgination: "Python Developer",
        interests: ["Listing Songs, Watching Movies"],
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
