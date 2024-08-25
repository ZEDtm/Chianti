import styles from "./MainSection.module.css"
import TelegramIcon from "@/components/ui/icons/TelegramIcon";
import InstagramIcon from "@/components/ui/icons/InstagramIcon";
import WhatsappIcon from "@/components/ui/icons/WhatsappIcon";
import Image from "next/image";
import ChiantiLogo from "@/components/ui/ChiantiLogo/ChiantiLogo";
import ChiantiLogoArrow from "@/components/ui/ChiantiLogoArrow/ChiantiLogoArrow";
import localFont from "next/font/local";

const SFProDisplay = localFont({ src: '../fonts/SF-Pro.ttf' })

const MainSection = () => {
    return (
        <section className={styles.mainSection}>

            <div className={styles.leftImageContainer}>
                <Image className={styles.leftImage} width={542} height={665} src="/LeftImage.jpg" alt="Left image"/>
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.logoContainer}>
                    <ChiantiLogoArrow className={styles.chiantiLogoArrow}/>
                    <ChiantiLogo className={styles.chiantiLogo}/>
                </div>
                <div className={styles.textContainer}>
                    <p className={`${SFProDisplay.className} ${styles.contentText}`}>
                    Кьянти может быть на аперитив, может быть под горячее, а может быть ярким дижестивом. <br/><br/>
                    Мы элегантно начинаем вечер, будоражуще его сопровождаем, и ярко завершаем. Кьянти - настроение праздника!
                    </p>
                </div>
                <button className={styles.actionButton}>Связаться</button>
                <div className={styles.socialIcons}>
                    <TelegramIcon/>
                    <InstagramIcon/>
                    <WhatsappIcon/>
                </div>
            </div>

        </section>
    );
};

export default MainSection;