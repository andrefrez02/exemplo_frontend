import { Outlet } from "react-router-dom";
import HeaderFull from "./_HeaderFull";
import FooterFull from "./_FooterFull";

export default function LayoutFull() {
  return (
    <>
      <HeaderFull />
      <Outlet />
      <FooterFull />
    </>
  );
}
