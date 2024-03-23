import Header from "@/components/header";
import SearchInput from "@/components/search-input";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-start p-10 mx-auto dark:bg-absolute-dark bg-white">
      <div className="w-full max-w-3xl">
        <Header />
        <div className="w-full my-10 px-2 md:px-4">
          <SearchInput />
        </div>
        <main></main>
      </div>
    </div>
  );
}
