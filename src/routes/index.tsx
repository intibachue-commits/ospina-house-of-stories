import { createFileRoute } from "@tanstack/react-router";
import patio from "@/assets/patio.jpg.asset.json";
import salonVerde from "@/assets/salon-verde.jpg.asset.json";
import salaMemoria from "@/assets/sala-memoria.jpg.asset.json";
import casaArbol from "@/assets/casa-arbol.jpg.asset.json";
import fachada from "@/assets/fachada.jpg.asset.json";
import comedor from "@/assets/comedor.jpg.asset.json";
import escultura from "@/assets/escultura.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ospina Casa Museo · Un lugar diferente en Sincelejo" },
      {
        name: "description",
        content:
          "Portafolio de Ospina Casa Museo: arquitectura, arte, memoria y naturaleza en el barrio Palermo de Sincelejo, con laboratorios de creación y residencia artística.",
      },
      { property: "og:title", content: "Ospina Casa Museo · Sincelejo" },
      {
        property: "og:description",
        content:
          "Una casa donde los objetos cuentan historias. Arte, memoria, naturaleza, laboratorios de creación y residencia artística en Sincelejo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const ambientes = [
  { img: salaMemoria.url, n: "01", t: "Sala de la memoria", d: "Máquinas de escribir, teléfonos de disco, sillones tallados y una silla de barbero: la memoria doméstica de varias épocas reunida en un solo salón." },
  { img: salonVerde.url, n: "02", t: "Salón de los espejos", d: "Imágenes sacras en relieve, espejos labrados y muebles restaurados sobre muros verde lima y pisos de baldosa tradicional." },
  { img: comedor.url, n: "03", t: "Comedor y estar", d: "Un ambiente de encuentro donde conviven vajillas, cuadros y mobiliario de distintas procedencias, listo para la conversación." },
  { img: casaArbol.url, n: "04", t: "Entre los árboles", d: "Estructuras que crecen entre ramas, botellas de vidrio reutilizadas y ventanas de colores: la casa dialoga con la naturaleza." },
];

const pilares = [
  { t: "Arquitectura doméstica", c: "bg-primary text-primary-foreground" },
  { t: "Creación artística", c: "bg-accent text-accent-foreground" },
  { t: "Memoria material", c: "bg-secondary text-secondary-foreground" },
  { t: "Experimentación y reutilización", c: "bg-leaf text-primary-foreground" },
  { t: "Naturaleza", c: "bg-lime text-foreground" },
];

type Programa = {
  n: string;
  t: string;
  d: string;
  tags: string[];
  span: string;
  img?: string;
  alt?: string;
};

const programas: Programa[] = [
  {
    n: "L",
    t: "Laboratorio de arte y creación",
    d: "Un ciclo de trabajo abierto donde el ensamblaje, la reutilización de materiales y la experimentación se vuelven método: probar, equivocarse y volver a empezar con lo que la casa ya tiene.",
    tags: ["Ensamblaje", "Materiales reutilizados", "Experimentación"],
    img: escultura.url,
    alt: "Escultura ensamblada con hojas y materiales reutilizados",
    span: "md:col-span-7 md:row-span-2",
  },
  {
    n: "H",
    t: "Hibridaciones",
    d: "Cruces entre disciplinas: arquitectura, música, escrita, imagen y memoria doméstica trabajando sobre un mismo conjunto de objetos.",
    tags: ["Cruce de disciplinas", "Co-creación"],
    span: "md:col-span-5",
  },
  {
    n: "R",
    t: "Residencia artística",
    d: "Días de estancia para artistas que quieran crear desde el lugar: habitar la casa, recorrer sus ambientes y dejar una obra que se sume a su historia.",
    tags: ["Estancia", "Obra in situ"],
    img: casaArbol.url,
    alt: "Estructura construida entre los árboles del patio",
    span: "md:col-span-5",
  },
];

function Index() {
  return (
    <main className="font-sans bg-background text-foreground">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 bg-background/85 backdrop-blur border-b border-border">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="font-display text-xl font-black tracking-tight">
            Ospina <span className="text-accent italic font-normal">Casa Museo</span>
          </a>
          <div className="hidden gap-8 text-sm md:flex">
            <a href="#casa" className="hover:text-primary">La casa</a>
            <a href="#ambientes" className="hover:text-primary">Ambientes</a>
            <a href="#laboratorios" className="hover:text-primary">Laboratorios</a>
            <a href="#galeria" className="hover:text-primary">Galería</a>
            <a href="#visita" className="hover:text-primary">Visítanos</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative grid min-h-screen pt-20 md:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col justify-center px-6 py-16 md:px-16">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-primary">Sincelejo · Sucre · Colombia</p>
          <h1 className="font-display text-6xl font-black leading-[0.9] md:text-8xl">
            Una casa donde los <span className="italic font-normal text-accent">objetos</span> cuentan historias.
          </h1>
          <p className="mt-8 max-w-lg text-lg text-muted-foreground">
            Ospina Casa Museo es una iniciativa cultural independiente en el barrio Palermo. Arte, memoria y
            naturaleza se mezclan en cada rincón de un hogar convertido en experiencia.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#visita" className="rounded-sm bg-primary px-7 py-4 font-semibold text-primary-foreground transition hover:bg-accent">
              Planea tu visita
            </a>
            <a href="#ambientes" className="rounded-sm border-2 border-foreground px-7 py-4 font-semibold transition hover:bg-foreground hover:text-background">
              Recorre la casa
            </a>
          </div>
        </div>
        <div className="relative min-h-[60vh]">
          <img src={patio.url} alt="Patio colorido de Ospina Casa Museo con plantas y esculturas" className="absolute inset-0 h-full w-full object-cover" />
          <div className="tile-border absolute bottom-0 left-0 h-3 w-full" />
        </div>
      </section>

      {/* Marquee pilares */}
      <section className="flex flex-wrap">
        {pilares.map((p) => (
          <div key={p.t} className={`${p.c} flex-1 basis-1/2 px-6 py-6 text-center font-display text-lg md:basis-0`}>
            {p.t}
          </div>
        ))}
      </section>

      {/* La casa */}
      <section id="casa" className="mx-auto grid max-w-7xl gap-12 px-6 py-28 md:grid-cols-2 md:items-center">
        <div className="relative">
          <img src={fachada.url} alt="Fachada amarilla con buganvilla" className="w-full rounded-sm object-cover shadow-2xl" />
          <img src={escultura.url} alt="Escultura ensamblada con hojas" className="absolute -bottom-12 -right-4 hidden w-48 rotate-3 border-8 border-card shadow-xl md:block" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-accent">La casa</p>
          <h2 className="mt-4 font-display text-5xl font-black leading-tight">Un lugar diferente en Sincelejo</h2>
          <div className="mt-6 space-y-4 text-lg text-muted-foreground">
            <p>
              Liderada por el arquitecto <strong className="text-foreground">Miguel Ospina</strong>, la casa articula
              ambientes interiores y un patio lleno de vegetación, con mobiliario de distintas épocas, objetos
              decorativos, esculturas, imágenes y ensamblajes elaborados con materiales reutilizados.
            </p>
            <p>
              Aquí no hay vitrinas frías: los objetos viven en los muebles, los muros y las repisas. Es una
              museografía ambiental e inmersiva, donde caminar la casa es leer su historia.
            </p>
          </div>
        </div>
      </section>

      {/* Ambientes */}
      <section id="ambientes" className="bg-foreground py-28 text-background">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary">Recorrido</p>
          <h2 className="mt-4 font-display text-5xl font-black md:text-6xl">Ambientes de la casa</h2>
          <div className="mt-16 space-y-24">
            {ambientes.map((a, i) => (
              <article key={a.n} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <img src={a.img} alt={a.t} loading="lazy" className="aspect-[4/3] w-full rounded-sm object-cover" />
                <div>
                  <span className="font-display text-7xl font-black text-secondary">{a.n}</span>
                  <h3 className="mt-2 font-display text-4xl">{a.t}</h3>
                  <p className="mt-4 max-w-md text-lg opacity-80">{a.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratorios */}
      <section id="laboratorios" className="bg-primary text-primary-foreground">
        <div className="tile-border h-3 w-full" />
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="grid gap-10 md:grid-cols-[1fr_1.05fr] md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70">Programas</p>
              <h2 className="mt-4 font-display text-5xl font-black leading-[0.95] md:text-6xl">
                La casa también se <span className="italic font-normal text-secondary">hace</span>
              </h2>
            </div>
            <p className="max-w-xl text-lg text-primary-foreground/80 md:pb-3">
              Además de recorrerse, Ospina Casa Museo se habita. Laboratorios de arte y creación,
              hibridaciones entre disciplinas y estancias de residencia artística convierten los
              ambientes en un taller vivo: las obras nuevas nacen de los objetos que ya existen.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-12">
            {programas.map((p) => (
              <article
                key={p.t}
                className={`flex flex-col border border-primary-foreground/25 bg-primary-foreground/10 p-8 md:p-10 ${p.span}`}
              >
                {p.img && (
                  <img
                    src={p.img}
                    alt={p.alt}
                    loading="lazy"
                    className="mb-8 aspect-[16/9] w-full object-cover"
                  />
                )}
                <span className="inline-flex h-12 w-12 items-center justify-center bg-secondary font-display text-2xl font-black text-secondary-foreground">
                  {p.n}
                </span>
                <h3 className="mt-6 font-display text-3xl font-black leading-tight">{p.t}</h3>
                <p className="mt-4 text-lg text-primary-foreground/80">{p.d}</p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-8">
                  {p.tags.map((t) => (
                    <li key={t} className="border border-primary-foreground/30 px-3 py-1 text-sm">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-primary-foreground/25 pt-8">
            <p className="max-w-xl text-lg text-primary-foreground/80">
              ¿Tienes un proyecto que quiera nacer en la casa? Escríbenos y lo conversamos.
            </p>
            <a
              href="#visita"
              className="rounded-sm bg-secondary px-7 py-4 font-semibold text-secondary-foreground transition hover:bg-primary-foreground hover:text-primary"
            >
              Conversemos
            </a>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="mx-auto max-w-7xl px-6 py-28">
        <h2 className="font-display text-5xl font-black">Galería</h2>
        <p className="mt-3 text-muted-foreground">Color, luz y detalle en cada rincón.</p>
        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4">
          <img src={patio.url} alt="Patio" loading="lazy" className="row-span-2 h-full w-full object-cover" />
          <img src={salaMemoria.url} alt="Sala" loading="lazy" className="col-span-2 h-full w-full object-cover" />
          <img src={escultura.url} alt="Escultura" loading="lazy" className="row-span-2 h-full w-full object-cover" />
          <img src={casaArbol.url} alt="Casa entre árboles" loading="lazy" className="h-full w-full object-cover" />
          <img src={comedor.url} alt="Comedor" loading="lazy" className="h-full w-full object-cover" />
          <img src={fachada.url} alt="Fachada" loading="lazy" className="col-span-2 h-full w-full object-cover" />
          <img src={salonVerde.url} alt="Salón verde" loading="lazy" className="col-span-2 h-full w-full object-cover" />
        </div>
      </section>

      {/* Cita */}
      <section className="bg-secondary px-6 py-24 text-center">
        <p className="mx-auto max-w-4xl font-display text-3xl italic leading-snug md:text-5xl">
          “Arquitectura, arte, memoria y naturaleza conviviendo en una misma casa.”
        </p>
      </section>

      {/* Visita */}
      <section id="visita" className="mx-auto grid max-w-7xl gap-12 px-6 py-28 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Visítanos</p>
          <h2 className="mt-4 font-display text-5xl font-black">Ven a conocer la casa</h2>
          <dl className="mt-10 space-y-6 text-lg">
            <div>
              <dt className="text-sm uppercase tracking-widest text-muted-foreground">Dirección</dt>
              <dd className="font-display text-2xl">Cra. 27 # 23A-58, barrio Palermo</dd>
              <dd>Sincelejo, Sucre</dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-widest text-muted-foreground">Responsable</dt>
              <dd className="font-display text-2xl">Miguel Ospina, arquitecto</dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-widest text-muted-foreground">Tipo de espacio</dt>
              <dd>Museo privado · Red Departamental de Museos de Sucre</dd>
            </div>
          </dl>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Cra.+27+%2323A-58+Palermo+Sincelejo+Sucre"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block rounded-sm bg-accent px-7 py-4 font-semibold text-accent-foreground transition hover:bg-primary"
          >
            Ver en el mapa
          </a>
        </div>
        <div className="overflow-hidden rounded-sm border border-border">
          <iframe
            title="Mapa Ospina Casa Museo"
            src="https://www.google.com/maps?q=Cra.+27+%2323A-58+Palermo+Sincelejo+Sucre&output=embed"
            className="h-full min-h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="tile-border h-3 w-full" />
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row">
          <span className="font-display text-lg text-foreground">Ospina Casa Museo</span>
          <span>Sincelejo, Sucre · Colombia</span>
        </div>
      </footer>
    </main>
  );
}
