import { useRouter } from 'next/router'

const article = ({ mainArticle }) => {
    const router = useRouter()
    // id and title are from query URL while mainArticle is from getServerSideProps
    const { id, title } = router.query

    return (
        <div>
            <small>Viewing article {mainArticle.id}...</small>
            <h3>Title: {mainArticle.title}</h3>
            
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://my-json-server.typicode.com/typicode/demo/posts/${context.params.id}`)
    const mainArticle = await res.json()

    return {
        props: { mainArticle }
    }
}

export default article