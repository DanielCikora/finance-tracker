import Chart from "@/components/dashboard/charts/Chart";
import Finance from "@/components/dashboard/finances/Finance";
import Header from "@/components/dashboard/header/Header";
import Stocks from "@/components/dashboard/stocks/Stocks";
export default function Dashboard() {
  return (
    <>
      <header className='header'>
        <Header />
      </header>
      <main className='dashboard'>
        <section className='dashboard-stocks'>
          <Finance />
        </section>
        <section className='dashboard-stocks'>
          <Stocks />
        </section>
        <section className='dashboard-chart'>{/* <Chart /> */}</section>
      </main>
    </>
  );
}
