const { Character } = require('../../db.connection')


module.exports = {
    postChar: async (req, res) => {
        try {
            // Validate request
            const {
                name, status, species, gender, image
            } = req.body;
            if (!name) throw new Error("Name is missing")
            if (!status) throw new Error("Status is missing")
            if (!species) throw new Error("Species is missing")
            if (!gender) throw new Error("Gender is missing")
            if (!image) throw new Error("Image is missing")

            // Create character
            const [newChar, created] = await Character.findOrCreate({
                where: req.body
            })

            // Reply character
            if (!created) throw new Error("Character already exists")
            res.status(200).json(newChar)

        } catch (error) {
            // Reply error
            res.status(404).send(error.message)
        }
    },
    getChar: async (req, res) => { },
    getAllChar: async (req, res) => {
        try {
            // Get all characters
            const characters = await Character.findAll({
                attributes: ['id', 'name', 'image']
            })

            // Reply all characters
            res.status(200).json(characters)

        } catch (error) {
            // Reply error
            res.status(404).send(error.message)
        }
    },
    updateChar: async (req, res) => { },
    deleteChar: async (req, res) => {
        try {
            // Validate id
            const { id } = req.params;
            if (!id) throw new Error("Character's id is missing")

            // Find character
            const character = await Character.findOne({
                where: { id }
            })

            // Delete character
            if (!character) throw new Error("Character not found")
            await Character.destroy({
                where: { id }
            });

            // Reply character deleted
            res.status(200).json(character)

        } catch (error) {
            // Reply error
            res.status(404).send(error.message)
        }
    },
}
