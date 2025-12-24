import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Velog_minseokim" },
    { name: "description", content: "velog clone by minseokim" },
  ];
}

export default function Home() {
  return <Welcome />;
}
