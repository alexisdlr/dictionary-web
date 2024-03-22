import Header from "@/components/header";
import SearchInput from "@/components/search-input";

export default function Home() {
  return (
    <main className="flex max-w-3xl min-h-screen flex-col items-center justify-start p-10 mx-auto dark:bg-absolute-dark">
      <Header />
      <div className="w-full my-10 px-4">
        <SearchInput />
      </div>
    </main>
  );
}
