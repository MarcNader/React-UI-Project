import './search-box.styles.scss';

const SearchBox = ( props ) => {
    const {placeholder}=props;

    return ( 
    <input
    className='searchbox'
    type='search'
    placeholder={placeholder}
  />
  
  )
};

export default SearchBox;