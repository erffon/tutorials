interface IBlogLayout {
  children: React.ReactNode;
}

const BlogLayout: React.FC<IBlogLayout> = ({ children }) => {
  return (
    <div className="py-20">
      <div className="py-6 text-center mx-auto border border-zinc-700 rounded-lg -mb-20 bg-zinc-800">
        Blogs Tree Layout
      </div>
      {children}
    </div>
  );
};

export default BlogLayout;
