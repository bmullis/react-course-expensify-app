const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Brian',
            age: 33
        });
    }, 1500);
});

promise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error);
});