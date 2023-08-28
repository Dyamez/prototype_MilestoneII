const db = require('../models')

db.Place.create([{
    name: 'Crusty Crab',
    city: 'Bikini Bottom',
    state: 'Marshall Islands',
    cuisines: 'Crabby Patty',
    pic: '/images/resto.1.jpg', 
    founded: 1999
}, {
    name: 'City Wok',
    city: 'South Park',
    state: 'Colorado',
    cuisines: 'Coffee, Bakery',
    pic: '/images/resto2.jpg',
    founded: 1996
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure', err)
    process.exit()
})