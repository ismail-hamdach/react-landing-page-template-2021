type SVGProps = {
  className?: string;
  fill?: string;
  viewBox?: string;
  children?: any;
};

const LinkSVG = ({
  className = "svg-icon text-primary",
  fill = "currentColor",
  viewBox = "0 0 20 20",
  children,
}: SVGProps) => {
  return (
    <svg className={className} fill={fill} viewBox={viewBox}>
      {children}
    </svg>
  );
};

export default LinkSVG;
