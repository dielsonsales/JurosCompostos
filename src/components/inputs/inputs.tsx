import styles from "./inputs.module.css";

export default function Inputs() {
  return (
    <div className={styles.inputsContainer}>
      <p className="defaultText">Valor inicial (R$)</p>
      <input type="text" inputMode="decimal" className={styles.input} />
      <p className="defaultText">Aporte mensal (R$)</p>
      <input type="text" inputMode="decimal" className={styles.input} />
      <p className="defaultText">Taxa (%)</p>
      <input type="text" inputMode="decimal" className={styles.input} />
      <p className="defaultText">Período</p>
      <input type="text" inputMode="decimal" className={styles.input} />
    </div>
  );
}