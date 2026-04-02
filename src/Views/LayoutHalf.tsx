import { Outlet } from "react-router-dom";
import HeaderSimple from "./_HeaderSimple";
import FooterFull from "./_FooterFull";

export default function LayoutSimple() {
  return (
    <>
      <HeaderSimple />
      <Outlet />
      <FooterFull />
    </>
  );
}
