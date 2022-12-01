import { createGlobalStyle } from 'styled-components';
import MontserratRegular from './Montserrat-Regular.ttf';
import MontserratLight from './Montserrat-Light.ttf';
import MontserratExtraLight from './Montserrat-ExtraLight.ttf';
import MontserratMedium from './Montserrat-Medium.ttf';
import MontserratSemiBold from './Montserrat-SemiBold.ttf';
import MontserratBold from './Montserrat-Bold.ttf';

export const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'MontserratRegular';
  src: url(${MontserratRegular});
  font-weigh: 400;
}
@font-face {
  font-family: 'MontserratExtraLight';
  src: url(${MontserratExtraLight});
  font-weight: 500;
}
@font-face {
  font-family: 'MontserratLight';
  src: url(${MontserratLight});
  font-weight: 500;
}
@font-face {
  font-family: 'MontserratMedium';
  src: url(${MontserratMedium});
}
@font-face {
  font-family: 'MontserratSemiBold';
  src: url(${MontserratSemiBold});
}
@font-face {
  font-family: 'MontserratBold';
  src: url(${MontserratBold});
}`;
