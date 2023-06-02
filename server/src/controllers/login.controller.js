const { User } = require('../../db.connection')


module.exports = {
    login: async (req, res) => {
        try {
            // Validate request
            const { email, password } = req.query;
            if (!email) throw new Error("Email is missing")
            if (!password) throw new Error("Password is missing")

            // Find user
            const user = await User.findOne({
                where: { email }
            })

            // Validate user
            if (!user) throw new Error("User not found")

            // Validate password
            if (user.password !== password) throw new Error("Wrong password")

            // Reply true access
            res.status(200).json({ access: true })

        } catch (error) {
            // Reply error
            res.status(404).send(error.message)
        }
    }
}
