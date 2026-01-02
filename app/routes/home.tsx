import type { Route } from "./+types/home";
import { Index } from "../index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Velog_minseokim" },
    { name: "description", content: "velog clone by minseokim" },
  ];
}

export default function Home() {
  return <Index />;
}
