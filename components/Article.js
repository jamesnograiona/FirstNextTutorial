export default function Article({ article }) {
    return (
        <div>
            <h3 key={article.id}>{article.id}: {article.title}</h3>
        </div>
    )
}