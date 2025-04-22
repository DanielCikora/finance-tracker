import Card from "@/components/ui/Card";
type BalancePropsDataTypes = {
  remainingSalary: number;
  currencySymbol: string;
};
export default function Balance({
  remainingSalary,
  currencySymbol,
}: BalancePropsDataTypes) {
  return (
    <Card
      cardTitle='Total Balance'
      cardDescription={`${remainingSalary} ${currencySymbol}`}
    />
  );
}
