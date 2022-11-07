import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {editProfile} from "../reducers/profile-reducer";



const EditProfile = () => {
  const profile
      = useSelector(state => state.profile);
  let [firstName, setFirstName] = useState(profile.firstName)
  let [lastName, setLastName] = useState(profile.lastName)
  let [bio, setBio] = useState(profile.bio)
  let [location, setLocation] = useState(profile.location)
  let [website, setWebsite] = useState(profile.website)
  let [birthdate, setBirthdate] = useState(profile.dateOfBirth)

  const dispatch = useDispatch();
  const editProfileClickHandler = () => {
    const editedProfile = {
      firstName: firstName,
      lastName: lastName,
      bio: bio,
      location: location,
      website: website,
      birthdate: birthdate
    }
    dispatch(editProfile(editedProfile));
  }
  return(
      <div className="row">
        <div className="col-1">
          <Link to="/tuiter/profile">
            <i className="bi bi-x-lg"></i>
          </Link>
        </div>
        <div className="col-9 fw-bold">
          Edit Profile
        </div>
        <div className="col-2">
          <button className="rounded-pill btn btn-dark float-end ps-3 pe-3 fw-bold"
                  onClick={editProfileClickHandler}>
            Save
          </button>
        </div>
        <img className="mb-4 w-100" height={300} width= {650} src={`/images/${profile.bannerPicture}`}/>
        {/*<div className="position-relative">*/}
        {/*  <img className="rounded-circle position-absolute wd-nudge-up-50" height={120} src={`/images/${profile.profilePicture}`}/>*/}
        {/*</div>*/}
        <div>
          <textarea value={firstName} placeholder="firstName"
                    className="form-control border-soft mb-4"
                    onChange={(event) => setFirstName(event.target.value)}>
          </textarea>
          <textarea value={lastName} placeholder="lastName"
                    className="form-control border-soft mb-4"
                    onChange={(event) => setLastName(event.target.value)}>
          </textarea>
          <textarea value={bio} placeholder="Bio"
                    className="form-control border-soft mb-4"
                    onChange={(event) => setBio(event.target.value)}>
          </textarea>
          <textarea value={location} placeholder="Location"
                    className="form-control border-soft mb-4"
                    onChange={(event) => setLocation(event.target.value)}>
          </textarea>
          <textarea value={website} placeholder="Webs"
                    className="form-control border-soft mb-4"
                    onChange={(event) => setWebsite(event.target.value)}>
          </textarea>
          <textarea value={birthdate} placeholder="Birth date"
                    className="form-control border-soft mb-4"
                    onChange={(event) => setBirthdate(event.target.value)}>

          </textarea>
              <pre>
                {JSON.stringify(profile)}
              </pre>
        </div>

      </div>

  );
};
export default EditProfile;

