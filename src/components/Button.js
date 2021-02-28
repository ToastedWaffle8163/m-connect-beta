import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Button = ({text, color, link, textColor}) => {
  return (
    <Link to={link}>
      <div className={`text-${textColor} bg-${color} py-2 px-4`}>{text}</div>
    </Link>
  )
}

Button.defaultProps = {
  text: "Click Me",
  link: ""
}

export default Button
