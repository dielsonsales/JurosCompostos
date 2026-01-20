import Inputs from "@/components/inputs/inputs";
import styles from "./page.module.css";
import Result from "@/components/result/result";

export default function Home() {
  return (
    <main>
      <div>
        <h1>Juros Compostos</h1>
        <p>Simule a evolução do seu capital considerando aportes mensais e uma taxa recorrente.</p>
      </div>
      <div className={styles.cardsContainer}>
        <Inputs />
        <Result />
      </div>
    </main>
  );
}
