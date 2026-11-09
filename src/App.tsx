
function App() {
  return (
    <>
      <h1>
        🍋 Lemoncode - M8 Cloud - Laboratorio opcional:
        Despliegue en Vercel
      </h1>

      <section>
        <h2>
          Instrucciones para desplegar la aplicación
          en Vercel
        </h2>

        <ol>
          <li>Crear un repositorio en GitHub.</li>

          <li>
            Añadir el repositorio remoto al proyecto
            y subir el código a la rama <code>deploy-vercel</code>.
          </li>

          <li>
            Entrar en <strong>Vercel</strong> e importar
            el repositorio con <strong>Add New… → Project</strong>.
          </li>

          <li>
            Comprobar la configuración: Vercel detecta
            automáticamente el proyecto Vite.
          </li>

          <li>
            Pulsar <strong>Deploy</strong>. Cada push a la
            rama configurada generará un nuevo despliegue
            automáticamente.
          </li>

          <li>
            Acceder a la aplicación publicada desde el
            panel del proyecto en Vercel.
          </li>
        </ol>
      </section>
    </>
  )
}

export default App
