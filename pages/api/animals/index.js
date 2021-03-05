import { animals } from '../../../pages/api/animals/data'

export default function handler(rew, res) {
    res.status(200).json(animals)
}