class Alumno {
    constructor(nombre, calificaciones) {
      this.nombre = nombre;
      this.calificaciones = calificaciones;
    }
  
    obtenerPromedio() {
      const suma = this.calificaciones.reduce((total, calificacion) => total + calificacion, 0);
      return suma / this.calificaciones.length;
    }
  }
  
  class Salon {
    constructor() {
      this.alumnos = [];
    }
  
    agregarAlumno(alumno) {
      this.alumnos.push(alumno);
    }
  
    ordenarPorPromedio() {
      this.alumnos.sort((a, b) => b.obtenerPromedio() - a.obtenerPromedio());
    }
  }
  
  const salon = new Salon();
  const alumno1 = new Alumno("Juan", [90, 85, 78, 92, 88]);
  const alumno2 = new Alumno("María", [75, 83, 95, 88, 70]);
  salon.agregarAlumno(alumno1);
  salon.agregarAlumno(alumno2);
  salon.ordenarPorPromedio();
  
  console.log("Alumnos ordenados por promedio:", salon.alumnos);
  