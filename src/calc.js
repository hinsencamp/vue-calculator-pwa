const roundValue = value => Math.round(value * 100) / 100;

const calcChurchTax = (taxableValue, state) => {
  const JBMG = taxableValue;
  const JW = JBMG * 100;
  const taxRateByState = {
    BaWue: 0.08,
    Bayern: 0.08,
    Other: 0.09
  };

  return roundValue((JW * taxRateByState[state]) / 100);
};

const GFB = { single: 9000.0, married: 18000.0 };

const incomeLines = {
  0: 13997,
  1: 54950,
  2: 260533
};

const calcIncomeTax = (income, relationship) => {
  const KZTAB = relationship === "single" ? 1 : 2;
  let zvE = income;

  if (KZTAB === 2) {
    zvE = income / 2;
  }

  let ST;

  const map = {
    lowest: calcLowestIncome(zvE),
    low: calcLowIncome(zvE, relationship),
    medium: calcMidIncome(zvE),
    high: calcHighIncome(zvE),
    highest: calcHighestIncome(zvE)
  };

  if (zvE < GFB[relationship] + 1) {
    ST = map["lowest"];
  } else if (zvE < incomeLines[0]) {
    ST = map["low"];
  } else if (zvE < incomeLines[1]) {
    ST = map["medium"];
  } else if (zvE < incomeLines[2]) {
    ST = map["high"];
  } else {
    ST = map["highest"];
  }

  if (KZTAB === 2) {
    ST = ST * 2;
  }

  return Math.round(ST);
};

const calcLowestIncome = income => {
  const ST = income * 0;
  return ST;
};
const calcLowIncome = (income, relationship) => {
  const Y = (income - GFB[relationship]) / 10000;
  const RW = Y * 997.8 + 1400;
  const ST = RW * Y;
  return ST;
};

const calcMidIncome = income => {
  const Y = (income - 13996) / 10000;
  const RW = (Y * 220.13 + 2397) * Y;
  const ST = RW + 948.49;
  return ST;
};

const calcHighIncome = income => {
  const ST = income * 0.42 - 8621.75;
  return ST;
};

const calcHighestIncome = income => {
  const ST = income * 0.45 - 16437.7;
  return ST;
};

const calcSoli = (taxableValue, relationship) => {
  const JBMG = taxableValue;
  // 1 = basic tarif ; 2 = splitting tarif
  const KZTAB = relationship === "single" ? 1 : 2;
  const SOLZFREI = 972 * KZTAB;
  let SOLZLZZ;

  if (JBMG < SOLZFREI) {
    SOLZLZZ = 0;
    return roundValue(SOLZLZZ);
  }

  let SOLZJ = (JBMG * 5.5) / 100;

  const SOLZMIN = ((JBMG - SOLZFREI) * 20) / 100;

  if (SOLZJ > SOLZMIN) {
    SOLZJ = SOLZMIN;
  }

  const JW = SOLZJ * 100;
  SOLZLZZ = JW / 100;

  return roundValue(SOLZLZZ);
};

const calcTaxes = inputs => {
  const incomeValue = parseInt(inputs.incomeValue);
  const incomeTax = calcIncomeTax(incomeValue, inputs.relationship);
  const soli = calcSoli(incomeTax, inputs.relationship);
  const churchTax = inputs.isInChurch
    ? calcChurchTax(incomeTax, inputs.stateOfResidence)
    : 0;
  const netIncome = ((incomeValue - incomeTax - soli - churchTax) * 100) / 100;

  return {
    incomeValue,
    incomeTax,
    soli,
    churchTax,
    netIncome
  };
};

export { calcChurchTax, calcIncomeTax, calcSoli, calcTaxes };
