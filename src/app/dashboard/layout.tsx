import Navbar from "../components/navbar/navbar"
import Sidebar from "../components/sidebar/sidebar"
import styles from "./dashboard.module.css"

const Layout = ({children}:any) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar/>
      </div>
      <div className={styles.content}>
        <Navbar/>
        {children}
      
      </div>
    </div>
  )
}

export default Layout