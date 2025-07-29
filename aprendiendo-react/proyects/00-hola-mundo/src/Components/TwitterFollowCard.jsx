function TwitterFollowCard({ userName, name, isFollowing }) {
 const addAt = (userName) => `@${userName}`

 const text = isFollowing ? "Siguiendo" : "Seguir";
 const buttonClassName = isFollowing ?
  "Tw-FollowCard-Boton-Siguiendo" : "Tw-FollowCard-Boton-Seguir";



  return (
    <div className="Containter-Tw-FollowCard" >
    <div className="Tw-FollowCard">
      <img
        className="Tw-FollowCard-Imagen"
        src={`https://unavatar.io/twitter/${userName}`}
        alt={name}
      />
      <div className="Tw-FollowCard-Info">
      <h3 className="Tw-FollowCard-Title">{name}</h3>
      <p className="Tw-FollowCard-Texto">{addAt(userName)}</p>
      </div>
      <button className={buttonClassName} class="Tw-FollowCard-Boton">
        {text}
      </button>
    </div>
    </div>
  );
}
export default TwitterFollowCard;