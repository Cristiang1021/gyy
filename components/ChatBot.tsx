"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import {
  X,
  Send,
  MapPin,
  Phone,
  ThumbsUp,
  HelpCircle,
  MapIcon,
  Calendar,
  BookOpen,
  GraduationCap,
} from "lucide-react"
import Image from "next/image"

type Message = {
  from: "bot" | "user"
  text: string
  type?: "options" | "location" | "default" | "greeting" | "closing" | "article" | "thesis"
  options?: Array<{
    text: string
    action: string
    icon?: React.ReactNode
  }>
}

// Modificar la definición del tipo ConversationStage para incluir las nuevas etapas
type ConversationStage =
  | "greeting"
  | "case"
  | "closing"
  | "article_interest"
  | "article_topic"
  | "thesis_status"
  | "thesis_topic"

const Chatbot = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [conversationStage, setConversationStage] = useState<ConversationStage>("greeting")
  const [userCase, setUserCase] = useState("")
  const [articleTopic, setArticleTopic] = useState("")
  const [thesisTopic, setThesisTopic] = useState("")
  const [thesisStatus, setThesisStatus] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [typing, setTyping] = useState(false)

  // Inicializar el chatbot con un mensaje de bienvenida y opciones
  useEffect(() => {
    if (open && messages.length === 0) {
      setTyping(true)
      setTimeout(() => {
        setMessages([
          {
            from: "bot",
            text: "¡Bienvenido a G&G Abogados! ¿Cómo podemos ayudarte hoy?",
            type: "options",
            options: [
              {
                text: "Consultar un caso legal",
                action: "case",
                icon: <HelpCircle className="w-4 h-4 mr-2" />,
              },
              {
                text: "Ver ubicación",
                action: "location",
                icon: <MapIcon className="w-4 h-4 mr-2" />,
              },
              {
                text: "Contactar abogado",
                action: "contact",
                icon: <Phone className="w-4 h-4 mr-2" />,
              },
              {
                text: "Publicar artículo científico",
                action: "article",
                icon: <BookOpen className="w-4 h-4 mr-2" />,
              },
              {
                text: "Ayuda con trabajo de titulación",
                action: "thesis",
                icon: <GraduationCap className="w-4 h-4 mr-2" />,
              },
            ],
          },
        ])
        setTyping(false)
      }, 500)
    }
  }, [open, messages.length])

  // Auto-scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Manejar acciones de botones
  const handleButtonAction = (action: string) => {
    switch (action) {
      case "case":
        setTyping(true)
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              from: "bot",
              text: "Por favor, cuéntanos brevemente sobre tu caso legal y cómo podemos ayudarte:",
              type: "default",
            },
          ])
          setTyping(false)
          setConversationStage("case")
        }, 500)
        break

      case "location":
        setTyping(true)
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              from: "bot",
              text: "Nuestra oficina está ubicada en 10 de Agosto y Magdalena Dávalos, Riobamba. Puedes visitarnos en horario de 9:00 a 18:00 de lunes a viernes.",
              type: "location",
            },
          ])
          setTyping(false)
        }, 500)
        break

      case "contact":
        sendToWhatsApp("Me gustaría hablar con un abogado de G&G", "legal")
        setTyping(true)
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              from: "bot",
              text: "Te estamos redirigiendo a WhatsApp para que puedas contactar directamente con uno de nuestros abogados.",
              type: "closing",
            },
          ])
          setTyping(false)
          setConversationStage("closing")
        }, 500)
        break

      case "whatsapp_case":
        sendToWhatsApp(userCase, "legal")
        setTyping(true)
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              from: "bot",
              text: "Te estamos redirigiendo a WhatsApp para que puedas contactar directamente con uno de nuestros abogados.",
              type: "closing",
            },
          ])
          setTyping(false)
          setConversationStage("closing")
        }, 500)
        break

      // Modificar el case "article" en handleButtonAction para el nuevo flujo
      case "article":
        setTyping(true)
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              from: "bot",
              text: "¿Ya tienes un artículo científico que quieras publicar o estás interesado en escribir uno?",
              type: "options",
              options: [
                {
                  text: "Ya tengo un artículo",
                  action: "have_article",
                  icon: <BookOpen className="w-4 h-4 mr-2" />,
                },
                {
                  text: "Quiero escribir uno",
                  action: "write_article",
                  icon: <BookOpen className="w-4 h-4 mr-2" />,
                },
              ],
            },
          ])
          setTyping(false)
          setConversationStage("article_interest")
        }, 500)
        break

      // Añadir nuevos casos para las acciones de artículos
      case "have_article":
      case "write_article":
        setTyping(true)
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              from: "bot",
              text:
                action === "have_article"
                  ? "¿Cuál es el título o tema principal de tu artículo científico?"
                  : "¿Sobre qué tema te gustaría escribir tu artículo científico?",
              type: "article",
            },
          ])
          setTyping(false)
          setConversationStage("article_topic")
        }, 500)
        break

      case "whatsapp_article":
        sendToWhatsApp(articleTopic, "article")
        setTyping(true)
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              from: "bot",
              text: "Te estamos redirigiendo a WhatsApp para que puedas contactar directamente con uno de nuestros investigadores especializados.",
              type: "closing",
            },
          ])
          setTyping(false)
          setConversationStage("closing")
        }, 500)
        break

      case "thesis":
        setTyping(true)
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              from: "bot",
              text: "¿Eres estudiante? ¿En qué etapa de tu trabajo de titulación te encuentras?",
              type: "thesis",
            },
          ])
          setTyping(false)
          setConversationStage("thesis_status")
        }, 500)
        break

      case "whatsapp_thesis":
        sendToWhatsApp(`${thesisStatus}\n\nTema: ${thesisTopic}`, "thesis")
        setTyping(true)
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              from: "bot",
              text: "Te estamos redirigiendo a WhatsApp para que puedas contactar directamente con uno de nuestros asesores académicos.",
              type: "closing",
            },
          ])
          setTyping(false)
          setConversationStage("closing")
        }, 500)
        break

      case "restart":
        setMessages([])
        setConversationStage("greeting")
        setUserCase("")
        setArticleTopic("")
        setThesisTopic("")
        setThesisStatus("")
        break

      case "info":
        setTyping(true)
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              from: "bot",
              text: "Gracias por tu interés. Si en el futuro necesitas asesoría personalizada, no dudes en contactarnos. Estaremos encantados de ayudarte.",
              type: "closing",
              options: [
                {
                  text: "Iniciar nueva consulta",
                  action: "restart",
                  icon: <Calendar className="w-4 h-4 mr-2" />,
                },
              ],
            },
          ])
          setTyping(false)
          setConversationStage("closing")
        }, 1000)
        break

      default:
        break
    }
  }

  const handleSend = () => {
    if (!input.trim()) return

    // Añadir mensaje del usuario
    setMessages((prev) => [...prev, { from: "user", text: input }])

    // Manejar según la etapa de la conversación
    switch (conversationStage) {
      case "case":
        setUserCase(input) // Guardar el caso del usuario
        setTyping(true)
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              from: "bot",
              text: "Gracias por compartir tu caso. Somos los especialistas adecuados para ayudarte. ¿Quieres contactarte directamente con uno de nuestros abogados?",
              type: "options",
              options: [
                {
                  text: "Sí, contactar ahora",
                  action: "whatsapp_case",
                  icon: <ThumbsUp className="w-4 h-4 mr-2" />,
                },
                {
                  text: "No, solo información",
                  action: "info",
                  icon: <HelpCircle className="w-4 h-4 mr-2" />,
                },
              ],
            },
          ])
          setTyping(false)
        }, 1000)
        break

      // Modificar el case "article_topic" en el switch de handleSend
      case "article_topic":
        setArticleTopic(input) // Guardar el tema del artículo
        setTyping(true)
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              from: "bot",
              text: `"${input}" es un tema muy interesante para un artículo científico. Nuestros investigadores tienen experiencia en publicaciones académicas y pueden ayudarte con el proceso. ¿Te gustaría contactar con uno de nuestros especialistas?`,
              type: "options",
              options: [
                {
                  text: "Sí, contactar investigador",
                  action: "whatsapp_article",
                  icon: <ThumbsUp className="w-4 h-4 mr-2" />,
                },
                {
                  text: "No, solo información",
                  action: "info",
                  icon: <HelpCircle className="w-4 h-4 mr-2" />,
                },
              ],
            },
          ])
          setTyping(false)
        }, 1000)
        break

      case "thesis_status":
        setThesisStatus(input) // Guardar el estado de la tesis
        setTyping(true)
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              from: "bot",
              text: "Gracias por la información. ¿Podrías contarnos cuál es el tema de tu trabajo de titulación?",
              type: "thesis",
            },
          ])
          setTyping(false)
          setConversationStage("thesis_topic")
        }, 1000)
        break

      case "thesis_topic":
        setThesisTopic(input) // Guardar el tema de la tesis
        setTyping(true)
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              from: "bot",
              text: `Tu tema "${input}" es muy interesante. Contamos con asesores especializados que pueden ayudarte a desarrollar tu trabajo de titulación con éxito. ¿Deseas contactar con uno de nuestros asesores académicos?`,
              type: "options",
              options: [
                {
                  text: "Sí, contactar asesor",
                  action: "whatsapp_thesis",
                  icon: <ThumbsUp className="w-4 h-4 mr-2" />,
                },
                {
                  text: "No, solo información",
                  action: "info",
                  icon: <HelpCircle className="w-4 h-4 mr-2" />,
                },
              ],
            },
          ])
          setTyping(false)
        }, 1000)
        break

      default:
        // Respuesta por defecto
        setTyping(true)
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              from: "bot",
              text: "¿En qué más puedo ayudarte?",
              type: "options",
              options: [
                {
                  text: "Consultar un caso legal",
                  action: "case",
                  icon: <HelpCircle className="w-4 h-4 mr-2" />,
                },
                {
                  text: "Ver ubicación",
                  action: "location",
                  icon: <MapIcon className="w-4 h-4 mr-2" />,
                },
                {
                  text: "Contactar abogado",
                  action: "contact",
                  icon: <Phone className="w-4 h-4 mr-2" />,
                },
                {
                  text: "Publicar artículo científico",
                  action: "article",
                  icon: <BookOpen className="w-4 h-4 mr-2" />,
                },
                {
                  text: "Ayuda con trabajo de titulación",
                  action: "thesis",
                  icon: <GraduationCap className="w-4 h-4 mr-2" />,
                },
              ],
            },
          ])
          setTyping(false)
        }, 1000)
        break
    }

    // Limpiar input
    setInput("")
  }

  const sendToWhatsApp = (message: string, type: "legal" | "article" | "thesis") => {
    const phone = "593967095478" // Número de WhatsApp sin el + inicial
    let text = ""

    switch (type) {
      case "legal":
        text = encodeURIComponent(
          `Hola, soy un cliente de G&G Abogados y necesito asesoría legal para el siguiente caso:\n\n${message}`,
        )
        break
      case "article":
        text = encodeURIComponent(
          `Hola, estoy interesado en publicar un artículo científico con G&G Abogados.\n\nTema del artículo: ${message}\n\nMe gustaría recibir más información sobre el proceso de publicación.`,
        )
        break
      case "thesis":
        text = encodeURIComponent(
          `Hola, necesito ayuda con mi trabajo de titulación.\n\n${message}\n\nMe gustaría recibir asesoría académica para desarrollar este tema.`,
        )
        break
    }

    // Abrir WhatsApp con el mensaje pre-llenado
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank")
  }

  return (
    <>
      {/* Botón para abrir el chat */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-[#3498db] hover:bg-[#2980b9] text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50"
        aria-label="Abrir chat"
      >
        <Image
          src="/chatbot.png" // Asegúrate de que la ruta sea correcta
          alt="G&G Logo"
          width={40}
          height={40}
          className="rounded-full object-contain" // Puedes probar sin estas clases
        />
      </button>

      {/* Ventana de chat */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 md:w-96 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden">
          {/* Encabezado */}
          <div className="flex justify-between items-center px-4 py-3 bg-gradient-to-r from-[#3498db] to-[#2980b9] text-white">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white mr-2 flex items-center justify-center">
                <Image
                  src="/chatbot.svg"
                  alt="G&G Logo"
                  width={34}
                  height={34}
                  className="rounded-full"
                />
              </div>
              <h4 className="text-lg font-semibold">Asistente G&G</h4>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => handleButtonAction("restart")}
                className="hover:bg-blue-600 p-1 rounded-full transition-colors mr-2"
                title="Reiniciar conversación"
              >
                <Calendar className="w-5 h-5" />
              </button>
              <button
                onClick={() => setOpen(false)}
                className="hover:bg-blue-600 p-1 rounded-full transition-colors"
                title="Cerrar chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Área de mensajes */}
          <div className="p-4 space-y-3 h-80 overflow-y-auto bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.from === "bot" ? "justify-start" : "justify-end"}`}>
                <div
                  className={`p-3 rounded-lg max-w-[85%] shadow-sm ${
                    msg.from === "bot"
                      ? "bg-white text-gray-800 rounded-tl-none"
                      : "bg-[#3498db] text-white rounded-tr-none"
                  }`}
                >
                  {msg.text}

                  {/* Mostrar botones adicionales según el tipo de mensaje */}
                  {msg.from === "bot" && msg.type === "location" && (
                    <div className="mt-2 flex flex-col space-y-2">
                      <a
                        href="https://maps.app.goo.gl/vTo9ijVYJXon1Y1t8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-[#3498db] hover:underline"
                      >
                        <MapPin className="w-4 h-4 mr-1" /> Ver en mapa
                      </a>
                      <a href="tel:0967095478" className="flex items-center text-[#3498db] hover:underline">
                        <Phone className="w-4 h-4 mr-1" /> Llamar: 0967095478
                      </a>
                    </div>
                  )}

                  {/* Botones de opciones */}
                  {msg.from === "bot" && msg.options && (
                    <div className="mt-3 flex flex-col space-y-2">
                      {msg.options.map((option, optIdx) => (
                        <button
                          key={optIdx}
                          onClick={() => handleButtonAction(option.action)}
                          className="bg-[#3498db] hover:bg-[#2980b9] text-white py-2 px-4 rounded-md text-sm flex items-center justify-center transition-colors"
                        >
                          {option.icon}
                          {option.text}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Indicador de escritura */}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Área de entrada */}
          <div className="flex items-center gap-2 p-3 border-t bg-white">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent"
              placeholder={
                conversationStage === "case"
                  ? "Describe tu caso legal aquí..."
                  : conversationStage === "article_topic"
                    ? "Escribe el tema de tu artículo..."
                    : conversationStage === "thesis_status"
                      ? "Describe tu situación académica..."
                      : conversationStage === "thesis_topic"
                        ? "Escribe el tema de tu trabajo de titulación..."
                        : "Escribe tu mensaje..."
              }
              disabled={conversationStage === "closing"}
            />
            <button
              onClick={handleSend}
              className={`${
                conversationStage === "closing" ? "bg-gray-400 cursor-not-allowed" : "bg-[#3498db] hover:bg-[#2980b9]"
              } text-white p-2 rounded-full transition-colors`}
              aria-label="Enviar mensaje"
              disabled={conversationStage === "closing"}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot
