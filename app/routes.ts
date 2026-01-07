import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/home.tsx", [
    index("routes/posts.tsx"),
    route("posts", "routes/posts.tsx"),
    route("series", "routes/series.tsx"),
    route("about", "routes/about.tsx"),
  ]),
] satisfies RouteConfig;
