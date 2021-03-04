import Nav from '../components/Nav'
import styles from '../styles/Home.module.css'
import Article from '../components/Article'

export default function Articles({ articles }) {
    return (
        <div>
            <h1>Articles</h1>
            {articles.map((article) => (
                <Article article={article} />
            ))}
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch('https://my-json-server.typicode.com/typicode/demo/posts')
    const articles = await res.json();

    return {
        props: { articles }
    }
}