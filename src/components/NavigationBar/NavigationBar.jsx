import styles from "./NavigationBar.module.css";
import MenuLogo from "@/components/ui/logos/menuLogo/MenuLogo";
import localFont from 'next/font/local'

const nexaScriptFont = localFont({ src: './font/nexa-script-8.ttf' })

export const NavigationBar = () => {
    return (
        <header className={styles.header}>
            <section className={styles.navBar}>
                <div className={styles.logo}>
                    <h1 className={`${nexaScriptFont.className} ${styles.logoText}`}>кьянти</h1>
                </div>
                <div className={styles.burgerMenu}>
                    <div className={`${styles.bar} ${styles.bar1}`}></div>
                    <div className={`${styles.bar} ${styles.bar2}`}></div>
                    <div className={`${styles.bar} ${styles.bar3}`}></div>
                </div>
            </section>
        </header>
    )
}
