"use client"

import { useState } from "react"
import {
  Sparkles,
  FileText,
  GitCompare,
  GitBranch,
  Ruler,
  Check,
  X,
  Lightbulb,
  AlertCircle,
  Server,
  DollarSign,
  Shield,
  Users,
  Zap,
  Database,
  Cloud,
  HardDrive,
  Wrench,
  Target,
  TrendingUp,
  Settings,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Activity,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BPMNPresentation() {
  const [activeTab, setActiveTab] = useState("nomenclatura")

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900">
      {/* Header */}
      <header className="border-b border-indigo-800/50 bg-indigo-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Informe: Modelado BPMN y Orquestación RPA</h1>
              <p className="text-sm text-indigo-300">Bizagi Modeler | UiPath Orchestrator | Power Automate</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setActiveTab("nomenclatura")}
            className={`flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-all ${
              activeTab === "nomenclatura"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/50"
                : "bg-slate-800/50 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <FileText className="h-4 w-4" />
            Nomenclatura BPMN 2.0
          </button>
          <button
            onClick={() => setActiveTab("uipath")}
            className={`flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-all ${
              activeTab === "uipath"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/50"
                : "bg-slate-800/50 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <Server className="h-4 w-4" />
            UiPath Orchestrator
          </button>
          <button
            onClick={() => setActiveTab("comparativa")}
            className={`flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-all ${
              activeTab === "comparativa"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/50"
                : "bg-slate-800/50 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <GitCompare className="h-4 w-4" />
            Comparativa
          </button>
          <button
            onClick={() => setActiveTab("control")}
            className={`flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-all ${
              activeTab === "control"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/50"
                : "bg-slate-800/50 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <GitBranch className="h-4 w-4" />
            Control de Versiones
          </button>
          <button
            onClick={() => setActiveTab("dimensionamiento")}
            className={`flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-all ${
              activeTab === "dimensionamiento"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/50"
                : "bg-slate-800/50 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <Ruler className="h-4 w-4" />
            Dimensionamiento
          </button>
          <button
            onClick={() => setActiveTab("arquitectura")}
            className={`flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-all ${
              activeTab === "arquitectura"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/50"
                : "bg-slate-800/50 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <Cloud className="h-4 w-4" />
            Arquitectura Gratis
          </button>
          <button
            onClick={() => setActiveTab("soporte")}
            className={`flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-all ${
              activeTab === "soporte"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/50"
                : "bg-slate-800/50 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <Wrench className="h-4 w-4" />
            Metodología de Soporte
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        {/* ... existing code ... */}
        {activeTab === "nomenclatura" && (
          <div className="space-y-6">
            {/* Main Card Header */}
            <Card className="border-cyan-500/30 bg-slate-900/80 p-6 backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20">
                  <FileText className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Nomenclatura y Buenas Prácticas BPMN 2.0 en Bizagi Modeler
                  </h2>
                </div>
              </div>
            </Card>

            {/* Objetivo Section */}
            <Card className="border-cyan-700/30 bg-gradient-to-br from-cyan-950/50 to-slate-900/80 p-6 backdrop-blur">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20">
                  <AlertCircle className="h-4 w-4 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Objetivo de esta Guía</h3>
              </div>
              <p className="mb-4 text-slate-300">Asegurar que todos los diagramas BPMN sean:</p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {["Claros", "Uniformes", "Entendibles", "Estándar"].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-lg bg-cyan-900/30 p-3">
                    <Check className="h-4 w-4 text-cyan-400" />
                    <span className="text-cyan-200">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-start gap-2 rounded-lg bg-indigo-900/40 p-4">
                <Lightbulb className="h-5 w-5 text-indigo-400 mt-0.5" />
                <p className="text-sm text-indigo-200">
                  <strong className="text-indigo-100">Fact Bizagi:</strong> El 70% de la calidad del proceso depende del
                  nombre correcto de actividades, eventos y pasarelas.
                </p>
              </div>
            </Card>

            {/* Importance Section */}
            <Card className="border-purple-700/30 bg-gradient-to-br from-purple-950/50 to-slate-900/80 p-6 backdrop-blur">
              <div className="mb-4 flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">¿Por qué es importante la nomenclatura en BPMN?</h3>
              </div>
              <div className="space-y-3">
                {[
                  { title: "Evita ambigüedades:", desc: "Nombre claro = interpretación única" },
                  { title: "Genera modelos consistentes:", desc: "Equipos alineados con las mismas reglas" },
                  {
                    title: "Facilita automatización:",
                    desc: "Documentación clara para desarrollar en UiPath, Power Automate o Camunda",
                  },
                  { title: "Comunicación negocio-TI:", desc: "Cualquiera entiende sin contexto extra" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-300">
                    <AlertCircle className="h-5 w-5 text-purple-400 mt-0.5" />
                    <div>
                      <span className="font-medium text-purple-300">{item.title}</span> {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* General Rules Section */}
            <Card className="border-blue-700/30 bg-slate-900/80 p-6 backdrop-blur">
              <Badge className="mb-4 bg-blue-600 hover:bg-blue-700 text-white">Reglas Generales</Badge>
              <h3 className="mb-6 text-xl font-bold text-white">Nomenclatura Oficial BPMN 2.0</h3>

              {/* Activities */}
              <div className="mb-8">
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                    A
                  </div>
                  <h4 className="text-lg font-semibold text-white">Actividades: VERBO + OBJETO</h4>
                </div>
                <p className="mb-4 text-slate-300">
                  Las actividades deben describir exactamente lo que hace, usando fórmula:{" "}
                  <strong className="text-blue-300">verbo en infinitivo + objeto del verbo</strong>
                </p>
                <div className="space-y-2">
                  {["Registrar solicitud", "Validar datos del cliente", "Generar informe final"].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded bg-slate-800/50 p-3 font-mono text-sm text-green-400"
                    >
                      <Check className="h-4 w-4" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-lg bg-red-950/30 p-4 border border-red-800/30">
                  <div className="mb-2 flex items-center gap-2 text-red-400 font-semibold">
                    <X className="h-4 w-4" />
                    Ejemplos incorrectos:
                  </div>
                  <div className="space-y-1 font-mono text-sm text-red-300">
                    {['"Solicitud"', '"Validación de datos"', '"Informe"'].map((item) => (
                      <div key={item}>{item}</div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Events */}
              <div className="mb-8">
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 text-white font-bold">
                    B
                  </div>
                  <h4 className="text-lg font-semibold text-white">Eventos: Nombres específicos y accionables</h4>
                </div>
                <p className="mb-4 text-slate-300">
                  Los eventos deben indicar qué provoca o desencadena la acción, no ser genéricos.
                </p>

                {/* Event Types Grid */}
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-gradient-to-br from-orange-900/40 to-slate-800/40 p-4 border border-orange-700/30">
                    <div className="mb-2 font-semibold text-orange-300">Eventos de Inicio</div>
                    <div className="space-y-1 text-sm">
                      {['"Recibir solicitud"', '"Detectar pago"', '"Fin de mes"'].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-green-400">
                          <Check className="h-3 w-3" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg bg-gradient-to-br from-yellow-900/40 to-slate-800/40 p-4 border border-yellow-700/30">
                    <div className="mb-2 font-semibold text-yellow-300">Eventos Intermedios</div>
                    <div className="space-y-1 text-sm">
                      {['"Esperar aprobación"', '"Recibir documento"'].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-green-400">
                          <Check className="h-3 w-3" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg bg-gradient-to-br from-red-900/40 to-slate-800/40 p-4 border border-red-700/30">
                    <div className="mb-2 font-semibold text-red-300">Eventos de Fin</div>
                    <div className="space-y-1 text-sm">
                      {['"Solicitud completada"', '"Caso rechazado"'].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-green-400">
                          <Check className="h-3 w-3" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Gateways */}
              <div className="mb-8">
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-600 text-white font-bold">
                    C
                  </div>
                  <h4 className="text-lg font-semibold text-white">Pasarelas (Gateways): Formato de pregunta [?]</h4>
                </div>
                <p className="mb-4 text-slate-300">
                  Las pasarelas de decisión deben formularse como preguntas lógicas entre corchetes:
                </p>
                <div className="space-y-2">
                  {["[¿Datos válidos?]", "[¿Cliente registrado?]", "[¿Pago aprobado?]"].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded bg-slate-800/50 p-3 font-mono text-sm text-green-400"
                    >
                      <Check className="h-4 w-4" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-lg bg-yellow-950/30 p-4 border border-yellow-800/30">
                  <div className="mb-2 flex items-center gap-2 text-yellow-400">
                    <AlertCircle className="h-4 w-4" />
                    Las ramas de salida deben etiquetarse como:
                  </div>
                  <div className="space-y-1 font-mono text-sm text-yellow-200">
                    <div>"Sí" → "No"</div>
                  </div>
                  <p className="mt-2 text-xs text-yellow-300">
                    Nunca usar "Aprobado/Rechazado" en la pasarela (va en las actividades posteriores)
                  </p>
                </div>
              </div>

              {/* Pools and Lanes */}
              <div className="mb-8">
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 text-white font-bold">
                    D
                  </div>
                  <h4 className="text-lg font-semibold text-white">Pools y Lanes: Roles claros</h4>
                </div>
                <p className="mb-4 text-slate-300">
                  Los carriles representan roles, áreas, departamentos o sistemas responsables:
                </p>
                <div className="rounded-lg bg-slate-800/50 p-4">
                  <div className="space-y-2 font-mono text-sm text-teal-300">
                    <div>Pool: "Proceso de Solicitudes"</div>
                    <div className="ml-4">└── Lane 1: "Cliente"</div>
                    <div className="ml-4">└── Lane 2: "Analista de Crédito"</div>
                    <div className="ml-4">└── Lane 3: "Sistema ERP"</div>
                  </div>
                </div>
                <div className="mt-4 rounded-lg bg-red-950/30 p-4 border border-red-800/30">
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <X className="h-4 w-4" />
                    Evitar nombres genéricos como "Área 1", "Usuario"
                  </div>
                </div>
              </div>
            </Card>

            {/* Best Practices */}
            <Card className="border-green-700/30 bg-gradient-to-br from-green-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Badge className="mb-4 bg-green-600 hover:bg-green-700 text-white">Buenas Prácticas</Badge>
              <h3 className="mb-6 text-xl font-bold text-white">Buenas Prácticas de Modelado en Bizagi</h3>

              <div className="space-y-4">
                {[
                  {
                    title: "1. Flujo Principal Horizontal",
                    desc: "Mantener el flujo de izquierda a derecha. Evita cruces innecesarios y mejora legibilidad.",
                  },
                  {
                    title: "2. Un Solo Evento de Inicio",
                    desc: "Siempre que sea posible, usar un único punto de entrada para claridad y control.",
                  },
                  {
                    title: "3. Responsabilidad Clara",
                    desc: "Cada actividad debe ubicarse en el Lane correcto para indicar quién es responsable.",
                  },
                  {
                    title: "4. Evitar Generalismos",
                    desc: 'Nunca usar nombres como "Hacer tarea" o "Revisar". Siempre ser específico: "Validar solicitud".',
                  },
                  {
                    title: "5. Subprocesos para Complejidad",
                    desc: "Usar subprocesos para ocultar detalles, reducir complejidad y mantener visión ejecutiva.",
                  },
                  {
                    title: "6. Fin de Proceso Explícito",
                    desc: "Todos los caminos deben terminar en un evento de fin. Regla de oro de BPMN 2.0 y Bizagi.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded-lg bg-green-900/20 p-4">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-green-300">{item.title}</div>
                      <p className="text-sm text-slate-300 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Example Process */}
            <Card className="border-indigo-700/30 bg-gradient-to-br from-indigo-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Badge className="mb-4 bg-indigo-600 hover:bg-indigo-700 text-white">Ejemplo Completo</Badge>
              <h3 className="mb-6 text-xl font-bold text-white">Proceso de Aprobación de Crédito</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white text-xs font-bold">
                    START
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-orange-300">Evento de Inicio</div>
                    <div className="text-sm text-slate-400">"Recibir solicitud de crédito"</div>
                  </div>
                </div>

                <div className="ml-4 space-y-3">
                  {[
                    "Validar identidad del cliente",
                    "Consultar score crediticio",
                    "Evaluar riesgo financiero",
                    "Generar propuesta de crédito",
                  ].map((activity, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <ArrowRight className="h-5 w-5 text-slate-600" />
                      <div className="flex-1 rounded-lg bg-blue-900/30 border border-blue-700/30 p-3">
                        <div className="text-blue-300">⚙️ {activity}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="ml-4 flex items-center gap-3">
                  <ArrowRight className="h-5 w-5 text-slate-600" />
                  <div className="flex-1 rounded-lg bg-pink-900/30 border border-pink-700/30 p-3">
                    <div className="text-pink-300">◆ [¿Riesgo aceptable?]</div>
                  </div>
                </div>

                <div className="ml-8 grid md:grid-cols-2 gap-4">
                  <div className="rounded-lg bg-green-900/30 border border-green-700/30 p-4">
                    <div className="font-semibold text-green-300 mb-2">SÍ →</div>
                    <div className="text-sm text-green-200">"Aprobar crédito"</div>
                  </div>
                  <div className="rounded-lg bg-red-900/30 border border-red-700/30 p-4">
                    <div className="font-semibold text-red-300 mb-2">NO →</div>
                    <div className="text-sm text-red-200">"Rechazar crédito"</div>
                  </div>
                </div>

                <div className="ml-4 flex items-center gap-3">
                  <ArrowRight className="h-5 w-5 text-slate-600" />
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white text-xs font-bold">
                    END
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-red-300">Evento de Fin</div>
                    <div className="text-sm text-slate-400">"Crédito gestionado"</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Conclusion */}
            <Card className="border-purple-700/30 bg-gradient-to-br from-purple-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Target className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Conclusión</h3>
              <p className="text-slate-300 mb-4">
                La nomenclatura en BPMN 2.0 según Bizagi se basa en cuatro pilares fundamentales:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Claridad", desc: "Nombres precisos" },
                  { title: "Coherencia", desc: "Patrones uniformes" },
                  { title: "Exactitud", desc: "Funcional y técnica" },
                  { title: "Estandarización", desc: "Para equipos grandes" },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-lg bg-purple-900/30 border border-purple-700/30 p-4">
                    <div className="font-semibold text-purple-300">{item.title}</div>
                    <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-300 mt-4 text-sm">
                Aplicar estas reglas asegura procesos que sean fáciles de entender, automatizar, mantener y compatibles
                con cualquier herramienta RPA o BPMS del mercado.
              </p>
            </Card>
          </div>
        )}

        {/* Added complete UiPath Orchestrator tab content */}
        {activeTab === "uipath" && (
          <div className="space-y-6">
            <Card className="border-orange-500/30 bg-slate-900/80 p-6 backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/20">
                  <Server className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    UiPath Orchestrator: Arquitectura, Gestión y Gobernanza RPA Empresarial
                  </h2>
                </div>
              </div>
            </Card>

            <Card className="border-orange-700/30 bg-gradient-to-br from-orange-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Badge className="mb-4 bg-orange-600 hover:bg-orange-700 text-white">
                1. ¿Qué es UiPath Orchestrator?
              </Badge>
              <p className="text-slate-300 mb-4">
                UiPath Orchestrator es la plataforma central de administración y gobierno de todas las automatizaciones
                dentro de UiPath. Es el "cerebro" que dirige a los robots y el "control tower" de toda la operación RPA
                empresarial.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Server, title: "Coordinar robots", color: "blue" },
                  { icon: Settings, title: "Administrar procesos", color: "purple" },
                  { icon: Database, title: "Manejar colas, activos, credenciales", color: "cyan" },
                  { icon: Shield, title: "Garantizar seguridad y auditoría", color: "green" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`rounded-lg bg-${item.color}-900/30 border border-${item.color}-700/30 p-4 flex items-center gap-3`}
                  >
                    <item.icon className={`h-6 w-6 text-${item.color}-400`} />
                    <span className="text-slate-200">{item.title}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="border-purple-700/30 bg-gradient-to-br from-purple-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Badge className="mb-4 bg-purple-600 hover:bg-purple-700 text-white">
                2. Funciones Principales: 4 Capacidades Clave
              </Badge>

              <div className="space-y-4">
                <div className="rounded-lg bg-slate-800/50 p-5 border border-blue-700/30">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                      A
                    </div>
                    <h4 className="text-lg font-semibold text-blue-300">Aprovisionamiento</h4>
                  </div>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-blue-400 mt-0.5" />
                      <span>Crear máquinas y asignar robots</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-blue-400 mt-0.5" />
                      <span>Controlar accesos, roles y permisos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-blue-400 mt-0.5" />
                      <span>Gestionar estructuras de carpetas</span>
                    </li>
                  </ul>
                  <div className="mt-3 text-sm font-semibold text-blue-200">
                    Esencia: Define "quién puede hacer qué"
                  </div>
                </div>

                <div className="rounded-lg bg-slate-800/50 p-5 border border-green-700/30">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600 text-white font-bold">
                      B
                    </div>
                    <h4 className="text-lg font-semibold text-green-300">Interconexión</h4>
                  </div>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-400 mt-0.5" />
                      <span>Conectar robots con Orchestrator</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-400 mt-0.5" />
                      <span>Comunicación mediante heartbeats (cada 30s)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-400 mt-0.5" />
                      <span>Conectar usuarios atendidos desde UiPath Assistant</span>
                    </li>
                  </ul>
                  <div className="mt-3 text-sm font-semibold text-green-200">
                    Crítico: Sin conexión NO hay ejecución remota
                  </div>
                </div>

                <div className="rounded-lg bg-slate-800/50 p-5 border border-orange-700/30">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 text-white font-bold">
                      C
                    </div>
                    <h4 className="text-lg font-semibold text-orange-300">Ejecución</h4>
                  </div>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-orange-400 mt-0.5" />
                      <span>Crear procesos desde paquetes publicados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-orange-400 mt-0.5" />
                      <span>Lanzar Jobs desatendidos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-orange-400 mt-0.5" />
                      <span>Gestionar reintentos automáticos y colas</span>
                    </li>
                  </ul>
                  <div className="mt-3 text-sm font-semibold text-orange-200">
                    Esencia: Donde realmente "se corre la automatización"
                  </div>
                </div>

                <div className="rounded-lg bg-slate-800/50 p-5 border border-purple-700/30">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600 text-white font-bold">
                      D
                    </div>
                    <h4 className="text-lg font-semibold text-purple-300">Control de Recursos</h4>
                  </div>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-purple-400 mt-0.5" />
                      <span>Manejar activos (textos, credenciales, números)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-purple-400 mt-0.5" />
                      <span>Administrar colas y transacciones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-purple-400 mt-0.5" />
                      <span>Versionar paquetes y gestionar licencias</span>
                    </li>
                  </ul>
                  <div className="mt-3 text-sm font-semibold text-purple-200">Rol: Central administrativa completa</div>
                </div>
              </div>
            </Card>

            <Card className="border-cyan-700/30 bg-gradient-to-br from-cyan-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Badge className="mb-4 bg-cyan-600 hover:bg-cyan-700 text-white">
                3. Estructura Jerárquica del Orchestrator
              </Badge>

              <div className="rounded-lg bg-slate-800/50 p-5 font-mono text-sm">
                <div className="text-cyan-300 mb-3">Organización (Automation Cloud)</div>
                <div className="ml-4 space-y-2 text-slate-300">
                  <div>└── Tenant</div>
                  <div className="ml-8 space-y-1">
                    <div>├── Configuración general</div>
                    <div>├── Usuarios y roles</div>
                    <div>└── Carpetas</div>
                    <div className="ml-8 space-y-1">
                      <div>├── Recursos (colas, activos, procesos)</div>
                      <div>├── Robots</div>
                      <div>└── Ejecuciones</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="rounded-lg bg-red-900/20 border border-red-700/30 p-4">
                  <div className="font-semibold text-red-300 mb-2">Carpetas Clásicas (Legacy)</div>
                  <ul className="space-y-1 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-400 mt-0.5" />
                      <span>Asignación explícita robot–proceso</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-400 mt-0.5" />
                      <span>Permisos limitados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-400 mt-0.5" />
                      <span>Mayor fricción en colaboración</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-green-900/20 border border-green-700/30 p-4">
                  <div className="font-semibold text-green-300 mb-2">Carpetas Modernas (Recomendadas)</div>
                  <ul className="space-y-1 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5" />
                      <span>Dinámicas y multiusuario</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5" />
                      <span>Control avanzado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5" />
                      <span>Soporta carpetas personales del desarrollador</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="border-indigo-700/30 bg-gradient-to-br from-indigo-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Badge className="mb-4 bg-indigo-600 hover:bg-indigo-700 text-white">
                4. Recursos Principales del Orchestrator
              </Badge>

              <div className="space-y-6">
                <div className="rounded-lg bg-slate-800/50 p-5">
                  <h4 className="font-bold text-indigo-300 mb-2">A) Paquetes (Packages)</h4>
                  <p className="text-slate-300 text-sm mb-3">
                    Archivos .nupkg generados desde Studio que incluyen código, dependencias y configuración.
                  </p>
                  <div className="text-sm text-slate-400">
                    <div className="font-semibold mb-2">Publicación en:</div>
                    <ul className="space-y-1 ml-4">
                      <li>• Local Folder</li>
                      <li>• Tenant Feed</li>
                      <li>• Orchestrator Host Feed</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg bg-slate-800/50 p-5">
                  <h4 className="font-bold text-indigo-300 mb-2">B) Procesos (Processes)</h4>
                  <p className="text-slate-300 text-sm mb-3">
                    La "instancia ejecutable" de un paquete. Un paquete puede generar múltiples procesos.
                  </p>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="rounded bg-indigo-900/40 px-3 py-1 font-mono text-indigo-200">
                      Paquete: ACME_Login_1.0.3.nupkg
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-600" />
                    <div className="rounded bg-indigo-900/40 px-3 py-1 font-mono text-indigo-200">
                      Proceso: Login_ACME_PROD
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-slate-800/50 p-5">
                  <h4 className="font-bold text-indigo-300 mb-2">C) Activos (Assets)</h4>
                  <p className="text-slate-300 text-sm mb-3">
                    Valores centralizados para evitar datos fijos en el código.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
                    {["Texto", "Credenciales (cifradas AES-256)", "Boolean", "Number"].map((type) => (
                      <div
                        key={type}
                        className="rounded bg-indigo-900/30 px-3 py-2 text-sm text-indigo-200 text-center"
                      >
                        ✓ {type}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-slate-400">
                    <span className="font-semibold">Ejemplo:</span> ACME_Credential, URL_ACME_LOGIN
                  </div>
                </div>

                <div className="rounded-lg bg-slate-800/50 p-5">
                  <h4 className="font-bold text-indigo-300 mb-2">D) Colas (Queues)</h4>
                  <p className="text-slate-300 text-sm mb-3">
                    Infraestructura para procesar grandes volúmenes de trabajo con transacciones distribuidas.
                  </p>
                  <div className="text-sm text-slate-400">
                    <div className="font-semibold mb-2">Estados de ítem:</div>
                    <div className="flex flex-wrap gap-2">
                      {["New", "In Progress", "Successful", "Failed", "Abandoned", "Deleted"].map((state) => (
                        <Badge key={state} variant="outline" className="bg-slate-700 text-slate-200">
                          {state}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-slate-800/50 p-5">
                  <h4 className="font-bold text-indigo-300 mb-2">E) Robots</h4>
                  <div className="grid md:grid-cols-2 gap-4 mt-3">
                    <div className="rounded-lg bg-blue-900/30 border border-blue-700/30 p-4">
                      <div className="font-semibold text-blue-300 mb-2">Atendidos (Attended)</div>
                      <p className="text-sm text-slate-300">
                        Se ejecutan desde UiPath Assistant. Requieren interacción humana.
                      </p>
                    </div>
                    <div className="rounded-lg bg-purple-900/30 border border-purple-700/30 p-4">
                      <div className="font-semibold text-purple-300 mb-2">Desatendidos (Unattended)</div>
                      <p className="text-sm text-slate-300">
                        Se lanzan automáticamente desde Orchestrator. Permiten ejecución remota.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-green-700/30 bg-gradient-to-br from-green-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Badge className="mb-4 bg-green-600 hover:bg-green-700 text-white">
                5. Buenas Prácticas Oficiales de UiPath
              </Badge>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="h-6 w-6 text-green-400" />
                    <h4 className="font-bold text-green-300">Seguridad</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {[
                      "Cambiar credenciales de administrador",
                      "Usar HTTPS con certificados válidos",
                      "Deshabilitar creación de robots para administradores",
                      "Limitar accesos con roles precisos",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-400 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Settings className="h-6 w-6 text-blue-400" />
                    <h4 className="font-bold text-blue-300">Gobernanza</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {[
                      "Controlar qué paquetes se publican",
                      "Versionado claro: 1.0.0 → 1.0.1 → 1.1.0 → 2.0.0",
                      "Mantener repositorios ordenados por carpetas",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-blue-400 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="h-6 w-6 text-yellow-400" />
                    <h4 className="font-bold text-yellow-300">Rendimiento</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {["Manejar correctamente tempdb en SQL Server", "Usar rutas de almacenamiento dedicadas"].map(
                      (item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-yellow-400 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Wrench className="h-6 w-6 text-purple-400" />
                    <h4 className="font-bold text-purple-300">Mantenibilidad</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {[
                      "NO usar valores estáticos en el código",
                      "Centralizar todo en activos",
                      "Usar bibliotecas de UI compartidas",
                      "Diseñar mediante REFramework para procesos robustos",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-purple-400 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Added complete Comparativa tab content */}
        {activeTab === "comparativa" && (
          <div className="space-y-6">
            <Card className="border-blue-500/30 bg-slate-900/80 p-6 backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20">
                  <GitCompare className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">UiPath Orchestrator vs Power Automate</h2>
                  <p className="text-slate-400 text-sm mt-1">
                    Microsoft Power Automate es otra solución popular de automatización, pero su enfoque de orquestación
                    difiere del de UiPath.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-purple-700/30 bg-gradient-to-br from-purple-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Badge className="mb-4 bg-purple-600 hover:bg-purple-700 text-white">Tabla Comparativa</Badge>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left p-3 text-slate-300 font-semibold">Aspecto</th>
                      <th className="text-left p-3 text-orange-300 font-semibold">UiPath Orchestrator</th>
                      <th className="text-left p-3 text-blue-300 font-semibold">Power Automate</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-800">
                      <td className="p-3 font-medium">Infraestructura</td>
                      <td className="p-3">
                        Disponible en la nube de UiPath o instalable on-premises. Interfaz web dedicada para RPA.
                      </td>
                      <td className="p-3">
                        Servicio 100% en la nube (Microsoft Power Platform). Sin necesidad de instalar orquestador.
                      </td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="p-3 font-medium">Gestión de Robots</td>
                      <td className="p-3">
                        Robots explícitos registrados por máquina/usuario. Control granular de estados (Disponible,
                        Ocupado, Desconectado).
                      </td>
                      <td className="p-3">
                        Se registran máquinas con agente de Power Automate. El concepto de robot es transparente para el
                        usuario.
                      </td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="p-3 font-medium">Triggers / Programación</td>
                      <td className="p-3">
                        Triggers incorporados: temporales (cron) y por colas. Soporta calendario avanzado, exclusiones,
                        etc.
                      </td>
                      <td className="p-3">
                        Flujos programados configurados individualmente. Triggers por cientos de conectores (email,
                        HTTP, etc.).
                      </td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="p-3 font-medium">Colas de trabajo</td>
                      <td className="p-3">
                        Sistema robusto de Queues con monitoreo de transacciones, reintentos automáticos, prioridades,
                        SLA. Varios robots consumen en paralelo.
                      </td>
                      <td className="p-3">
                        Work Queues recientemente disponibles (basadas en Dataverse). Aún sin todas las funcionalidades
                        avanzadas de UiPath.
                      </td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="p-3 font-medium">Assets / Configuración</td>
                      <td className="p-3">
                        Assets centralizados para credenciales (cifradas) y variables globales. Se gestionan por
                        carpeta/ambiente.
                      </td>
                      <td className="p-3">
                        Conexiones y variables de entorno. Credenciales vía conectores y OAuth. Sin módulo unificado de
                        "assets".
                      </td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="p-3 font-medium">Monitoreo y Logs</td>
                      <td className="p-3">
                        Vista central de Jobs y robots en tiempo real. Logs detallados almacenados en BD/ElasticSearch.
                        Alertas configurables.
                      </td>
                      <td className="p-3">
                        Historial por flujo en el portal. Power Platform Analytics para métricas agregadas. Carece de
                        alertas automáticas out-of-the-box.
                      </td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="p-3 font-medium">Control de versiones</td>
                      <td className="p-3">
                        Múltiples versiones pueden coexistir (v1 en prod, v2 en pruebas). Actualización/rollback fácil.
                      </td>
                      <td className="p-3">
                        Versionado limitado. Historial disponible pero no es posible mantener dos versiones activas
                        simultáneamente.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Escalabilidad</td>
                      <td className="p-3">
                        Altamente escalable: cientos de robots concurrentes. Balanceo en múltiples servidores.
                        Multi-tenancy.
                      </td>
                      <td className="p-3">
                        Escalabilidad ligada a infraestructura cloud de Microsoft. Para desktop flows depende de
                        licencias unattended.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-orange-700/30 bg-gradient-to-br from-orange-950/50 to-slate-900/80 p-6 backdrop-blur">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 text-white">
                    <Server className="h-4 w-4" />
                  </div>
                  <h3 className="font-bold text-orange-300">UiPath Orchestrator</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-green-400 mb-2">Ventajas</div>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {[
                        "Plataforma full RPA robusta con orquestación avanzada",
                        "Centralización total: portal dedicado con control detallado",
                        "Flexibilidad de despliegue: nube o on-premises",
                        "APIs REST completas para integración",
                        "Comunidad RPA madura y soporte empresarial",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="font-semibold text-red-400 mb-2">Limitaciones</div>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {[
                        "Costo: licencias Enterprise pueden ser costosas",
                        "Curva de aprendizaje y complejidad de configuración",
                        "Orientación 100% RPA (menos conveniente para flujos simples)",
                        "Dependencia de Windows (robots principalmente Windows)",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="border-blue-700/30 bg-gradient-to-br from-blue-950/50 to-slate-900/80 p-6 backdrop-blur">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <Cloud className="h-4 w-4" />
                  </div>
                  <h3 className="font-bold text-blue-300">Power Automate</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-green-400 mb-2">Ventajas</div>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {[
                        "Integración nativa en ecosistema Microsoft 365/Dynamics",
                        "Facilidad de uso para usuarios de negocio (citizen developers)",
                        "Coste accesible para iniciarse (incluido en Office 365)",
                        "Orquestación implícita: menos componentes que gestionar",
                        "Actualizaciones automáticas gestionadas por Microsoft",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="font-semibold text-red-400 mb-2">Limitaciones</div>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {[
                        "Falta de orquestación avanzada centralizada",
                        "Características RPA menos maduras (Work Queues reciente)",
                        "Límites de rendimiento bajo suscripción (API calls, tiempo de ejecución)",
                        "Menor enfoque en acciones UI complejas",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="border-purple-700/30 bg-gradient-to-br from-purple-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Target className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Conclusión</h3>
              <p className="text-slate-300 mb-4">
                El "orquestador" de Power Automate se compone del propio servicio cloud y las características
                distribuidas, mientras que UiPath ofrece un orquestador dedicado con funcionalidades específicas de RPA.
              </p>

              <div className="space-y-3">
                <div className="rounded-lg bg-blue-900/30 border border-blue-700/30 p-4">
                  <div className="font-semibold text-blue-300 mb-2">Power Automate</div>
                  <p className="text-sm text-slate-300">
                    Ideal si ya estás en el ecosistema Microsoft y buscas automatizar flujos entre aplicaciones con
                    volumen moderado.
                  </p>
                </div>

                <div className="rounded-lg bg-orange-900/30 border border-orange-700/30 p-4">
                  <div className="font-semibold text-orange-300 mb-2">UiPath Orchestrator</div>
                  <p className="text-sm text-slate-300">
                    Recomendado para automatizaciones de mayor escala o complejidad, con cientos de casos diarios y
                    necesidad de alta supervisión.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-green-900/20 border border-green-700/30 p-4">
                <p className="text-sm text-slate-300">
                  <strong className="text-green-300">La elección no es excluyente:</strong> muchas organizaciones usan
                  ambos según el caso de uso.
                </p>
              </div>
            </Card>
          </div>
        )}

        {/* Added remaining tabs - Control, Dimensionamiento, Arquitectura, and Soporte with full content */}
        {activeTab === "control" && (
          <div className="space-y-6">
            <Card className="border-green-500/30 bg-slate-900/80 p-6 backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/20">
                  <GitBranch className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Control de Versionamiento en UiPath con Git</h2>
                  <p className="text-slate-400 text-sm mt-1">
                    Guía completa para configurar y usar Git en UiPath Studio
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-blue-700/30 bg-gradient-to-br from-blue-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Badge className="mb-4 bg-blue-600 hover:bg-blue-700 text-white">Requisitos Previos</Badge>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    icon: "🖥️",
                    title: "UiPath Studio",
                    desc: "Versiones recientes ya traen integración nativa con Git. No necesitas instalar nada adicional.",
                  },
                  {
                    icon: "⚙️",
                    title: "Microsoft Visual C++ Redistributable",
                    desc: "UiPath lo necesita para que funcione la integración con Git. Normalmente ya viene en Windows.",
                  },
                  {
                    icon: "🔑",
                    title: "Licencias Individuales",
                    desc: "Cada desarrollador necesita su propia licencia 'Named User' (personal e intransferible).",
                  },
                  {
                    icon: "📦",
                    title: "Repositorio Git",
                    desc: "Necesitas tener un repositorio ya creado en GitHub, Azure DevOps u otro servidor. Con acceso y permisos correctos.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-lg bg-slate-800/50 p-4 border border-blue-700/30">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-semibold text-blue-300 mb-1">{item.title}</div>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="border-purple-700/30 bg-gradient-to-br from-purple-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Badge className="mb-4 bg-purple-600 hover:bg-purple-700 text-white">Métodos de Autenticación</Badge>

              <div className="space-y-4">
                <div className="rounded-lg bg-slate-800/50 p-5 border border-green-700/30">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="h-6 w-6 text-green-400" />
                    <h4 className="font-bold text-green-300">HTTPS (Recomendado - Más fácil)</h4>
                  </div>
                  <p className="text-slate-300 text-sm mb-3">
                    Es la más común. Cuando conectas por primera vez, aparece una ventana donde puedes elegir:
                  </p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {[
                      "Usar administrador de credenciales de Windows",
                      "Iniciar sesión directamente con GitHub",
                      "Ingresar usuario y contraseña manualmente",
                      "Usar token de acceso personal (OPCIÓN MÁS SEGURA ✓)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-400 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg bg-slate-800/50 p-5 border border-orange-700/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="h-6 w-6 text-orange-400" />
                    <h4 className="font-bold text-orange-300">SSH (Para usuarios avanzados)</h4>
                  </div>
                  <p className="text-slate-300 text-sm mb-3">
                    Para los que prefieren usar llaves SSH. Pasos necesarios:
                  </p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {[
                      "Generar tu par de llaves (pública y privada)",
                      "Registrar la llave pública en tu servidor Git",
                      "Configurar UiPath Studio para usar SSH",
                    ].map((item, idx) => (
                      <li key={item} className="flex items-start gap-2">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-600 text-white text-xs font-bold mt-0.5">
                          {idx + 1}
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-orange-200 mt-3">Mayor seguridad pero más complejo de configurar</p>
                </div>
              </div>
            </Card>

            <Card className="border-cyan-700/30 bg-gradient-to-br from-cyan-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Badge className="mb-4 bg-cyan-600 hover:bg-cyan-700 text-white">
                Configuración Paso a Paso en UiPath Studio
              </Badge>

              <div className="space-y-3">
                {[
                  {
                    num: "1",
                    title: "Abre UiPath Studio y crea o abre un proyecto",
                    desc: "Puedes crear uno nuevo o abrir un proyecto existente.",
                  },
                  {
                    num: "2",
                    title: "Accede al Control de Código Fuente",
                    desc: "Ve a: Menu → Team → Source Control (o Control de código fuente). Aquí es donde ves las opciones para conectarse.",
                  },
                  {
                    num: "3",
                    title: "Elige tu método de conexión (HTTPS o SSH)",
                    desc: "Recomendamos HTTPS con Token de Acceso Personal. Selecciona tu plataforma: GitHub, Azure DevOps, GitLab, etc.",
                  },
                  {
                    num: "4",
                    title: "Opción A: Clonar un proyecto existente",
                    desc: "Si el repositorio ya existe en GitHub/Azure: Copia la URL del repositorio (HTTPS o SSH) → UiPath detecta y lo clona localmente.",
                  },
                  {
                    num: "5",
                    title: "Opción B: Crear un repositorio nuevo desde cero",
                    desc: "Si es tu primer proyecto: UiPath te guía para inicializar el repositorio local e inmediatamente crear uno remoto (GitHub, Azure DevOps).",
                  },
                  {
                    num: "6",
                    title: "Configura el usuario Git",
                    desc: "UiPath pedirá tu nombre de usuario y email. Esto se utiliza para identificar quién hizo cada commit (auditoría).",
                  },
                  {
                    num: "7",
                    title: "¡Listo! Comienza a trabajar",
                    desc: "Ahora puedes hacer cambios, hacer commits y sincronizar con el servidor. UiPath muestra un panel visual con: Cambios pendientes, Historial, Ramas, etc.",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex items-start gap-4 rounded-lg bg-slate-800/50 p-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-600 text-white font-bold flex-shrink-0">
                      {step.num}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-cyan-300 mb-1">{step.title}</div>
                      <p className="text-sm text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="border-yellow-700/30 bg-gradient-to-br from-yellow-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Lightbulb className="h-8 w-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Tips y Recomendaciones Importantes</h3>

              <div className="space-y-2">
                {[
                  "Usa tokens de acceso personal en lugar de contraseñas (más seguro y se puede revocar)",
                  "Mantén tus commits frecuentes y con mensajes descriptivos",
                  "Nunca trabajes directamente en main, siempre crea ramas feature/",
                  "Haz pull antes de push para evitar conflictos",
                  "En equipos, define una rama develop como 'versión en progreso'",
                  "main/master debe ser la versión estable lista para producción",
                ].map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-2 rounded-lg bg-yellow-900/20 p-3">
                    <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-300">{tip}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="border-indigo-700/30 bg-gradient-to-br from-indigo-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Badge className="mb-4 bg-indigo-600 hover:bg-indigo-700 text-white">
                ¿Por qué Git es obligatorio en RPA empresarial?
              </Badge>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { icon: "🔒", title: "Seguridad", color: "green" },
                  { icon: "📋", title: "Trazabilidad", color: "blue" },
                  { icon: "👥", title: "Trabajo en equipo", color: "purple" },
                  { icon: "📜", title: "Historial de cambios", color: "orange" },
                  { icon: "🔄", title: "CI/CD", color: "cyan" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className={`rounded-lg bg-${item.color}-900/30 border border-${item.color}-700/30 p-4 text-center`}
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className={`font-semibold text-${item.color}-300`}>{item.title}</div>
                  </div>
                ))}
              </div>

              <p className="text-slate-300 mt-6 text-sm">
                UiPath Studio incluye integración nativa con Git, GitHub, GitLab, Azure DevOps y repositorios
                On-Premise.
              </p>
            </Card>

            <Card className="border-green-700/30 bg-gradient-to-br from-green-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Badge className="mb-4 bg-green-600 hover:bg-green-700 text-white">
                Buenas Prácticas Oficiales de Git en UiPath
              </Badge>

              <div className="space-y-4">
                {[
                  {
                    icon: "📦",
                    title: "Publicación segura",
                    items: ["Nunca publicar desde ramas experimentales", "Solo publicar desde main o release"],
                  },
                  {
                    icon: "🏷️",
                    title: "Nomenclatura estándar",
                    items: ["feature/nombre-funcionalidad", "bugfix/descripcion-error", "hotfix/error-urgente"],
                  },
                  {
                    icon: "💾",
                    title: "Commits de calidad",
                    items: [
                      "Commits pequeños y frecuentes",
                      "Mensajes claros y descriptivos",
                      'Ejemplo: "Se agregó login ACME con validación"',
                    ],
                  },
                  {
                    icon: "🚫",
                    title: "Archivo .gitignore",
                    items: [
                      "No subir carpetas de dependencias",
                      "Excluir temporales, capturas, binarios",
                      "Ignorar carpetas: obj, bin, .vs",
                    ],
                  },
                  {
                    icon: "📊",
                    title: "Versionamiento semántico",
                    items: ["Versiones: 1.0.0, 1.0.1, 1.1.0, 2.0.0", "Major.Minor.Patch", "Incremental y predecible"],
                  },
                ].map((practice) => (
                  <div key={practice.title} className="rounded-lg bg-slate-800/50 p-4 border border-green-700/30">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{practice.icon}</span>
                      <h4 className="font-semibold text-green-300">{practice.title}</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-slate-300">
                      {practice.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="border-purple-700/30 bg-gradient-to-br from-purple-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Target className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Conclusión</h3>
              <p className="text-slate-300 mb-4">
                Git dentro de UiPath no solo guarda versiones, sino que transforma los proyectos RPA en:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {["Escalables", "Colaborativos", "Auditables", "Listos para DevOps", "Profesionales"].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 rounded-lg bg-purple-900/30 p-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-400" />
                    <span className="text-purple-200">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg bg-yellow-900/20 border border-yellow-700/30 p-4">
                <p className="text-sm text-slate-300">
                  <strong className="text-yellow-300">Importante:</strong> Cualquier empresa que adopte UiPath de manera
                  seria debe usar Git como control de versiones obligatorio.
                </p>
              </div>
            </Card>
          </div>
        )}

        {activeTab === "dimensionamiento" && (
          <div className="space-y-6">
            <Card className="border-cyan-500/30 bg-slate-900/80 p-6 backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20">
                  <Ruler className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Pasos para un Buen Dimensionamiento RPA</h2>
                  <p className="text-slate-400 text-sm mt-1">
                    Antes de implementar una solución RPA, es fundamental responder estas 6 preguntas clave que definen
                    tu infraestructura
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  icon: Users,
                  color: "blue",
                  title: "¿Cuántas personas van a estar trabajando en el equipo?",
                  determines: [
                    "Cantidad de licencias UiPath necesarias",
                    "Capacidad de procesamiento requerida",
                    "Infraestructura de soporte y comunicación",
                    "Presupuesto de recursos humanos",
                  ],
                  answer: "10 personas",
                },
                {
                  icon: Activity,
                  color: "purple",
                  title: "¿Cuántos robots RPA van a gestionar aproximadamente?",
                  determines: [
                    "Capacidad del Orchestrator",
                    "Servidores y máquinas virtuales necesarias",
                    "Plan de crecimiento futuro",
                    "Costos de infraestructura en nube",
                  ],
                  answer: "30 robots en producción",
                },
                {
                  icon: GitBranch,
                  color: "green",
                  title: "¿Qué proveedor Git prefieren?",
                  determines: [
                    "Integración con UiPath Studio",
                    "Costos de licencias y almacenamiento",
                    "Políticas de seguridad y cumplimiento",
                    "Soporte para trabajo colaborativo",
                  ],
                  answer: "GitHub con Git",
                },
                {
                  icon: DollarSign,
                  color: "orange",
                  title: "¿Presupuesto mensual/anual o variar según necesidades?",
                  determines: [
                    "Escalabilidad de la solución",
                    "Opciones de planes (Básico, Estándar, Premium)",
                    "Inversión inicial vs gastos operativos",
                    "ROI y proyección financiera",
                  ],
                  answer: "Opciones variadas (3 escenarios)",
                },
                {
                  icon: Database,
                  color: "cyan",
                  title: "¿Volumen de transacciones/logs que generarían los robots?",
                  determines: [
                    "Espacio de almacenamiento requerido",
                    "Performance del Orchestrator",
                    "Estrategia de backup y recuperación",
                    "Cumplimiento normativo y auditoría",
                  ],
                  answer: "~571.5 GB/año estimado",
                },
                {
                  icon: Cloud,
                  color: "indigo",
                  title: "¿Geografía? (¿todos en una oficina o distribuido?)",
                  determines: [
                    "Ubicación de servidores y datacenters",
                    "Latencia y velocidad de conexión",
                    "Requisitos de cumplimiento regional",
                    "Estrategia de soporte técnico 24/7",
                  ],
                  answer: "Híbrido (Oficina + Remoto)",
                },
              ].map((question, idx) => (
                <Card
                  key={idx}
                  className={`border-${question.color}-700/30 bg-gradient-to-br from-${question.color}-950/50 to-slate-900/80 p-5 backdrop-blur`}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg bg-${question.color}-600/20`}
                    >
                      <question.icon className={`h-5 w-5 text-${question.color}-400`} />
                    </div>
                    <h3 className="text-base font-bold text-white flex-1">{question.title}</h3>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="text-xs font-semibold text-slate-400 mb-2">Esta pregunta determina:</div>
                      <ul className="space-y-1">
                        {question.determines.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <Check className={`h-3 w-3 text-${question.color}-400 mt-0.5 flex-shrink-0`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={`rounded-lg bg-${question.color}-900/30 border border-${question.color}-700/30 p-3`}
                    >
                      <div className="text-xs font-semibold text-slate-400 mb-1">Respuesta:</div>
                      <div className={`text-sm font-bold text-${question.color}-300`}>{question.answer}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="border-purple-700/30 bg-gradient-to-br from-purple-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Badge className="mb-4 bg-purple-600 hover:bg-purple-700 text-white">Resumen de Dimensionamiento</Badge>

              <div className="grid md:grid-cols-4 gap-4">
                {[
                  {
                    label: "Equipo",
                    value: "10 personas",
                    sublabel: "Híbrido: Oficina + Remoto",
                    icon: Users,
                    color: "blue",
                  },
                  {
                    label: "Robots RPA",
                    value: "30 robots",
                    sublabel: "En producción y desarrollo",
                    icon: Activity,
                    color: "purple",
                  },
                  {
                    label: "Almacenamiento",
                    value: "~500 GB",
                    sublabel: "Anual estimado",
                    icon: HardDrive,
                    color: "cyan",
                  },
                  {
                    label: "Crecimiento",
                    value: "+40% año 2",
                    sublabel: "+30% año 3",
                    icon: TrendingUp,
                    color: "green",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className={`rounded-lg bg-${stat.color}-900/30 border border-${stat.color}-700/30 p-4 text-center`}
                  >
                    <stat.icon className={`h-8 w-8 text-${stat.color}-400 mx-auto mb-2`} />
                    <div className="text-xs text-slate-400 mb-1">{stat.label}</div>
                    <div className={`text-xl font-bold text-${stat.color}-300 mb-1`}>{stat.value}</div>
                    <div className="text-xs text-slate-500">{stat.sublabel}</div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="border-indigo-700/30 bg-gradient-to-br from-indigo-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Badge className="mb-4 bg-indigo-600 hover:bg-indigo-700 text-white">
                Desglose de Costos Mensuales (3 Escenarios)
              </Badge>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left p-3 text-slate-300 font-semibold">Componente</th>
                      <th className="text-center p-3 text-green-300 font-semibold">Básico</th>
                      <th className="text-center p-3 text-blue-300 font-semibold">Estándar</th>
                      <th className="text-center p-3 text-purple-300 font-semibold">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    {[
                      {
                        item: "Licencias UiPath Studio (10 personas)",
                        basic: "$0",
                        standard: "$500",
                        premium: "$1,000",
                      },
                      { item: "UiPath Orchestrator (On-Premises)", basic: "$300", standard: "$800", premium: "$1,500" },
                      { item: "GitHub (Pro/Enterprise)", basic: "$21", standard: "$231", premium: "$500" },
                      { item: "Almacenamiento en la Nube (Backups)", basic: "$50", standard: "$150", premium: "$300" },
                      { item: "Infraestructura (Servidores)", basic: "$400", standard: "$800", premium: "$1,500" },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-slate-800">
                        <td className="p-3">{row.item}</td>
                        <td className="p-3 text-center">{row.basic}</td>
                        <td className="p-3 text-center">{row.standard}</td>
                        <td className="p-3 text-center">{row.premium}</td>
                      </tr>
                    ))}
                    <tr className="font-bold bg-slate-800/50">
                      <td className="p-3 text-white">TOTAL MENSUAL</td>
                      <td className="p-3 text-center text-green-400">$771</td>
                      <td className="p-3 text-center text-blue-400">$2,481</td>
                      <td className="p-3 text-center text-purple-400">$4,800</td>
                    </tr>
                    <tr className="font-bold">
                      <td className="p-3 text-white">TOTAL ANUAL</td>
                      <td className="p-3 text-center text-green-400">$9,252</td>
                      <td className="p-3 text-center text-blue-400">$29,772</td>
                      <td className="p-3 text-center text-purple-400">$57,600</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            <Card className="border-green-700/30 bg-gradient-to-br from-green-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Badge className="mb-4 bg-green-600 hover:bg-green-700 text-white">ROI Estimado y Beneficios</Badge>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-300 mb-3">Ahorros Anuales Esperados</h4>
                  <div className="space-y-2">
                    {[
                      { label: "Automatización de procesos", value: "$120,000 - $180,000 anuales" },
                      { label: "Reducción de errores", value: "$40,000 - $60,000 anuales" },
                      { label: "Mejora de productividad", value: "$50,000 - $80,000 anuales" },
                      { label: "Reducción de tiempo manual", value: "30% - 50%" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5" />
                        <div className="flex-1">
                          <span className="text-slate-300">{item.label}:</span>
                          <span className="text-green-300 font-semibold ml-2">{item.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg bg-green-900/30 border border-green-700/30 p-6 text-center">
                  <div className="text-sm text-slate-400 mb-2">Payback Period (ROI)</div>
                  <div className="text-5xl font-bold text-green-300 mb-2">4-6</div>
                  <div className="text-lg text-green-400 mb-3">meses</div>
                  <p className="text-xs text-slate-400">Inversión inicial vs. Ahorros anuales</p>
                </div>
              </div>
            </Card>

            <Card className="border-blue-700/30 bg-gradient-to-br from-blue-950/50 to-slate-900/80 p-6 backdrop-blur">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="h-8 w-8 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Recomendación: Escenario Estándar</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Para tu equipo de 10 personas con 30 robots, recomendamos el escenario Estándar que ofrece el mejor
                balance entre costo y funcionalidades.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: "✓", label: "Costo mensual", value: "$2,481 ($29,772 anuales)" },
                  { icon: "✓", label: "Infraestructura", value: "On-Premises escalable" },
                  { icon: "✓", label: "Almacenamiento", value: "1 TB con redundancia RAID 6" },
                  { icon: "✓", label: "Soporte", value: "Incluye monitoreo 24/7" },
                  { icon: "✓", label: "ROI", value: "4-6 meses" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-lg bg-blue-900/30 border border-blue-700/30 p-4"
                  >
                    <div className="text-xl text-blue-400">{item.icon}</div>
                    <div>
                      <div className="text-sm text-slate-400">{item.label}:</div>
                      <div className="font-semibold text-blue-300">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {activeTab === "arquitectura" && (
          <div className="space-y-6">
            <Card className="border-teal-500/30 bg-slate-900/80 p-6 backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/20">
                  <Cloud className="h-5 w-5 text-teal-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Arquitectura Gratis para UiPath + Git y Power Automate
                  </h2>
                  <p className="text-slate-400 text-sm mt-1">
                    Soluciones sin costo de licencia para laboratorio y desarrollo
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-orange-700/30 bg-gradient-to-br from-orange-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Badge className="mb-4 bg-orange-600 hover:bg-orange-700 text-white">
                1. Arquitectura Gratis para UiPath + Git
              </Badge>
              <p className="text-slate-300 mb-4">
                Esta arquitectura utiliza herramientas totalmente gratuitas: UiPath Studio Community, UiPath Assistant,
                UiPath Cloud Orchestrator Community y GitHub Free. Con esto se puede desarrollar, versionar, ejecutar y
                documentar un proyecto RPA sin costos de licencia.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-orange-300 mb-3">1.1 Componentes</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "UiPath Studio Community (desarrollo)",
                    "UiPath Assistant (ejecución atendida)",
                    "UiPath Cloud Orchestrator (Community, para orquestación básica)",
                    "Git (control de versiones local)",
                    "GitHub Free (repositorio remoto y colaboración)",
                    "GitHub Projects (tablero Kanban, tareas y bugs)",
                    "GitHub Wiki (documentación funcional y técnica)",
                    "OneDrive o similar para almacenamiento de documentación adicional",
                  ].map((component) => (
                    <div key={component} className="flex items-start gap-2 rounded-lg bg-slate-800/50 p-3">
                      <Check className="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-300">{component}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-orange-300 mb-3">1.2 Flujo técnico general</h4>
                <div className="space-y-2">
                  {[
                    "El desarrollador crea o abre el proyecto en UiPath Studio.",
                    "Se inicializa un repositorio Git local desde Studio o Git.",
                    "Se realizan commits frecuentes con mensajes claros.",
                    "Se configura un repositorio remoto en GitHub y se hace push.",
                    "Cuando la versión está lista, se publica el proceso desde Studio a Orchestrator Community.",
                    "El robot atendido se ejecuta desde UiPath Assistant, apuntando a Orchestrator.",
                    "La ejecución y los logs se visualizan desde Orchestrator (Jobs, Logs, Assets, etc.).",
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-600 text-white text-xs font-bold flex-shrink-0">
                        {idx + 1}
                      </div>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg bg-red-900/20 border border-red-700/30 p-4">
                <h4 className="font-semibold text-red-300 mb-3">1.3 Restricciones de la solución gratuita</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  {[
                    "No incluye robots unattended (desatendidos). Sólo ejecución atendida.",
                    "Capacidad limitada de colas y almacenamiento en Orchestrator Community.",
                    "En la práctica se recomienda un desarrollador principal y un equipo pequeño.",
                    "Integraciones empresariales avanzadas (SAP, mainframe, etc.) pueden requerir licencias.",
                    "No es un entorno pensado para alta disponibilidad o producción masiva.",
                  ].map((restriction) => (
                    <li key={restriction} className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>{restriction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card className="border-blue-700/30 bg-gradient-to-br from-blue-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Badge className="mb-4 bg-blue-600 hover:bg-blue-700 text-white">
                2. Arquitectura Gratis para Power Automate
              </Badge>
              <p className="text-slate-300 mb-4">
                Power Automate permite automatizar procesos utilizando conectores estándar, Power Automate Desktop (PAD)
                y almacenamiento en OneDrive, con costos nulos o muy bajos según el tipo de licencia de Microsoft 365
                disponible.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-blue-300 mb-3">2.1 Componentes</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Power Automate Desktop (gratuito, para automatización RPA en el equipo local)",
                    "Power Automate Cloud Free o incluido en Microsoft 365 (flujos en la nube)",
                    "OneDrive personal o de organización para archivos",
                    "Outlook.com o correo de Microsoft 365 (conector estándar)",
                    "Excel Online (Personal u organización, conector estándar)",
                    "Otros conectores estándar (Teams, Planner, Forms, etc. según el plan)",
                  ].map((component) => (
                    <div key={component} className="flex items-start gap-2 rounded-lg bg-slate-800/50 p-3">
                      <Check className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-300">{component}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg bg-red-900/20 border border-red-700/30 p-4">
                <h4 className="font-semibold text-red-300 mb-3">2.3 Restricciones de la solución gratuita</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  {[
                    "No se pueden usar conectores premium (por ejemplo, SQL Server, SAP, Salesforce, SharePoint empresarial avanzado, etc.).",
                    "La ejecución desatendida de RPA suele requerir licencias adicionales.",
                    "Normalmente está limitado a un usuario y a un equipo para Power Automate Desktop.",
                    "El historial de ejecuciones puede ser limitado según el plan.",
                    "El control de versiones de flujos no es tan robusto como Git, se recomienda exportar y versionar paquetes manualmente si es necesario.",
                  ].map((restriction) => (
                    <li key={restriction} className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>{restriction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card className="border-green-700/30 bg-gradient-to-br from-green-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Badge className="mb-4 bg-green-600 hover:bg-green-700 text-white">
                3. Recomendaciones de Dimensionamiento (Gratis)
              </Badge>
              <p className="text-slate-300 mb-4">
                Las siguientes recomendaciones de dimensionamiento son orientativas y pensadas para entornos de
                laboratorio, desarrollo personal o pruebas con bajo volumen:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-lg bg-slate-800/50 p-5">
                  <h4 className="font-semibold text-orange-300 mb-4">3.1 UiPath Community</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {[
                      "1 equipo para desarrollo y ejecución (puede ser el mismo PC del desarrollador).",
                      "CPU: al menos 4 núcleos lógicos.",
                      "RAM: mínimo 8 GB, recomendado 16 GB si se usan muchas aplicaciones a la vez.",
                      "Disco: al menos 50 GB libres para proyectos, logs y herramientas.",
                      "Sistema operativo: Windows 10/11.",
                      "Número de proyectos: 3 a 5 proyectos pequeños en paralelo es razonable.",
                      "Volumen de colas: hasta 100–200 ítems/día en pruebas, dependiendo de la complejidad.",
                    ].map((spec) => (
                      <li key={spec} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg bg-slate-800/50 p-5">
                  <h4 className="font-semibold text-blue-300 mb-4">3.2 Power Automate Gratis / Incluido</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {[
                      "1 equipo para Power Automate Desktop (si se usa RPA de escritorio).",
                      "CPU: 2–4 núcleos lógicos.",
                      "RAM: mínimo 8 GB.",
                      "Disco: 30–50 GB libres.",
                      "Flujos activos: 5–10 flujos en la nube para escenarios simples.",
                      "Uso de conectores: limitarse a conectores estándar (correo, Excel, OneDrive, Teams, etc.).",
                    ].map((spec) => (
                      <li key={spec} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="border-purple-700/30 bg-gradient-to-br from-purple-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Badge className="mb-4 bg-purple-600 hover:bg-purple-700 text-white">
                6. Comparación: UiPath Community vs Power Automate (Gratis)
              </Badge>
              <p className="text-slate-300 mb-4">
                La siguiente comparación se centra en escenarios gratuitos o de muy bajo costo, para aprendizaje y
                proyectos pequeños.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-lg bg-orange-900/30 border border-orange-700/30 p-5">
                  <h4 className="font-semibold text-orange-300 mb-3">UiPath Community</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {[
                      "Fuerte en automatización RPA clásica (UI, legacy, aplicaciones de escritorio).",
                      "Studio ofrece un entorno muy completo para desarrolladores.",
                      "Orchestrator Community permite probar conceptos de orquestación.",
                      "Control de versiones integrado con Git.",
                      "Ideal para flujos complejos de escritorio y sistemas antiguos.",
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg bg-blue-900/30 border border-blue-700/30 p-5">
                  <h4 className="font-semibold text-blue-300 mb-3">Power Automate (Gratis / Incluido)</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {[
                      "Fuerte integración con el ecosistema Microsoft 365 (Outlook, Excel, Teams, SharePoint, Forms).",
                      "Enfoque low-code/no-code, más amigable para usuarios de negocio.",
                      "Permite automatizaciones rápidas basadas en eventos.",
                      "Power Automate Desktop complementa con RPA de escritorio.",
                      "Ideal para procesos basados en datos, correos y documentos de Microsoft 365.",
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="border-indigo-700/30 bg-gradient-to-br from-indigo-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Target className="h-8 w-8 text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">7. Recomendaciones para elegir plataforma</h3>

              <div className="space-y-3">
                {[
                  "Si el entorno principal es Microsoft 365 (Outlook, Teams, SharePoint, OneDrive) y los usuarios son de negocio, Power Automate suele ser la opción más natural.",
                  "Si el proceso requiere mucha automatización de escritorio, interacción con sistemas legado, o lógica compleja de RPA, UiPath es más potente y flexible.",
                  "Para aprendizaje y portafolio personal, es recomendable conocer ambas plataformas: UiPath para RPA clásico y Power Automate para automatización integrada con Microsoft.",
                  "En un contexto empresarial, la elección también depende de licenciamiento, soporte, volumen de procesos y estrategia de la organización.",
                  "En proyectos gratuitos o de laboratorio, se puede comenzar con UiPath Community para RPA y Power Automate para automatizaciones ligadas a Microsoft 365, combinando lo mejor de cada herramienta.",
                ].map((recommendation, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded-lg bg-indigo-900/20 p-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white text-xs font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <p className="text-sm text-slate-300">{recommendation}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {activeTab === "soporte" && (
          <div className="space-y-6">
            <Card className="border-red-500/30 bg-slate-900/80 p-6 backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20">
                  <Wrench className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">METODOLOGÍA PROFESIONAL PARA SOPORTE RPA</h2>
                  <p className="text-slate-400 text-sm mt-1">Guía oficial de soporte RPA – Servipag & Previred</p>
                </div>
              </div>
            </Card>

            <Card className="border-yellow-700/30 bg-gradient-to-br from-yellow-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Badge className="mb-4 bg-yellow-600 hover:bg-yellow-700 text-white">
                Lo primero: NO memorizar → aprender a leer robots
              </Badge>

              <div className="rounded-lg bg-slate-800/50 p-5 mb-4">
                <p className="text-slate-300 mb-4">Tu trabajo NO es aprenderte los 91 robots. Tu trabajo es:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Saber dónde buscar",
                    "Saber qué revisar",
                    "Saber cómo diagnosticar",
                    "Saber cómo escalar",
                    "Saber cómo leer los manuales",
                  ].map((skill) => (
                    <div key={skill} className="flex items-center gap-2 rounded-lg bg-yellow-900/30 p-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-400" />
                      <span className="text-slate-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg bg-blue-900/20 border border-blue-700/30 p-4">
                <p className="text-sm text-blue-200">
                  <strong>Es como un médico:</strong> NO memoriza todos los pacientes, aprende a hacer diagnósticos.
                </p>
              </div>
            </Card>

            <Card className="border-blue-700/30 bg-gradient-to-br from-blue-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Badge className="mb-4 bg-blue-600 hover:bg-blue-700 text-white">
                1️⃣ ENTENDER EL ROBOT (Fase previa antes de dar soporte)
              </Badge>
              <p className="text-slate-300 mb-4">
                Para analizar cualquier robot (SPG-R001, SPG-R037, R022, etc.), se deben revisar estas fuentes:
              </p>

              <div className="space-y-4">
                <div className="rounded-lg bg-slate-800/50 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                      A
                    </div>
                    <h4 className="font-semibold text-blue-300">MANUAL DE EJECUCIÓN (principal)</h4>
                  </div>
                  <div className="text-sm text-slate-400 mb-2">Revisar:</div>
                  <div className="grid md:grid-cols-2 gap-2">
                    {[
                      "Flujo técnico completo",
                      "Excepciones manejadas",
                      "Input / Output",
                      "Aplicaciones usadas",
                      "Horarios de ejecución",
                      "Condiciones de detención",
                      "Parámetros de inicio",
                      "Archivos Excel utilizados",
                      "Carpetas del robot",
                      "Emails enviados / recibidos",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
                        <Check className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      letter: "B",
                      title: "PDD – Process Definition Document",
                      items: [
                        "Reglas de negocio",
                        "Decisiones humanas",
                        "Excepciones funcionales",
                        "Entradas del proceso",
                        "Salidas del proceso",
                        "Actores humanos involucrados",
                      ],
                      color: "purple",
                    },
                    {
                      letter: "C",
                      title: "MAPA DE PROCESOS",
                      items: [
                        "Puntos críticos",
                        "Decisiones",
                        "Flujo completo del proceso",
                        "Actividades donde falla con mayor frecuencia",
                      ],
                      color: "green",
                    },
                    {
                      letter: "D",
                      title: "Excel Maestro de Soporte",
                      items: [
                        "Qué hace el robot",
                        "Qué valida",
                        "De qué sistemas externos depende",
                        "Qué condiciones lo detienen",
                      ],
                      color: "orange",
                    },
                  ].map((section) => (
                    <div
                      key={section.letter}
                      className={`rounded-lg bg-slate-800/50 p-4 border border-${section.color}-700/30`}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-lg bg-${section.color}-600 text-white font-bold`}
                        >
                          {section.letter}
                        </div>
                        <h5 className={`font-semibold text-${section.color}-300 text-sm`}>{section.title}</h5>
                      </div>
                      <ul className="space-y-1">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-slate-400">
                            <Check className={`h-3 w-3 text-${section.color}-400 mt-0.5 flex-shrink-0`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="border-orange-700/30 bg-gradient-to-br from-orange-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Badge className="mb-4 bg-orange-600 hover:bg-orange-700 text-white">
                2️⃣ ANÁLISIS OPERATIVO (Cómo funciona en producción)
              </Badge>

              <div className="space-y-4">
                {[
                  {
                    title: "A. Horarios de ejecución",
                    questions: [
                      "¿A qué hora corre?",
                      "¿Es crítico si falla en ese horario?",
                      "¿Afecta cierre financiero?",
                      "¿Tiene múltiples ejecuciones al día? (Ej: 13:00 y 17:00)",
                    ],
                  },
                  {
                    title: "B. Virtual Machine (VM) donde corre",
                    questions: [
                      "Nombre de la VM",
                      "¿Tiene recursos suficientes? (RAM / CPU)",
                      "¿La sesión estaba activa?",
                      "¿No está bloqueada?",
                    ],
                  },
                  {
                    title: "C. Aplicaciones que usa",
                    questions: [
                      "Banco de Chile (timeouts)",
                      "Portal Empresas (lento)",
                      "SharePoint (bloqueos de Excel)",
                      "Outlook (MFA / credenciales)",
                    ],
                  },
                  {
                    title: "D. Dependencias externas",
                    questions: [
                      "Cartola del Banco de Chile",
                      "Correo con nóminas",
                      "Portal Empresas",
                      "Archivo Excel de entrada",
                    ],
                  },
                ].map((section, idx) => (
                  <div key={idx} className="rounded-lg bg-slate-800/50 p-4">
                    <h4 className="font-semibold text-orange-300 mb-3">{section.title}</h4>
                    <ul className="space-y-1">
                      {section.questions.map((q) => (
                        <li key={q} className="flex items-start gap-2 text-sm text-slate-300">
                          <AlertCircle className="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0" />
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="border-red-700/30 bg-gradient-to-br from-red-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Badge className="mb-4 bg-red-600 hover:bg-red-700 text-white">
                3️⃣ ANÁLISIS DE INCIDENTES (Diagnóstico profesional)
              </Badge>
              <p className="text-slate-300 mb-4">
                Este es el checklist oficial para investigar fallas en robots Servipag / Previred.
              </p>

              <div className="space-y-4">
                <div className="rounded-lg bg-slate-800/50 p-5">
                  <h4 className="font-semibold text-red-300 mb-3">A. Revisar la VM</h4>
                  <ul className="space-y-2">
                    {[
                      "¿La VM está encendida?",
                      "¿La sesión estaba abierta?",
                      "¿UiPath Assistant estaba activo?",
                      "¿Pantalla congelada?",
                      "¿Excel abierto manualmente?",
                      "¿Alguien usó la VM mientras el robot corría?",
                    ].map((check) => (
                      <li key={check} className="flex items-start gap-2 text-sm text-slate-300">
                        <Check className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                        <span>{check}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg bg-slate-800/50 p-5">
                  <h4 className="font-semibold text-red-300 mb-3">
                    B. Revisar las aplicaciones del flujo (en orden obligatorio)
                  </h4>
                  <div className="space-y-3">
                    {[
                      {
                        num: "1",
                        title: "Archivos (Config.xlsx, Inputs)",
                        checks: [
                          "¿Existen?",
                          "¿Están corruptos?",
                          "¿Cambiaron la ruta?",
                          "¿Cambió el nombre del archivo?",
                        ],
                      },
                      {
                        num: "2",
                        title: "Portales Web",
                        checks: [
                          "¿Backend operativo?",
                          "¿Portal Empresas lento?",
                          "¿Banco de Chile con timeout?",
                          "¿Quedó en 'Loading'?",
                        ],
                      },
                      {
                        num: "3",
                        title: "Outlook",
                        checks: [
                          "¿Sesión caducada?",
                          "¿Solicitó MFA? (robot NO puede resolverlo)",
                          "¿Correo llegó a otra carpeta?",
                          "¿Reglas movieron el correo?",
                        ],
                      },
                      {
                        num: "4",
                        title: "SharePoint",
                        checks: [
                          "¿Excel bloqueado por usuario?",
                          "¿Archivo usado por otro proceso?",
                          "¿Versión dañada?",
                        ],
                      },
                      {
                        num: "5",
                        title: "Vault (credenciales)",
                        checks: [
                          "¿Credenciales caducadas?",
                          "¿Secret ID o Role ID cambiaron?",
                          "¿No hay permisos para leer el secreto?",
                          "¿Vault externo está caído?",
                        ],
                      },
                    ].map((step) => (
                      <div key={step.num} className="rounded-lg bg-red-900/20 border border-red-700/30 p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white text-xs font-bold">
                            {step.num}
                          </div>
                          <span className="font-semibold text-red-300 text-sm">{step.title}</span>
                        </div>
                        <ul className="ml-8 space-y-1">
                          {step.checks.map((check) => (
                            <li key={check} className="text-xs text-slate-400">
                              • {check}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg bg-yellow-900/20 border border-yellow-700/30 p-4">
                  <h5 className="font-semibold text-yellow-300 mb-2">F. Fallas típicas de Servipag (muy realistas)</h5>
                  <div className="grid md:grid-cols-2 gap-2">
                    {[
                      "Banco Chile expira token",
                      "Portal Empresas lento",
                      "SharePoint bloquea Excel",
                      "Outlook pide MFA",
                      "Vault expiró secreto",
                      "Cartola Banco no actualizada",
                    ].map((failure) => (
                      <div key={failure} className="flex items-center gap-2 text-sm text-yellow-200">
                        <XCircle className="h-4 w-4 text-yellow-400" />
                        <span>{failure}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-green-700/30 bg-gradient-to-br from-green-950/50 to-slate-900/80 p-6 backdrop-blur">
              <Badge className="mb-4 bg-green-600 hover:bg-green-700 text-white">
                PLANTILLA OFICIAL DE INCIDENTE RPA
              </Badge>

              <div className="space-y-3">
                {[
                  {
                    section: "1. Identificación",
                    fields: [
                      "Robot: SPG-R001",
                      "Tipo: Activación de Nóminas",
                      "Fecha/Hora del incidente",
                      "Ejecución: 13:00 / 17:00",
                      "VM: VM-RPA-XX",
                    ],
                  },
                  {
                    section: "2. ¿Qué estaba haciendo el robot?",
                    fields: ["Ejemplo: Buscando la transferencia asociada a la nómina Provida 51010."],
                  },
                  {
                    section: "3. ¿Dónde falló?",
                    fields: ["Ejemplo: En la validación del monto en el Banco de Chile."],
                  },
                  { section: "4. Evidencia", fields: ["Screenshot", "Log", "Mensaje de error"] },
                  { section: "5. Causa técnica", fields: ["Ejemplo: Timeout del Banco de Chile."] },
                  { section: "6. Causa funcional", fields: ["Ejemplo: Monto no coincide con el declarado."] },
                  { section: "7. Acción tomada", fields: ["Ejemplo: Reinicio del robot y reejecución del caso."] },
                  {
                    section: "8. Recomendación",
                    fields: ["Validar credenciales", "Revisar plantillas", "Ajustar tiempo de espera"],
                  },
                  { section: "9. Severidad", fields: ["Alta / Media / Baja"] },
                  {
                    section: "10. Escalamiento",
                    fields: ["Servipag (portales / contraseñas)", "QA/Dev (bugs del robot)", "Infra (VM apagada)"],
                  },
                ].map((template, idx) => (
                  <div key={idx} className="rounded-lg bg-green-900/20 border border-green-700/30 p-3">
                    <div className="font-semibold text-green-300 text-sm mb-2">{template.section}</div>
                    <ul className="ml-4 space-y-1">
                      {template.fields.map((field) => (
                        <li key={field} className="text-xs text-slate-300">
                          • {field}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
