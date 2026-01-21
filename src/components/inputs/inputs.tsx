import { PeriodUnit, TimeUnit } from "@/lib/definitions";
import styles from "./inputs.module.css";

interface InputsProps {
  initialValue: number;
  onInitialValueChange: (value: number) => void;
  monthlyInvestment: number;
  onMonthlyInvestmentChange: (value: number) => void;
  interestRate: number;
  onInterestRateChange: (value: number) => void;
  timeUnit: TimeUnit;
  onTimeUnitChange: (value: TimeUnit) => void;
  period: number;
  onPeriodChange: (value: number) => void;
  periodUnit: PeriodUnit;
  onPeriodUnitChange: (value: PeriodUnit) => void;
}

export default function Inputs({
  initialValue,
  onInitialValueChange,
  monthlyInvestment,
  onMonthlyInvestmentChange,
  interestRate,
  onInterestRateChange,
  timeUnit,
  onTimeUnitChange,
  period,
  onPeriodChange,
  periodUnit,
  onPeriodUnitChange,
}: InputsProps) {
  return (
    <div className={styles.inputsContainer}>
      <p className="defaultText">Valor inicial (R$)</p>
      <input type="text" inputMode="decimal" className={styles.input} />
      <p className="defaultText" style={{ marginTop: 15, marginBottom: 5 }}>
        Aporte mensal (R$)
      </p>
      <input type="text" inputMode="decimal" className={styles.input} />
      <p className="defaultText" style={{ marginTop: 15, marginBottom: 5 }}>
        Taxa (%)
      </p>
      <div className={styles.dropDownContainer}>
        <select className={styles.dropDown}>
          <option value="mensal">Mensal</option>
          <option value="anual">Anual</option>
        </select>
        <input type="text" inputMode="decimal" className={styles.input} />
      </div>
      <p className="defaultText" style={{ marginTop: 15, marginBottom: 5 }}>
        Período
      </p>
      <div className={styles.dropDownContainer}>
        <select className={styles.dropDown}>
          <option value="meses">Meses</option>
          <option value="anos">Anos</option>
        </select>
        <input type="text" inputMode="decimal" className={styles.input} />
      </div>
    </div>
  );
}
