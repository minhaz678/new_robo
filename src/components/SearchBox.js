import React from 'react';


const SearchBox = ({searchfield, onSearchChange}) => {
	return (
		<div className='pa2'>
		   <input 
		   onChange={onSearchChange} 
		   className='pa3 ba b--green bg-lightest-blue' 
		   type='search' 
		   placeholder='search robots'
		   />
		</div>
	);
}


export default SearchBox;



