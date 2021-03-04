import Link from 'next/link'

export default function Article({ article }) {
    return (
        <div>
            <h3>{article.id}: {article.title}</h3>
            <Link href="/article/[id]/[title]" as={`/article/${article.id}/${article.title}`}>
                Open Article
            </Link>
            <hr />
        </div>
    )
}