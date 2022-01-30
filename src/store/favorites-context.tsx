import React from 'react';

interface IFavoritesContext {
  favorites: any[],
  totalFavorites: number,
  addFavorite: (favoriteMeetup: {[key: string]: any}) => void;
  removeFavorite: (meetupId: string) => void;
  itemIsFavorite: (meetupId: string) => boolean;
}
const FavoritesContext = React.createContext<IFavoritesContext>({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup: {[key: string]: any}) => {},
  removeFavorite: (meetupId: string) => {},
  itemIsFavorite: (meetupId: string) => false,
});

export const FavoritesContextProvider: React.FC = (props) => {
  const [userFavorites, setUserFavorites] = React.useState<any[]>([])

  const addFavoriteHandler = (favoriteMeetup: {[key: string]: any}) => {
    setUserFavorites((prevUserFavorites) => prevUserFavorites.concat(favoriteMeetup));
  }
  const removeFavoriteHandler = (meetupId: string) => {
    setUserFavorites((prevUserFavorites) => prevUserFavorites.filter(meetup => meetup.id !== meetupId));
  }
  const itemIsFavoriteHandler = (meetupId: string) => {
    return userFavorites.some(meetup => meetup.id === meetupId);
  }

  const context: IFavoritesContext = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>
}

export default FavoritesContext;