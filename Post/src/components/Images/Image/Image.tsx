import styles from "./Image.module.css";

export interface IImgProps {
  url: any;
  title: string;
  onClick: () => void;
}

export function Image({ url, title, onClick }: IImgProps) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={url} onClick={onClick} />
      <p className={styles.title}>{title}</p>
    </div>
  );
}
