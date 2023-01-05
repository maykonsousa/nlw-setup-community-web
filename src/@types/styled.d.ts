//extends the default styled-components types to include the theme
import 'styled-components';





declare module 'styled-components' { 
    export interface DefaultTheme {
        title: string;
        colors: {
            'rocketseat-light': string;
            'rocketseat-mid': string;
            'rocketseat-dark': string;
            'rocketseat-low': string;
            'discover-light': string;
            'discover-mid': string;
            'discover-dark': string;
            'discover-low': string;
            'ignite-light': string;
            'ignite-mid': string;
            'ignite-dark': string;
            'ignite-low': string;
            'ec-light': string;
            'ec-mid': string;
            'ec-dark': string;
            'ec-low': string;
            'success-light': string;
            'success-base': string;
            'success-low': string;
            'danger-light': string;
            'danger-base': string;
            'danger-low': string;
            'warning-light': string;
            'warning-base': string;
            'warning-low': string;
            'new-light': string;
            'new-base': string;
            'new-low': string;
            'white': string;
            'black': string;
            'grey-100': string;
            'grey-200': string;
            'grey-300': string;
            'grey-400': string;
            'grey-500': string;
            'grey-600': string;
            'grey-700': string;
            'grey-800': string;
            'grey-900': string;
            'grey-950': string;
            'text-title': string;
            'text-base': string;
            'text-support': string;
            'placeholder': string;
            'inputs-icons': string;
            'shape-tertiary': string;
            'shape-secondary': string;
            'shape-primary': string;
            'color-background': string;
            'modal-background': string;


        };
    }
      
    }
