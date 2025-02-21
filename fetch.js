function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const users = {
                1: { id: 1, name: "Alice", age: 28 },
                2: { id: 2, name: "Bob", age: 32 },
                3: { id: 3, name: "Charlie", age: 25 }
            };
            resolve(users[id] || { error: "User not found" });
        }, 2000); 
    });
}


fetchUser(1).then(user => console.log(user));
