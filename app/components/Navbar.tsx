import { NavLink } from "@remix-run/react";
import { PawPrint, Plus } from "lucide-react";

export default function Navbar() {
  return (
    <header role="banner" className="text-light bg-secondary">
      <nav
        role="navigation"
        className="m-auto flex max-w-2xl flex-wrap items-center justify-center gap-4 p-4 text-center sm:justify-between"
      >
        <NavLink to="/">
          <span className="flex flex-wrap items-center justify-center gap-2 text-2xl">
            <PawPrint />
            <p>Neighborhood Pet Manager</p>
          </span>
        </NavLink>

        <NavLink to="/create" className="rounded-full bg-slate-300 p-1">
          <Plus />
        </NavLink>
      </nav>
    </header>
  );
}
