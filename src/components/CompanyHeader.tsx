import CompanyIcon from "./CompanyIcon";
import CompanyLabel from "./CompanyLabel";
import CompanyTitle from "./CompanyTitle";

function CompanyHeader({className, ...props } : React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} {...props}>
      <div className="flex items-center justify-center gap-2 mb-6">
        <CompanyIcon className="h-12 w-12 text-accent-primary m-2" />
        <CompanyLabel className="text-5xl md:text-7xl font-bold text-text-primary" />
      </div>
      <CompanyTitle className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed" />
    </div>
  );
};

export default CompanyHeader;