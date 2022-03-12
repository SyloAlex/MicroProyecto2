import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const user = useSelector(state => state.user);

    if (user.email === null) {
        console.log('La cagaste');
        return (
            <Navigate to={'/'} replace />
        )
    } else {
        return children;
    }
}

export { ProtectedRoute }