# Informe y Protocolo: Cómo Cambiar el Favicon Correctamente

Este documento describe el procedimiento definitivo para cambiar el favicon del sitio, las lecciones aprendidas durante el proceso y el protocolo de trabajo para evitar errores futuros.

---

## 1. El Problema: Confusión y Errores en Cascada

Inicialmente, intentamos cambiar el favicon siguiendo métodos que, aunque válidos en otros contextos, causaron problemas en este proyecto específico de Next.js con el App Router.

**Intentos Fallidos y Lecciones Aprendidas:**

1.  **Edición Manual de `<head>`:** Añadir etiquetas `<link>` manualmente en `src/app/layout.tsx` no funcionó como se esperaba y generó conflictos.
2.  **Confusión del Entorno:** El entorno de vista previa de Firebase Studio no siempre refleja los cambios de favicon de inmediato, a diferencia de un entorno de producción como Vercel. Esto nos llevó a pensar que el código estaba mal cuando en realidad no lo estaba.
3.  **Archivos Conflictivos:** La presencia de `favicon.ico` y `icon.png` en la misma carpeta (`src/app`) puede generar conflictos, ya que Next.js o el navegador pueden no saber cuál elegir.
4.  **Riesgo de Cambios en Código:** Realizar cambios de código sin tener el sistema de archivos (`git`) perfectamente sincronizado entre el entorno local (Mac) y el remoto (Studio) fue la causa principal de la caída del servidor.

---

## 2. La Solución Definitiva: La Convención de Next.js

La forma más robusta y simple de gestionar el favicon en un proyecto Next.js con App Router es **dejar que el framework lo haga automáticamente**.

**Next.js busca automáticamente un archivo con uno de estos nombres (en este orden de prioridad):**
1.  `src/app/icon.ico` o `src/app/favicon.ico`
2.  `src/app/icon.png` o `src/app/icon.svg`

Al colocar nuestro archivo `icon.png` en `src/app` y eliminar cualquier otro archivo de ícono conflictivo (como `favicon.ico`), Next.js se encarga de todo sin necesidad de tocar el código de `layout.tsx`.

---

## 3. Protocolo Estricto de Trabajo (La Clave del Éxito)

Para cualquier cambio que involucre la **creación, eliminación, movimiento o renombrado de archivos**, se debe seguir el siguiente protocolo para mantener la sincronización y evitar errores.

**Regla de Oro:** Los cambios en el sistema de archivos se hacen primero en local (Mac) y se sincronizan. Los cambios de código se hacen después en Studio.

### **Paso a Paso: Cómo Cambiar el Favicon (Ejemplo)**

**Fase 1: Acciones en tu Mac (Manejo de Archivos)**

1.  **Navega al proyecto:**
    ```bash
    cd ~/mafa2025/oferta-dentalw
    ```

2.  **Prepara el nuevo ícono:** Asegúrate de que tu nuevo archivo de ícono se llame `icon.png` y esté listo para ser movido a `src/app`.

3.  **Elimina el ícono antiguo (si existe):**
    ```bash
    git rm src/app/icon.png
    ```

4.  **Copia el nuevo ícono a la carpeta correcta:**
    (Desde Finder o usando el comando `cp` en la terminal)
    ```bash
    # Ejemplo: cp ~/Downloads/nuevo-icono.png src/app/icon.png
    ```

5.  **Añade el nuevo archivo a Git y sincroniza:**
    ```bash
    git add .
    git commit -m "feat: Actualizar el favicon del sitio"
    git push
    ```

**Fase 2: Sincronización en Firebase Studio**

1.  **Actualiza el entorno de Studio:**
    En la terminal de Firebase Studio, ejecuta `git pull` para descargar los cambios de archivos que acabas de subir.
    ```bash
    git pull
    ```

**Fase 3: Acciones en Firebase Studio (Manejo de Código, si es necesario)**

1.  **Verifica que no haya código manual:** Asegúrate de que `src/app/layout.tsx` no contenga ninguna etiqueta `<link rel="icon">`. Si las tiene, ahora es el momento de pedirle a la IA que las elimine.

---

## 4. Protocolo de Emergencia: Cómo Recuperarse de un Error Grave

Si en algún momento la página se cae ("Error reaching server") después de un cambio de código de la IA, la forma más segura de recuperarse es **revertir todo al último estado funcional guardado en GitHub**.

**Comandos a ejecutar en la terminal de Firebase Studio:**

1.  **Traer la última información de GitHub:**
    ```bash
    git fetch origin
    ```
2.  **Forzar la restauración completa:**
    Este comando es el "botón de pánico". Descarta todos los cambios locales y deja el proyecto idéntico a como está en GitHub.
    ```bash
    git reset --hard origin/main
    ```

Después de ejecutar estos comandos, el entorno se recargará con el código funcional, y la página volverá a estar en línea.
