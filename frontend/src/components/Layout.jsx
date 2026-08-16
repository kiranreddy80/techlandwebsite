import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import GlobalUtilities from "./GlobalUtilities.jsx";
import SeasonalDecor from "./SeasonalDecor.jsx";
import WhatsAppFloat from "./WhatsAppFloat.jsx";
import PageTransition from "./PageTransition.jsx";

function Layout({ setOpenContactModal }) {
  return (
    <div className="app">
      <Navbar setOpenContactModal={setOpenContactModal} />
      <main>
        <SeasonalDecor />

        {/* Animates the swap between tabs — Services, About, Contact, Blog. */}
        <PageTransition>
          <Outlet context={{ setOpenContactModal }} />
        </PageTransition>
      </main>
      <Footer />
      <GlobalUtilities />
      <WhatsAppFloat />
    </div>
  );
}

export default Layout;
