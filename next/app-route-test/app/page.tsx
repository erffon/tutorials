export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center py-10 gap-3">
      <h1 className="text-center font-bold text-2xl ">Home page</h1>
      <p className="bg-zinc-300/20 py-2 px-4 rounded-lg">
        <strong>static</strong> data fetching has been used here
      </p>
      <div className="flex flex-wrap"></div>
    </div>
  );
}
