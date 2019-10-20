import React, { Component } from 'react';

export const ThemeContext = React.createContext();

export class ThemeContextProvider extends Component {
    state = 
        {
            isLightTheme: true,
        };


    toggleTheme = () => {
        console.log('toggleTheme called');
        this.setState(prevState => ({
            isLightTheme: !prevState.isLightTheme
        }))
    };


    render() {
        const {children} = this.props;

        return(
            <ThemeContext.Provider
                value={{
                    toggleTheme: this.toggleTheme,
                    theme: this.theme,
                    isLightTheme: this.state.isLightTheme
                }}
            >
                {children}
            </ThemeContext.Provider>
        )
    }
}

export const ThemeContextConsumer = ThemeContext.Consumer;


