const MainHeader = () => {
  return (
    <nav className="px-2 my-4 bg-white border-gary-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-[1100px] flex items-center justify-between mx-auto flex-wrap my-4">
        <a href="#blog" className="flex items-center">
          <span className="text-xl font-semibold whitespace-nowrap dark:text-white">
            Blog
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className=" inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none "
          aria-controls="navbar-dropdown focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded="false"
        >
          {/* mobile menu icon */}
          <span className="sr-only">Open main Menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className="hidden w-full px-4 md:block md:w-auto"
          id="navbar-dropdown"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#sort"
                class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                Sort By:
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Rating{' '}
                <svg
                  className="w-4 h-4 ml-1"
                  width="16px"
                  height="12px"
                  viewBox="0 0 25 16"
                  aria-hidden="true"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.826 15.1268L0.328387 0.69837L24.2763 0.917706L11.826 15.1268Z"
                    fill="black"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  aria-labelledby="dropdownLargeButton"
                  className="py-1 text-sm text-gray-700 dark:text-gray-400"
                >
                  <li>
                    <a
                      href="#sports"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Rating 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#media"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Rating 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#tonews"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Rating 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Category{' '}
                <svg
                  className="w-4 h-4 ml-1"
                  width="16px"
                  height="12px"
                  viewBox="0 0 25 16"
                  aria-hidden="true"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.826 15.1268L0.328387 0.69837L24.2763 0.917706L11.826 15.1268Z"
                    fill="black"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  aria-labelledby="dropdownLargeButton"
                  className="py-1 text-sm text-gray-700 dark:text-gray-400"
                >
                  <li>
                    <a
                      href="#sports"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Category 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#media"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Category 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#tonews"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Category 3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#tonews"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Category 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
