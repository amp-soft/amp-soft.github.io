function CompanyLabel({className, ...props } : React.HTMLAttributes<HTMLHRElement>) {
  return (
    <h1 className={className} {...props}>
      <span>Amp</span> 
      <span className="text-accent-primary"> Software</span>
    </h1>
  );
};

export default CompanyLabel;