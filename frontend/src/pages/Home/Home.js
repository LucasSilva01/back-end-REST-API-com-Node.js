import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";
import Usuarios from "../listUsers";

function Home() {
  return (

    <div className="App">
      <div>
        <Navbar/>
      </div>
        <Usuarios/>
      <div>
        <Footer/>
      </div>
      
    </div>
  );
}

export default Home;