import React, { Component } from 'react';
import { TextInput } from '../../components/TextInput';
import  User   from '../../components/Users/index';
import api from '../../services/services';
/*
const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [page, setPage] = useState(0);
    const [usersPerPage] = useState(1);
    const [allUsers, setAllUsers] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const noMoreUsers = page + usersPerPage >= allUsers.length;
    
}

{usuarios.map(usuario => (
          <p key={usuario._id}>
            <h2>
              <strong>Nome: </strong>
              {usuario.nome}
            </h2>
          </p>
        ))}
*/

export default class Usuarios extends Component {

  state = {
    usuarios: [],
    searchValue: '',
    allUsers: [],
  }

  async componentDidMount() {
    this.loadUsuarios();
  }

async loadUsuarios(){
    const response = await api.get('/usuarios');
    this.setState({ 
        usuarios: response.data,
        allUsers: response.data
    });

  }
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({searchValue: value})
  }

  render() {
    
    const { usuarios, searchValue, allUsers } = this.state;
    
    const filteredUsers = !!searchValue ? allUsers.filter(user => {
      return user.nome.toLowerCase().includes(searchValue.toLowerCase());
    })
     : usuarios;

    return (
      <div>
        <h1>Lista de Promotores</h1>

        <TextInput 
        handleChange = {this.handleChange}
        searchValue = {searchValue}
        />
        {filteredUsers.length === 0 &&(
         <h1>
           Post não encontrado.
         </h1>
       )}
        {filteredUsers.length > 0 &&(
     
            <User users = {filteredUsers}/>
       )}

        
      </div>
    );
  };
};