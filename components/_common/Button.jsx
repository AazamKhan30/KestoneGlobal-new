import Link from "next/link";

const Button = ({ text, url, variant, iconURL, className, target }) => {
  return (
    <Link
      href={url}
      className={`${className} siteBtn slideBtn ${variant}`}
      target={target}
    >
      {text}
    </Link>
  );
};

export default Button;
