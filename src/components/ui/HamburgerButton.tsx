type HamburgerButtonDataTypes = {
  handleViewSidebar: () => void;
  viewSideBar: boolean;
};
export default function HamburgerButton({
  handleViewSidebar,
  viewSideBar,
}: HamburgerButtonDataTypes) {
  return (
    <button
      type='button'
      className={`hamburger-button cursor-pointer flex flex-col gap-1 ${
        viewSideBar ? "static" : "fixed"
      } top-0 left-0 p-3`}
      onClick={handleViewSidebar}
    >
      <span
        className={`transition-all duration-500 ease-in-out block rounded h-1 w-9 bg-black ${
          viewSideBar ? "rotate-45 -translate-y-[2px] bg-red-500" : ""
        }`}
      ></span>
      <span
        className={`transition-all duration-500 ease-in-out block rounded h-1 w-9 bg-black ${
          viewSideBar ? "-ml-[300px]" : ""
        }`}
      ></span>
      <span
        className={`transition-all duration-500 ease-in-out block rounded h-1 w-9 bg-black ${
          viewSideBar ? "-rotate-45 -translate-y-[18px] bg-red-500" : ""
        }`}
      ></span>
    </button>
  );
}
