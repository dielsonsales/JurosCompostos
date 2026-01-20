import styles from "./inputs.module.css";

export default function Inputs() {
  return (
    <div>
      <p>Valor inicial (R$)</p>
      <input type="text" />
      <p>Aporte mensal (R$)</p>
      <input type="text" />
      <p>Taxa (%)</p>
      <input type="text" />
      <p>Período</p>
      <input type="text" />
    </div>
  );
}