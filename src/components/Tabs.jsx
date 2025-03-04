const Tabs = ({ buttons, children, buttonsContainer }) => {
  const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};

export default Tabs;
