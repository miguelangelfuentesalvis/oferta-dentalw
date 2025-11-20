# Procedimiento de Respaldo y Sincronización

Este documento es una guía paso a paso para guardar (respaldar) los cambios del proyecto en GitHub y para sincronizar el código entre Firebase Studio y tu Mac.

---

## 1. Desde Firebase Studio (Guardar cambios en GitHub)

Este proceso toma los cambios que hiciste en Firebase Studio y los sube a tu respaldo en GitHub.

### Paso 1: Preparar todos los cambios

Este comando le dice a git que quieres incluir todos los archivos modificados.

```bash
git add .
```

### Paso 2: Crear el punto de guardado (commit)

Este comando crea el "punto de guardado" con un mensaje que describe los cambios. **Recuerda cambiar el mensaje entre comillas** para describir lo que hiciste.

```bash
git commit -m "feat: Escribe aquí un resumen de los cambios"
```
*Ejemplo de mensaje: `git commit -m "fix: Corregir el texto del banner principal"`*

### Paso 3: Subir los cambios a GitHub

Este es el paso final que envía todo a tu repositorio remoto.

```bash
git push
```

---

## 2. Desde tu Mac (Actualizar con los cambios de GitHub)

Este proceso descarga los cambios que están en GitHub (que subiste desde Firebase Studio o desde otro lugar) a tu computadora Mac.

### Paso 1: Abrir la Terminal y navegar a la carpeta del proyecto

Esta es la ruta correcta de tu proyecto en la Mac. **Este es el paso más importante para no tener errores.**

```bash
cd ~/mafa2025/oferta-dentalw
```

### Paso 2: Descargar y sincronizar los cambios

Una vez dentro de la carpeta, este comando descarga y aplica todos los cambios nuevos desde GitHub.

```bash
git pull
```

---

Con estos dos procedimientos, siempre mantendrás tu trabajo seguro y sincronizado entre tus entornos de desarrollo.
