import styles from "./inputs.module.css";

export default function Inputs() {
  return (
    <div>
      <p>Valor inicial (R$)</p>
      <input type="text" className={styles.input} />
      <p>Aporte mensal (R$)</p>
      <input type="text" className={styles.input} />
      <p>Taxa (%)</p>
      <input type="text" className={styles.input} />
      <p>Período</p>
      <input type="text" className={styles.input} />
    </div>
  );
}