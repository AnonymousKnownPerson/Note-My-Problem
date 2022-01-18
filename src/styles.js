import styled from 'styled-components';

export const MainStyle = ({ children }) => {
    return <Test>{children}</Test>;
  };  
  const Test = styled.div`
    min-height: 95vh;
    width: 800px;
    margin: auto;
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
    );
    border-radius: 30px 100px  30px 100px;
    z-index: 2;
    backdrop-filter: blur(2rem);
    display: flex;
    border: 1px solid black;
  `;
  