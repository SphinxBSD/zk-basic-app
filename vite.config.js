export default {
  optimizeDeps: {
    esbuildOptions: { target: "esnext" },
    // Excluir TODAS las bibliotecas problemáticas
    exclude: [
      '@noir-lang/noirc_abi', 
      '@noir-lang/acvm_js', 
      '@aztec/bb.js', 
      '@noir-lang/noir_js'
    ]
  },
  define: {
    global: 'globalThis',
  },
  worker: {
    format: 'es',
    plugins: []
  },
  server: {
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
    }
  }
};