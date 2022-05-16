import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../public/assets/logo.png";
import Carrousel from "../components/Carrousel";

import GoogleMaps from "../components/Map";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import Gallery from "../components/Gallery";
import ModalImage, { Lightbox } from "react-modal-image";

const SLIDE_COUNT = 3;
const slides = Array.from(Array(SLIDE_COUNT).keys());

import project1 from "../public/assets/project-1.png";
import project2 from "../public/assets/project-2.png";
import project3 from "../public/assets/project-3.png";
import project4 from "../public/assets/project-4.png";

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

      {/* <div className="mb-4">
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
      </div> */}

      <div className="mb-4">
        <div className="bg-neutral-900">
          <div className="wrapper-container p-6 py-20">
            <span className="font-medium text-4xl mb-1 text-white">03</span>
            <h3 className="text-gray-400 font-medium text-xl mb-16">
              Proyectos
            </h3>
            {/* <Gallery /> */}
            <div className="flex mb-24">
              <div className="w-1/2 translate-y-14">
                <span className="font-serif font-bold text-4xl text-gray-600">
                  I
                </span>
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <h6 className="font-medium text-xl text-red-500">
                      PALTARUMI S.A.C.
                    </h6>
                    <span className="font-medium text-xs text-neutral-400">
                      PRIVADO
                    </span>
                  </div>
                  <p className="text-base text-white w-11/12 mb-5">
                    Obras Civiles (Estructuras para Tanques - Construcción de
                    Oficinas – Dormitorios –Campamentos–Laboratorios)
                  </p>

                  <span className="text-neutral-500">Paramonga - Lima</span>
                </div>
              </div>

              <div className="  mb-4 flex space-x-4  w-1/2 justify-center">
                <div className="space-y-4 ">
                  <div className="flex justify-end items-end">
                    <Image
                      src={project1}
                      alt="Proyecto1"
                      width={140}
                      height={90}
                      className="rounded-md"
                      placeholder="blur" // Optional blur-up while loading
                    />
                  </div>
                  <div className="w-52 h-32">
                    <Image
                      src={project2}
                      alt="Proyecto1"
                      width={208}
                      height={128}
                      className="rounded-md"
                      placeholder="blur" // Optional blur-up while loading
                    />
                  </div>
                </div>
                <div className="space-y-4 translate-y-14 ">
                  <div className="w-52 h-32">
                    <Image
                      src={project3}
                      alt="Proyecto1"
                      width={208}
                      height={128}
                      className="rounded-md"
                      placeholder="blur" // Optional blur-up while loading
                    />
                  </div>
                  <div className="flex justify-start items-start">
                    <Image
                      src={project4}
                      alt="Proyecto1"
                      width={140}
                      height={90}
                      className="rounded-md"
                      placeholder="blur" // Optional blur-up while loading
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex mb-24">
              <div className="  mb-4 flex space-x-4  w-1/2 justify-center">
                <div className="space-y-4 ">
                  <div className="flex justify-end items-end">
                    <Image
                      src={project1}
                      alt="Proyecto1"
                      width={140}
                      height={90}
                      className="rounded-md"
                      placeholder="blur" // Optional blur-up while loading
                    />
                  </div>
                  <div className="w-52 h-32">
                    <Image
                      src={project2}
                      alt="Proyecto1"
                      width={208}
                      height={128}
                      className="rounded-md"
                      placeholder="blur" // Optional blur-up while loading
                    />
                  </div>
                </div>
                <div className="space-y-4 translate-y-14 ">
                  <div className="w-52 h-32">
                    <Image
                      src={project3}
                      alt="Proyecto1"
                      width={208}
                      height={128}
                      className="rounded-md"
                      placeholder="blur" // Optional blur-up while loading
                    />
                  </div>
                  <div className="flex justify-start items-start">
                    <Image
                      src={project4}
                      alt="Proyecto1"
                      width={140}
                      height={90}
                      className="rounded-md"
                      placeholder="blur" // Optional blur-up while loading
                    />
                  </div>
                </div>
              </div>
              <div className="w-1/2 translate-y-14 flex flex-col justify-center items-end">
                <span className="font-serif font-bold text-4xl text-gray-600">
                  II
                </span>
                <div className="flex flex-col justify-center items-end">
                  <div className="flex items-center space-x-2 mb-4">
                  <span className="font-medium text-xs text-neutral-400">
                      PRIVADO
                    </span>
                    <h6 className="font-medium text-xl text-red-500 ">
                      PALTARUMI S.A.C.
                    </h6>

                  </div>
                  <p className="text-base text-white w-11/12 mb-5 text-right">
                    Obras Civiles (Estructuras para Tanques - Construcción de
                    Oficinas – Dormitorios –Campamentos–Laboratorios)
                  </p>

                  <span className="text-neutral-500">Paramonga - Lima</span>
                </div>
              </div>
            </div>

            <div className="flex mb-24">
              <div className="w-1/2 translate-y-14">
                <span className="font-serif font-bold text-4xl text-gray-600">
                  III
                </span>
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <h6 className="font-medium text-xl text-red-500">
                      PALTARUMI S.A.C.
                    </h6>
                    <span className="font-medium text-xs text-neutral-400">
                      PRIVADO
                    </span>
                  </div>
                  <p className="text-base text-white w-11/12 mb-5">
                    Obras Civiles (Estructuras para Tanques - Construcción de
                    Oficinas – Dormitorios –Campamentos–Laboratorios)
                  </p>

                  <span className="text-neutral-500">Paramonga - Lima</span>
                </div>
              </div>

              <div className="  mb-4 flex space-x-4  w-1/2 justify-center">
                <div className="space-y-4 ">
                  <div className="flex justify-end items-end">
                    <Image
                      src={project1}
                      alt="Proyecto1"
                      width={140}
                      height={90}
                      className="rounded-md"
                      placeholder="blur" // Optional blur-up while loading
                    />
                  </div>
                  <div className="w-52 h-32">
                    <Image
                      src={project2}
                      alt="Proyecto1"
                      width={208}
                      height={128}
                      className="rounded-md"
                      placeholder="blur" // Optional blur-up while loading
                    />
                  </div>
                </div>
                <div className="space-y-4 translate-y-14 ">
                  <div className="w-52 h-32">
                    <Image
                      src={project3}
                      alt="Proyecto1"
                      width={208}
                      height={128}
                      className="rounded-md"
                      placeholder="blur" // Optional blur-up while loading
                    />
                  </div>
                  <div className="flex justify-start items-start">
                    <Image
                      src={project4}
                      alt="Proyecto1"
                      width={140}
                      height={90}
                      className="rounded-md"
                      placeholder="blur" // Optional blur-up while loading
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex mb-24">
              <div className="  mb-4 flex space-x-4  w-1/2 justify-center">
                <div className="space-y-4 ">
                  <div className="flex justify-end items-end">
                    <Image
                      src={project1}
                      alt="Proyecto1"
                      width={140}
                      height={90}
                      className="rounded-md"
                      placeholder="blur" // Optional blur-up while loading
                    />
                  </div>
                  <div className="w-52 h-32">
                    <Image
                      src={project2}
                      alt="Proyecto1"
                      width={208}
                      height={128}
                      className="rounded-md"
                      placeholder="blur" // Optional blur-up while loading
                    />
                  </div>
                </div>
                <div className="space-y-4 translate-y-14 ">
                  <div className="w-52 h-32">
                    <Image
                      src={project3}
                      alt="Proyecto1"
                      width={208}
                      height={128}
                      className="rounded-md"
                      placeholder="blur" // Optional blur-up while loading
                    />
                  </div>
                  <div className="flex justify-start items-start">
                    <Image
                      src={project4}
                      alt="Proyecto1"
                      width={140}
                      height={90}
                      className="rounded-md"
                      placeholder="blur" // Optional blur-up while loading
                    />
                  </div>
                </div>
              </div>
              <div className="w-1/2 translate-y-14 flex flex-col justify-center items-end">
                <span className="font-serif font-bold text-4xl text-gray-600">
                  IIII
                </span>
                <div className="flex flex-col justify-center items-end">
                  <div className="flex items-center space-x-2 mb-4">
                  <span className="font-medium text-xs text-neutral-400">
                      PRIVADO
                    </span>
                    <h6 className="font-medium text-xl text-red-500 ">
                      PALTARUMI S.A.C.
                    </h6>

                  </div>
                  <p className="text-base text-white w-11/12 mb-5 text-right">
                    Obras Civiles (Estructuras para Tanques - Construcción de
                    Oficinas – Dormitorios –Campamentos–Laboratorios)
                  </p>

                  <span className="text-neutral-500">Paramonga - Lima</span>
                </div>
              </div>
            </div>
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
