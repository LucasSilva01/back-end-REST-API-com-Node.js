import './styles.css';
function Navbar(){
    return(
            <div >
                <div className = 'navbar'>
                <a href = "/">Home</a>
                <a href = "/events">Eventos</a>
                <a href = "/products">Produtores</a>
                <a href = "/">Ajude-me</a>
                
                
                <div  className = 'button'>
                    <a href = "/">Login</a>
                </div>
            
                <div className = 'login'>
                    <a href = "/register">Cadastre-se</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar