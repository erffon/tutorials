interface ILayout {
  children: React.ReactNode;
}

const layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="relative">
      <section className="w-1/3 bg-zinc-800 absolute left-0 top-40 flex flex-col items-center justify-start border border-zinc-700 rounded-lg">
        <h2 className="py-3 px-40 border-b border-white">Latest news</h2>
        <section>
          <div className="px-10 border border-zinc-700">
            <h2>News Title 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              architecto recusandae nam unde numquam, dolorem quasi quo
              veritatis nihil quis quam non explicabo doloremque? Explicabo
              doloremque aspernatur corporis nemo laboriosam.
            </p>
          </div>
        </section>
      </section>
      <section>{children}</section>
    </div>
  );
};

export default layout;
