import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate();


    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('/logout', {
                    method: "GET",
                    headers: {
                        Accept: "appllication/json",
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                });

                 navigate('/login')
                if (!res.status === 200) {
                    const error = new Error(res.error);
                    throw error;
                }
            } catch (e) {
                console.error(e);
                
            }
        };
        fetchData();
    }, [navigate]);
  return (
    <div>
  ......................
    </div>
  )
}

export default Logout
