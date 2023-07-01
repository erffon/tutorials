import Link from "next/link";

const Blog = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center py-10 gap-10">
      <h1 className="text-center font-bold text-2xl">Blog page</h1>
      <div className="flex gap-10">
        <div className="border border-zinc-700 bg-zinc-900 rounded-xl p-4 flex flex-col justify-center items-center gap-5 hover:shadow-lg hover:shadow-violet-400/20">
          <p className="font-semibold text-lg text-white/80">
            Single Post Card
          </p>
          <p className="border border-violet-400 px-5 py-1 rounded-lg text-white/60">
            id=1
          </p>
          <Link href="/blog/1">
            <button className=" border border-white/80 px-10 py-2 text-white/60 rounded-full hover:bg-zinc-800">
              Read More
            </button>
          </Link>
        </div>
        <div className="border border-zinc-700 bg-zinc-900 rounded-xl p-4 flex flex-col justify-center items-center gap-5 hover:shadow-lg hover:shadow-sky-400/20">
          <p className="font-semibold text-lg text-white/80">
            Single Post Card
          </p>
          <p className="border border-sky-400 px-5 py-1 rounded-lg text-white/60">
            id=2
          </p>
          <Link href="/blog/2">
            <button className=" border border-white/80 px-10 py-2 text-white/60 rounded-full hover:bg-zinc-800">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
