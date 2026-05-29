export type Experience = {
  company: string
  role: string
  period: string
  description: string
  techs?: string[]
}

export const experiences: Experience[] = [
  {
    company: "Tu empresa actual",
    role: "Tu cargo actual",
    period: "2024 – Present",
    description: "Descripción de tus responsabilidades y logros principales en este rol.",
    techs: ["TypeScript", "React", "Node.js"],
  },
  {
    company: "TIMIA",
    role: "Data Engineer",
    period: "2025 – 2026",
    description: "Optimicé jobs productivos en entornos de datos a escala bancaria para BBVA Colombia, logrando reducciones de al menos 50% en tiempos de procesamiento y costos de infraestructura. Trabajé sobre múltiples pipelines en producción en entorno bancario de alta exigencia, donde cada optimización tenía impacto directo en el rendimiento del sistema y en el presupuesto de tecnología del cliente.",
    techs: ["Python", "PySpark", "GCP", "SQL"],
  },
  {
    company: "Tata Consultancy Services",
    role: "Data Engineer",
    period: "2021 – 2025",
    description: `
    Diseñé y puse en producción pipelines de datos crítcos para dos de los actores más regulados del sectorfinanciero latinoamericano: BBVA Perú y Rímac Seguro. En ambos casos, los modelos de negocio dependían drectamente de la calidad y disponibilidad de los dats que construí.
    
    BBVA Perú — Riesgo Crediticio
    Desarollé pipelines con Python y PySpark para procesar e ngestar fuentes de datos que alimentan modelos de risgo crediticio en producción bajo los estándares de alidad y auditoría de la plataforma Datio — entorno onde un error en los datos tiene impacto directo en ecisiones de crédito a escala masiva.

    Rímac Seguros— Modelos Predictivos
    Diseñé e implementé el pipelin completo end-to-end: modelamiento de fuentes, proceamiento, creación de DAGs en Apache Airflow (GCP Comoser) y despliegue en producción. Los datos procesads alimentaron modelos predictivos de seguros consumios por múltiples áreas de negocio para toma de decisones. Desarrollé reportes en Power BI y Google Data tudio para visibilizar el impacto a stakeholders no técnicos.
    `,
    techs: ["Python", "PySpark", "Apache Airflow", "GCP", "BigQuery", "Power BI", "Google Data Studio", "SQL"],
  },
  {
    company: "Vicomtech",
    role: "Investigador Asistente",
    period: "2019 – 2020",
    description: `
    Rescaté y rediseñé desde cero un sistema de traduccón automática que estaba fallando en producción, conirtiéndolo en una plataforma robusta, escalable y toerante a fallos — actualmente en uso para traducir dcumentos oficiales del Gobierno de Navarra y que recbió un reconocimiento externo por su calidad y eficincia.

    El problema central era un sistema antiguo inapaz de manejar volumen y variedad de formatos. La slución fue rediseñar la arquitectura completa con miroservicios en Golang, desplegados con Docker y Kubenetes en GCP, exponiendo una API REST consumible dese servidores propios, de clientes y en la nube.

    Com segundo proyecto, extendí las capacidades del sistea para preservar el formato de los documentos office(negritas, cursivas, colores) durante la traducción  un detalle técnico que marca la diferencia para docmentos formales de gobierno y contratos.

    Impacto: E sistema sigue en producción años después de su entrga, procesando múltiples idiomas y formatos para difrentes áreas, incluyendo documentos gubernamentales e alta relevancia.
    `,
    techs: ["Golang", "Python", "Node.js", "Docker", "Kubernetes", "GCP", "REST API"],
  }
]
