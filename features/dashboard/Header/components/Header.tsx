import HeaderAvator from "./HeaderAvator";
import HeaderNotification from "./HeaderNotification";

export default function Header() {
  return (
    <header className="w-full mb-2">
      <div className="w-full flex flex-row items-center justify-end	 px-8 py-6 gap-4">
        <HeaderNotification />
        <HeaderAvator />
      </div>
    </header>
  );
}
