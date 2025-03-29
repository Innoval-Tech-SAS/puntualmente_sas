import styles from "../assets/css/locations.module.css";
import ContactAccordion from "./contactAccordion";
import { contactData } from "../utils/locationUtils";
const Locations: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nuestras ubicaciones</h1>

      <div className={styles.locationWrapper}>
        <ContactAccordion contactData={contactData} />
        <div className={styles.mapWrapper}>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8512698098125!2d-74.07698912429069!3d4.620610542345181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f998235e10e6d%3A0x79082e16d8402e76!2sAk.%2019%20%2332-37%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1743164789544!5m2!1ses-419!2sco"
            loading="lazy"
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Locations;
