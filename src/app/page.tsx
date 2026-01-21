"use client";

import Inputs from "@/components/inputs/inputs";
import styles from "./page.module.css";
import Result from "@/components/result/result";
import Card from "@/components/card/card";
import { useState } from "react";
import { PeriodUnit, TimeUnit } from "@/lib/definitions";

const defaultInitialValue = 1500;
const defaultMonthlyInvestment = 200;
const defaultInterestRate = 0.8;
const defaultTimeUnit = TimeUnit.Monthly;
const defaultPeriod = 12;
const defaultPeriodUnit = PeriodUnit.Months;

function calculateFinalResult(
  initialValue: number,
  monthlyInvestment: number,
  interestRate: number,
  timeUnit: TimeUnit,
  period: number,
  periodUnit: PeriodUnit,
) {
  return initialValue;
}

export default function Home() {
  const [initialValue, setInitialValue] = useState(defaultInitialValue);
  const [monthlyInvestment, setMonthlyInvestment] = useState(
    defaultMonthlyInvestment,
  );

  const [interestRate, setInterestRate] = useState(defaultInterestRate);
  const [timeUnit, setTimeUnit] = useState(defaultTimeUnit);

  const [period, setPeriod] = useState(defaultPeriod);
  const [periodUnit, setPeriodUnit] = useState(defaultPeriodUnit);

  const finalResult = calculateFinalResult(
    initialValue,
    monthlyInvestment,
    interestRate,
    timeUnit,
    period,
    periodUnit,
  );

  return (
    <div className={styles.mainContainer}>
      <main className={styles.mainPage}>
        <div>
          <h1 className="title">Juros Compostos</h1>
          <p className="defaultText">
            Simule a evolução do seu capital considerando aportes mensais e uma
            taxa recorrente.
          </p>
        </div>
        <div className={styles.cardsContainer}>
          <Card>
            <Inputs
              initialValue={initialValue}
              onInitialValueChange={(value) => setInitialValue(value)}
              monthlyInvestment={monthlyInvestment}
              onMonthlyInvestmentChange={(value) => setMonthlyInvestment(value)}
              interestRate={interestRate}
              onInterestRateChange={(value) => setInterestRate(value)}
              timeUnit={timeUnit}
              onTimeUnitChange={(value) => setTimeUnit(value)}
              period={period}
              onPeriodChange={(value) => setPeriod(value)}
              periodUnit={periodUnit}
              onPeriodUnitChange={(value) => setPeriodUnit(value)}
            />
          </Card>
          <Card>
            <Result finalResult={finalResult} />
          </Card>
        </div>
        <div>
          <h2>Evolução de patrimônio</h2>
        </div>
      </main>
      <footer>
        <span>Dielson Sales de Carvalho</span>
      </footer>
    </div>
  );
}
