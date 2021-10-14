import Header from "../components/Navbar";
import Hero from "../assets/hero.jpg"
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

function LandingPageLayout(props) {

  return (
    <div className="min-h-0 bg-gray-100 font-body">
      <div className=" flex flex-col">
        <NavBar />
      </div>

      <div
        className="
        w-full max-w-7xl mx-auto
      "
      >
        {props.children}
      </div>

      <Footer />
    </div>
  );
}

export default LandingPageLayout;