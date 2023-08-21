import "./App.css";
import { MainDetailsSection } from "./components/main-details-section/MainDetailsSection";
import { Sidebar } from "./components/sidebar/Sidebar";
import { mainDetailsSectionsInfo, sidebarSectionsInfo } from "./data/data";

function App() {
  return (
    <main className="cv-container">
      <Sidebar sectionsInfo={sidebarSectionsInfo} />
      <section className="main-details-container">
        <div className="top-info-container">
          <div className="title-container">
            <h2>Diego Granados</h2>
            <h3>Desarrollador Full Stack Jr.</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            ipsa ad deleniti velit odio repellat voluptate numquam, repudiandae
            necessitatibus ullam, optio quaerat labore praesentium aut eaque
            possimus aspernatur eligendi molestias nisi dignissimos dolor
            voluptatem earum repellendus! Quae laudantium minus incidunt.
          </p>
        </div>
        {mainDetailsSectionsInfo.map((section) => (
          <MainDetailsSection
            key={section.title}
            title={section.title}
            items={section.items}
            type={section.type}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
