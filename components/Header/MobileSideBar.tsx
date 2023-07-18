import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface IProps {
  state: string;
}

export default function MobileSideBar({ state }: IProps) {
  const router = useRouter();
  return (
    <React.Fragment>
      <aside
        className={`sidebar ${state} ${
          router.pathname.includes("dashboard") ? "pt-[132px]" : "pt-[75px]"
        } tablet:hidden`}
      >
        <div className="p-7">
          <ul className="flex flex-col justify-center">
            <li className="sidebar-tab">
              <Link href={"/"}>Home</Link>
            </li>
            <hr />
            <li className="sidebar-tab">
              <Link href={"/work"}>Work</Link>
            </li>
            <hr />
            <li className="sidebar-tab">
              <Link href={"/clients"}>Clients</Link>
            </li>
            <hr />
            <li className="sidebar-tab">
              <Link href={"/machines"}>Machines</Link>
            </li>
            <hr />
            <li className="sidebar-tab">
              <Link href={"/about"}>About</Link>
            </li>
          </ul>
        </div>
      </aside>
    </React.Fragment>
  );
}
