import {createContext, useEffect, useState} from 'react';

import axios from 'axios';

const getProjectContext  = createContext();

const ProjectProvider = ({ children }) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/project');
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData()
    }, []);

    return(
        <getProjectContext.Provider value= {{data, loading, error}}>
            {children}
        </getProjectContext.Provider>
    )
};

const postMessageContext = createContext()
const ProjectPostProvider = ({children}) => {
    const [dataInput, setDataInput] = useState({
        name: '',
        email: '',
        message: ''
    });

    const upload = ()=> {
        try {
            axios.post('http://localhost:5000/project', dataInput)
            console.log('Data posted successfully')
        } catch (error) {
            console.log('Ther was an error while posting the data: ', error);
        }
    }

    if (!dataInput.name || !dataInput.email || !dataInput.message) {
        console.log("Please fill required fields")
    } else {
        upload();
    }


    return (
        <postMessageContext.Provider value= {{dataInput, setDataInput}}>
            {children}
        </postMessageContext.Provider>
    )
}

export { getProjectContext, ProjectProvider, postMessageContext, ProjectPostProvider }