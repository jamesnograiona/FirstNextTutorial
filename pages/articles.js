import Nav from '../components/Nav'
import styles from '../styles/Home.module.css'

export default function Articles({ articles }) {
    return (
        <div>
            <h1>Articles</h1>
            {articles.map((article) => (
                <h3 key={article.id}>{article.title}</h3>
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