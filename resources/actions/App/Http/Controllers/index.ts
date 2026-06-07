import NotificationController from './NotificationController'
import DependentController from './DependentController'
import HomeController from './HomeController'
import ContactController from './ContactController'
import DocumentController from './DocumentController'
import EventController from './EventController'
import Settings from './Settings'

const Controllers = {
    NotificationController: Object.assign(NotificationController, NotificationController),
    DependentController: Object.assign(DependentController, DependentController),
    HomeController: Object.assign(HomeController, HomeController),
    ContactController: Object.assign(ContactController, ContactController),
    DocumentController: Object.assign(DocumentController, DocumentController),
    EventController: Object.assign(EventController, EventController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers