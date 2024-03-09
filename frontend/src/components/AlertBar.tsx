import styles from '../app/ui/alertbar.module.css'

const AlertBar = () => {
    return(
        <div className={styles.alert_bar}>
            <div>
                Strona
            </div>
            <div>
                Powiadomienie
            </div>
            <div>
                Informacje
            </div>
        </div>
    )
}

export default AlertBar