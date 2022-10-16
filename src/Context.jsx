import { createContext, useReducer } from "react";

export const themeContext = createContext();

const initialsState = { darkMode: false };

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'toggle':
            return { darkMode: !state.darkMode }
        default:
            return state;
    }
};

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, initialsState)
    return (
        <themeContext.Provider value={{ state, dispatch }} >
            {props.children}
        </themeContext.Provider>
    );
};