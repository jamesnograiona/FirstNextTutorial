import Nav from '../components/Nav'
import styles from '../styles/Home.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Nav></Nav>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}
