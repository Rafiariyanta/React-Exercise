import { css } from 'react-emotion';

export const cssVideo = css({
  position: "absolute",
  display: 'block',
  width: "100%",
  height: "100%",
  objectFit: 'cover',
  top: 0, left: 0, bottom: 0, right: 0,
});

export const cssVideoContainer = css({
  position: "relative",
  width: "100%",
  height: "100%",
  paddingTop: "75%",
})