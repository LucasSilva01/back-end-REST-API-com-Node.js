import React, { useCallback, useEffect, useState} from 'react';
import { TextInput } from '../../components/TextInput';
import  Event   from '../../components/listEvent';
import api from '../../services/services';

const Eventos = () => {
    const [events, setEvents] = useState([]);
    const [allEvents, setAllEvents] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    
    const loadEvents = useCallback(async() => {
        const response = await api.get('/events');
        setEvents(response.data)
        setAllEvents(response.data)
    },[]);
      
      
    const handleChange = (e) => {
        const { value } = e.target;
        setSearchValue(value)
    }

    useEffect(() => {
        loadEvents();
    },[loadEvents]);
    

    const filteredEvents = !!searchValue ? allEvents.filter(event => {
        return event.name.toLowerCase().includes(searchValue.toLowerCase());
    })
    : events;

    return (
        <div>
        <h1>Lista de Eventos</h1>

        <TextInput 
            handleChange = {handleChange}
            searchValue = {searchValue}
        />
        
        {filteredEvents.length === 0 &&(
        <h1>
            Evento não encontrado.
        </h1>
        )}
        {filteredEvents.length > 0 &&(
            <Event events = {filteredEvents}/>
        )}

        <a href = "/" >
            <button type = "submit" >
                Voltar
            </button>
        </a>
        </div>
    );
    }
export default Eventos;