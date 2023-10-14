import { Avatar } from "../Avatar/Avatar";
import { IconHelp, IconNotification } from "../icons";

export const Header = () => {
  return (
    <header className="w-screen bg-blue--dark px-7 py-5 fixed top-0 z-40">
      <div className="section-container text-white flex justify-end items-center">
        <div className="pr-4 border-r-[1.5px] flex items-center">
          <button>
            <IconNotification />
          </button>
        </div>
        <div className="px-4 border-r-[1.5px] flex items-center">
          <button>
            <IconHelp />
          </button>
        </div>
        <div className="pl-4 flex items-center">
          <button>
            <Avatar alt="User dropdown" />
          </button>
        </div>
      </div>
    </header>
  );
};
