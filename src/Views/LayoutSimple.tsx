import { Outlet } from "react-router-dom";
import HeaderSimple from "./_HeaderSimple";
import FooterSimple from "./_FooterSimple";

export default function LayoutSimple() {
  return (
    <>
      <HeaderSimple />
      <Outlet />
      <FooterSimple />
    </>
  );
}
