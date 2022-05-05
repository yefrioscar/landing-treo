import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../public/assets/logo.png";
import Carrousel from "../components/Carrousel";

import project1 from "../public/assets/project-1.png";
import project2 from "../public/assets/project-2.png";
import project3 from "../public/assets/project-3.png";
import project4 from "../public/assets/project-4.png";
import project5 from "../public/assets/project-5.png";
import project6 from "../public/assets/project-6.png";
import project7 from "../public/assets/project-7.png";
import project8 from "../public/assets/project-8.png";
import GoogleMaps from "../components/Map";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";

const SLIDE_COUNT = 3;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const galleryProjects = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
];

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
          <div className="bg-red-500 rounded-md p-6">
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
              <div className="w-full">
                <span className="font-medium text-4xl mb-1 text-white">01</span>
                <h2 className="font-medium text-xl mb-4 text-red-800">
                  Quienes somos?
                </h2>
                <p className="text-white w-3/4">
                  INVERSIONES TREO S.A.C. comienza sus operaciones a nivel
                  nacional en el año 2006, ofreciendo a sus clientes una mejora
                  en las operaciones, mediante la implementación de su moderna
                  flota de volquetes, Semi Trailer, equipos, maquinaria pesada y
                  personal técnico calificado.
                </p>
              </div>
              <div className="w-full">
                <span className="font-medium text-4xl mb-1 text-white">02</span>
                <h2 className="font-medium text-xl mb-4 text-red-800">
                  Que servicios brindamos?
                </h2>
                <ul className=" list-inside list-disc text-white">
                  <li>Explotación de Minas y Canteras.</li>
                  <li>
                    Encauzamiento de ríos; habilitación de laderas y enrocados.
                  </li>
                  <li>Movimiento de Tierras.</li>
                  <li>
                    Proyección y Construcción de locales Comerciales, de recreo
                    o uso Mixto.
                  </li>
                  <li>Obras Civiles.</li>
                  <li>Compra y Venta de materiales de construcción.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="wrapper-container">
          <div className="bg-gray-900 rounded-md p-6">
            <span className="font-medium text-4xl mb-1 text-white">03</span>
            <h3 className="text-gray-400 font-medium text-xl mb-4">
              Proyectos
            </h3>
            <div className="columns-2 lg:columns-4 gap-4">
              {galleryProjects.map((image, i) => {
                return (
                  <div className="w-full relative mb-4" key={i}>
                    <Image
                      src={image}
                      alt="Proyecto1"
                      width={257}
                      height={160}
                      className="rounded-md"
                      placeholder="blur" // Optional blur-up while loading
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="wrapper-container">
          <div className="aspect-w-16 aspect-h-9">
            {isSSR ? null : (
              <ReactPlayer height={'100%'} width="100%"
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
                Av. Caminos del Inca 244 Off 1302, Surco
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
