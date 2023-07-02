import DATA from "@/constants/api-routes";
import Image from "next/image";

//static data fetching
const homeData = async () => {
  const res = await fetch(DATA.ALL_CHARACTERS);
  return res.json();
};

// page component
async function Home() {
  const CHARS = await homeData();
  return (
    <div className="flex flex-col h-screen justify-center items-center py-10 gap-3">
      <h1 className="text-center font-bold text-2xl ">Home page</h1>
      <p className="bg-zinc-300/20 py-2 px-4 rounded-lg">
        <strong>static</strong> data fetching has been used here
      </p>
      <ul className="flex flex-wrap gap-5 mt-10">
        {CHARS.results.slice(0, 3).map((item: any) => {
          return (
            <li
              key={item.id}
              className="py-4 px-5 bg-zinc-800 border border-zinc-400 rounded-xl flex flex-col gap-2 items-center justify-center"
            >
              <Image
                alt={item.name}
                src={item.image}
                width={100}
                height={100}
                className="rounded-md"
              />
              <h2 className="font-semibold text-lg">{item.name}</h2>
              <p className="bg-zinc-200/20 rounded-full px-4 py-2">
                status: <span>{item.status}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Home;
