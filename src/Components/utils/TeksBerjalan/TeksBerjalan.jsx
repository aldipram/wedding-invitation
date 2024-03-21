import '../../../style/MarqueeText.css';

// eslint-disable-next-line react/prop-types
const MarqueeText = ({ text }) => {
  return (
    <div className="marquee">
      <span className='text-white'>{text}</span>
    </div>
  );
};

export default MarqueeText;