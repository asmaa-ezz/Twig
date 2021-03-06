import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Button from '../../../../common/Button';

export default function TextTranslation(props) {
  const {
    onChange, onClick, error, textTranslation,
  } = props;
  const typeId = 1;

  return (
    <div className="donate__text">
      <textarea
        className="textarea__box-text"
        name="textTranslation"
        id=""
        cols="55"
        rows="4"
        onChange={onChange}
        placeholder="Enter your translation here..."
        value={textTranslation}
      />
      {error ? <h1 className="donate__validation">{error}</h1> : null}
      <Button onClick={() => onClick(typeId)} value="Submit Translation" className="donate__submit" />
    </div>
  );
}
TextTranslation.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  error: PropTypes.string,
  textTranslation: PropTypes.string,
};
