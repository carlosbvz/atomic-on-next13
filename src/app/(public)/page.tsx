import NetworkPanel from "@/organisms/panels/networkPanel";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script src="https://d3js.org/d3.v4.min.js" strategy="afterInteractive" />
      <NetworkPanel />
    </>
  );
}
