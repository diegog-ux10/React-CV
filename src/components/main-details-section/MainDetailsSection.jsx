/* eslint-disable react/prop-types */

import { DetailItem } from "../detail-item/DetailItem";

export const MainDetailsSection = ({ title, items, type }) => {
  return (
    <div className="details-section">
      <h3>{title}</h3>
      <hr style={{ margin: "4px 0" }} />
      {items.map((item) => (
        <DetailItem key={title} {...item} type={type} />
      ))}
    </div>
  );
};
