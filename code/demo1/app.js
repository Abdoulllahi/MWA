kitchen = {
    prepare: () => {
        return new Promise((resolve, reject) => {
            console.log('preparing the meal') 
            resolve(`Meal`); //async
            console.log('meal is ready') 
        });
    },

    desert: () => {
        return new Promise((resolve, reject) => {

        })
    }
} 

console.log(`study`);
kitchen.prepare()
    .then(meal => console.log(`eat: `, meal))
    .catch(problem => console.log('crying because of: ', problem))
    .finally((_ => console.log(`sleep in peace`)))
console.log(`finish study`)