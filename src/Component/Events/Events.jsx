import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Events = ({ event }) => {
  const { picture, title, category, category_bg, card_bg, text_color, id } = event;

  return (
    <Link to={`donate/${id}`}>
      <div
        style={{ backgroundColor: card_bg }}
        className={`rounded-[8px] bg-[#0052FF26] pb-[16px]`}
      >
        <img src={picture} className="w-[100%]" alt="" />
        <div className="mt-[16px] px-[16px]">
          <div
            style={{ backgroundColor: category_bg }}
            className={`px-[10px] py-[2px] inline-block rounded-[4px] mb-[8px]`}
          >
            <p style={{ color: text_color }} className={`text-[14px] inter5`}>
              {category}
            </p>
          </div>
          <p style={{ color: text_color }} className={`text-[20px] inter6`}>
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
};

Events.propTypes = {
  event: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    category_bg: PropTypes.string.isRequired,
    card_bg: PropTypes.string.isRequired,
    text_color: PropTypes.string.isRequired,
    button_bg: PropTypes.string,
    id: PropTypes.int,
  }).isRequired,
};

export default Events;
