# Dinamicas Razam - Pagina Informativa

Pagina web informativa para **Dinamicas Razam**, un servicio de sorteos premium basado en los resultados oficiales de **Astro Luna**. Permite a los participantes elegir un numero del 00 al 99 y ganar premios de hasta $250.000 COP.

---

## Estructura del Proyecto

```
dinamicas-razam/
├── index.html    - Estructura HTML de la pagina
├── styles.css    - Estilos y animaciones personalizadas
├── script.js     - Logica de scroll y animaciones
└── README.md     - Este archivo
```

---
h
## Como abrir el proyecto

1. Descarga o clona los archivos en una carpeta
2. Abre la carpeta en **Visual Studio Code**
3. Instala la extension **Live Server** (si no la tienes)
4. Haz clic derecho sobre `index.html` y selecciona **Open with Live Server**
5. La pagina se abrira automaticamente en el navegador

> Tambien puedes abrir `index.html` directamente en cualquier navegador haciendo doble clic sobre el archivo.

---

## Responsive

La pagina esta optimizada para verse bien en:

- Computador de escritorio
- Celular
- Tablet

---

## Tecnologias usadas

| Tecnologia     | Uso                                        |
|----------------|--------------------------------------------|
| HTML5          | Estructura de la pagina                    |
| CSS3           | Animaciones y estilos propios              |
| JavaScript     | Scroll suave y animaciones al hacer scroll |
| Tailwind CSS   | Framework de estilos (via CDN)             |
| Google Fonts   | Fuente Hanken Grotesk                      |
| Material Symbols | Iconos de Google                         |

---

## Secciones de la pagina

- **Hero** - Presentacion principal con llamado a la accion
- **Contadores** - Participantes, premios entregados y dinamicas realizadas
- **Por que confiar** - Valores del servicio
- **Como Funciona** - Pasos para participar
- **Tabla de Premios** - Premios segun cifras coincidentes
- **Ultimo Resultado** - Resultado mas reciente de Astro Luna
- **Ultimos Ganadores** - Ganadores recientes
- **Ejemplos de Premios** - Casos practicos con el numero 1234
- **Preguntas Frecuentes** - FAQ con acordeon interactivo
- **CTA Final** - Llamado a participar por WhatsApp

---

## Tabla de Premios

| Coincidencia           | Premio          |
|------------------------|-----------------|
| Ultimas 2 cifras       | $250.000 COP    |
| Primeras 2 cifras      | $50.000 COP     |
| 2 cifras del medio     | $50.000 COP     |
| Primera y ultima cifra | Numero GRATIS   |

**Precio por numero:** $5.000 COP

---

## Personalizacion

### Cambiar el numero de WhatsApp
En `index.html` busca todas las apariciones de `https://wa.me/razam` y reemplaza `razam` por tu numero con codigo de pais. Ejemplo: `https://wa.me/573001234567`

### Cambiar el ultimo resultado
Busca los 4 cuadros con digitos `1`, `2`, `3`, `4` en la seccion **Ultimo Resultado** y actualiza los numeros y la fecha.

### Cambiar los ganadores
Busca `id="ganadores"` y edita los nombres, premios y fechas.

---

## Licencia

© 2026 Dinamicas Razam. Todos los derechos reservados.