# ApiTable Component

## Descripción

`ApiTable` es un componente web reutilizable desarrollado con Stencil que permite renderizar los datos de una API REST en una tabla. Este componente toma como entrada una URL (`apiUrl`) que apunta a un endpoint de la API REST, consume los datos en formato JSON, y los presenta en una tabla en el DOM.

## Características

- **Propiedad de Entrada (prop)**: Recibe una propiedad llamada `apiUrl` que contiene la URL de la API REST.
- **Renderización Dinámica**: La tabla se genera dinámicamente a partir de los datos JSON devueltos por la API.
- **Manejo de Errores**: Muestra un mensaje adecuado en caso de que falle la petición a la API.
- **Estilo Responsivo**: La tabla se adapta a diferentes tamaños de pantalla utilizando CSS básico, con opciones de personalización.

## Instalación

Puedes instalar el componente desde npm utilizando el siguiente comando:

```bash
npm install api-table-

La ruta correcta para ingresar en el HTML y se refleje en pantalla 

<api-table api-url="http://localhost:3000/libros"></api-table>

Por ejemplo en el html quedaría así:
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ApiTable Example</title>
  <script type="module" src="/build/gestion-bibliotecalibros.esm.js"></script>
  <script nomodule src="/build/gestion-bibliotecalibros.js"></script>
</head>
<body>
  <api-table api-url="http://localhost:3000/libros"></api-table>
</body>
</html>

Para clonar el repositorio:
git clone https://github.com/tu-usuario/gestion-bibliotecalibros.git

Navega al directorio del proyecto y ejecuta los siguientes comandos:
cd gestion-bibliotecalibros
npm install
npm start

Esto iniciará el servidor de desarrollo para que puedas ver los cambios en tiempo real.

Una vez que hayas realizado cambios, puedes publicar el componente en npmjs:
npm publish

Muchas gracias por la atención prestada!


