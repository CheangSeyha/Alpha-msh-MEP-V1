import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById("navigation");
      // Check if the nav element exists before applying styles
      // This will add a background color and shadow to the nav when the user scrolls down
      if (nav) {
        if (window.scrollY > 10) {
          nav.classList.add(
            "bg-white",
            "shadow-lg",
            "transition-all",
            "duration-400",
            "ease-in",
            "text-white",
            "top-0",
            "fixed",
            "z-50",
            "mt-0",
            "p-0",
            "max-[650px]:p-2",
            "max-[750px]:p-3",
            "max-[895px]:p-4"
          );
        } else {
          nav.classList.remove(
            "bg-white",
            "shadow-lg",
            "transition-all",
            "duration-200",
            "ease-out",
            "mt-0",
            "p-0",
            "max-[650px]:p-2",
            "max-[750px]:p-3",
            "max-[895px]:p-4",
            "top-0"
          );
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpen = () => setIsOpen((prev) => !prev);
  return (
    <div
      className="w-full mx-auto flex flex-row justify-center items-center fixed top-0 right-0 left-0 p-4 md:p-2 md:px-4.5 lg:p-2.5 z-50 opacity-100"
      id="navigation"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-row justify-between items-center">
        <div className="w-1/3 h-3/4 md:w-1/4 md:h-3/4">
          <img src="logo.png" alt="logo" className="w-full h-full object-fit" />
        </div>
        <div className="hidden lg:block z-100">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href="/"
                    className="font-exo font-semibold text-[#1B42CE]"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-exo font-semibold text-[#1B42CE]">
                  About us
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/Whoweare" className="font-exo font-medium">
                          Who we are
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/CEO" className="font-exo font-medium">
                          Speech from CEO
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/MVC" className="font-exo font-medium">
                          Mission & Vision
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/Team" className="font-exo font-medium">
                          Team members
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-exo font-semibold text-[#1B42CE]">
                  Our Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/Mechanical"
                          className="font-exo font-medium"
                        >
                          Mechanical Services
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/Electrical"
                          className="font-exo font-medium"
                        >
                          Electrical Services
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/Plumbing" className="font-exo font-medium">
                          Plumbing Services
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/Civil" className="font-exo font-medium">
                          Civil Services
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/Architecture"
                          className="font-exo font-medium"
                        >
                          Architecture Services
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-exo font-semibold text-[#1B42CE]">
                  Our projects
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/Completed"
                          className="font-exo font-medium"
                        >
                          Completed
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/Inprogress"
                          className="font-exo font-medium"
                        >
                          Inprogress
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/Future" className="font-exo font-medium">
                          Future
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href="/Contact"
                    className="font-exo font-semibold text-[#1B42CE]"
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <div className="hidden lg:block ">
                <img
                  src="kh.svg"
                  alt=""
                  className="object-contain w-16 h-10 rounded-md p-1 hover:scale-110 transition-all duration-300 ease-in-out hover:bg-gray-200"
                />
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={handleOpen}
            aria-label="Toggle menu"
            className="rounded-md p-1 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300 ease-in-out"
          >
            <FiMenu className="w-8 h-8 text-[#1B42CE]" />
          </button>
          {isOpen && (
            <div className="fixed inset-0 z-50" onClick={handleOpen}>
              <div
                className="fixed top-0 right-0 w-full md:w-1/2 h-screen overflow-y-auto bg-white transform translate-x-0 transition-transform duration-300 ease-in-out"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4 relative">
                  <button
                    type="button"
                    onClick={handleOpen}
                    aria-label="Close menu"
                    className="absolute top-2 right-2 hover:scale-110 transition-all duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full p-1"
                  >
                    <IoMdClose className="h-9 w-9 text-[#1B42CE]" />
                  </button>
                  <div className="mt-12 space-y-4">
                    <Link
                      href="/"
                      className="block font-exo text-lg font-semibold text-[#1B42CE]"
                      onClick={handleOpen}
                    >
                      Home
                    </Link>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="about">
                        <AccordionTrigger className="font-exo font-semibold text-[#1B42CE]">
                          About us
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2">
                            <li>
                              <Link
                                href="/Whoweare"
                                className="font-exo font-medium hover:scale-110 transition-all duration-300 ease-in-out hover:text-[#1B42CE]"
                                onClick={handleOpen}
                              >
                                Who we are
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/CEO"
                                className="font-exo font-medium hover:scale-110 transition-all duration-300 ease-in-out hover:text-[#1B42CE]"
                                onClick={handleOpen}
                              >
                                Speech from CEO
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/MVC"
                                className="font-exo font-medium hover:scale-110 transition-all duration-300 ease-in-out hover:text-[#1B42CE]"
                                onClick={handleOpen}
                              >
                                Mission & Vision
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/Team"
                                className="font-exo font-medium hover:scale-110 transition-all duration-300 ease-in-out hover:text-[#1B42CE]"
                                onClick={handleOpen}
                              >
                                Team members
                              </Link>
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="services">
                        <AccordionTrigger className="font-exo font-semibold text-[#1B42CE]">
                          Our Services
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2">
                            <li>
                              <Link
                                href="/Mechanical"
                                className="font-exo font-medium hover:scale-110 transition-all duration-300 ease-in-out hover:text-[#1B42CE]"
                                onClick={handleOpen}
                              >
                                Mechanical Services
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/Electrical"
                                className="font-exo font-medium hover:scale-110 transition-all duration-300 ease-in-out hover:text-[#1B42CE]"
                                onClick={handleOpen}
                              >
                                Electrical Services
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/Plumbing"
                                className="font-exo font-medium hover:scale-110 transition-all duration-300 ease-in-out hover:text-[#1B42CE]"
                                onClick={handleOpen}
                              >
                                Plumbing Services
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/Civil"
                                className="font-exo font-medium hover:scale-110 transition-all duration-300 ease-in-out hover:text-[#1B42CE]"
                                onClick={handleOpen}
                              >
                                Civil Services
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/Architecture"
                                className="font-exo font-medium hover:scale-110 transition-all duration-300 ease-in-out hover:text-[#1B42CE]"
                                onClick={handleOpen}
                              >
                                Architecture Services
                              </Link>
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="projects">
                        <AccordionTrigger className="font-exo font-semibold text-[#1B42CE]">
                          Our projects
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2">
                            <li>
                              <Link
                                href="/Completed"
                                className="font-exo font-medium hover:scale-110 transition-all duration-300 ease-in-out hover:text-[#1B42CE]"
                                onClick={handleOpen}
                              >
                                Completed
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/Inprogress"
                                className="font-exo font-medium hover:scale-110 transition-all duration-300 ease-in-out hover:text-[#1B42CE]"
                                onClick={handleOpen}
                              >
                                Inprogress
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/Future"
                                className="font-exo font-medium hover:scale-110 transition-all duration-300 ease-in-out hover:text-[#1B42CE]"
                                onClick={handleOpen}
                              >
                                Future
                              </Link>
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <Link
                      href="/Contact"
                      className="block font-exo text-lg font-semibold text-[#1B42CE] py-1"
                      onClick={handleOpen}
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          <img
            src="kh.svg"
            alt=""
            className="object-contain w-14 h-8 md:w-12 md:h-7 rounded-md p-1 hover:scale-110 transition-all duration-300 ease-in-out hover:bg-gray-200"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
