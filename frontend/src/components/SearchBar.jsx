import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchBar({placeholder, data}) {
    return ( 
<div>
    <form className="mx-auto p-2" role="search" 
         style={{
        textAlign:"center",
        fontWeight: "600",
        position: "relative",
        height: "50px",
      }}
      >
        <input className="mx-auto p-2" type="search" placeholder="Search" aria-label="Search"
        style={{
          width:"600px",
          height: "49px",
          alignContent: "center",
          borderRadius: "50px",
          borderColor: "grey"
        }}
        />
        <button className="bi bi-search" type="submit" 
        style={{
          position: 'absolute',
          right: "895px",
          paddingTop:"16px",
          paddingLeft: "2px",
          paddingRight: "15px",
          paddingBottom: "1px",
          borderRadius: "50px",
          backgroundColor: "light",
          borderColor: "light"
          
        }}
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="74" height="26" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
          
        </button>
      </form>

      <div className="d-flex mx-auto justify-content-center">
        <div className="row align-items-center"
         style={{
          width: "400px",
          margin: "20px"
        }} >

      <div className="col"><a href="#"
      >Most Popular</a></div>

      <div className="col">
      <span className="border-start border-end"
      style={{
    
      }}>
       <a href="#" className="col">Recommended</a>
       </span>
       </div>

      <div className="col"
      ><a href="#" className="alignContents"
      >Filter</a></div>

      </div>
     </div>
  </div>
      
    );
  }

  export default SearchBar;