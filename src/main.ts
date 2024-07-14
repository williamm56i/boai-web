import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import PanelMenu from 'primevue/panelmenu';
import Breadcrumb from 'primevue/breadcrumb';
import Avatar from 'primevue/avatar';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import TabMenu from 'primevue/tabmenu';
import Menu from 'primevue/menu';
import Carousel from 'primevue/carousel';
import Divider from 'primevue/divider';
import ProgressSpinner from 'primevue/progressspinner';
import Skeleton from 'primevue/skeleton';
import Dialog from 'primevue/dialog';
import Fieldset from 'primevue/fieldset';
import Panel from 'primevue/panel';

createApp(App)
    .use(PrimeVue)
    .component('PanelMenu', PanelMenu)
    .component('Breadcrumb', Breadcrumb)
    .component('Avatar', Avatar)
    .component('Card', Card)
    .component('InputText', InputText)
    .component('Button', Button)
    .component('DataTable', DataTable)
    .component('Column', Column)
    .component('TabMenu', TabMenu)
    .component('Menu', Menu)
    .component('Carousel', Carousel)
    .component('Divider', Divider)
    .component('ProgressSpinner', ProgressSpinner)
    .component('Skeleton', Skeleton)
    .component('Dialog', Dialog)
    .component('Fieldset', Fieldset)
    .component('Panel', Panel)
    .use(router)
    .mount('#app');
