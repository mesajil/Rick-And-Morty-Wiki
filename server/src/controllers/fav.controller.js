const { User, Character } = require('../../db.connection')


module.exports = {
    addFavorite: async (req, res) => {
        try {
            // Validate user and favorite ids
            const { userId, charId } = req.query;
            if (!userId) throw new Error("User id is missing")
            if (!charId) throw new Error("Character id is missing")

            // Find user
            const user = await User.findByPk(userId)
            if (!user) throw new Error("User not found")
            
            // Find character
            const favorite = await Character.findByPk(charId)
            if (!favorite) throw new Error("Character not found")

            // Add new favorite 
            await user.addFavorite(favorite)

            // Reply user
            res.status(200).json({
                success: `User id ${userId} has the favorite id ${charId}`,
            })

        } catch (error) {
            // Reply error
            res.status(404).send(error.message)
        }
    },
}
