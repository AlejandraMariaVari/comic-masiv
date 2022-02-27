# Documentación Prueba técnica Masiv - Alejandra Vargas

El proyecto Comic fue creado con el framework [Create React App](https://github.com/facebook/create-react-app).

Adicional a ello se integran las técnologías [Redux](https://redux.js.org/), [Sass](https://sass-lang.com/documentation), [Webpack](https://webpack.js.org/) y las librerías [react-loading](https://codesandbox.io/s/mqx0ql55qp) y [react-toastify](https://fkhadra.github.io/react-toastify/introduction).

Después de clonar el proyecto, se instalan las dependencias con un gestor de paquetes npm o yarn con el comando:
### `yarn install` o `npm install`

Se ejecuta el proyecto con el comando:
### `yarn start` o `npm start`

Por defecto el servicio se abrirá en modo desarrollo de tu navegador en el puerto 3000 de la siguiente forma:  [http://localhost:3000](http://localhost:3000) 

Se integra Webpack para la generación del build del proyecto, para crear el build se ingresa el siguiente comando:

### `yarn run build` o `npm run build`

Todos los archivos generados del proceso de compilación quedan guardados en la carpeta dist, en el directorio raíz del proyecto. De ésta forma el archivo ya queda listo para ser ejecutado en modo producción.

## Cómo interactuar con el proyecto
Después de ejecutar el proyecto en [http://localhost:3000](http://localhost:3000), se visualiza de forma aleatoria un comic, el cuál contiene un título y una sección de calificación y en el cuál se podrá calificar cada comic con una puntuación de 1 a 5 estrellas. y pasar al siguiente comic al dar click en el botón siguiente.