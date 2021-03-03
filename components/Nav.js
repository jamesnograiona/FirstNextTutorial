import styles from '../styles/Home.module.css'
import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'

export default function Nav() {
  return (
    <div class={navStyles.container}>
      <div class={navStyles.links}>
        <Link href="/">Home</Link>
      </div>
      <div class={navStyles.links}>
        <Link href="/other">Other Page</Link>
      </div>
      <div class={navStyles.clear}></div>
    </div>
  )
}
