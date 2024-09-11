export type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

export interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

export const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

export const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter(
    (pacientes: Pacientes) => pacientes.especialidad === "Pediatra"
  );
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));

export const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter(
    (pacientes: Pacientes) =>
      pacientes.edad < 10 && pacientes.especialidad === "Pediatra"
  );
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

export const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  pacientes.forEach((pacientes: Pacientes) => {
    if (pacientes.frecuenciaCardiaca > 100 && pacientes.temperatura > 39) {
      activarProctolo = true;
    }
  });
  if (activarProctolo) {
    console.log("¡Activar protocolo de urgencia!");
  }
  return activarProctolo;
};

console.log(activarProtocoloUrgencia(pacientes));

export const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.map((pacientes: Pacientes) => ({
    ...pacientes,
    especialidad:
      pacientes.especialidad === "Pediatra"
        ? "Medico de familia"
        : pacientes.especialidad,
  }));
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));

export const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  return pacientes.some(
    (pacientes: Pacientes) => pacientes.especialidad === "Pediatra"
  );
};

console.log(pacientes);
console.log(HayPacientesDePediatria(pacientes));

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

export const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let resultado: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };

  pacientes.forEach((pacientes: Pacientes) => {
    switch (pacientes.especialidad) {
      case "Medico de familia":
        resultado.medicoDeFamilia++;
        break;
      case "Pediatra":
        resultado.pediatria++;
        break;
      case "Cardiólogo":
        resultado.cardiologia++;
        break;
    }
  });
  return resultado;
};

const resultado = cuentaPacientesPorEspecialidad(pacientes);
console.log(resultado);
