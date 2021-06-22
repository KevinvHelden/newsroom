import styles from "./user.module.scss";
import Link from "next/link";
import Image from "next/image";
import classnames from "classnames";
import Icon from "../icon/icon";

type Props = {
  user: {
    username: string;
    profilePicture?: string;
    profileId: string;
  };
  hasPicture?: boolean;
  alignPictureLeft?: boolean;
};

export default function User({ user, hasPicture, alignPictureLeft }: Props) {
  const { profileId, profilePicture, username } = user;
  return (
    <Link href={`/user/${profileId}`}>
      <div
        className={classnames([
          styles.root,
          { [styles.alignPictureLeft]: alignPictureLeft },
        ])}
      >
        <p className={"bold"}>{username}</p>
        {hasPicture && (
          <div className={styles.imageContainer}>
            {profilePicture ? (
              <Image src={profilePicture} width={35} height={35} />
            ) : (
              <Icon type="user" colour="black50" />
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
