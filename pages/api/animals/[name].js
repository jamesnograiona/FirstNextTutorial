import { animals } from '../../../pages/api/animals/data'

export default function handler(req, res) {
    const animalName = req.query.name
    const selectedAnimal = animals.filter(animal => {
        if (animal.name.toUpperCase() === animalName.toUpperCase()) {
            return animal
        }
    })

    if (selectedAnimal.length > 0) {
        res.status(200).json(selectedAnimal[0])
    } else {
        res.status(404).json({message: `Animal ${animalName} not found!`})
    }
}