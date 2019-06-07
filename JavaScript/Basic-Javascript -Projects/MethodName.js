var person = {
    fName: "Sally",
    lName: "Jones",
    age: 30,
    location: "New York City",
    fullName: function() {
        return person.fName + " " + person.lName;
    }
}

name = person.fullName();