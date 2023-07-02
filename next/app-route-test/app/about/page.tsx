import Link from "next/link";
import DATA from "@/constants/api-routes";
import Image from "next/image";

const getData = async () => {
  const randomID = Math.floor(Math.random() * 826) + 1;
  const res = await fetch(`${DATA.ALL_CHARACTERS}${randomID}`, {
    cache: "no-store",
    next: { revalidate: 0 },
  });
  return res.json();
};

const About = async () => {
  const CHAR = await getData();
  return (
    <div className="flex flex-col h-screen justify-center items-center py-10">
      <h1 className="text-center font-bold text-2xl">About page</h1>
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
    </div>
  );
};

export default About;
