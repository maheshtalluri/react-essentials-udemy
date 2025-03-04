import { useState } from "react";
import ButtonTabs from "../ButtonTabs";
import Section from "./Section";
import Tabs from "./Tabs";
import { EXAMPLES } from "../data";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const handleSelect = (value) => {
    setSelectedTopic(value);
  };

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
      buttonsContainer = "menu"
        buttons={
          <>
            <ButtonTabs
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </ButtonTabs>
            <ButtonTabs
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </ButtonTabs>
            <ButtonTabs
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </ButtonTabs>
            <ButtonTabs
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </ButtonTabs>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
};

export default Examples;
