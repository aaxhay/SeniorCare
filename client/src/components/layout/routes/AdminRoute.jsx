import React, { useEffect , useState } from 'react'
import { useAuth } from '../../../context/auth';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';
const REACT_APP_API = 'http://localhost:8080';

export default function AdminRoute(){
    const[ok , setOk] = useState(false);
    const[auth , setAuth] = useAuth();

    useEffect(()=>{
        const authCheck = async()=>{
            const response = await axios.get(`${REACT_APP_API}/api/v1/auth/admin-auth`);
            if(response.data.ok){
                setOk(true);
            }
            else{
                setOk(false);
            }
        };

        if(auth?.token) authCheck();
    } , [auth?.token])
    return ok ? <Outlet/> : <Spinner path='' />
}