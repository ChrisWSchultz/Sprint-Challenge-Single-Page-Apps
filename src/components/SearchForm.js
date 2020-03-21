import React, { useState } from "react";

export default function SearchForm(props) {
    const [ searchTerms, setSearchTerms ] = useState([]);

    function changeHandler(event) {
        setSearchTerms({...searchTerms, [event.target.name]: event.target.value});
    }

    function formSubmitHandler(event) {
        event.preventDefault();
        props.filterList(searchTerms.query.split(' '));
    }
 
  return (
    <section className="search-form">
        <form onSubmit={formSubmitHandler}>
            <input type="text" name='query' onChange={changeHandler}/>
            <button type='submit'>Search</button>
        </form>
    </section>
  );
}
