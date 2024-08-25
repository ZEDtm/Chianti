import styles from "./page.module.css";
import MainSection from "./components/MainSection/MainSection";
import CardsSection from "@/app/components/CardsSection/CardsSection";


export default function Home() {
  return (
      <main className={styles.main}>
          <MainSection/>
          <CardsSection/>
      </main>
  );
}
