import routes from "../config/routes";

const routerBusiness = [
  // WEB
  {
    source: routes.HOME,
    destination: "/",
  },
  {
    source: routes.NEWS,
    destination: "/pages/techNews",
  },
];

export default routerBusiness;
