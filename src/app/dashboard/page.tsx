import Chart from "@/components/dashboard/charts/Chart";
import Finance from "@/components/dashboard/finances/Finance";
import Stocks from "@/components/dashboard/stocks/Stocks";
export default function Dashboard() {
  return (
    <main className='dashboard'>
      <section className='dashboard-stocks'>
        <Finance />
      </section>
      <section className='dashboard-stocks'>
        <Stocks />
      </section>
      <section className='dashboard-chart'>{/* <Chart /> */}</section>
    </main>
  );
}
