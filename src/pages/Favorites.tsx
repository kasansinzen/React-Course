import React from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorites-context';

function FavortiesPage() {
  const favoriteCtx = React.useContext(FavoritesContext);

  let content;

  if(favoriteCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>
  }else {
    content = <MeetupList meetups={favoriteCtx.favorites} />
  }

  return <section>
    <h1>My Favorites</h1>
    {content}
  </section>
}

export default FavortiesPage;