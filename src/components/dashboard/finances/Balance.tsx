import Card from "@/components/ui/Card";
type BalancePropsDataTypes = {
  salaryCurrency: string;
  remainingSalary: number;
};
export default function Balance({
  remainingSalary,
  salaryCurrency,
}: BalancePropsDataTypes) {
  return (
    <Card
      cardTitle='Total Balance'
      cardDescription={`${remainingSalary} ${salaryCurrency}`}
    />
  );
}
