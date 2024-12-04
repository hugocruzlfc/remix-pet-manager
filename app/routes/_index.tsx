import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Pet MAnager" },
    { name: "description", content: "Welcome to Pet Manager App" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">hi</div>
    </div>
  );
}
