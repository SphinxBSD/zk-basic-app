# ZK Practice 2 - Noir Age Verification App

Una aplicación web que demuestra el uso de **Zero-Knowledge Proofs** para verificar la edad de un usuario sin revelar la edad exacta, utilizando el framework **Noir** y el backend **Aztec**.

## 🔍 Descripción del Proyecto

Esta aplicación implementa un sistema de verificación de edad basado en pruebas de conocimiento cero (ZK Proofs). El usuario puede demostrar que cumple con ciertos criterios de edad (por ejemplo, ser mayor de 18 años) sin revelar su edad exacta.

### Características principales:

- **Privacidad**: La edad exacta nunca se revela
- **Verificabilidad**: Cualquiera puede verificar que la prueba es válida
- **Sin confianza**: No requiere confiar en una autoridad central
- **Interfaz web**: Fácil de usar desde el navegador

## 🛠️ Tecnologías Utilizadas

- **[Noir](https://noir-lang.org/)**: Framework para desarrollar circuitos zero-knowledge
- **[Aztec BB.js](https://docs.aztec.network/)**: Backend para generar y verificar pruebas ZK
- **Vite**: Bundler para desarrollo web moderno
- **Yarn**: Gestor de paquetes

## 📋 Prerrequisitos

- Node.js (versión 16 o superior)
- Yarn (versión 4.x)

## 🚀 Instalación y Configuración

1. **Clona el repositorio**:
```bash
git clone <tu-repositorio>
cd zk-practice2
```

2. **Configura Yarn para usar node_modules** (requerido para compatibilidad con Vite):
```bash
echo "nodeLinker: node-modules" > .yarnrc.yml
```

3. **Instala las dependencias**:
```bash
yarn install
```

4. **Verifica que se creó la carpeta node_modules**:
```bash
ls -la node_modules/
```

## 🏃‍♂️ Ejecución

Para iniciar el servidor de desarrollo:

```bash
yarn dlx vite
```

La aplicación estará disponible en `http://localhost:5173`

## 📁 Estructura del Proyecto

```
zk-practice2/
├── index.html              # Interfaz de usuario
├── index.js                # Lógica principal de la aplicación
├── package.json            # Dependencias y configuración
├── vite.config.js          # Configuración de Vite
├── .yarnrc.yml            # Configuración de Yarn
└── circuit/               # Circuito Noir (directorio esperado)
    └── target/
        └── circuits.json  # Circuito compilado
```

## 🔧 Configuración de Vite

El proyecto incluye una configuración especial de Vite para trabajar con las bibliotecas de Aztec y Noir:

```javascript
export default {
  optimizeDeps: {
    esbuildOptions: { target: "esnext" },
    exclude: ['@noir-lang/noirc_abi', '@noir-lang/acvm_js', '@aztec/bb.js', '@noir-lang/noir_js']
  },
  resolve: {
    alias: {
      '@aztec/bb.js': '@aztec/bb.js/dest/browser/index.js',
      '@noir-lang/noir_js': '@noir-lang/noir_js/dest/index.js'
    }
  }
};
```

## 🎯 Uso de la Aplicación

1. **Ingresa tu edad** en el campo de entrada
2. **Haz clic en "Submit Age"** para generar la prueba
3. **Observa los logs** que muestran el progreso:
   - Generación del witness
   - Generación de la prueba ZK
4. **Ve el resultado** - la prueba generada aparecerá en el panel derecho

## 🔐 Cómo Funcionan las ZK Proofs

1. **Input**: El usuario ingresa su edad
2. **Witness Generation**: Noir genera un "witness" basado en la edad y el circuito
3. **Proof Generation**: Aztec BB.js crea una prueba criptográfica
4. **Output**: Se obtiene una prueba que verifica el cumplimiento de condiciones sin revelar la edad exacta

## 🐛 Solución de Problemas Comunes

### Error: "Failed to resolve import @aztec/bb.js"
- Asegúrate de tener `nodeLinker: node-modules` en `.yarnrc.yml`
- Elimina `.pnp.cjs` y reinstala con `yarn install`

### Error: "Missing specifier in package"
- Verifica las rutas en `vite.config.js`
- Revisa la estructura de `node_modules/@aztec/bb.js/`

## 📚 Recursos Adicionales

- [Documentación de Noir](https://noir-lang.org/docs)
- [Aztec Documentation](https://docs.aztec.network/)
- [Zero-Knowledge Proofs Explained](https://ethereum.org/en/zero-knowledge-proofs/)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue antes de realizar cambios significativos.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.