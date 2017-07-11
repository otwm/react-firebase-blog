import React from 'react';
import { Link } from 'react-router';

function NotFound() {
  return (
    <section>
      <h1>Not Found!</h1>
      <div>
        <Link to="/">go home</Link>
      </div>
    </section>
  )
}

export default NotFound;