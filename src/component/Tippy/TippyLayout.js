import Tippy from "@tippyjs/react";
import React from "react";
import PropTypes from "prop-types";

const TippyLayout = ({ content, children, className, ...props }) => {
  return (
    <Tippy trigger="click" content={content} {...props}>
      <span className={className}>{children}</span>
    </Tippy>
  );
};

TippyLayout.propTypes = {
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};
export default TippyLayout;
