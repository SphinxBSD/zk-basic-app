import { UltraHonkBackend } from '@aztec/bb.js';
import { Noir } from '@noir-lang/noir_js';
import circuit from "./circuit/target/circuit.json";

const show = (id, content) => {
 const container = document.getElementById(id);
 container.appendChild(document.createTextNode(content));
 container.appendChild(document.createElement("br"));
};

// Variable global para almacenar la prueba
let currentProof = null;

document.getElementById("submit").addEventListener("click", async () => {
 try {
    // noir goes here
    const noir = new Noir(circuit);
    const backend = new UltraHonkBackend(circuit.bytecode);
    // Logs
    const age = document.getElementById("age").value;
    show("logs", "Generating witness... ⏳");
    const { witness } = await noir.execute({ age });
    show("logs", "Generated witness... ✅");
    show("logs", "Generating proof... ⏳");
    const proof = await backend.generateProof(witness);
    show("logs", "Generated proof... ✅");
    
    // Almacenar la prueba original para verificación
    currentProof = proof;
    
    // Mostrar solo una versión resumida en la UI
    show("results", `Proof generated (${proof.proof.length} bytes)`);
    console.log("Full proof object:", proof);
 } catch (error) {
    show("logs", "Oh 💔");
    console.error("Generation error:", error);
 }
});

document.getElementById("verify").addEventListener("click", async () => {
  try {
    // Verificar que tenemos una prueba generada
    if (!currentProof) {
      show("logs", "No proof to verify ❌");
      show("logs", "Generate a proof first!");
      return;
    }
    
    show("logs", "Verifying proof... ⏳");
   
    // Crear el backend para verificación
    const backend = new UltraHonkBackend(circuit.bytecode);
    
    console.log("==========Verificando==========");
    console.log("Proof object:", currentProof);
   
    // Verificar la prueba usando el objeto completo
    const isValid = await backend.verifyProof(currentProof);
   
    if (isValid) {
      show("logs", "✅ Proof is VALID - Age requirement met!");
      show("logs", "🔒 But your exact age remains private");
    } else {
      show("logs", "❌ Proof is INVALID");
    }
   
  } catch (error) {
    show("logs", "Verification failed 💔");
    console.error("Verification error:", error);
  }
});