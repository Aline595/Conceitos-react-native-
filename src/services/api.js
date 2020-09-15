import axios from 'axios';

const api = axios.create({
  baseURL: '10.0.3.2'
});

export default api;

/***
 * IOS com Emulador: localhost
 * IOS com fisico: IP da máquina
 * Android com emulador: localhos (adb reverse tcp: 3333 tcp:3333)
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com Emulador: 10.0.3.2 (Genymotion)
 * Android com físico: IP da máquina
 * */