import routes from "../config/routes";

const routerBusiness = [
  // WEB
  {
    source: routes.HOME,
    destination: "/",
  },
  {
    source: routes.NEWS,
    destination: "/techNews",
  },
  {
    source: routes.ABOUT_US,
    destination: "/aboutUs",
  },
  {
    source: routes.CONTACT,
    destination: "/contact",
  },
  {
    source: routes.PRIVACY_POLICY,
    destination: "/privacyPolicy",
  },
];

export default routerBusiness;
