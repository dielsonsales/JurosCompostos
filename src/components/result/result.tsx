import styles from "./result.module.css";

interface ResultProps {
  finalResult: number;
}

export default function Result({ finalResult }: ResultProps) {
  const formattedResult = `R$ ${finalResult}`;
  return (
    <div>
      <p className="subTitle">Resultado estimado</p>
      <p className="title">{formattedResult}</p>
      <p className="defaultText">Total aportado: R$ 3.900,00</p>
      <p className="defaultText">Juros acumulados: R$258,98</p>
    </div>
  );
}
