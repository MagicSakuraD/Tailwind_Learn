import SideBar from "./SideBar";
import { Montserrat, Lobster_Two } from "@next/font/google";

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const lobster = Lobster_Two({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-lobster",
});

export default async function Home() {
  return (
    <>
      <div className="flex gap-36">
        <h1 className="text-green-600 text-center font-bold">
          <SideBar />
        </h1>
        <nav>
          <ul className="nav-items flex flex-col gap-5 text-xl sm:text-sm max-w-2xl md:mx-auto lg:flex-row">
            <li className=" text-violet-400">Nice One</li>
            <li className="text-palette">Nice One</li>
            <li>Nice One</li>
          </ul>
        </nav>
        <main>
          <div className="text-center p-12 text-lg font-bold bg-gray-900 text-white text-opacity-50">
            <h2>Valorant💥</h2>
          </div>
        </main>
        <div className="flex flex-col gap-9">
          <button className="bg-blue-500 hover:bg-red-500  active:bg-green-500 focus:bg-yellow-500 font-bold text-white py-2 px-4 rounded transition-colors duration-500">
            quinn💦
          </button>
          <button className="btn btn-primary">Button</button>
          <button className="btn btn-accent btn-outline">Three</button>
        </div>
      </div>
    </>
  );
}
