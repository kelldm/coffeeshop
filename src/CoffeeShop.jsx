import React, { useState, useEffect } from "react";
import { FaCoffee, FaBars } from "react-icons/fa";
import { Button } from "./Button";
import { ProgressBar } from "./ProgressBar";
import { ToggleSwitch } from "./ToggleSwitch";
import styled, { createGlobalStyle } from "styled-components";
import ContactForm from "./ContactForm";
import CardList from "./Card";
import VideoList from "./Video";

// Definindo estilos globais para o tema claro e escuro
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ darkMode }) => (darkMode ? "#121212" : "#f5f5f5")};
    color: ${({ darkMode }) => (darkMode ? "#ffffff" : "#333333")};
    transition: all 0.3s ease;
    font-family: 'Arial';
  }
`;

const Container = styled.div`
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ darkMode }) => (darkMode ? "#333" : "#fff")};
  padding: 10px 20px;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (mix-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 15px 10px;
    justify-content: flex-start;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  color: ${({ darkMode }) => (darkMode ? "#fff" : "#fc8803")};

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 10px;
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    display: ${({ isOpen }) =>
      isOpen ? "block" : "none"}; // Controla a visibilidade do menu hambúrguer
  }
`;

const NavLink = styled.a`
  margin: 0 15px;
  cursor: pointer;
  padding:0.5rem;
  color: ${({ darkMode }) => (darkMode ? "#fff" : "#fc8803")};
  &:hover {
    color: ${({ darkMode }) => (darkMode ? "#ddd" : "#fc8803")};
  }

  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;

const Dropdown = styled.div`
  position: relative;

  &:hover .dropdown-menu {
    display: block;
  }
`;

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${({ darkMode }) => (darkMode ? "#444" : "#fff")};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 160px;
  z-index: 100;

  a {
    display: block;
    padding: 8px 16px;
    color: ${({ darkMode }) => (darkMode ? "#fff" : "#333")};
    text-decoration: none;

    &:hover {
      background-color: ${({ darkMode }) => (darkMode ? "#555" : "#f0f0f0")};
    }
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Main = styled.main`
  padding: 1rem;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  text-align: center;

  h1 {
    font-size: 20px;
  }
  h2 {
    font-size: 16px;
  }
  p {
    font-size: 12px;
  }

  @media (min-width: 768px) {
    padding: 30px 10px;
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 20px;
    }
  }
`;

const Footer = styled.footer`
  background-color: ${({ darkMode }) => (darkMode ? "#333" : "#fff")};
  color: ${({ darkMode }) => (darkMode ? "#fff" : "#333")};
  padding: 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 15px 10px;
  }
`;

const CoffeeShop = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 10 : 100
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <GlobalStyle darkMode={darkMode} />
      <Container>
        <Header darkMode={darkMode}>
          <Logo darkMode={darkMode}>
            <FaCoffee /> Café Delícia
          </Logo>
          <Nav isOpen={menuOpen}>
            <NavLink
              darkMode={darkMode}
              onClick={() => scrollToSection("home")}
            >
              Home
            </NavLink>
            <Dropdown>
              <NavLink
                darkMode={darkMode}
                onClick={() => scrollToSection("menu")}
              >
                Menu
              </NavLink>
              <DropdownMenu className="dropdown-menu" darkMode={darkMode}>
                <a onClick={() => scrollToSection("menu1")}>Figurativo 1</a>
                <a onClick={() => scrollToSection("menu2")}>Figurativo 2</a>
              </DropdownMenu>
            </Dropdown>
            <NavLink
              darkMode={darkMode}
              onClick={() => scrollToSection("about")}
            >
              Sobre
            </NavLink>
            <NavLink
              darkMode={darkMode}
              onClick={() => scrollToSection("contact")}
            >
              Contato
            </NavLink>
          </Nav>
          <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars color={darkMode ? "#fff" : "#333"} />
          </MenuIcon>
          <div>
            <ToggleSwitch checked={darkMode} onChange={toggleDarkMode} />
          </div>
        </Header>

        <Main>
          <Section id="home">
            <h1>Bem-vindo ao Café Delícia</h1>
            <p>Experimente o melhor café da cidade</p>
            <ProgressBar progress={loadingProgress} />
            <Button primary size="large" onClick={() => alert("Pedido feito!")}>
              Faça seu pedido
            </Button>
          </Section>

          <Section id="menu">
            <h2>Destaques do Menu</h2>
            <CardList />
            <h2>Nossa Playlist</h2>
            <VideoList />
          </Section>

          <Section id="about">
            <h2>Sobre Nós</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              ac ante lobortis, semper libero id, vestibulum odio. Nullam in
              elit et mi facilisis rhoncus non sit amet dolor. Suspendisse
              suscipit convallis leo, in luctus nisi porta quis. Nulla hendrerit
              velit metus, vitae pretium eros iaculis a. Nulla finibus, orci
              vitae dignissim tristique, neque arcu rutrum lectus, quis auctor
              sapien neque vitae arcu.
            </p>
          </Section>

          <Section id="contact">
            <h2>Entre em Contato</h2>
            <ContactForm />
          </Section>
        </Main>

        <Footer darkMode={darkMode}>
          <p>&copy; 2024 Café Delícia. Todos os direitos reservados.</p>
        </Footer>
      </Container>
    </>
  );
};

export default CoffeeShop;
