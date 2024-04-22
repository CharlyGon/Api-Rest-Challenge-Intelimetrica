## Tabla de Contenidos

- [Api-Rest-Challenge-Intelimetrica](#api-rest-challenge-intelimetrica)
  - [Tarea 1: Importación de Datos y API CRUD](#tarea-1-importación-de-datos-y-api-crud)
    - [Esquema de la Tabla de Restaurantes](#esquema-de-la-tabla-de-restaurantes)
    - [CSV de Datos](#csv-de-datos)
  - [Tarea 2: Punto Final de Estadísticas](#tarea-2-punto-final-de-estadísticas)
  - [Instalación](#instalación)
  - [Configuración de Variables de Entorno](#configuración-de-variables-de-entorno)
  - [Uso](#uso)
    - [Endpoints de la API](#endpoints-de-la-api)
      - [Parámetros para el endpoint GET /api/v1/restaurants/statistics:](#parámetros-para-el-endpoint-get-apiv1restaurantsstatistics)
    - [Ejemplos de Uso](#ejemplos-de-uso)

# Api-Rest-Challenge-Intelimetrica

Este proyecto consiste en importar datos brutos de restaurantes a una base de datos relacional y exponer una API REST que implementa operaciones CRUD (Crear, Leer, Actualizar, Eliminar). Además, incluye la implementación de un punto final para calcular estadísticas sobre los restaurantes en función de su ubicación geográfica.

## Tarea 1: Importación de Datos y API CRUD

La primera tarea implica la importación de los datos brutos de restaurantes a una base de datos relacional y la exposición de una API REST que permite realizar operaciones CRUD en la tabla de restaurantes.

### Esquema de la Tabla de Restaurantes

La tabla `Restaurantes` tiene el siguiente esquema:

- `id` TEXT PRIMARY KEY: Identificador único del restaurante.
- `rating` INTEGER: Número entre 0 y 4.
- `name` TEXT: Nombre del restaurante.
- `site` TEXT: URL del restaurante.
- `email` TEXT: Correo electrónico del restaurante.
- `phone` TEXT: Número de teléfono del restaurante.
- `street` TEXT: Dirección del restaurante.
- `city` TEXT: Ciudad del restaurante.
- `state` TEXT: Estado del restaurante.
- `lat` FLOAT: Latitud del restaurante.
- `lng` FLOAT: Longitud del restaurante.

### CSV de Datos

Puedes encontrar el CSV con los datos brutos en el siguiente enlace: [restaurantes.csv](https://recruiting-datasets.s3.us-east-2.amazonaws.com/restaurantes.csv)

## Tarea 2: Punto Final de Estadísticas

La segunda tarea consiste en implementar el siguiente punto final:

```
/restaurants/statistics?latitude=x&longitude=y&radius=z
```

Este punto de conexión recibe una latitud (`x`) y una longitud (`y`) como parámetros, que corresponden al centro de un círculo, y un tercer parámetro (`z`) que corresponde a un radio en metros.

El punto de conexión devuelve un JSON con los siguientes datos:

```json
{
    "count": "Recuento de restaurantes que caen dentro del círculo con centro [x,y] y radio z",
    "average": "Calificación promedio del restaurante dentro del círculo",
    "std": "Desviación estándar de la calificación de los restaurantes dentro del círculo"
}
```

## Instalación

1. Clona el repositorio desde GitHub:

    ```
    git clone (https://github.com/CharlyGon/Api-Rest-Challenge-Intelimetrica.git)
    ```

2. Accede al directorio del proyecto:

    ```
    cd Api-Rest-Challenge-Intelimetrica
    ```

3. Instala las dependencias utilizando npm:

    ```
    npm install
    ```

## Configuración de Variables de Entorno

Antes de ejecutar la aplicación, asegúrate de configurar las siguientes variables de entorno:

- `PORT`: Puerto en el que se ejecutará el servidor. Por defecto, se establece en `5000`.
- `DB_HOST`: Host de la base de datos. Por defecto, se establece en `localhost`.
- `DB_PORT`: Puerto de la base de datos. Por defecto, se establece en `3306`.
- `DB_USER`: Usuario de la base de datos. Por defecto, se establece en `root`.
- `DB_PASSWORD`: Contraseña de la base de datos. Por defecto, se establece en `gonza`.
- `DB_NAME`: Nombre de la base de datos. Por defecto, se establece en `dbChallenge`.

Puedes configurar estas variables de entorno utilizando un archivo `.env` en el directorio raíz del proyecto.

## Uso

Una vez que hayas configurado las variables de entorno, puedes iniciar la aplicación localmente con el siguiente comando:
```markdown
npm start
```
Esto iniciará el servidor y podrás acceder a la API desde tu navegador o herramienta de prueba de API (Postman).


Si prefieres ejecutar la aplicación en contenedores Docker, puedes utilizar el siguiente comando para iniciarla:
```
docker-compose up
```
Esto levantará los contenedores Docker con la configuración especificada en el archivo `docker-compose.yml`.

### Endpoints de la API

- **GET /api/v1/restaurants**: Obtiene todos los restaurantes.
- **GET /api/v1/restaurants/:id**: Obtiene un restaurante específico por su ID.
- **POST /api/v1/restaurants**: Crea un nuevo restaurante.
- **PUT /api/v1/restaurants/:id**: Actualiza un restaurante específico por su ID.
- **DELETE /api/v1/restaurants/:id**: Elimina un restaurante específico por su ID.
- **GET /api/v1/restaurants/statistics**: Obtiene estadísticas de los restaurantes dentro de un radio.

#### Parámetros para el endpoint GET /api/v1/restaurants/statistics:

- **latitud**: La latitud del centro del círculo.
- **longitud**: La longitud del centro del círculo.
- **radio**: El radio en metros del círculo.

### Ejemplos de Uso

Para obtener todos los restaurantes:
```
GET /api/v1/restaurants
```

Para obtener un restaurante específico:
```
GET /api/v1/restaurants/:id
```

Para crear un nuevo restaurante:
```
POST /api/v1/restaurants
```
Body de la solicitud:
```json
{
  "rating": 4,
  "name": "Nombre del Restaurante",
  "site": "https://www.ejemplo.com",
  "email": "correo@ejemplo.com",
  "phone": "123456789",
  "street": "Calle del Restaurante",
  "city": "Ciudad del Restaurante",
  "state": "Estado del Restaurante",
  "lat": 40.7128,
  "lng": -74.006
}
```

Para actualizar un restaurante existente:
```
PUT /api/v1/restaurants/:id
```
Body de la solicitud (datos a actualizar):
```json
{
  "rating": 5
}
```

Para eliminar un restaurante:
```
DELETE /api/v1/restaurants/:id
```

Para obtener estadísticas de los restaurantes dentro de un radio:
```
GET /api/v1/restaurants/statistics?latitud=x&longitud=y&radio=z
```
Reemplaza `x`, `y` y `z` con los valores correspondientes de latitud, longitud y radio.
