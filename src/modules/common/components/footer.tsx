import footerStyles from "../assets/css/footer.module.css";
import { FooterColumnProps, ContactInfoProps } from "../types/footerTypes";
import { FaInstagram } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";

const FooterColumn: React.FC<FooterColumnProps> = ({ title, items }) => {
  return (
    <div className={footerStyles.footerColumn}>
      <h3 className={footerStyles.footerColumnTitle}>{title}</h3>
      <ul className={footerStyles.footerList}>
        {items.map((item, index) => (
          <li className={footerStyles.footerListItem} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ContactInfo: React.FC<ContactInfoProps> = ({
  title,
  offices,
  addresses,
}) => {
  return (
    <div className={footerStyles.footerColumn}>
      <h3 className={footerStyles.footerColumnTitle}>{title}</h3>

      <div className={footerStyles.contactInfo}>
        <div className={footerStyles.contactInfoColumn}>
          <h4 className={footerStyles.contactTitle}>Sede</h4>
          <ul className={footerStyles.footerList}>
            {offices.map((office, index) => (
              <li className={footerStyles.footerListItem} key={index}>
                {office}
              </li>
            ))}
          </ul>
        </div>

        <div className={footerStyles.contactInfoColumn}>
          <h4 className={footerStyles.contactTitle}>Dirección</h4>
          <ul className={footerStyles.footerList}>
            {addresses.map((address, index) => (
              <li className={footerStyles.footerListItem} key={index}>
                {address}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const footerItems = {
    recuperacion: [
      "Cobranza preventiva",
      "Cobranza administrativa",
      "Cobranza prejurídica",
      "Cobranza jurídica",
      "Compra de cartera",
    ],
    callCenter: [
      "Servicio al cliente",
      "Atención al cliente",
      "Ventas",
      "Referencias de créditos",
      "Colocación de créditos",
    ],
    offices: ["Campus", "Santa Sofía", "Medellín"],
    adresses: [
      "Av. Carrera 19 No 32-37",
      "Carrera 29 No 75A-26",
      "Carrera 51 No 50-21 Piso 6",
    ],
  };
  return (
    <footer>
      <div className={footerStyles.footerContainer}>
        <div className={footerStyles.containerLogo}>
          <img
            className={footerStyles.logoFooter}
            src="/assets/images/logo/logo_footer.png"
            alt=""
          />
        </div>
        <div className={footerStyles.footerContainer}>
          <div className={footerStyles.footerWrapper}>
            <FooterColumn
              title="Recuperación de cartera"
              items={footerItems.recuperacion}
            />
            <FooterColumn title="Call center" items={footerItems.callCenter} />
            <ContactInfo
              title="Contáctenos"
              offices={footerItems.offices}
              addresses={footerItems.adresses}
            />
          </div>
        </div>
      </div>

      <div className={footerStyles.footerBottomContainer}>
        <div className={footerStyles.footerBottomColumn}>
          <div className={footerStyles.footerBottom}>
            <div className="">
              <a href="" target="_blank" rel="noreferrer">
                <FaInstagram color="white" size={25} />
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <FiFacebook color="white" size={25} />
              </a>
            </div>
            <div className={footerStyles.footerBottom}>
              <a className={footerStyles.footerBottomText}>
                Política de tratamiento de datos
              </a>
              <small className={footerStyles.footerBottomText}>
                Puntualmente S.A.S.
              </small>
            </div>
          </div>
        </div>

        <div className={footerStyles.footerBottomColumn}>
          <div className={footerStyles.contactSection}>
            <small className={footerStyles.footerBottomText}>
              {" "}
              {`(+57) 601 7463410`}{" "}
            </small>
            <small
              className={footerStyles.footerBottomText}
            >{`contacto@puntualmente.com`}</small>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
