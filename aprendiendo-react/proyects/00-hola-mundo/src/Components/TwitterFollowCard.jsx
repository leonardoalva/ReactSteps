import { Children, useState } from "react";

// Componente TwitterFollowCard
function TwitterFollowCard({ userName, name }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const addAt = (userName) => `@${userName}`;



  // Cambia el texto del botón dependiendo del estado de seguimiento
  const buttonClassName = isFollowing
    ? "Tw-FollowCard-Button Is-Following"
    : "Tw-FollowCard-Button ";

  // Cambia el color del botón si está siguiendo
    const buttonText = isFollowing 
    ? (isHovering ? 'unfollow' : 'following')
    : 'follow';

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const handleMouseEnter = () => {
    if (isFollowing) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="Containter-Tw-FollowCard">
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

        <button
          className={buttonClassName}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
export default TwitterFollowCard;
