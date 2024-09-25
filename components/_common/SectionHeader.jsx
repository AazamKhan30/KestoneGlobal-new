const SectionHeader = ({
  subTitle,
  title,
  description,
  subTitleColor,
  subTitleFontSize,
  titleColor,
  titleFontSize,
  fontFamily,
  textTransform,
  fontWeightBold,
  fontWeightLight,
}) => {
  return (
    <div>
      {subTitle && (
        <span
          className={`${subTitleColor} ${fontFamily}  ${subTitleFontSize} mb-2 d-block ${
            textTransform ? textTransform : ""
          }`}
        >
          {subTitle}
        </span>
      )}
      {title && (
        <h5
          className={`${titleColor} ${fontFamily} ${titleFontSize} ${
            description ? "mb-4" : "mb-0"
          }  ${fontWeightBold ? "fw-bold" : "fw600"} ${
            fontWeightLight ? "fw-light" : "fw600"
          }`}
        >
          {title}
        </h5>
      )}

      {description && <p className="fs14 fw-normal ">{description}</p>}
    </div>
  );
};

export default SectionHeader;
