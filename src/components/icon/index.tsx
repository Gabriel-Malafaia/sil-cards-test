import styles from "./icon.module.css";
import { AiOutlineEye, AiOutlineUnorderedList } from "react-icons/ai";
import { SiTrustpilot } from "react-icons/si";

export enum Icons {
  Eye = "Covid",
  List = "Posts",
  Trust = "TrustPilot",
}

interface IProps {
  id: string;
}

export default function Icon({ id }: IProps) {
  switch (id) {
    case Icons.Eye:
      return <AiOutlineEye className={styles.icon} />;
    case Icons.List:
      return <AiOutlineUnorderedList className={styles.icon} />;
    case Icons.Trust:
      return <SiTrustpilot className={styles.icon} />;
    default:
      return <></>;
  }
}
