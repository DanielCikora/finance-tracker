"use client";
import { useState } from "react";
import HamburgerButton from "../ui/HamburgerButton";
export default function Navigation() {
  const [viewSideBar, setViewSideBar] = useState<boolean>(false);
  const handleViewSidebar = () => {
    setViewSideBar((prevViewSidebar) => !prevViewSidebar);
  };
  return (
    <aside className='relative overflow-hidden'>
      <HamburgerButton
        viewSideBar={viewSideBar}
        handleViewSidebar={handleViewSidebar}
      />
      <nav
        className={`${
          viewSideBar ? "left-0" : "overflow-hidden -left-[300px]"
        } fixed top-0 max-w-[300px] p-2 z-[9999] min-h-dvh bg-light border-r-2 border-solid border-primary w-full transition-all duration-500 ease-in-out`}
      >
        <div className='flex justify-between items-center'>
          <h2 className='font-medium text-3xl mb-4'>Expense Tracker</h2>
          <HamburgerButton
            viewSideBar={viewSideBar}
            handleViewSidebar={handleViewSidebar}
          />
        </div>
      </nav>
    </aside>
  );
}
