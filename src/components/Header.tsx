import React, { Fragment } from "react";

import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";

import config from "../config/index.json";
import Image from "next/image";

const Menu = () => {
  const { navigation, company, callToAction } = config;
  const { name: companyName, logo } = company;

  return (
    <>
      <Popover>
        <div className="relative pt-12 px-6 sm:px-6 lg:px-8 ">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-between w-full "
            aria-label="Global"
          >
            <div className="flex items-center justify-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between lg:justify-center w-full lg:w-auto max-w-3xl">
                <a href="/">
                  <span className="sr-only">{companyName}</span>
                  <Image alt="logo" className="h-5 w-auto sm:h-2" width={200} height={50} objectFit="contain" src={logo} />
                </a>
                <div className="-mr-2 flex items-center lg:hidden">
                  <Popover.Button
                    className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                  >
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div
              className="hidden lg:block lg:m-10 lg:pr-4 lg:space-x-8"
            >
              {navigation.map((item) => (
                <Link
                  spy={true}
                  active="active"
                  smooth={true}
                  duration={1000}
                  key={item.name}
                  to={item.href}
                  className="font-medium text-text hover:text-textHover hover:cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="#"
                className={`font-medium text-white hover:text-secondary bg-primary py-4 px-9 rounded-full`}
              >
                Reserver
              </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {/* Burger menu */}
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
          >
            <div
              className={`rounded-lg shadow-md bg-background ring-1 ring-black ring-opacity-5 overflow-hidden`}
            >
              <div className="px-4 pt-4 flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={logo} alt="" />
                </div>
                <div className="-mr-2">
                  <Popover.Button
                    className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                  >
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1 duration-150">
                {navigation.map((item) => (
                  <Link
                    spy={true}
                    active="active"
                    smooth={true}
                    duration={1000}
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 hover:border-0"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <a
                href={callToAction.href}
                className={`block w-full px-5 py-3 text-center font-medium text-white bg-primary hover:border-0`}
              >
                Réserver
              </a>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default Menu;
