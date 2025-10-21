// src/components/Card.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ 
  title, 
  content, 
  footer, 
  className = '', 
  ...rest 
}) => {
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105 ${className}`} 
      {...rest}
    >
      {title && (
        <div className="px-4 py-2 bg-gray-100 dark:bg-gray-700 font-semibold text-gray-800 dark:text-gray-200">
          {title}
        </div>
      )}
      <div className="px-4 py-3 text-gray-700 dark:text-gray-300">
        {content}
      </div>
      {footer && (
        <div className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-sm text-gray-600 dark:text-gray-400">
          {footer}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node.isRequired,
  footer: PropTypes.node,
  className: PropTypes.string,
};

export default Card;