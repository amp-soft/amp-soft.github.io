import ampsoftIcon from '@assets/ampsoft_icon.svg'

function CompanyIcon({className, ...props } : React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} {...props}>
      <img src={ampsoftIcon} alt="Amp Software" />
    </div>
  );
};

export default CompanyIcon;