import Card from "@/components/ui/Card";
type TotalsPropsDataTypes = {
  totalExpensesAmount: number;
  totalExpenseCurrency: string;
};
export default function TotalExpenses({
  totalExpensesAmount,
  totalExpenseCurrency,
}: TotalsPropsDataTypes) {
  return (
    <Card
      cardTitle='Expenses'
      descriptionStyle={`${
        totalExpensesAmount <= 0 ? "text-white" : "text-expense"
      }`}
      cardDescription={`- ${totalExpensesAmount} ${totalExpenseCurrency}`}
    />
  );
}
