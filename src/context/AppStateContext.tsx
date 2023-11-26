// AppStateContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppState {
    selectedRoute: any;
    setRoute: (route: any) => void;
}

interface AppStateContextProps {
    children: ReactNode;
}

const AppStateContext = createContext<AppState | undefined>(undefined);

export const AppStateProvider: React.FC<AppStateContextProps> = ({ children }) => {
    const [selectedRoute, setSelectedRoute] = useState<any>(null);

    const setRoute = (route: any) => {
        setSelectedRoute(route);
    };

    const contextValue: AppState = { selectedRoute, setRoute };

    return (
        <AppStateContext.Provider value={contextValue}>
            {children}
        </AppStateContext.Provider>
    );
};

export const useAppState = (): AppState => {
    const context = useContext(AppStateContext);
    if (!context) {
        throw new Error('useAppState must be used within an AppStateProvider');
    }
    return context;
};
