import DATA from "@/constants/api-routes";
import Image from "next/image";

interface ILayout {
  children: React.ReactNode;
}

const getData = async () => {
  const randomID = Math.floor(Math.random() * 826) + 1;
  const res = await fetch(`${DATA.ALL_CHARACTERS}${randomID}`, {
    cache: "no-store",
  });
  return res.json();
};

const layout: React.FC<ILayout> = async ({ children }) => {
  const CHAR = await getData();
  console.log(
    "🚀 ~ file: layout.tsx:18 ~ constlayout:React.FC<ILayout>= ~ CHAR:",
    CHAR
  );
  return (
    <div className="relative">
      <section className="w-1/3 bg-zinc-800 absolute left-0 top-40 flex flex-col items-center justify-start border border-zinc-700 rounded-lg">
        <h2 className="py-3 px-40 border-b border-white">Latest news</h2>
        <section className="">
          <div className="px-10 border border-zinc-700 flex flex-col justify-center items-start gap-4 py-5">
            <Image src={CHAR.image} alt={CHAR.name} width={150} height={150} />
            <p className="px-2 py-1 bg-red-500/30 rounded-lg">wanted</p>
            <h2 className="text-xl font-semibold text-zinc-200 uppercase">
              {CHAR.name}
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              architecto recusandae nam unde numquam, dolorem quasi quo
              veritatis nihil quis quam non explicabo doloremque? Explicabo
              doloremque aspernatur corporis nemo laboriosam.
            </p>
            <p className="bg-zinc-900 rounded-lg px-2 py-1">
              <strong>Dynamic</strong> data fetching has been used here
            </p>
          </div>
        </section>
      </section>
      <section>{children}</section>
    </div>
  );
};

export default layout;
