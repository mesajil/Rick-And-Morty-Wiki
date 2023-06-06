const { User } = require('../../db.connection')


module.exports = {
    postUser: async (req, res) => {
        try {
            // Validate request
            const { name, email, password } = req.body;
            if (!name) throw new Error("Name is missing")
            if (!email) throw new Error("Email is missing")
            if (!password) throw new Error("Password is missing")

            // Create user
            const [newUser, created] = await User.findOrCreate({
                where: req.body
            })

            // Reply user
            if (!created) throw new Error("User already exists")
            res.status(200).json(newUser)

        } catch (error) {
            // Reply error
            res.status(404).send(error.message)
        }
    },
    getUsers: async (req, res) => {
        try {
            // Get users
            const users = await User.findAll()

            // Reply users
            res.status(200).json(users)

        } catch (error) {
            // Reply error
            res.status(404).send(error.message)
        }
    },
}
