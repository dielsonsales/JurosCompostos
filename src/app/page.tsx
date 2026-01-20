import Inputs from "@/components/inputs/inputs";
import styles from "./page.module.css";
import Result from "@/components/result/result";
import Card from "@/components/card/card";

export default function Home() {
  return (
    <>
      <main className={styles.mainPage}>
        <div>
          <h1>Juros Compostos</h1>
          <p>Simule a evolução do seu capital considerando aportes mensais e uma taxa recorrente.</p>
        </div>
        <div className={styles.cardsContainer}>
          <Card>
            <Inputs />
          </Card>
          <Card>
            <Result />
          </Card>
        </div>
        <div>
          <h2>Evolução de patrimônio</h2>
        </div>
      </main>
      <footer>
        <span>Dielson Sales de Carvalho</span>
      </footer>
    </>
  );
}
