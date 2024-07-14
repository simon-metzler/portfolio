import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center p-24 gap-10">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
        omnis cumque provident veniam, sapiente facilis? Ullam aspernatur unde
        perspiciatis optio dolorum placeat repellat, aliquam quae omnis, maiores
        neque obcaecati similique!
      </p>
      <Image
        src="/weasel.png"
        alt="Weasel"
        width={200}
        height={200}
        className="rounded"
      />
    </main>
  );
}
