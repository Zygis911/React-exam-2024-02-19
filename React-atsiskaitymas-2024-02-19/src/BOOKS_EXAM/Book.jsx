
import {Link} from 'react-router-dom';

export const Book = ({ id, title, author, category, price, cover, images }) => {
    return (
     
      <div className='knygos'>
        <img src={cover} alt={`${title} cover`} />
        <img src={images} alt="veikia arba ne" />
        <h3>{id}</h3>
        <p>{title}</p>
        <p>{author}</p>
        <p>{category}</p>
        <p>{price}</p>
        <Link to="/homepage"> {/* Correct the 'to' prop value */}
          <button>Click me to get to homepage</button>
        </Link>
        <Link to="/booksPage">
        <button>Click me to get to books page</button>
      </Link>
      <Link to="/forms">
        <button>Click me to get to forms</button>
      </Link>
      
      </div>
    );
  };

