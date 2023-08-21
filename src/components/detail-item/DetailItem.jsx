/* eslint-disable react/prop-types */
import "./DetailItem.css";

export const DetailItem = ({ years, title, place, desc, type }) => {
  console.log({ years, title, place, desc, type });
  return (
    <div className="description-container">
      <div className="years-container">
        <span>{years.startedYear}</span>
        <span>{years.endedYear}</span>
      </div>
      <div className="details-container">
        {type === "laboral" ? (
          <h4>
            {title} - {place}
          </h4>
        ) : (
          <>
            <h4>{title}</h4>
            <span>{place}</span>
          </>
        )}
        <p>{desc}</p>
      </div>
    </div>
  );
};
