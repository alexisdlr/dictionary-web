import Image from "next/image";
import SwitchFont from "./switch-font";

const Header = () => {
  return (
    <header className="w-full max-h-[80px] flex items-center justify-between">
      <div>
        <Image
          src="/assets/images/logo.svg"
          alt="Dictionary Web App"
          width={50}
          height={50}
        />
      </div>
      <div className="flex gap-2 items-center">
        <SwitchFont />
        <div className="w-px h-10 bg-light-gray"></div>
      </div>
    </header>
  );
};

export default Header;
