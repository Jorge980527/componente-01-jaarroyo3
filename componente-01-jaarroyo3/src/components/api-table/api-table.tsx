import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'api-table', // Nombre del componente para ser usado en HTML
  styleUrl: 'api-table.css', // Archivo de estilos asociado
  shadow: true, // Encapsulamiento de estilos usando Shadow DOM
})
export class ApiTable {
  @Prop() apiUrl: string; // Propiedad que recibe la URL de la API REST
  @State() data: any[] = []; // Estado para almacenar los datos recibidos de la API
  @State() error: string = ''; // Estado para manejar mensajes de error

  // Método asíncrono para obtener los datos de la API
  async fetchData() {
    try {
      const response = await fetch(this.apiUrl); // Realiza la petición a la URL de la API
      if (!response.ok) { // Verifica si la respuesta es exitosa
        throw new Error('Failed to fetch data'); // Lanza un error si la respuesta no es exitosa
      }
      const result = await response.json(); // Convierte la respuesta en JSON
      this.data = result; // Almacena los datos en el estado `data`
    } catch (error) {
      this.error = error.message; // Si hay un error, lo almacena en el estado `error`
    }
  }

  // Método del ciclo de vida que se ejecuta antes de que el componente se renderice
  componentWillLoad() {
    this.fetchData(); // Llama al método `fetchData` para obtener los datos antes de la renderización
  }

  // Método de renderización del componente
  render() {
    if (this.error) {
      return <p>{this.error}</p>; // Si hay un error, muestra el mensaje de error
    }

    return (
      <table>
        <thead>
          <tr>
            {/* Renderiza los encabezados de la tabla utilizando las claves del primer objeto de `data` */}
            {this.data.length > 0 &&
              Object.keys(this.data[0]).map((key) => <th>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {/* Renderiza las filas de la tabla iterando sobre los datos */}
          {this.data.map((item) => (
            <tr>
              {Object.values(item).map((value) => (
                <td>{value}</td> // Renderiza las celdas con los valores de cada objeto
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
