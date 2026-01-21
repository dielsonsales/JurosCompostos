"use client";

import Inputs from "@/components/inputs/inputs";
import styles from "./page.module.css";
import Result from "@/components/result/result";
import Card from "@/components/card/card";
import { useState } from "react";
import { PeriodUnit, TimeUnit } from "@/lib/definitions";

export default function Home() {
  const [initialValue, setInitialValue] = useState(0);
  const [monthlyInvestment, setMonthlyInvestment] = useState(0);

  const [interestRate, setInterestRate] = useState(0);
  const [timeUnit, setTimeUnit] = useState(TimeUnit.Monthly);

  const [period, setPeriod] = useState(0);
  const [periodUnit, setPeriodUnit] = useState(PeriodUnit.Months);

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
            <Result />
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
