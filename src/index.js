import _ from './View'
import { styles } from './styles/news-component.css'
import {popupstyle}  from './error-popup/error-popup.css'

import Controller from './Controller'
import Model from './Model'
import View from './View'

const app = new Controller(new Model(), new View())