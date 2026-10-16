# Portfolio · Claudio Baldini

Portfolio personal de **Claudio Baldini**, gestor de activos y contable en Cepsa (GASIB) con formación en análisis de datos. Reúne mi experiencia en finanzas y contabilidad, mis proyectos de datos y automatización, y mi formación.

**🔗 Ver en vivo: [claudiobaldinii.github.io/Portfolio](https://claudiobaldinii.github.io/Portfolio/)**

## Qué contiene

- **Perfil:** de finanzas a datos. SAP FI-AA, cierres mensuales y conciliaciones, combinados con SQL, Python, Power BI y Excel/VBA.
- **Trayectoria:** gráfico interactivo de trabajo y formación (pasa el cursor para ver años y fechas) y un registro desplegable de cada puesto.
- **Proyectos:** al pasar el cursor por cada uno se abre una ficha con un resumen y el enlace al repositorio o a la demo.
  - [App de control de gastos personales](https://github.com/Claudiobaldinii/App-control-de-gastos), con vista previa animada de la app
  - [Análisis de salarios: Data Science vs Data Analytics](https://github.com/Claudiobaldinii/Analisis_salarios)
  - [Análisis 360° de un e-commerce](https://github.com/Claudiobaldinii/Proyecto_Final) (proyecto final del máster)
  - Extractor de facturas PDF (en desarrollo)
- **Stack:** herramientas y dónde las aplico.
- **Formación y certificaciones:** con acceso al diploma y a la credencial verificable.
- **Contacto:** email, teléfono, LinkedIn y GitHub.

Disponible en **español e inglés**.

## Diseño

Estética de **terminal de datos financiero**: fondo oscuro, tipografía monoespaciada, tablas tipo libro mayor y teclas de función.

- Navegación con teclas de función. Puedes escribir el código de una sección (`EXP`, `PRJ`, `EDU`…) en la línea de comandos o pulsar `1`–`6`.
- Cursor propio que deja un rastro de datos, títulos que se "decodifican" y animaciones al hacer scroll.
- Adaptado a móvil. Respeta la preferencia de movimiento reducido del sistema.

## Tecnología

- [Next.js](https://nextjs.org/) 16 · React 19 · TypeScript
- CSS propio, sin frameworks de UI. Iconos de [Lucide](https://lucide.dev/).
- Exportación estática desplegada en **GitHub Pages** con GitHub Actions.

## Ejecutarlo en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000. Para generar la versión estática:

```bash
npm run build
```

Cada push a `main` se publica automáticamente mediante [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

## Estructura

```
app/            Layout, fuentes y estilos globales
components/     Página, gráfico de trayectoria, fichas de vista previa, cursor y animaciones
lib/            Textos en español e inglés y resúmenes de cada ficha
public/         Diploma y capturas de los proyectos
```

## Contacto

- LinkedIn: [claudio-baldini](https://www.linkedin.com/in/claudio-baldini-2338251b9)
- Email: Cbaldiniwork@gmail.com
