import Link from "next/link";

interface ISinglePost {
  params: {
    id: string;
  };
}
const SinglePost: React.FC<ISinglePost> = ({ params }) => {
  return (
    <div className="flex flex-col h-screen justify-center items-center py-10">
      <h1 className="text-center font-bold text-2xl">Single Post page</h1>
      <div className="flex justify-center items-center gap-10 p-10">
        <Link href="/">
          <button className=" border border-white px-5 py-2 rounded-full hover:bg-zinc-800">
            Home
          </button>
        </Link>
        <Link href="/about">
          <button className=" border border-white px-5 py-2 rounded-full hover:bg-zinc-800">
            About
          </button>
        </Link>
        <Link href="/blog">
          <button className=" border border-white px-5 py-2 rounded-full hover:bg-zinc-800">
            Blog
          </button>
        </Link>
      </div>
      <div>
        <p className="font-semibold text-white/60 mb-2">blog id is:</p>
        <p className="border p-3 border-sky-400 rounded-lg text-center">
          {params.id}
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
