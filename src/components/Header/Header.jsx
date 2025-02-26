import randomImg from "../../assets/react-core-concepts.png";

import "./Header.css";

const reactDescription = ["Fundamental", "Crucial", "Core"];

const randomGen = Math.floor(Math.random() * reactDescription.length);

const Header = () => {
  const description = reactDescription[randomGen];
  return (
    <header>
      <img src={randomImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

export default Header;
