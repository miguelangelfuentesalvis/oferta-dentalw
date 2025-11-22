# Manual de Procedimientos y Lecciones Aprendidas

Este documento consolida las mejores prácticas, los protocolos de trabajo y las lecciones aprendidas durante el desarrollo del proyecto "Oferta DentalW". El objetivo es crear un manual estándar para garantizar la calidad, eficiencia y estabilidad en futuros proyectos.

---

## 1. Filosofía y Principios Fundamentales

- **Simplicidad Primero:** La solución más simple y apegada a las convenciones del framework (Next.js) es casi siempre la correcta.
- **Un Único Origen de Verdad (Single Source of Truth):**
  - **Para el Código:** El repositorio de `git` (GitHub) es la única fuente de verdad.
  - **Para los Datos:** Un estado compartido en un componente padre (`page.tsx`) es la fuente de verdad para los datos que se muestran en múltiples lugares (ej. `vouchersLeft`).
- **Verificación en Producción:** El entorno de vista previa (Firebase Studio) puede tener retrasos o comportamientos diferentes. El despliegue en un entorno real (Vercel) es la prueba definitiva de que algo funciona.

---

## 2. Protocolo Estricto de Trabajo (La Clave del Éxito)

Este es el flujo de trabajo que demostró ser el más seguro y eficaz.

### **Fase 1: Manejo de Archivos (Crear, Eliminar, Renombrar)**

**Se realiza SIEMPRE en el Mac y se sincroniza con `git` ANTES de tocar el código en Studio.**

1.  **Navega al proyecto en tu Mac:**
    ```bash
    cd ~/mafa2025/oferta-dentalw
    ```
2.  **Realiza los cambios de archivos:** Usa Finder o la terminal para eliminar, añadir o renombrar archivos.
    *Ejemplo: `git rm src/app/antiguo-logo.png` y luego copiar el nuevo `icon.png`.*
3.  **Sincroniza con GitHub:**
    ```bash
    git add .
    git commit -m "feat: Describir el cambio de archivos"
    git push
    ```

### **Fase 2: Sincronización en Firebase Studio**

1.  **Actualiza el entorno de Studio:** En la terminal de Studio, ejecuta `git pull` para recibir los cambios de archivos.
    ```bash
    git pull
    ```

### **Fase 3: Desarrollo y Cambios de Código (En Firebase Studio)**

1.  **Realiza los cambios de código:** Ahora que el sistema de archivos está sincronizado, puedes pedir a la IA que modifique el código de forma segura.
2.  **Prueba y verifica:** Asegúrate de que los cambios funcionan en la vista previa.
3.  **Respalda el trabajo final:** Cuando todo esté correcto, vuelve a sincronizar con GitHub desde Studio.
    ```bash
    git add .
    git commit -m "feat: Describir los cambios de código"
    git push
    ```

---

## 3. Lecciones Aprendidas de Errores Críticos

### **El Caso del Favicon (El Falso Problema)**

-   **Error:** Intentar "arreglar" un problema que no existía, editando `layout.tsx` para añadir un `<link rel="icon">`. Esto va en contra de las convenciones de Next.js.
-   **Causa Raíz:** El entorno de vista previa de Studio no reflejó el cambio del favicon de inmediato. Sin embargo, en producción (Vercel) sí funcionaba.
-   **Lección / Solución Correcta:** Para cambiar el favicon en Next.js App Router, simplemente **coloca un archivo `icon.png` o `icon.ico` en la carpeta `src/app`** y asegúrate de que no haya otros archivos de ícono en conflicto ni código manual en `layout.tsx`. Luego, confía en que el entorno de producción lo mostrará correctamente, incluso si la vista previa tarda.

### **El Caso de las Imágenes (`unoptimized={true}`)**

-   **Error:** Añadir la propiedad `unoptimized={true}` al componente `<Image>` de Next.js como un "parche" para un problema de visualización.
-   **Causa Raíz:** El problema real probablemente estaba en la configuración de `next.config.ts` o en cómo el entorno de vista previa procesaba las imágenes. El parche ocultó el problema en lugar de resolverlo.
-   **Lección / Solución Correcta:** El componente `<Image>` de Next.js está altamente optimizado. Evita usar `unoptimized={true}` a menos que sea absolutamente necesario (por ejemplo, con imágenes de dominios no configurados). Si una imagen no se muestra, revisa primero la configuración de dominios remotos en `next.config.ts` y asegúrate de que la URL de la imagen sea correcta.

---

## 4. Patrones de Código Exitosos Implementados

### **Manejo de Estado Compartido**

-   **Problema:** El contador de vouchers en la sección `Hero` y `Cta` no coincidían.
-   **Solución Correcta (Lifting State Up):**
    1.  La lógica y el estado (`useState`, `useEffect`) se movieron al componente padre común más cercano: `src/app/page.tsx`.
    2.  El valor del estado (`vouchersLeft`) se pasó como *prop* a los componentes hijos que lo necesitaban: `<Hero vouchersLeft={vouchersLeft} />` y `<Cta vouchersLeft={vouchersLeft} />`.
-   **Principio:** Cuando dos o más componentes hijos necesitan compartir o reaccionar al mismo dato, ese dato debe "vivir" en su ancestro común más cercano.

### **Centralización de Constantes**

-   **Implementación:** Se creó el archivo `src/lib/constants.ts` para almacenar valores que se repiten en la aplicación, como la URL de WhatsApp (`WHATSAPP_PROMO_URL`).
-   **Beneficio:** Si el número de WhatsApp o el mensaje necesitan cambiar en el futuro, solo se edita en un único lugar, y el cambio se refleja en toda la aplicación. Previene errores y facilita el mantenimiento.

---

## 5. Protocolo de Emergencia: Recuperación de un Servidor Caído

Si en algún momento la página se cae ("Error reaching server") después de un cambio de código y no es posible identificar la causa, la forma más segura de recuperarse es **revertir todo al último estado funcional guardado en GitHub.**

**Comandos a ejecutar en la terminal de Firebase Studio:**

1.  **Traer la última información de GitHub:**
    ```bash
    git fetch origin
    ```
2.  **Forzar la restauración completa (El "Botón de Pánico"):**
    Descarta todos los cambios locales y deja el proyecto idéntico a como está en GitHub.
    ```bash
    git reset --hard origin/main
    ```

Después de ejecutar estos comandos, el entorno se recargará con el código funcional y la página volverá a estar en línea.
