import { server } from '../../config'
import Link from 'next/link'

const animal = ({ animals }) => {
    return (
        <div>
            <h2>Animal List</h2>
            <ul>
                {animals.map((animal) => (
                    <li>
                        <Link href="/animal/[name]" as={`/animal/${animal.name}`}>{animal.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/animals/`)
    const animals = await res.json()

    return {
        props: { animals }
    }
}

export default animal