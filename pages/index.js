import CounterStats from "../components/CounterStats";
import Link from "../components/Link";

export default function HomePage({ sum, average, dragonCount }) {
  return (
    <>
      <CounterStats sum={sum} average={average} dragonCount={dragonCount} />

      <Link href="/counters">To the counters →</Link>
    </>
  );
}
