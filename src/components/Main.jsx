import { Outlet } from "react-router-dom";

function Main() {
  return (
    <main className="min-h-[calc(100vh-88px)] flex flex-col justify-center items-center gap-20 pt-24 px-6 md:pt-36 md:px-10 lg:pt-32 pb-14 lg:px-6">
      <Outlet />
    </main>
  );
}

export default Main;
