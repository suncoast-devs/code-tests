import React, { Component } from 'react';

export const ThemeContext = React.createContext();

export class ThemeContextProvider extends Component {

    render() {
        const {children} = this.props;

        return(
            <ThemeContext.Provider>
                {children}
            </ThemeContext.Provider>
        )
    }
}

export const ThemeContextConsumer = ThemeContext.Consumer;


