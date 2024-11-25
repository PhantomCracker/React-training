import { useState } from "react";

import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";

import Header from "./components/Header";
import ReactFeatures from "./components/ReactFeatures";
import ExamplesButton from "./components/ExamplesButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((feature) => (
              <ReactFeatures
                key={feature.title}
                imageSource={feature.image}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <ExamplesButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </ExamplesButton>
            <ExamplesButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </ExamplesButton>
            <ExamplesButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </ExamplesButton>
            <ExamplesButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </ExamplesButton>
          </menu>

          {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : (
            <p>Select a topic</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
