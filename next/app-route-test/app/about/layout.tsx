import DATA from "@/constants/api-routes";
import Image from "next/image";

interface ILayout {
  children: React.ReactNode;
}

const layout: React.FC<ILayout> = async ({ children }) => {
  // const CHAR = await getData();

  return (
    <div className="relative">
      <section>{children}</section>
    </div>
  );
};

export default layout;
