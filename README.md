# Routed Anecdotes App

La aplicación se inicia de la forma habitual, pero primero debe instalar las dependencias de la aplicación:

```bash
npm install
npm start
```

## 1: anécdotas encaminadas, paso 1
Agregue React Router a la aplicación para que al hacer clic en los enlaces del componente *Menu*, se pueda cambiar la vista.

En la raíz de la aplicación, es decir, la ruta `/`, muestra la lista de anécdotas:

<img src="./assets/40.png" />

El componente *Footer* siempre debe estar visible en la parte inferior.

La creación de una nueva anécdota debería ocurrir, por ejemplo, en la ruta *create*:

<img src="./assets/41.png" />

## 2: anécdotas encaminadas, paso 2
Implementar una vista para mostrar una sola anécdota:

<img src="./assets/42.png" />

La navegación a la página que muestra la anécdota única se realiza haciendo clic en el nombre de esa anécdota.

<img src="./assets/43.png" />

## anécdotas encaminadas, paso 3
La funcionalidad predeterminada del formulario de creación es bastante confusa, porque parece que no sucede nada después de crear una nueva anécdota utilizando el formulario.

Mejorar la funcionalidad de tal manera que después de crear una nueva anécdota, la aplicación pasa automáticamente a mostrar la vista de todas las anécdotas y al usuario se le muestra una notificación informándole de esta creación exitosa durante los próximos 10 segundos:


<img src="./assets/44.png" />
