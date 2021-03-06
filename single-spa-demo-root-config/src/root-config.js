import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@tdc/single-spa-nav",
  () => System.import("@tdc/single-spa-nav"),
  isActive.nav,
  { domElement: document.getElementById("nav-container") }
);

registerApplication(
  "@tdc/single-spa-page-1",
  () => System.import("@tdc/single-spa-page-1"),
  isActive.page1,
  { domElement: document.getElementById("page-1-container") }
);

registerApplication(
  "@tdc/single-spa-page-2",
  () => System.import("@tdc/single-spa-page-2"),
  isActive.page2,
  { domElement: document.getElementById("page-2-container") }
);

start();
