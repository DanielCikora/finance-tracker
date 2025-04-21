import {
  ExpenseCategory,
  SalaryCurrencyType,
  SalaryTimePeriod,
} from "@/types/financesDataTypes";

export const currencyOptions: SalaryCurrencyType[] =
  Object.values(SalaryCurrencyType);

export const timePeriodOptions: SalaryTimePeriod[] =
  Object.values(SalaryTimePeriod);

export const expenseCategoryOptions: ExpenseCategory[] =
  Object.values(ExpenseCategory);

export const chartOptions = {
  alignment: "center",
  is3D: true,
  pieStartAngle: 100,
  backgroundColor: "transparent",
  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      color: "white",
      fontSize: 16,
    },
  },
  colors: ["#22c55e", "#ef4444"],
};
