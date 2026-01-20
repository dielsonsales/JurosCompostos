import styles from "./result.module.css";

export default function Result() {
  return (
    <div>
      <p className="subTitle">Resultado estimado</p>
      <p>R$ 4.158,98</p>
      <p>Total aportado: R$ 3.900,00</p>
      <p>Juros acumulados: R$258,98</p>
    </div>
  );
}