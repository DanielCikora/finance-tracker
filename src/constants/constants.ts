import {
  SalaryCurrencyType,
  SalaryTimePeriod,
} from "@/types/financesDataTypes";

export const currencyOptions: SalaryCurrencyType[] =
  Object.values(SalaryCurrencyType);

export const timePeriodOptions: SalaryTimePeriod[] =
  Object.values(SalaryTimePeriod);

export const chartOptions = {
  title: "Finance Tracker",
  pieHole: 0.4,
  is3D: true,
  pieStartAngle: 100,
  sliceVisibilityThreshold: 0.02,
  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      color: "black",
      fontSize: 16,
    },
  },
  colors: ["#395B64", "#E63946"],
};
