import axios from 'axios';


// reemplazar localhost por la ip en caso de ejecutar desde un dispositivo movil, por ejemplo
const baseURL = 'http://10.5.11.121:8080';
// const baseURL = 'http://localhost:8080';

const instance = axios.create({
  baseURL,
})

export const on = () => instance.get('led?action=on');

export const off = () => instance.get('led?action=off');

export const blink = () => instance.get('led?action=blink');


