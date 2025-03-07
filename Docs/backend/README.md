Lenguajes de Programación Utilizados
Java: El backend está desarrollado utilizando el lenguaje de programación Java, versión 23.0.2
Framework Utilizado
Spring Boot: Se utiliza Spring Boot para el desarrollo del backend, lo que permite crear aplicaciones de backend con configuración mínima. Spring Boot facilita la creación de servicios web RESTful.
IDE Recomendados
IntelliJ IDEA: Un entorno de desarrollo integrado popular para Java que tiene soporte completo para Spring Boot y Maven.

Rutas de Carpetas
A continuación, se describen las rutas de carpetas clave en el proyecto backend:

src/main/java: Contiene el código fuente de la aplicación.

com/gimnasio_pdn/: El paquete principal que contiene todos los archivos del proyecto.
controller/: Contiene los controladores REST que gestionan las rutas de la API.
service/: Contiene la lógica de negocio.
model/: Define las entidades del sistema, como User, Routine, etc.
repository/: Contiene las interfaces de repositorios de Spring Data JPA para interactuar con la base de datos.
config/: Contiene las configuraciones específicas de la aplicación (seguridad, propiedades, etc.).
src/main/resources:

application.properties: Archivo de configuración de la aplicación, donde se definen las configuraciones de la base de datos, el puerto de la aplicación, entre otros parámetros.
static/: Contiene archivos estáticos como imágenes, CSS o archivos JavaScript si es necesario.
templates/: Si usas Thymeleaf para renderizar HTML en el backend, los archivos .html irían aquí.
src/test/java: Contiene las pruebas unitarias y de integración de la aplicación.
