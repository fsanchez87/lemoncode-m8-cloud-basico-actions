
function App() {
  return (
    <>
      <h1>
        🍋 Lemoncode - M8 Cloud - Laboratorio básico:
        Despliegue mediante GitHub Actions
      </h1>

      <section>
        <h2>
          Instrucciones para desplegar la aplicación
          mediante GitHub Actions
        </h2>

        <ol>
          <li>Crear un repositorio en GitHub.</li>

          <li>
            Añadir el repositorio remoto al proyecto
            y subir el código a la rama <code>main</code>.
          </li>

          <li>
            Configurar GitHub Pages desde
            <strong> Settings → Pages</strong>,
            seleccionando <strong>GitHub Actions </strong>
            como origen del despliegue.
          </li>

          <li>
            Crear el workflow
            <code> .github/workflows/deploy.yml</code>.
          </li>

          <li>
            Configurar el job <code>build</code> para
            instalar las dependencias, compilar la
            aplicación y subir la carpeta <code>dist</code>
            mediante <code>actions/upload-pages-artifact</code>.
          </li>

          <li>
            Configurar el job <code>deploy</code> para
            publicar el artefacto mediante
            <code> actions/deploy-pages</code>.
          </li>

          <li>
            Hacer un <code>push</code> a la rama
            <code> main</code> para ejecutar
            automáticamente el workflow.
          </li>

          <li>
            Comprobar el resultado del despliegue en
            la pestaña <strong>Actions</strong> y acceder
            a la aplicación publicada en GitHub Pages.
          </li>
        </ol>
      </section>
    </>
  )
}

export default App
