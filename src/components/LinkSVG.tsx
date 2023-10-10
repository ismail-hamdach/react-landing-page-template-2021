type SVGProps = {
  // className?: string;
  // fill?: string;
  // viewBox?: string;
  children?: any;
};

const LinkSVG = ({children}: SVGProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 448 512" className="inline -rotate-45 text-primary mb-1">
      {children}
    </svg>
  );
};

export default LinkSVG;
