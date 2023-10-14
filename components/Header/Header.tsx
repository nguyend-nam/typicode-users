import Avatar from "../Avatar/Avatar";
import { IconHelp, IconNotification } from "../icons";

const Header = () => {
  return (
    <header className="bg-background-primary px-7 py-5">
      <div className="section-container text-white flex justify-end items-center">
        <IconNotification className="pr-4 border-r-[1.5px]" />
        <IconHelp className="px-4 border-r-[1.5px]" />
        <Avatar className="pl-4" />
      </div>
    </header>
  );
};

export default Header;
