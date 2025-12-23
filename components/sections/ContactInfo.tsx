import Icon from "../ui/Icon";
import styles from "./ContactInfo.module.scss";
import contactData from "@/lib/data/contact.json";

const contactItems = contactData.contact.items;

export default function ContactInfo() {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.infoItems}>
        {contactItems.map((item, idx) => (
          <div key={idx} className={styles.item}>
            <div className={styles.iconWrapper}>
              <Icon name={item.icon as any} size={18} />
            </div>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

