# GirGit Software

Portafolio y catálogo de GirGit EduSaaS 360, sitios web en 30 días y desarrollo de software a medida. El sitio usa React, Vite y Lucide.

## Desarrollo local

```sh
npm install
npm run dev
npm run lint
npm run build
```

Vite sirve el sitio en `http://localhost:5173` y genera la versión de producción en `dist/`. En PowerShell, usa `npm.cmd` si la política de ejecución bloquea `npm.ps1`.

## Consultas comerciales

Los formularios preparan un borrador que el visitante puede revisar y enviar desde su aplicación de correo. El sitio funciona como catálogo y cotizador y no procesa pagos. Los planes anuales muestran su equivalente mensual y el total facturado en el año. Los complementos se muestran como cargos mensuales por separado.

Configura los canales de contacto en `.env.local` antes de reiniciar Vite o generar la compilación de producción:

- `VITE_CONTACT_EMAIL` establece el correo de destino. El valor predeterminado es `contacto@girgitsoftware.com`, la dirección que ya figuraba en el proyecto.
- `VITE_WHATSAPP_NUMBER` habilita WhatsApp con el número comercial completo en formato internacional, incluidos el indicativo del país y los dígitos del teléfono.

Los productos y precios se editan en `src/data/softwareData.js`. Los datos de las interfaces ilustrativas son de ejemplo.
