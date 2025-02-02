import { Link } from 'react-router-dom'

const Profile = (props) => {
  console.log(props.profile.reviews)
  return ( 
    <>
    <div className='profile-container'>
    <h1>{props.profile.name}</h1>
    <div className='favorites'>
      <h2>Favorite Breweries</h2>
      {props.profile.favorites.length ?
        <ul>
        {props.profile.favorites.map(favorite => {
          <li>{favorite}</li>
        })}
        </ul>
        :
        <p>No favorite breweries</p>
      }
    </div>
    <div className='events'>
      <h2>Brewery Meet Ups</h2>
      {props.profile.events.length ?
        <ul>
          {props.profile.events.map(event => {
            <li>
              {event}
            </li>
          })}
        </ul>
        :
        <p>No event listed</p>
      }
    </div>
    <div className='reviews'>
      <h2>Brewery Reviews</h2>
      {props.profile.reviews.length ?
        <ul>
          {props.profile.reviews?.map(review => 
            <li>
              {review.brewery}
              {review.comment}
            </li>
          )}
        </ul>
        :
        <p>No reviews</p>
      }

  
    </div>
    


    </div>
    </>

   );
}
 
export default Profile