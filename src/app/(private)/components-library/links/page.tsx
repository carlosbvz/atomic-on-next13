import Link from "@/atoms/links/link";

type Props = {};

export default function LinksPage(props: Props) {
  return (
    <div>
      <h3>Link Component</h3>
      <p>Samples:</p>
      <Link href="/components-library/links">Internal Link</Link>
    </div>
  );
}
