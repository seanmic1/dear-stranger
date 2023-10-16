import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import WarnAnonymous from "./components/WarnAnonymous";

export default async function Home() {
  return (
    <>
      <Navbar></Navbar>
      <WarnAnonymous></WarnAnonymous>
      <HomePage></HomePage>
      <Footer></Footer>
    </>
  );
}
