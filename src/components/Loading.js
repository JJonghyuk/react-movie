import styled from "styled-components";
import loadImg from "../img/icon_loading_transparent.gif";

const LoadingBar = styled.span`
  z-index: 999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 400px;
  height: 400px;
  background: url(${loadImg}) no-repeat center/100% auto;
`;

function Loading() {
  return <LoadingBar />;
}

export default Loading;
