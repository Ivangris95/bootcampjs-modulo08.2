import {
  Pacientes,
  pacientes,
  obtenPacientesAsignadosAPediatria,
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios,
  activarProtocoloUrgencia,
  reasignaPacientesAMedicoFamilia,
  HayPacientesDePediatria,
  cuentaPacientesPorEspecialidad,
} from "./main";

describe("obtenPacientesAsignadosAPediatria", () => {
  it("debería retornar todos los pacientes asignados a Pediatría", () => {
    //Arrage
    const numeroDePacientesEnPediatria: number = 2;
    const resultadoEsperadoMedicoDeFamilia: string = "Pediatra";
    //Act
    const resultado: Pacientes[] = obtenPacientesAsignadosAPediatria(pacientes);
    //Assert
    expect(resultado[0].especialidad).toBe(resultadoEsperadoMedicoDeFamilia);
    expect(resultado.length).toBe(numeroDePacientesEnPediatria);
  });
});

describe("obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios", () => {
  it("debería retornar pacientes pediátricos menores de 10 años", () => {
    //Arrage
    const resultadpEsperado: number = 1;
    const resultadoEsperadoEdad: number = 8;
    //Act
    const resultado: Pacientes[] =
      obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
    //Assert
    expect(resultado.length).toBe(resultadpEsperado);
    expect(resultado[0].edad).toBe(resultadoEsperadoEdad);
  });
});

describe("activarProtocoloUrgencia", () => {
  it("debería activar el protocolo de urgencia si un paciente tiene temperatura mayor a 39 y frecuencia cardíaca mayor a 100", () => {
    //Arrage
    const resultadoEsperado: boolean = false;
    //Act
    const resultado: boolean = activarProtocoloUrgencia(pacientes);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("reasignaPacientesAMedicoFamilia", () => {
  it("debería reasignar pacientes de Pediatría a Médico de familia", () => {
    //Arrage
    const resultadoEsperadoPediatria: number = 0;
    const resultadoEsperadoMedicoDeFamilia: number = 5;
    //Act
    const resultado = reasignaPacientesAMedicoFamilia(pacientes);

    const pacientesPediatria = resultado.filter(
      (paciente) => paciente.especialidad === "Pediatra"
    );
    const pacientesMedicoFamilia = resultado.filter(
      (paciente) => paciente.especialidad === "Medico de familia"
    );
    //Assert
    expect(pacientesPediatria.length).toBe(resultadoEsperadoPediatria); // No debería haber pacientes en Pediatría después de la reasignación
    expect(pacientesMedicoFamilia.length).toBe(
      resultadoEsperadoMedicoDeFamilia
    ); // Debería haber 5 pacientes en Médico de Familia
  });
});

describe("HayPacientesDePediatria", () => {
  it("debería devolver true si hay pacientes asignados a Pediatría", () => {
    //Arrage
    const resultadoEsperado: boolean = true;
    //Act
    const resultado: boolean = HayPacientesDePediatria(pacientes);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("cuentaPacientesPorEspecialidad", () => {
  it("debería contar correctamente los pacientes por especialidad", () => {
    //Arrage
    const resultadoEsperadoMedicoDeFamilia: number = 3;
    const resultadoEsperadoPediatria: number = 2;
    const resultadoEsperadoCardiologia: number = 1;
    //Act
    const resultado = cuentaPacientesPorEspecialidad(pacientes);
    //Assert
    expect(resultado.medicoDeFamilia).toBe(resultadoEsperadoMedicoDeFamilia); // Hay 3 pacientes en "Médico de Familia"
    expect(resultado.pediatria).toBe(resultadoEsperadoPediatria); // Hay 2 pacientes en "Pediatría"
    expect(resultado.cardiologia).toBe(resultadoEsperadoCardiologia); // Hay 1 paciente en "Cardiología"
  });
});
