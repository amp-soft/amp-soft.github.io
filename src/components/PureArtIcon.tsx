import pureArtIcon from '@assets/pureArt_icon.png';

function PureArtIcon({className, ...props } : React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} {...props}>
      <img src={pureArtIcon} alt="Pure Art AI" />
    </div>
  );
};

export default PureArtIcon;