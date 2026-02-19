import remindersIcon from '@assets/reminders_icon.png';

function RemindersIcon({className, ...props } : React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} {...props}>
      <img src={remindersIcon} alt="Reminders" />
    </div>
  );
};

export default RemindersIcon;