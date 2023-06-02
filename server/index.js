const server = require('./src/routes')
const PORT = 3001
const { database } = require('./db.connection')


// synchronize all models
database.sync({ force: false })
    .then(() => {
        // console.log(database.models); // dev log
        console.log('All models were synchronized successfully.')

        // Start listening
        server.listen(PORT, (err) => {
            if (err) return console.log("Error in server setup")
            console.log(`Listening on port ${PORT}`);
        })
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error.message);
    })

