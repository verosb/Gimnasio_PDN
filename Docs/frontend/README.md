Lenguajes de Programación Utilizados
TypeScript: Angular está basado en TypeScript, un superset de JavaScript, que permite agregar tipado estático a las aplicaciones web.
HTML/CSS: Para la estructura y el estilo de la interfaz de usuario.

Framework Utilizado
Angular: Es un framework de desarrollo frontend basado en TypeScript. Angular proporciona herramientas para la creación de aplicaciones de una sola página (SPA) de manera eficiente, gestionando la interacción con el backend, en este caso, el API de Spring Boot.

IDE 
Visual Studio Code (VSCode): Es el IDE recomendado para el desarrollo de aplicaciones Angular debido a su soporte completo para TypeScript, la integración con Git, y la posibilidad de agregar extensiones como Angular Essentials para facilitar el desarrollo.

Rutas de Carpetas
A continuación, se describen las rutas de las carpetas clave dentro del frontend de la aplicación:

src/app/: Contiene el código fuente de la aplicación Angular.

components/: Los componentes son las unidades básicas de la interfaz de usuario en Angular.
user-profile/: Componente para gestionar el perfil del usuario, donde se muestran y gestionan sus datos de ejercicio.
routine/: Componente para el seguimiento de rutinas, donde los usuarios pueden registrar y visualizar su progreso.
services/: Los servicios gestionan la lógica de negocio y las interacciones con el backend.
user.service.ts: Servicio para la interacción con la API de usuarios.
exercise.service.ts: Servicio para la gestión de datos relacionados con los ejercicios y rutinas.
models/: Definición de modelos de datos en TypeScript, por ejemplo, la estructura de un usuario o una rutina de ejercicio.
user.model.ts: Modelo que representa un usuario en la aplicación.
routine.model.ts: Modelo que representa una rutina de ejercicios.
app.module.ts: Módulo principal de la aplicación, donde se configuran las dependencias y se importan los módulos necesarios.
src/environments/:

environment.ts: Archivo de configuración para el entorno de desarrollo. Contiene parámetros como la URL de la API, que puede cambiar según el entorno (desarrollo, producción).
environment.prod.ts: Configuración específica para el entorno de producción.
src/assets/:

styles/: Contiene archivos CSS o SCSS que definen el estilo global de la aplicación.
src/styles.css o src/styles.scss: El archivo principal de estilo de la aplicación donde se definen los estilos globales.

angular.json: Archivo de configuración principal de Angular donde se especifican las rutas de los archivos de configuración, scripts y estilos utilizados en la aplicación.

package.json: Archivo de configuración que define las dependencias y scripts del proyecto, como las librerías de Angular y otros paquetes adicionales.