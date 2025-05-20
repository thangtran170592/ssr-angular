import { definePreset } from '@primeng/themes';
import Nora from '@primeng/themes/nora';

const MyPreset = definePreset(Nora, {
  mode: 'light',
  semantic: {
    primary: {
      50: '{green.50}',
      100: '{green.100}',
      200: '{green.200}',
      300: '{green.300}',
      400: '{green.400}',
      500: '{green.500}',
      600: '{green.600}',
      700: '{green.700}',
      800: '{green.800}',
      900: '{green.900}',
      950: '{green.950}',
    },

    colorScheme: {
      light: {
        surface: {
          50: '{orange.50}',
          100: '{orange.100}',
          200: '{orange.200}',
          300: '{orange.300}',
          400: '{orange.400}',
          500: '{orange.500}',
          600: '{orange.600}',
          700: '{orange.700}',
          800: '{orange.800}',
          900: '{orange.900}',
          950: '{orange.950}',
        },
        primary: {
          color: '{green.500}',
          contrastColor: '#ffffff',
          hoverColor: '{green.400}',
          activeColor: '{green.500}',
        },
        highlight: {
          background: '{green.500}',
          focusBackground: '{green.400}',
          color: '#ffffff',
          focusColor: '#ffffff',
        },
        warn: {
          color: '{orange.500}',
          contrastColor: '#ffffff',
          hoverColor: '{orange.400}',
          activeColor: '{orange.500}',
        },
      },
      dark: {
        surface: {
          50: '#ffffff',
          100: '#ffffff',
          200: '#ffffff',
          300: '{orange.300}',
          400: '{orange.400}',
          500: '{orange.400}',
          600: '{orange.400}',
          700: '{orange.500}',
          800: '{orange.500}',
          900: '{orange.500}',
          950: '{orange.550}',
        },
        primary: {
          color: '{green.500}',
          contrastColor: '#ffffff',
          hoverColor: '{green.400}',
          activeColor: '{green.500}',
        },
        highlight: {
          background: '{green.500}',
          focusBackground: '{green.400}',
          color: '#ffffff',
          focusColor: '#ffffff',
        },
        warn: {
          color: '{orange.500}',
          contrastColor: '#ffffff',
          hoverColor: '{orange.400}',
          activeColor: '{orange.500}',
        },
        mask: {
          background: '{gray.200}',
          color: '#ffffff',
        },
        formField: {
          background: '#ffffff',
          disabledBackground: 'transparent',
          filledBackground: 'transparent',
          filledHoverBackground: 'transparent',
          filledFocusBackground: 'transparent',
          borderColor: '{green.500}',
          hoverBorderColor: '{green.500}',
          focusBorderColor: '{green.500}',
          invalidBorderColor: '{green.500}',
          color: '{green.500}',
          disabledColor: '{green.500}',
          placeholderColor: '{green.500}',
          invalidPlaceholderColor: '{green.500}',
          floatLabelColor: '{green.500}',
          floatLabelFocusColor: '{green.500}',
          floatLabelActiveColor: '{green.500}',
          floatLabelInvalidColor: '{green.500}',
          iconColor: '{green.500}',
          shadow: '{green.500}',
        },
        text: {
          color: '#000000',
          hoverColor: '#000000',
          mutedColor: '#000000',
          hoverMutedColor: '#000000',
        },
        content: {
          background: '#ffffff',
          hoverBackground: '{gray.200}',
          borderColor: '{gray.500}',
          color: '#000000',
          hoverColor: '#000000',
        },
        overlay: {
          select: {
            background: '{gray.200}',
            borderColor: '{gray.200}',
            color: '{gray.200}',
          },
          popover: {
            background: '{gray.200}',
            borderColor: '{gray.200}',
            color: '{gray.200}',
          },
          modal: {
            background: '{gray.200}',
            borderColor: '{gray.200}',
            color: '{gray.200}',
          },
        },
        list: {
          option: {
            focusBackground: '#ffffff',
            selectedBackground: '{gray.200}',
            selectedFocusBackground: '{gray.200}',
            color: '{gray.200}',
            focusColor: '{gray.200}',
            selectedColor: '{gray.200}',
            selectedFocusColor: '{gray.200}',
            icon: {
              color: '{gray.200}',
              focusColor: '{gray.200}',
            },
          },
          optionGroup: {
            background: '{gray.200}',
            color: '{gray.200}',
          },
        },
        navigation: {
          item: {
            focusBackground: 'transparent',
            activeBackground: 'transparent',
            color: '#ffffff',
            focusColor: '#ffffff',
            activeColor: '#ffffff',
            icon: {
              color: '{orange.400}',
              focusColor: '{orange.400}',
              activeColor: '{orange.400}',
            },
          },
          submenuLabel: {
            background: 'transparent',
            color: '#ffffff',
          },
          submenuIcon: {
            color: '#ffffff',
            focusColor: '#ffffff',
            activeColor: '#ffffff',
          },
        },
      },
    },
  },
});

export default MyPreset;
