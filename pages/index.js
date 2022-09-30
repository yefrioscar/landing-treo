import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../public/assets/logo.png";
import Carrousel from "../components/Carrousel";

import GoogleMaps from "../components/Map";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import ModalImage, { Lightbox } from "react-modal-image";

const SLIDE_COUNT = 3;
const slides = Array.from(Array(SLIDE_COUNT).keys());

import sedapal from "../public/assets/clients/sedapal.png";
import aplicaPeru from "../public/assets/clients/aplica-peru.png";
import marinaGuerra from "../public/assets/clients/marina-de-gerra.png";
import metaControl from "../public/assets/clients/meta-control.jpg";
import paltarumi from "../public/assets/clients/paltarumi.jpg";
import rioBravo from "../public/assets/clients/rio-bravo.jpeg";
import Projects from "../components/Projects";

export default function Home() {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
      origin: "http://localhost:3000/",
    },
  };

  const listClients = [
    {
      image: sedapal,
      title: "Sedapal",
    },
    {
      image: aplicaPeru,
      title: "Aplica Peru",
    },
    {
      image: marinaGuerra,
      title: "Marina de Guerra Del Perú",
    },
    {
      image: metaControl,
      title: "Metacontrol",
    },
    {
      image: paltarumi,
      title: "Paltarumi",
    },
    {
      image: rioBravo,
      title: "Rio Bravo",
    },
  ];

  return (
    <div>
      <Head>
        <title>Inversiones Treo SAC</title>
      </Head>
      <div className="bg-slate-100 mb-4">
        <div className="wrapper-container  flex justify-center items-center space-x-2 h-24">
          <Image
            src={logo}
            alt="Logo Inversiones Treo SAC"
            width={60}
            height={60}
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            placeholder="blur" // Optional blur-up while loading
          />
          <h1 className="font-bold text-2xl text-slate-900">
            Inversiones Treo SAC
          </h1>
        </div>
      </div>

      <div className="mb-4">
        <div className="wrapper-container">
          <Carrousel slides={slides} />
        </div>
      </div>

      <div className="mb-4">
        <div className="wrapper-container">
          <div className=" rounded-md">
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
              <div className="w-full p-6 rounded-md bg-red-500 h-max">
                <input
                  type="checkbox"
                  id="chck2"
                  className="absolute opacity-0 -z-10"
                />
                <label
                  className="font-medium text-4xl mb-1 text-white accor-title flex justify-between"
                  htmlFor="chck2"
                >
                  01
                </label>
                <h2 className="font-medium text-xl mb-4 text-red-800">
                  Quienes somos?
                </h2>
                <div className="text-white accord-content">
                  INVERSIONES TREO S.A.C. comienza sus operaciones a nivel
                  nacional en el año 2006, ofreciendo a sus clientes una mejora
                  en las operaciones, mediante la implementación de su moderna
                  flota de volquetes, Semi Trailer, equipos, maquinaria pesada y
                  personal técnico calificado.
                </div>
              </div>
              <div className="w-full p-6 rounded-md  bg-red-500 h-max">
                <input
                  type="checkbox"
                  className="absolute opacity-0 -z-10"
                  id="chck3"
                />
                <label
                  className="font-medium text-4xl mb-1 text-white accor-title flex justify-between"
                  htmlFor="chck3"
                >
                  02
                </label>
                <h2 className="font-medium text-xl mb-4 text-red-800">
                  Que servicios brindamos?
                </h2>
                <ul className=" list-inside list-disc text-white accord-content">
                  <li>
                    Obras Civiles: (Platea de cimentación para tanques 30 x 30
                    en Planta de Lixiviación - Construcción de Oficinas -
                    Dormitorios - Campamentos - Laboratorios - Construcción de
                    Sistema de Eductores - Plataforma en Desorción)
                  </li>
                  <li>Movimiento de Tierras.</li>
                  <li>Desarrollo y explotación de Minas y Canteras.</li>
                  <li>
                    Diseño y construcción de:
                    <ul className="list-inside list-disc text-white pl-4">
                      <li>Locales Comerciales</li>
                      <li>Locales Industriales</li>
                    </ul>
                  </li>

                  <li>
                    Encauzamiento de ríos; habilitación de laderas y enrocados.
                  </li>
                  <li>
                    Construcción de vías de acceso a planta y vías interiores
                    con pavimento rígido y flexible de circulación vehicular
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mb-4">
        <div className="wrapper-container">
          <div className="bg-gray-900 rounded-md p-6">
            <span className="font-medium text-4xl mb-1 text-white">03</span>
            <h3 className="text-gray-400 font-medium text-xl mb-4">
              Proyectos
            </h3>
            <Gallery />
          </div>
        </div>
      </div> */}

      <div className="mb-4">
        <div className="bg-neutral-900">
          <div className="max-w-screen-xl m-auto p-6 py-20">
            <span className="font-medium text-4xl mb-1 text-white">03</span>
            <h3 className="text-gray-400 font-medium text-xl mb-16">
              Proyectos
            </h3>

            <Projects />
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="wrapper-container">
          <div className="bg-amber-500 rounded-md p-6">
            <span className="font-medium text-4xl mb-1 text-white">04</span>
            <h3 className="text-amber-700 font-medium text-xl mb-4">
              Equipos y Certificaciones
            </h3>
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
              <div>
                <ModalImage
                  small="assets/maquinaria.png"
                  large="assets/maquinaria.png"
                />
              </div>
              <div>
                <ModalImage small="assets/SCE.png" large="assets/SCE.png" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="wrapper-container">
          <div className="bg-amber-500 rounded-md p-6">
            <span className="font-medium text-4xl mb-1 text-white">05</span>
            <h3 className="text-amber-700 font-medium text-xl mb-4">
              Resolución del Minosterio de Energía u Minas por Contratista Minero - Inversiones Treo SAC
            </h3>
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
              <div>
                <ModalImage
                  small="assets/certificado/R.D. N° 902-2022-MINEM-DGM - INF. N° 924-2022-MINEM-DGM-DGES-1.png"
                  large="assets/certificado/R.D. N° 902-2022-MINEM-DGM - INF. N° 924-2022-MINEM-DGM-DGES-1.png"
                />
              </div>
              <div>
                <ModalImage
                  small="assets/certificado/R.D. N° 902-2022-MINEM-DGM - INF. N° 924-2022-MINEM-DGM-DGES-2.png"
                  large="assets/certificado/R.D. N° 902-2022-MINEM-DGM - INF. N° 924-2022-MINEM-DGM-DGES-2.png"
                />
              </div>
              <div>
                <ModalImage
                  small="assets/certificado/R.D. N° 902-2022-MINEM-DGM - INF. N° 924-2022-MINEM-DGM-DGES-3.png"
                  large="assets/certificado/R.D. N° 902-2022-MINEM-DGM - INF. N° 924-2022-MINEM-DGM-DGES-3.png"
                />
              </div>
              <div>
                <ModalImage
                  small="assets/certificado/R.D. N° 902-2022-MINEM-DGM - INF. N° 924-2022-MINEM-DGM-DGES-4.png"
                  large="assets/certificado/R.D. N° 902-2022-MINEM-DGM - INF. N° 924-2022-MINEM-DGM-DGES-4.png"
                />
              </div>
              <div>
                <ModalImage
                  small="assets/certificado/R.D. N° 902-2022-MINEM-DGM - INF. N° 924-2022-MINEM-DGM-DGES-5.png"
                  large="assets/certificado/R.D. N° 902-2022-MINEM-DGM - INF. N° 924-2022-MINEM-DGM-DGES-5.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="bg-white">
          <div className="wrapper-container p-6 pt-4 pb-14">
            <span className="font-medium text-4xl mb-1 text-slate-500">06</span>
            <h3 className="text-slate-700 font-medium text-xl mb-4">
              Nuestros clientes
            </h3>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {listClients.map((item, key) => (
                <div
                  className=" flex justify-center flex-col items-center"
                  key={key}
                >
                  <div className="rounded-md w-24">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="responsive"
                      placeholder="blur" // Optional blur-up while loading
                    />
                  </div>
                  <span className="font-medium mt-4 text-center">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="wrapper-container">
          <div className="aspect-w-16 aspect-h-9">
            {isSSR ? null : (
              <ReactPlayer
                height={"100%"}
                width="100%"
                url={"https://www.youtube.com/watch?v=XUXm_3WOss4"}
                config={{
                  youtube: {
                    embedOptions: {
                      height: "100%",
                      width: "100%",
                    },
                    playerVars: {
                      autoplay: 1,
                      height: "100%",
                      width: "100%",
                    },
                  },
                }}
              />
            )}
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="wrapper-container">
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 p-6 py-10">
            <div>
              <h3 className="text-gray-800 font-semibold text-2xl mb-4">
                Donde puedes ubicarnos
              </h3>
              <span className="font-medium text-lg mb-1 text-gray-700">
                Direccion:
              </span>
              <p className="font-medium text-sm mb-4 text-gray-500">
                Oficinas: Av. Caminos del Inca 244, Of 1302, Santiago de Surco
                Almacen: Palmeras De Villa, Chorrillos 15058
              </p>
              <span className="font-medium text-lg mb-1 text-gray-700">
                Telefonos:
              </span>
              <p className="text-sm text-gray-500">998 348 887</p>
              <p className="text-sm text-gray-500">958 658 149</p>
              <p className="text-sm text-gray-500">941 369 079</p>
            </div>
            <div>
              <GoogleMaps />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
