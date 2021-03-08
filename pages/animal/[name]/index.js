import { useRouter } from 'next/router'
import { server } from '../../../config'
import Link from 'next/link'


const animal = ({ selectedAnimal }) => {
    return (
        <div>
            <small>Viewing animal {selectedAnimal.id}...</small>
            <h3>Title: {selectedAnimal.name}</h3>
            <h4>Sound: {selectedAnimal.sound}</h4>
            <h4>Legs: {selectedAnimal.legs}</h4>
            <Link href="/animal">Go Back</Link>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`${server}/api/animals/${context.params.name}`)
    const selectedAnimal = await res.json()
    console.log(selectedAnimal)

    return {
        props: { selectedAnimal }
    }
}

export default animal