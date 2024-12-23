import { NavLink, useLocation } from "@remix-run/react";
import { PawPrint, Plus } from "lucide-react";

export default function Navbar() {
  const { pathname } = useLocation();

  const createPathname = pathname === "/create";

  return (
    <header role="banner" className="text-light sticky bg-secondary">
      <nav
        role="navigation"
        className="sticky left-0 right-0 top-0 m-auto flex max-w-2xl flex-wrap items-center justify-center gap-4 p-4 text-center sm:justify-between"
      >
        <NavLink to="/">
          <span className="flex flex-wrap items-center justify-center gap-2 text-2xl">
            <PawPrint />
            <p>Neighborhood Pet Manager</p>
          </span>
        </NavLink>
        {!createPathname && (
          <NavLink to="/create" className="rounded-full bg-slate-300 p-1">
            <Plus />
          </NavLink>
        )}
      </nav>
    </header>
  );
}
