import css from './Profile.module.css';

export default function Profile({
  userData: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.container}>
      <div className={css.imgWrapper}>
        <img className={css.img} src={avatar} alt={username} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.info}>{followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span className={css.info}>{views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.info}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}