
import { modalSingleton }  from './error-popup/error-popup.js'

export default function handleError(errorMsq)
{
    var modal = modalSingleton.getInstance();
    modal.setModalText(errorMsq);
    modal.show();
}