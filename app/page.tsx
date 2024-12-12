import Header from "./_components/header";
import QuickSearch from "./_components/quick-search";
import Search from "./_components/search";

export default function Home() {
  return (
    <div className="py-5 space-y-5">
      <Header />
      <Search />
      <QuickSearch />
    </div>
  );
}
