import React from 'react'; 
import fotinho from'../../Assets/Resources/MYtinUser10.png';

const ProfilePicture = ({username, userimage}) => {
  return (
    <div>
      <img id={"profilePic"}className={"rounded-circle m-3"}src={fotinho}/*  src={userimage} *//>
      <h6>{username}</h6>
    </div> 
  );
};
export default ProfilePicture;