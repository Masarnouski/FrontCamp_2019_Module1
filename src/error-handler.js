
import { modalSingleton }  from './error-popup/error-popup.js'

export default function handleError(errorMsq)
{
    var modal = new modalSingleton();
    modal.setModalText(errorMsq);
    modal.show();
}