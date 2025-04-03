import Finance from "@/components/dashboard/finances/Finance";
import Header from "@/components/dashboard/header/Header";
import Stocks from "@/components/dashboard/stocks/Stocks";
export default function Dashboard() {
  return (
    <>
      <header className='header'>
        <Header />
      </header>
      <section className='dashboard-stocks'>
        <Stocks />
      </section>
      <main className='dashboard'>
        <section className='dashboard-stocks'>
          <Finance />
        </section>
      </main>
    </>
  );
}
