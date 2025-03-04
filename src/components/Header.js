import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const motion = keyframes`
  0% {
    transform: perspective(200px) rotateX(90deg);
    opacity: 0;
  }
  100% {
    transform: perspective(200px) rotateX(20deg);
    opacity: 1;
  }
`;

const Logo = styled.h1`
  z-index: 1;
  position: absolute;
  top: 20px;
  left: 40px;
`;

const LogoLink = styled(Link)`
  opacity: 0;
  display: block;
  color: #e50914;
  font-weight: bold;
  &.isActive {
    animation: ${motion} 1s ease-out forwards;
  }
`;

function Header({ isActive }) {
  return (
    <Logo className="logo">
      <LogoLink className={isActive} to={`${process.env.PUBLIC_URL}`}>
        JJONGFILX
      </LogoLink>
    </Logo>
  );
}

export default Header;
