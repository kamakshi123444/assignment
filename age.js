const Users = [{
    name: "Bhawana",
    age: 17,
},
{
    name: "Kamaskhi",
    age: 22
},
{
    name: "Simran",
    age:24
},
{
    name: "lkshita",
    age:34
}
]

function filterAge(){
return Users.filter((user) => user.age >= 18);
}

console.log(filterAge());
