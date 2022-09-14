import { Text } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <header className="flex flex-col gap-10 text-center items-center my-32">
      <Text
        css={{
          textGradient: "45deg, $blue600 -20%, $pink200 100%",
        }}
        size={80}
        className="text-7xl md:text-9xl font-black tracking-tight"
      >
        Ariel.
      </Text>
      <Text
        css={{
          textGradient: "45deg, $purple600 -20%, $pink600 100%",
        }}
        size={80}
        className="text-7xl md:text-9xl font-black tracking-tight"
      >
        Martinez.
      </Text>
      <Text
        css={{
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }}
        size={80}
        className="text-7xl md:text-9xl font-black tracking-tight"
      >
        Developer.
      </Text>
      <Link href="/about">
        <a
          type="button"
          className="mt-8 md:mt-16 rounded-lg bg-sky-500/75 border border-white hover:border-none text-white hover:bg-transparent hover:text-pink-400 hover:ring-2 ring-pink-500 text-lg font-semibold p-2 w-24 md:w-40"
        >
          Welcome
        </a>
      </Link>
    </header>
  );
}
