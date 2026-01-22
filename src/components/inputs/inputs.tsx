import { PeriodUnit, TimeUnit } from "@/lib/definitions";
import styles from "./inputs.module.css";
import { NumericFormat } from "react-number-format";

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

function safeNumberValue(value: string): number {
  return Number(value) || 0;
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
      <NumericFormat
        className={styles.input}
        value={initialValue}
        thousandSeparator="."
        decimalSeparator=","
        decimalScale={2}
        fixedDecimalScale
        allowNegative={false}
        onValueChange={(values) => {
          onInitialValueChange(values.floatValue || 0);
        }}
      />
      <p className="defaultText" style={{ marginTop: 15, marginBottom: 5 }}>
        Aporte mensal (R$)
      </p>
      <NumericFormat
        className={styles.input}
        value={monthlyInvestment}
        thousandSeparator="."
        decimalSeparator=","
        decimalScale={2}
        fixedDecimalScale
        allowNegative={false}
        onValueChange={(values) => {
          onMonthlyInvestmentChange(values.floatValue || 0);
        }}
      />
      <p className="defaultText" style={{ marginTop: 15, marginBottom: 5 }}>
        Taxa (%)
      </p>
      <div className={styles.dropDownContainer}>
        <select
          className={styles.dropDown}
          value={timeUnit}
          onChange={(newValue) => {
            const newTimeUnit = newValue.target.value as TimeUnit;
            onTimeUnitChange(newTimeUnit);
          }}
        >
          <option value={TimeUnit.Monthly}>Mensal</option>
          <option value={TimeUnit.Yearly}>Anual</option>
        </select>
        <NumericFormat
          className={styles.input}
          value={interestRate}
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={2}
          fixedDecimalScale
          allowNegative={false}
          onValueChange={(values) => {
            onInterestRateChange(values.floatValue || 0);
          }}
        />
      </div>
      <p className="defaultText" style={{ marginTop: 15, marginBottom: 5 }}>
        Período
      </p>
      <div className={styles.dropDownContainer}>
        <select
          className={styles.dropDown}
          value={periodUnit}
          onChange={(newValue) => {
            const newPeriodUnit = newValue.target.value as PeriodUnit;
            onPeriodUnitChange(newPeriodUnit);
          }}
        >
          <option value={PeriodUnit.Months}>Meses</option>
          <option value={PeriodUnit.Years}>Anos</option>
        </select>
        <NumericFormat
          className={styles.input}
          value={period}
          decimalScale={0}
          allowNegative={false}
          onValueChange={(values) => {
            onPeriodChange(values.floatValue || 0);
          }}
        />
      </div>
    </div>
  );
}
