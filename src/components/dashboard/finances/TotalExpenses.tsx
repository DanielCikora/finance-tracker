import Card from "@/components/ui/Card";
type TotalsPropsDataTypes = {
  totalExpensesAmount: number;
  currencySymbol: string;
};
export default function TotalExpenses({
  totalExpensesAmount,
  currencySymbol,
}: TotalsPropsDataTypes) {
  return (
    <Card
      cardTitle='Expenses'
      descriptionStyle={`${
        totalExpensesAmount <= 0 ? "text-white" : "text-expense"
      }`}
      cardDescription={`- ${totalExpensesAmount} ${currencySymbol}`}
    />
  );
}
