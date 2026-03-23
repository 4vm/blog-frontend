import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1rem;
  background: #282c34;
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 20px;
  }
`;

export const Logo = styled.h2`
  cursor: pointer;
  margin: 0;
  font-size: 1.2rem;
  white-space: nowrap;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (min-width: 768px) {
    gap: 12px;
  }
`;

const BaseButton = styled.button`
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;
  transition: filter 0.2s;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const BackButton = styled(BaseButton)`
  background: #4b5563;
  color: white;
  padding: 8px;
  border-radius: 50%;
  width: 35px;
  height: 35px;

  svg {
    font-size: 1.1rem;
  }

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const ButtonAdmin = styled(BaseButton)`
  background: transparent;
  color: white;
  border: 1px solid white;
  display: block;
`;

export const ButtonCreate = styled(BaseButton)`
  background: #6f42c1;
  color: white;
`;

export const ButtonLogin = styled(BaseButton)`
  background: #28a745;
  color: white;
`;

export const ButtonLogout = styled(BaseButton)`
  background: #dc3545;
  color: white;
`;