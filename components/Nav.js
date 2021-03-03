import styles from '../styles/Home.module.css'
import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'

export default function Nav() {
  return (
    <div className={navStyles.container}>
      <div className={navStyles.links}>
        <Link href="/">Home</Link>
      </div>
      <div className={navStyles.links}>
        <Link href="/articles">Articles</Link>
      </div>
      <div className={navStyles.links}>
        <Link href="/other">Other Page</Link>
      </div>
      <div className={navStyles.clear}></div>
    </div>
  )
}
