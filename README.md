# React + Vite

**Frutos de la Tierra** es una tienda natural digital que ofrece productos saludables y auténticos como legumbres, cereales, semillas, chocolate 100% puro, manteca de maní, aceite de coco y más.

Diseñada en **React** con enfoque en experiencia de usuario, diseño accesible y una estética cálida, esta aplicación busca conectar con consumidores conscientes que valoran lo natural y lo artesanal.

## Características

- Navegación intuitiva con React Router
- Carrito de compras con contexto personalizado
- Gestión de usuarios (registro, login, logout)
- Panel de administración para agregar productos
- Diseño responsive y accesible
- Estilos con colores personalizados


## Diseño y estilos

El proyecto **Frutos de la Tierra** adopta un enfoque visual cálido y auténtico, inspirado en la estética de productos naturales, sustentables y hechos con dedicación.

La estructura visual se basa en una **paleta de colores personalizados** en el archivo `styles/colors.js`, lo que permite mantener coherencia y reutilización en todos los componentes.

### Paleta de colores

| Nombre      | Hex       | Uso sugerido                              |
|-------------|-----------|-------------------------------------------|
| Primary     | `#C83F12` | Botones, navegación, elementos destacados |
| Accent      | `#FFF287` | Fondo claro, textos cálidos, resaltados   |
| Dark        | `#3B060A` | Texto principal, bordes, íconos sutiles   |
| Shadow      | `#3B060A` | Sombras suaves en tarjetas y modales      |
| Badge       | `#FFA55D` | Etiquetas de carrito y contadores activos |

> Todos los colores se importan mediante `COLORS` para evitar la dispersión de valores hexadecimales en el proyecto.

### Estilo general

- Diseño **responsivo** utilizando Bootstrap (grillas, modales, botones).
- Uso de `React Icons` para reforzar la legibilidad y complementar la estética visual.
- Estructura modular, con componentes reutilizables como `CardProducto` y `Navbar`.
- Paleta pensada para transmitir **calidez, contraste legible y armonía visual**.

## Tecnologías

- React
- React Bootstrap
- React Router
- React Dom
- React Icons
- React Toastify
- Context API
- Firebase (opcional para autenticación y base de datos)
- Vite para el entorno de desarrollo
- Sweetalert2

### Estructura y convenciones CSS

Para mantener la coherencia visual del proyecto, se utilizó una única hoja de estilos (`App.css`) estructurada en secciones comentadas. Esto facilita la lectura y la organización del código, especialmente en trabajos prácticos o colaborativos.

### Organización

- `:root`: contiene tipografía base, suavizado y renderizado global.
- `body`: define el fondo principal y el color del texto, incluyendo `overflow-y: scroll` para evitar desplazamientos de layout al cambiar vistas.
- `#root`: establece el contenedor visual de la app con dimensiones máximas y alineación central.

### Convenciones aplicadas

- Todas las propiedades visuales están agrupadas por función: tipografía, layout, colores y comportamiento.
- Los estilos innecesarios se eliminaron para mantener liviandad y claridad.
- Se priorizó contraste visual usando el fondo cálido (`#FDF6E0`) con texto oscuro (`#3B060A`), respetando la identidad visual del proyecto.

### Optimizacion

- Este proyecto incluye un archivo `.gitignore` cuidadosamente configurado para mantener el repositorio limpio, seguro y enfocado solo en los archivos necesarios para su funcionamiento.
- Para mejorar la eficiencia en producción, el archivo `vite.config.js` fue modificado para realizar división manual de dependencias pesadas (`React`, `Firebase`, `SweetAlert2`, `React Bootstrap`) utilizando `manualChunks` de Rollup. Esto permite que la aplicación cargue cada bloque de código de forma más dinámica y liviana, mejorando el rendimiento general sin afectar la funcionalidad. También se ajustó el límite de advertencia de tamaño de chunk para evitar mensajes innecesarios durante el proceso de build.

## Propósito del proyecto

Frutos de la Tierra fue desarrollado con el deseo de crear una experiencia digital que respire autenticidad y calidez. Más allá de lo técnico, esta tienda busca conectar con quienes valoran lo natural, lo artesanal y lo hecho con conciencia.

Cada componente y decisión de diseño reflejan el equilibrio entre funcionalidad y emoción, con la convicción de que el desarrollo web puede ser una herramienta sensible y transformadora.

> “Sembrar ideas, cultivar código, y compartir experiencias que nutran.”






