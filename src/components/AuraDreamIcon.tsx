import auraDreamIcon from '@assets/auraDream_icon.png';

function AuraDreamIcon({className, ...props } : React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} {...props}>
      <img src={auraDreamIcon} alt="Aura Dream AI" />
    </div>
  );
};

export default AuraDreamIcon;