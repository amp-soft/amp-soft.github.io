function CompanyTitle({className, ...props } : React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} {...props}>
      Your life, {' '}
      <span className="text-accent-primary font-semibold">
        simplified
      </span>,
      and {' '}
      <span className="text-accent-success font-semibold">
        secure
      </span>.
    </div>
  );
};

export default CompanyTitle;