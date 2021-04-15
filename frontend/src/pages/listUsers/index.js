import React, { useCallback, useEffect, useState} from 'react';
import { TextInput } from '../../components/TextInput';
import  User   from '../../components/Users/index';
import api from '../../services/services';

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    
    const loadUsuarios = useCallback(async() => {
        const response = await api.get('/usuarios');
        setUsuarios(response.data)
        setAllUsers(response.data)
    },[]);
        
    const handleChange = (e) => {
        const { value } = e.target;
        setSearchValue(value)
    }

    useEffect(() => {
        loadUsuarios();
    },[loadUsuarios]);
    
    
    const filteredUsers = !!searchValue ? allUsers.filter(user => {
        return user.nome.toLowerCase().includes(searchValue.toLowerCase());
    })
    : usuarios;

    return (
        <div>
        <h1>Lista de Promotores</h1>

        <TextInput 
            handleChange = {handleChange}
            searchValue = {searchValue}
        />
        
        {filteredUsers.length === 0 &&(
        <h1>
            Produtor não encontrado.
        </h1>
        )}
        {filteredUsers.length > 0 &&(
            <User users = {filteredUsers}/>
        )}

        <a href = "/" >
            <button type = "submit" >
                Voltar
            </button>
        </a>
        </div>
    );
    }
export default Usuarios
