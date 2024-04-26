import { readFile, writeFile } from "node:fs/promises";

const readCitas = async () => {
    try {
    return JSON.parse(await readFile("Citas.json", "utf-8"));
    } catch (error) {
    await writeFile("Citas.json", JSON.stringify([]));
    return [];
    }
};
const writeCitas = async (citas) => {
    try {
    await writeFile("Citas.json", JSON.stringify(citas));
    } catch (error) {
    console.log(error);
    }
};
const registraClientes = async (text) => {
    const registroCita = process.argv.slice(2)
    const citas = await readCitas();
    console.log(registroCita);
    citas.push({ nombre:registroCita[1],edad:registroCita[2],tipoAnimal:registroCita[3],colorAnimal:registroCita[4],enfermedadAnimal:registroCita[5] });
    await writeCitas(citas);
    console.log("Cliente agregado");
};
const leeClientes = async () => {
    const citas = await readCitas();
    console.log(citas);
};

export {registraClientes,leeClientes}
