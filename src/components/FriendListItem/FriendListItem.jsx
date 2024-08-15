import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const statusClasses = clsx(isOnline ? css.isOnline : css.Offline);
  return (
    <div className={css.item}>
      <img className={css.img} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p className={statusClasses}>{isOnline ? 'isOnline' : 'Offline'}</p>
    </div>
  );
}