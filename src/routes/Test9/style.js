import { css, keyframes } from 'react-emotion';

export const cssSpace = css({
  marginTop: 24,
  width: 800,
  height: 800,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'black',
});

export const cssSun = css({
  width: 80,
  height: 80,
  backgroundColor: 'yellow',
  borderRadius: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const rotation = (i) => keyframes`
  from {
    transform: rotate(0deg) translateX(${100 + (i*40)}px)
  }
  to {
    transform: rotate(360deg) translateX(${100 + (i*40)}px)
  }
`

const randomColor = () => Math.floor(Math.random()*16777215).toString(16);

export const cssPlanet = (i) => css({
  width: 20,
  height: 20,
  borderRadius: 40,
  backgroundColor: `#${randomColor()}`,
  position: 'absolute',
  animation: `${rotation(i)} ${3  + (i*0.5)}s infinite linear`,
});
