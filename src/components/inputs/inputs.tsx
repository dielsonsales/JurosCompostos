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
      <input
        type="text"
        inputMode="decimal"
        className={styles.input}
        value={initialValue}
        onChange={(newValue) =>
          onInitialValueChange(safeNumberValue(newValue.target.value))
        }
      />
      <p className="defaultText" style={{ marginTop: 15, marginBottom: 5 }}>
        Aporte mensal (R$)
      </p>
      <input
        type="text"
        inputMode="decimal"
        className={styles.input}
        value={monthlyInvestment}
        onChange={(newValue) =>
          onMonthlyInvestmentChange(safeNumberValue(newValue.target.value))
        }
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
        <input
          type="text"
          inputMode="decimal"
          className={styles.input}
          value={interestRate}
          onChange={(newValue) =>
            onInterestRateChange(safeNumberValue(newValue.target.value))
          }
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
        <input
          type="text"
          inputMode="decimal"
          className={styles.input}
          value={period}
          onChange={(newValue) =>
            onPeriodChange(safeNumberValue(newValue.target.value))
          }
        />
      </div>
    </div>
  );
}
