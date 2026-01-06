import type { Route } from "./+types/home";
import { Outlet } from "react-router";
import { Index } from "../index/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Velog_minseokim" },
    { name: "description", content: "velog clone by minseokim" },
  ];
}

export default function Home() {
  return (
    <>
      <Index />
      <Outlet />
    </>
  );
}
