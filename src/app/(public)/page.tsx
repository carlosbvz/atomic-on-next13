import Link from "@/atoms/links/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to Atomic Design on Nextjs 13</h1>
      <p>
        {`This small project is based on the idea proposed by Brad Frost in his book `}
        <Link href="https://atomicdesign.bradfrost.com/chapter-2/">
          Atomic Design
        </Link>
        {" with a small variation."}
      </p>
      <p>In summary, we use 6 levels instead of the 5 mentioned in the book.</p>
      <p>
        We then divide this 6 leves into 2 groups: Components type and
        Containers type
      </p>
      <ul>
        <li>Atoms</li>
        <li>Molecules</li>
        <li>Organisms</li>
        <li>Layouts</li>
        <li>Templates</li>
        <li>Pages</li>
      </ul>
    </>
  );
}
