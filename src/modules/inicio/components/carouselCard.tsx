import styles from "../assets/css/carouselCard.module.css"


const CarouselCard : React.FC = () =>{
    return (
        <div className={styles.card}>
            <div className={styles.cardBody}></div>
            <div className={styles.cardFooter}>
                <p className={styles.cardFooterText}>
                    10 Años de Experiencia, miles de conversaciones exitosas, incontables conexiones construidas. ¡Cumplimos 10 años juntos!
                </p>
            </div>
        </div>
    )
}


export default CarouselCard