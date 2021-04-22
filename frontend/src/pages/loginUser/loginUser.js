import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";


function Home() {
  return (

    <div className="App">
      <div>
        <Navbar/>
          <div> Você logou no sistema!</div>
          <button>
            Cadastrar eventos
          </button>
        <Footer/>
      </div>
      
    </div>
  );
}

export default Home;
