import React from "react";
import PropTypes from "prop-types";

export default function Currency(props){
    return (
        <div className="group">
          <input type="text" value={props.amount} onChange={ev => props.onAmountChange(ev.target.value)} />
          <select value={props.currency} onChange={ev => props.onCurrencyChange(ev.target.value)}>
            {props.currencies.map((currency => (
              <option value={currency}>{currency}</option>
            )))}
          </select>
        </div>
      );
    }
    
    Currency.propTypes = {
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      currencies: PropTypes.array,
      onAmountChange: PropTypes.func,
      onCurrencyChange: PropTypes.func,
    };

