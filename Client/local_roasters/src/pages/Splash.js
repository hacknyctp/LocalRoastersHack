import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Splash = props => {
  const [coffee, setCoffeeType] = useState('');
  const onChange = e => {
    //setPrice(e.target.value);
    let node = document.getElementsByClassName('coffee-items');

    for (let i = 0; i < node.length; i++) {
      node[i].className = 'bbtn btn-lg btn-primary coffee-items';
    }

    e.target.className = 'btn btn-lg btn-success coffee-items';

    sessionStorage.setItem(e.target.name, e.target.value);
    setCoffeeType(e.target.value);
  };

  const onClickLink = e => {
    if (coffee === '') {
      alert('Pick a Coffee Type !!');
    } else {
      props.history.push('/price');
    }
  };

  return (
    <div className='container-fluid'>
      <div className='jumbotron'>
        <h3>
          <i className='fas fa-mug-hot'></i> Local Rosters
        </h3>
        <hr className='my-3'></hr>
        <p> Your location-based, personalized coffee experience</p>
      </div>
      What Roast of Coffee do You Like?
      <br />
      <div className='btn-group btn-group-price' role='group'>
        <div className='btn-group-item'>
          <input
            className='btn btn-lg btn-primary coffee-items'
            type='button'
            name='coffee'
            value='Light'
            onClick={onChange}
          />
        </div>
        <div className='btn-group-item'>
          <input
            className='btn btn-lg btn-primary coffee-items'
            type='button'
            name='coffee'
            value='Medium'
            onClick={onChange}
          />
        </div>
        <div className='btn-group-item'>
          <input
            className='btn btn-lg btn-primary coffee-items'
            type='button'
            name='coffee'
            value='Dark'
            onClick={onChange}
          />
        </div>
      </div>
      <br />
      <div className='btn btn-success' onClick={onClickLink}>
        Let's caffeinate
      </div>
      <br />
      <div>
        <Link className='links' to='/login'>
          <span className='links-small'>Already Sign Up? |</span> Log In
        </Link>
      </div>
    </div>
  );
};
export default Splash;
