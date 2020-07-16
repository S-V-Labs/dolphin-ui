import { createGlobalStyle } from 'styled-components'
import { typography } from './typography'
import { WHITE } from './colors'

export const BaseCSS = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body{
        background: ${WHITE};
    }
    ${typography}

`
