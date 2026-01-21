import styles from "./result.module.css";

interface ResultProps {
  finalResult: number;
  totalInvested: number;
  totalInterest: number;
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export default function Result({
  finalResult,
  totalInvested,
  totalInterest,
}: ResultProps) {
  return (
    <div>
      <p className="subTitle">Resultado estimado</p>
      <p className="title">{formatCurrency(finalResult)}</p>
      <p className="defaultText">{`Total aportado: ${formatCurrency(totalInvested)}`}</p>
      <p className="defaultText">{`Juros acumulados: ${formatCurrency(totalInterest)}`}</p>
    </div>
  );
}
