import Portfolio_Intro from "./components/Portfolio_Intro";
import Portfolio_Pagination from "./components/Portfolio_Pagination";

export default function Portfolio({ portfolio }) {
  return (
    <div className="flex flex-col gap-10">
      <Portfolio_Intro />
      <Portfolio_Pagination portfolio={portfolio} />
    </div>
  );
}
