import ReactFeatures from "./ReactFeatures";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
    return (
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
    )
}