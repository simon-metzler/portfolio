import Image from "next/image";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="card bg-base-100 w-1/3 shadow-xl">
        <div className="card-body">
          <h1 className="text-5xl">About me</h1>
          <div className="flex flex-row gap-10">
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
        </div>
      </div>
    </main>
  );
}
