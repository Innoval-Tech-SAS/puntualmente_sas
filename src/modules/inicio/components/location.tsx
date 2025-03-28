import styles from "../assets/css/locations.module.css";
import ContactAccordion from "./contactAccordion";
import { contactData } from "../utils/locationUtils"
const Locations: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className="">Nuestras ubicaciones</h1>

            <div className={``}>
                <div className={``}>
                    <ContactAccordion contactData={contactData} />

                    <div className={``}></div>
                </div>
                <div className={``}></div>
            </div>
        </div >
    );
};

export default Locations;
