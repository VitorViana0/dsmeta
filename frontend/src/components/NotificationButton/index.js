import notificationIcon from '../../assets/img/notf-icon.svg'
import './styles.css'

function NotificationButton() {
    return (
        <>
            <p>Meu Componente</p>
            <div class="dsmeta-red-btn">
                <img src={notificationIcon} alt="Notificar" />
            </div>
        </>
    );
}

export default NotificationButton;