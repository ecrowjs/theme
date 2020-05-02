import * as CSS from 'csstype';

export interface IColorVariant {
  /**
   * The background color for the variant.
   */
  background: string;
  /**
   * The font color for the variant.
   * Should be visible on the variant background color.
   */
  font: string;
}

export interface IColor {
  /**
   * The default color for backgrounds and text.
   */
  readonly base: IColorVariant;
  /**
   * The colors for indicating a component that generates something new.
   */
  readonly creative: IColorVariant;
  /**
   * The colors for indicating that a component destroys something.
   */
  readonly destructive: IColorVariant;
  /**
   * The colors for indicating something the goes in the opposite direction.
   */
  readonly negative: IColorVariant;
  /**
   * The colors for something that doesn't fit the other indications.
   */
  readonly neutral: IColorVariant;
  /**
   * The colors for indicating something that moves forward.
   */
  readonly positive: IColorVariant;
}

export interface IFontVariant {
  readonly fontFamily: string;
  readonly opacity: number;
  readonly fontSize: number | string;
  readonly fontStyle: string;
  readonly fontWeight: number;
}

export interface IFont {
  readonly base: IFontVariant;
  readonly title: IFontVariant;
  readonly subtitle: IFontVariant;
  readonly heading1: IFontVariant;
  readonly heading2: IFontVariant;
  readonly heading3: IFontVariant;
  readonly subheading: IFontVariant;
  readonly paragraph: IFontVariant;
  readonly quote: IFontVariant;
  readonly small: IFontVariant;
}

export interface ITheme {
  readonly color: IColor;
  readonly font: IFont;
  readonly shadow: string[];
  readonly shape: {
    border: {
      thickness: number;
      radius: number;
    };
  };
  readonly touchable: {
    idle: CSS.Properties;
    disabled: CSS.Properties;
    active: CSS.Properties;
    hover: CSS.Properties;
  };
  readonly transition: {
    readonly ease: {
      readonly inOut: string;
      readonly out: string;
      readonly in: string;
      readonly sharp: string;
    };
    readonly duration: {
      readonly shortest: number;
      readonly shorter: number;
      readonly short: number;
      readonly standard: number;
      readonly complex: number;
      readonly entering: number;
      readonly leaving: number;
    };
  };
}

export interface IThemeProps {
  readonly theme: ITheme;
}
