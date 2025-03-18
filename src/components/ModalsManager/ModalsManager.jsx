import PropTypes from 'prop-types';
import { Fragment } from 'react';

function ModalsManager({ modals, getModalElement }) {
  return (
    <>
      {Object.entries(modals).map(([name]) => {
        return <Fragment key={name}>{getModalElement(name)}</Fragment>;
      })}
    </>
  );
}

ModalsManager.propTypes = {
  modals: PropTypes.object.isRequired,
  getModalElement: PropTypes.func.isRequired,
};

export default ModalsManager;
