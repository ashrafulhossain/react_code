import React, { useEffect, useState } from 'react';

const useAdmin = user => {
    const [admin, setAdmin] = useState(false)
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        const email = user?.email

        if (email) {
            fetch(`http://localhost:4000/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('token')}`
                },

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setAdmin(data.admin);
                    setAdminLoading(false)
                })



        }
    }, [user])
    return [admin, adminLoading]
};

export default useAdmin;