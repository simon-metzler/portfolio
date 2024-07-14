import Image from "next/image";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      <h1>Heading</h1>
      <div className="flex flex-row items-center p-24 gap-10">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          voluptatibus debitis labore explicabo odit hic necessitatibus,
          possimus maiores vero molestias in voluptate unde. Consequatur hic
          earum inventore perferendis labore modi!
        </p>
        <Image
          src="/weasel.png"
          alt="Weasel"
          width={200}
          height={200}
          className="rounded"
        />
      </div>
      <Timeline />
    </main>
  );
}
