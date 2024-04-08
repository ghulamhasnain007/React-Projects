import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

function NameContext({ children }) {
    const [user, setUser] = useState({ 'name': null, 'email': null, 'pass': null });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default NameContext;
