import {
  faGraduationCap,
  faFilm,
  faUtensils,
  faHeartbeat,
  faChartLine,
  faPuzzlePiece,
  faHome,
  faPiggyBank,
  faBus,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
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
export const useCategoryIcon = (category: ExpenseCategory) => {
  switch (category) {
    case ExpenseCategory.EDUCATION:
      return faGraduationCap;
    case ExpenseCategory.ENTERTAINMENT:
      return faFilm;
    case ExpenseCategory.FOOD:
      return faUtensils;
    case ExpenseCategory.HEALTHCARE:
      return faHeartbeat;
    case ExpenseCategory.INVESTMENTS:
      return faChartLine;
    case ExpenseCategory.MISCELLANEOUS:
      return faPuzzlePiece;
    case ExpenseCategory.RENT:
      return faHome;
    case ExpenseCategory.SAVINGS:
      return faPiggyBank;
    case ExpenseCategory.TRANSPORTATION:
      return faBus;
    case ExpenseCategory.UTILITIES:
      return faBolt;
    default:
      return null;
  }
};
export const useCurrencySymbol = (symbol: SalaryCurrencyType) => {
  switch (symbol) {
    case SalaryCurrencyType.EUR:
      return "€";
    case SalaryCurrencyType.GBP:
      return "£";
    case SalaryCurrencyType.INR:
      return "₹";
    case SalaryCurrencyType.USD:
      return "$";
  }
};
