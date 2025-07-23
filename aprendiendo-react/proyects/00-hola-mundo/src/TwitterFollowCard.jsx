function TwitterFollowCard({ userName, name, isFollowing }) {
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
      <p className="Tw-FollowCard-Texto">@{userName}</p>
      </div>
      <button className="Tw-FollowCard-Boton">
        {isFollowing ? "Siguiendo" : "Seguir"}
      </button>
    </div>
    </div>
  );
}
export default TwitterFollowCard;