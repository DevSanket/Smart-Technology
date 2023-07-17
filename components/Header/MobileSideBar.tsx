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
              <Link href={"#"}>
                  Workers
              </Link>
            </li>
            <hr/>
            <li className="sidebar-tab">
              <Link href={"#"}>
                  Team
              </Link>
            </li>
            <hr/>
            <li className="sidebar-tab">
              <Link href={"#"}>
                  Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </React.Fragment>
  );
}
