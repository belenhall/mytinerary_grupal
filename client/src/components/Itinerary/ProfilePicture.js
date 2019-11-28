import React from 'react'; 

const ProfilePicture = ({username, userimage}) => {
  return (
    <div>
      <img src={userimage}/>
      <h6>{username}</h6>
    </div> 
  );
};
export default ProfilePicture;