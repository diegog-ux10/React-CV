import "./Sidebar.css";
import image from "../../assets/126538774_384229613027364_5620858409476528869_n.jpg";
import { SidebarSection } from "../sidebar-section/SidebarSection";

// eslint-disable-next-line react/prop-types
export const Sidebar = ({ sectionsInfo }) => {
  return (
    <aside className="sidebar">
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <div className="details-container">
        {Object.entries(sectionsInfo).map(([k, v]) => (
          <SidebarSection key={k} title={k} info={v} />
        ))}
      </div>
    </aside>
  );
};
