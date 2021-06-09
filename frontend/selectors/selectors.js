import React from 'react';

export const listErrors = (errors) => {
    if (!errors || errors.length <= 0) return null;
    const errorsLi = errors.map((error, ix) => {
      return <li key={ix}>{error}</li>
    })
    return <div className="form-errors-container">
        <ul>{errorsLi}</ul>
    </div>;
};