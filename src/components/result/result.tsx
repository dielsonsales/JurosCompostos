import styles from "./result.module.css";

interface ResultProps {
  finalResult: number;
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export default function Result({ finalResult }: ResultProps) {
  const formattedResult = formatCurrency(finalResult);
  return (
    <div>
      <p className="subTitle">Resultado estimado</p>
      <p className="title">{formattedResult}</p>
      <p className="defaultText">Total aportado: R$ 3.900,00</p>
      <p className="defaultText">Juros acumulados: R$258,98</p>
    </div>
  );
}
