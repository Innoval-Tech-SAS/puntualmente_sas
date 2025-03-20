import footerStyles from '../assets/css/footer.module.css';
import { FooterColumnProps, ContactInfoProps } from '../types/footerTypes';
import { FaInstagram } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";

const FooterColumn: React.FC<FooterColumnProps> = ({ title, items }) => {
    return (
        <div className={footerStyles.footer_column}>
            <h3 className={footerStyles.footer_column_title}>{title}</h3>

            <ul className={footerStyles.footer_list}>
                {items.map((item, index) => (
                    <li className={footerStyles.footer_list_item} key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

const ContactInfo: React.FC<ContactInfoProps> = ({ title, offices, addresses }) => {
    return (
        <div className={footerStyles.footer_column}>
            <h3 className={footerStyles.footer_column_title}>{title}</h3>

            <div className={footerStyles.contact_info}>

                <div className={footerStyles.contact_info_column}>
                    <h4 className={footerStyles.contact_title}>Sede</h4>
                    <ul className={footerStyles.footer_list}>
                        {offices.map((office, index) => (
                            <li className={footerStyles.footer_list_item} key={index}>{office}</li>
                        ))}
                    </ul>
                </div>

                <div className={footerStyles.contact_info_column}>
                    <h4 className={footerStyles.contact_title}>Dirección</h4>
                    <ul className={footerStyles.footer_list}>
                        {addresses.map((address, index) => (
                            <li className={footerStyles.footer_list_item} key={index}>{address}</li>
                        ))}
                    </ul>
                </div>

            </div>

        </div>
    )

};


const Footer: React.FC = () => {
    const footerItems = {
        recuperacion: [
            "Cobranza preventiva",
            "Cobranza administrativa",
            "Cobranza prejurídica",
            "Cobranza jurídica",
            "Compra de cartera"
        ],
        callCenter: [
            "Servicio al cliente",
            "Atención al cliente",
            "Ventas",
            "Referencias de créditos",
            "Colocación de créditos"
        ],
        offices: ["Campus", "Santa Sofía", "Medellín"],
        adresses: [
            "Av. Carrera 19 No 32-37",
            "Carrera 29 No 75A-26",
            "Carrera 51 No 50-21 Piso 6"
        ],
    }
    return (
        <footer>
            <div className={footerStyles.footer_container}>
                <div className={footerStyles.container_logo}>
                    <img className={footerStyles.logo_footer} src="/assets/images/logo_footer.png" alt="" />
                </div>
                <div className={footerStyles.footer_container}>
                    <div className={footerStyles.footer_wrapper}>
                        <FooterColumn title="Recuperación de cartera" items={footerItems.recuperacion} />
                        <FooterColumn title="Call center" items={footerItems.callCenter} />
                        <ContactInfo title="Contáctenos" offices={footerItems.offices} addresses={footerItems.adresses} />
                    </div>
                </div>
            </div>

            <div className={footerStyles.footer_bottom_container}>
                <div className={footerStyles.footer_bottom_column}>
                    <div className={footerStyles.footer_bottom}>
                        <div className="">
                            <a href="" target="_blank" rel="noreferrer">
                                <FaInstagram color='white' size={25} />
                            </a>
                            <a href="" target="_blank" rel="noreferrer">
                                <FiFacebook color='white' size={25} />
                            </a>
                        </div>
                        <div className={footerStyles.footer_bottom}>
                            <a className={footerStyles.footer_bottom_text}>Política de tratamiento de datos</a>
                            <small className={footerStyles.footer_bottom_text}>Puntualmente S.A.S.</small>
                        </div>
                    </div>

                </div>

                <div className={footerStyles.footer_bottom_column}>
                    <div className={footerStyles.contact_section}>
                        <small className={footerStyles.footer_bottom_text}> {`(+57) 601 7463410`} </small>
                        <small className={footerStyles.footer_bottom_text}>{`contacto@puntualmente.com`}</small>
                    </div>
                </div>
            </div>

        </footer>
    );
};
export default Footer;