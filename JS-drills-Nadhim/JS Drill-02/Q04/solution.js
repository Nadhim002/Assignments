// Q4 Group users based on their Programming language mentioned in their designation.

function solutionFunction(users){

    if (typeof users !== "object" ){
        return "Invalid input format"
    }

    if (  Object.keys(users).length === 0 ){
        return "Data is empty"
    }

    const languageGroups = { "python":[] ,"javascript":[] ,"golang":[] }

    for (let key in users){

        if (  users[key]["desgination"] ){
            for  (let lang of Object.keys(languageGroups) ){
                if (users[key]["desgination"].toLowerCase().includes(lang) ){
                    languageGroups[lang].push( key )
                }
            }
        }
    }


    return languageGroups
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
        interests: ["Piano"],
        qualification: "Bachaelor",
        nationality: "Germany"
    },
    "Rob": {
        age: 34,
        desgination: "Senior Javascript Developer",
        interest: ["Walking his dog, Cooking"],
        qualification: "Masters",
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
