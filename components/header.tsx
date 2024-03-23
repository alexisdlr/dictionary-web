import Image from "next/image";
import SwitchFont from "./switch-font";
import SwitchTheme from "./switch-theme";

const Header = () => {
  return (
    <header className="w-full max-h-[80px] flex items-center justify-between">
      <div>
        <Image
          src="/assets/images/logo.svg"
          alt="Dictionary Web App"
          width={36}
          height={36}
        />
      </div>
      <div className="flex gap-2 items-center">
        <SwitchFont />
        <div className="w-px h-10 bg-light-gray"></div>
        <SwitchTheme />
      </div>
      
    </header>
  );
};

export default Header;
