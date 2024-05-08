import Image from "next/image";
import { List, ListMainView, ListTitle } from "./components/List";
import { AppProvider } from "./state/global";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-row justify-center items-center h-3/4 p-20">
        <AppProvider value={{}}>
          <ListMainView />
        </AppProvider>
      </div>
    </main>
  );
}
