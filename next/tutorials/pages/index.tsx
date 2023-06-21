import Image from "next/image";
import { Inter } from "next/font/google";
import { Container } from "@/styles/home.styled";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Container primary={true}>hello world</Container>
    </main>
  );
}
