import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="bg-black bg-cover bg-center md:bg-[url('/assets/footer-bg.png')]  sm:bg-[url('/assets/footer-bg-mobile.png')]">
        <div className="container tablet:py-20 sm:p-10 max-w-[1200px]">
          <div className="grid md:grid-cols-3  grid-cols-1 gap-10">
            <figure className="flex flex-col space-y-5">
              <Link href={"/"} className="flex items-center space-x-5">
                <img
                  src="/assets/logo.jpg"
                  alt="live decor logo"
                  className="h-[50px] w-auto"
                />
                <p className="font-bold text-white">Smart Technology</p>
              </Link>
              <div>
                <p className="leading-loose text-sm text-white">
                  Email :- smartechnologgy14@gmail.com
                </p>
                <p className="leading-loose text-sm text-white">
                  Mobile :- 09370048964/9975524589
                </p>
                <p className="leading-loose text-sm text-white">
                  Address :- NEAR RELIENCE OFFICE, TELCO ROAD GANESH NAGER,MIDC
                  BHOSARI PUNE-411026
                </p>
              </div>
            </figure>

            <figure className="flex flex-col space-y-5 md:mx-auto sm:mr-auto">
              <h1 className="text-xl font-bold text-white">Quick Links</h1>
              <ul className="flex flex-col space-y-3">
                <li>
                  <Link
                    href={"/#mission"}
                    className="text-base text-white hover:text-ascent-1"
                  >
                    Mission
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/clients"}
                    className="text-base text-white hover:text-ascent-1"
                  >
                    Clients
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/machines"}
                    className="text-base text-white hover:text-ascent-1"
                  >
                    Machines
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/#projects"}
                    className="text-base text-white hover:text-ascent-1"
                  >
                    Project
                  </Link>
                </li>
              </ul>
            </figure>

            <figure className="flex flex-col space-y-5 md:mx-auto sm:mr-auto">
              <h1 className="text-xl font-bold text-white">Need Help?</h1>
              <ul className="flex flex-col space-y-3">
                <li>
                  <Link
                    href={"/contact"}
                    className="text-base text-white hover:text-ascent-1"
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/about"}
                    className="text-base text-white hover:text-ascent-1"
                  >
                    About us
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href={"#"}
                    className="text-base text-white hover:text-ascent-1"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="text-base text-white hover:text-ascent-1"
                  >
                    Terms & Conditions
                  </Link>
                </li> */}
              </ul>
            </figure>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
