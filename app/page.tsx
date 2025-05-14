import Link from "next/link"
import Image from "next/image"
import {
  CheckCircle,
  Star,
  Notebook,
  CheckSquare,
  Bell,
  Share2,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"

import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Notebook className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">NoteCompanion</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#caracteristicas" className="text-sm font-medium hover:text-primary">
              Características
            </Link>
            <Link href="#testimonios" className="text-sm font-medium hover:text-primary">
              Testimonios
            </Link>
            <Link href="#precios" className="text-sm font-medium hover:text-primary">
              Precios
            </Link>
            <Link href="#contacto" className="text-sm font-medium hover:text-primary">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Iniciar Sesión
            </Button>
            <Button size="sm">Registrarse</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Todas tus ideas, en un solo lugar
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    NoteCompanion es una aplicación multiplataforma te ayuda a capturar tus ideas, 
                    organizar tareas o cualquier otra cosa que quisieras anotar de una manera simple y elegante.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="px-8">
                    Registrarse gratis
                  </Button>
                  <Button size="lg" variant="outline" className="px-8">
                    Ver Demo Pro
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-sm overflow-hidden rounded-xl border bg-background shadow-xl">
                  <Image
                    src="/notecompanion.png"
                    width={400}
                    height={600}
                    alt="NoteCompanion App Screenshot"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="caracteristicas" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Características Principales</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Descubre las funciones principales por las que la gente decide utilizar NoteCompanion.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Notebook className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">Notas Intuitivas</h3>
                    <p className="text-muted-foreground">
                      Crea, edita y organiza notas con una interfaz limpia y fácil de usar. Añade imágenes, listas, 
                      cambia formatos de texto y más.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <CheckSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">Listas de Tareas</h3>
                    <p className="text-muted-foreground">
                      Crea listas To-do para tus pendientes, establece prioridades y fechas limite.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Bell className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">Recordatorios</h3>
                    <p className="text-muted-foreground">
                      Implementa recordatorios y notificaciones, nunca te pierdas de una tarea imporante!
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Share2 className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold">Colaboración</h3>
                    <p className="text-muted-foreground">
                      Comparte notas y listas con amigos, familia o compañeros de trabajo para colaborar en tiempo real.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Lo Que Dicen Nuestros Usuarios
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Miles de personas ya han transformado su productividad con NoteCompanion.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground">{testimonial.text}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <Image
                      src={testimonial.image}
                      width={40}
                      height={40}
                      alt={testimonial.name}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="precios" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Planes Simples y Transparentes
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Elige el plan que mejor se adapte a tus necesidades.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`flex flex-col rounded-lg border ${plan.featured ? "border-primary shadow-lg" : ""} bg-background p-6`}
                >
                  <div className="space-y-2">
                    {plan.featured && (
                      <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                        Más Popular
                      </div>
                    )}
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="ml-1 text-muted-foreground">/mes</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-8" variant={plan.featured ? "default" : "outline"}>
                    {plan.buttonText}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Comienza a Organizar Tus Ideas Hoy!
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Únete a miles de usuarios satisfechos y aumenta tu productividad con NoteCompanion.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="px-8">
                  Comenzar Gratis
                </Button>
                <Button size="lg" variant="secondary" className="px-8">
                  Contactar Ventas
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contacto" className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Notebook className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">NoteCompanion</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Todas tus ideas, en un solo lugar.
                <br />
                <br />
              </p>
              <p className="text-sm text-muted-foreground">
                Queja y sugerencias a: 
                notecompanionbox@gmail.com
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Producto</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Características
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Guías
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Compañía</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Equipo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Carreras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Licencias
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} NoteCompanion. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Datos de ejemplo para testimonios
const testimonials = [
  {
    name: "Vicente Salsa",
    role: "Jefe de Departamento",
    text: "NoteCompanion ha transformado mi flujo de trabajo. Ahora puedo organizar todos mis pendientes en un solo lugar, los recordatorios aseguran de que nunca se me pase una tarea importante!",
    rating: 5,
    image: "vinny.png"
  },
  {
    name: "Joel Johann",
    role: "Emprendedor",
    text: "Como emprendedor, tengo muchas tareas que puedo hacer en cada momento. NoteCompanion me ayuda a mantenerme organizado y no olvidar nada importante.",
    rating: 5,
    image: "joel.png"
  },
  {
    name: "German Alberto",
    role: "Estudiante",
    text: "Uso NoteCompanion para organizar mis tareas y trabajos pendientes a entregar. La función de recordatorios es increiblemente util para no pasarme las fechas de entrega.",
    rating: 4,
    image: "jerman.png"
  },
]

// Datos de ejemplo para planes de precios
const pricingPlans = [
  {
    name: "Básico",
    description: "Para uso personal",
    price: "Gratis",
    features: ["Hasta 50 notas", "Hasta 10 listas de tareas", "Sincronización en 1 dispositivo", "Soporte por email"],
    buttonText: "Comenzar Gratis",
    featured: false,
  },
  {
    name: "Pro",
    description: "Para profesionales",
    price: "$4.99",
    features: [
      "Notas ilimitadas",
      "Listas de tareas ilimitadas",
      "Sincronización en cualquier dispositivo",
      "Colaboración con hasta 5 personas",
      "Prioridad de soporte",
    ],
    buttonText: "Comenzar Prueba de 30 días",
    featured: true,
  },
  {
    name: "Empresas",
    description: "Para equipos y empresas",
    price: "€19.99",
    features: [
      "Todo lo de Pro",
      "Colaboración ilimitada",
      "Controles administrativos",
      "Integración con otras apps",
      "Soporte 24/7",
    ],
    buttonText: "Contactar Ventas",
    featured: false,
  },
]
