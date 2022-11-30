import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Nav1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [money, setMoney] = useState(false);

  const dropMoney = () => setMoney(!money);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <>
      <div className=" py-3 bg-slate-700 px-0 hidden md:block">
        <div className="container">
          <div className="flex flex-row items-center justify-between bg-green-600 flex-wrap">
            <div className="text-center md:text-left text-[#f49034] font-mono text-lg py-2  ">
              <p className="welcome-title">Default Welcome Message</p>
            </div>
            <div className="col-md-7 col-lg-9">
              <div className="bluZUr mt-2 mt-md-0">
                <div className="kBztUE">
                  <button className="geYwTc" onClick={toggling}>
                    English
                    <MdKeyboardArrowDown size={24} />
                  </button>
                  <ul className={isOpen ? "btGoez show" : "btGoez"}>
                    <li>
                      <a className="dropdown-item" href="#">
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Italiano
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Francias
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Filipino
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="kBztUE">
                  <button className="geYwTc" onClick={dropMoney}>
                    USD
                    <MdKeyboardArrowDown size={24} />
                  </button>
                  <ul className={money ? "btGoez show" : "btGoez"}>
                    <li>
                      <a className="dropdown-item" href="#">
                        $ - USD
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        € - EUR
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        £ - POUND
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        ₣ - FRANC
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav1;