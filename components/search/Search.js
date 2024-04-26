"use client";

import "./search.scss";

export default function Search({ value, onChange, onClick, children }) {
  return (
    <div className="search">
      <div className="search__form">
        <input
          tabIndex={9999}
          type="search"
          name="search"
          value={value}
          onChange={onChange}
          className="form__input"
          placeholder="поиск по имени"
        />
        <button className="form__button" onClick={onClick}>
          <i className="bi bi-search"></i>
        </button>
      </div>
      <div
        className="search__results"
        style={value === "" ? {display: 'none'} : null}
      >
        {children}
      </div>
    </div>
  );
}
