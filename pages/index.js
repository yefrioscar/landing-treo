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

// import project1 from "../public/assets/project-1.png";
// import project2 from "../public/assets/project-2.png";
// import project3 from "../public/assets/project-3.png";
// import project4 from "../public/assets/project-4.png";

import project1 from "../public/assets/project1/1.jpeg";
import project2 from "../public/assets/project1/2.jpeg";
import project3 from "../public/assets/project1/3.jpeg";
import project4 from "../public/assets/project1/4.jpeg";
import project5 from "../public/assets/project1/5.jpeg";
import project6 from "../public/assets/project1/6.jpeg";

import project21 from "../public/assets/project2/1.jpeg";
import project22 from "../public/assets/project2/2.jpeg";
import project23 from "../public/assets/project2/3.jpeg";
import project24 from "../public/assets/project2/4.jpeg";
import project25 from "../public/assets/project2/5.jpeg";
import project26 from "../public/assets/project2/6.jpeg";

import project31 from "../public/assets/project3/1.jpeg";
import project32 from "../public/assets/project3/2.jpeg";
import project33 from "../public/assets/project3/3.jpeg";
import project34 from "../public/assets/project3/4.jpeg";
import project35 from "../public/assets/project3/5.jpeg";
import project36 from "../public/assets/project3/6.jpeg";

import project41 from "../public/assets/project4/1.jpeg";
import project42 from "../public/assets/project4/2.jpeg";
import project43 from "../public/assets/project4/3.jpeg";
import project44 from "../public/assets/project4/4.jpeg";
import project45 from "../public/assets/project4/5.jpeg";
import project46 from "../public/assets/project4/6.jpeg";

import project51 from "../public/assets/project5/1.jpeg";
import project52 from "../public/assets/project5/2.jpeg";
import project53 from "../public/assets/project5/3.jpeg";
import project54 from "../public/assets/project5/4.jpeg";
import project55 from "../public/assets/project5/5.jpeg";
import project56 from "../public/assets/project5/6.jpeg";

import sedapal from "../public/assets/clients/sedapal.png";
import aplicaPeru from "../public/assets/clients/aplica-peru.png";
import marinaGuerra from "../public/assets/clients/marina-de-gerra.png";
import metaControl from "../public/assets/clients/meta-control.jpg";
import paltarumi from "../public/assets/clients/paltarumi.jpg";
import rioBravo from "../public/assets/clients/rio-bravo.jpeg";

export default function Home() {
  const [isSSR, setIsSSR] = useState(true);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);

  const closeLightbox = () => {
    setOpen(false);
  };

  const openLightbox = (image) => {
    setOpen(true);
    setImage(image);
  };

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

  const project1Images = [
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
  ];

  const project2Images = [
    project21,
    project22,
    project23,
    project24,
    project25,
    project26,
  ];

  const project3Images = [
    project31,
    project32,
    project33,
    project34,
    project35,
    project36,
  ];

  const project4Images = [
    project41,
    project42,
    project43,
    project44,
    project45,
    project46,
  ];

  const project5Images = [
    project51,
    project52,
    project53,
    project54,
    project55,
    project56,
  ];

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
      title: "Marina de guerra",
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
            <Gallery />
          </div>
        </div>
      </div> */}

      {open && (
        <Lightbox medium={image} large={image} alt="" onClose={closeLightbox} />
      )}

      <div className="mb-4">
        <div className="bg-neutral-900">
          <div className="wrapper-container p-6 py-20">
            <span className="font-medium text-4xl mb-1 text-white">03</span>
            <h3 className="text-gray-400 font-medium text-xl mb-16">
              Proyectos
            </h3>
            <div className="flex mb-24 flex-col md:flex-row">
              <div className="md:w-1/2 md:translate-y-14">
                <span className="font-serif font-bold text-4xl text-red-500">
                  I
                </span>
                <div>
                  <div className="flex items-center space-x-2 mb-4"></div>
                  <p className="text-base text-white w-11/12 mb-5">
                    Relavera de Lixiviación - Relavera de Polimetálicos -
                    Recrecimiento de Relavera de Lixiviación
                  </p>
                </div>
              </div>

              <div className="hidden md:flex mb-4 flex-col md:flex-row space-x-4 md:w-1/2 justify-center">
                <div className="space-y-4 flex md:flex-col flex-row">
                  <div className="flex justify-center md:justify-end">
                    <Image
                      src={project1}
                      alt="Proyecto1"
                      width={140}
                      height={90}
                      className="rounded-md"
                      placeholder="blur"
                      onClick={() => openLightbox(project1.src)}
                      objectFit="cover" // Optional blur-up while loading
                    />
                  </div>
                  <div className="md:w-52 h-32 flex justify-center">
                    <Image
                      src={project2}
                      alt="Proyecto1"
                      width={208}
                      height={128}
                      className="rounded-md"
                      placeholder="blur"
                      onClick={() => openLightbox(project2.src)}
                      objectFit="cover" // Optional blur-up while loading
                    />
                  </div>
                  <div className=" flex justify-center md:justify-end">
                    <Image
                      src={project3}
                      alt="Proyecto1"
                      width={176}
                      height={96}
                      className="rounded-md"
                      placeholder="blur"
                      onClick={() => openLightbox(project3.src)}
                      objectFit="cover" // Optional blur-up while loading
                    />
                  </div>
                </div>
                <div className="space-y-4 translate-y-10 ">
                  <div className="flex justify-start items-start">
                    <Image
                      src={project4}
                      alt="Proyecto1"
                      width={140}
                      height={90}
                      className="rounded-md"
                      placeholder="blur"
                      onClick={() => openLightbox(project4.src)}
                      objectFit="cover" // Optional blur-up while loading
                    />
                  </div>
                  <div className="w-52 h-32">
                    <Image
                      src={project5}
                      alt="Proyecto1"
                      width={208}
                      height={128}
                      className="rounded-md"
                      placeholder="blur"
                      objectFit="cover" // Optional blur-up while loading
                      onClick={() => openLightbox(project5.src)}
                    />
                  </div>
                  <div className="flex justify-start items-start">
                    <Image
                      src={project6}
                      alt="Proyecto1"
                      width={140}
                      height={90}
                      className="rounded-md"
                      placeholder="blur"
                      onClick={() => openLightbox(project6.src)}
                      objectFit="cover" // Optional blur-up while loading
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-4 grid-cols-2 md:hidden">
                {project1Images.map((item, key) => (
                  <Image
                    key={key}
                    src={item}
                    alt="Proyecto1"
                    height={400}
                    layout="responsive"
                    className="rounded-md"
                    placeholder="blur"
                    onClick={() => openLightbox(item.src)}
                    objectFit="cover" // Optional blur-up while loading
                  />
                ))}
              </div>
            </div>

            <div className="flex mb-24 flex-col md:flex-row">
              <div className="hidden mb-4 md:flex space-x-4  w-1/2 justify-center">
                <div className="space-y-4 ">
                  <div className="flex justify-end items-end">
                    <Image
                      src={project21}
                      alt="Proyecto1"
                      width={140}
                      height={90}
                      className="rounded-md"
                      onClick={() => openLightbox(project21.src)}
                      objectFit="cover" // Optional blur-up while loading
                    />
                  </div>
                  <div className="w-52 h-32">
                    <Image
                      src={project22}
                      alt="Proyecto1"
                      width={208}
                      height={128}
                      className="rounded-md"
                      layout="responsive"
                      onClick={() => openLightbox(project22.src)}
                      objectFit="cover" // Optional blur-up while loading
                    />
                  </div>
                  <div className=" flex justify-end items-end">
                    <Image
                      src={project23}
                      alt="Proyecto1"
                      width={176}
                      height={96}
                      className="rounded-md"
                      onClick={() => openLightbox(project23.src)}
                      objectFit="cover" // Optional blur-up while loading
                    />
                  </div>
                </div>
                <div className="space-y-4 translate-y-14 ">
                  <div className="flex justify-start items-start">
                    <Image
                      src={project24}
                      alt="Proyecto1"
                      width={140}
                      height={90}
                      className="rounded-md"
                      onClick={() => openLightbox(project24.src)}
                      placeholder="blur" // Optional blur-up while loading
                      objectFit="cover"
                    />
                  </div>
                  <div className="w-52 h-32">
                    <Image
                      src={project25}
                      alt="Proyecto1"
                      width={208}
                      height={128}
                      className="rounded-md"
                      layout="responsive"
                      onClick={() => openLightbox(project25.src)}
                      objectFit="cover" // Optional blur-up while loading
                    />
                  </div>
                  <div className="flex justify-start items-start">
                    <Image
                      src={project26}
                      alt="Proyecto1"
                      width={140}
                      height={90}
                      className="rounded-md"
                      onClick={() => openLightbox(project26.src)}
                      placeholder="blur" // Optional blur-up while loading
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:translate-y-14 flex flex-col justify-center items-end">
                <span className="font-serif font-bold text-4xl text-red-500">
                  II
                </span>
                <div className="flex flex-col justify-center items-end">
                  <div className="flex items-center space-x-2 mb-4"></div>
                  <p className="text-base text-white w-11/12 mb-5 text-right">
                    Obras Civiles (Platea de cimentación para tanques 30 x 30 en
                    Planta de Lixiviación - Construcción de Oficinas -
                    Dormitorios - Campamentos - Laboratorios - Construcción de
                    Sistema de Eductores - Plataforma en Desorción)
                  </p>
                </div>
              </div>

              <div className="grid gap-4 grid-cols-2 md:hidden">
                {project2Images.map((item, key) => (
                  <Image
                    src={item}
                    key={key}
                    alt="Proyecto1"
                    height={400}
                    layout="responsive"
                    className="rounded-md"
                    placeholder="blur"
                    onClick={() => openLightbox(item.src)}
                    objectFit="cover" // Optional blur-up while loading
                  />
                ))}
              </div>
            </div>

            <div className="flex mb-24 flex-col md:flex-row">
              <div className="md:w-1/2 md:translate-y-14">
                <span className="font-serif font-bold text-4xl text-red-500">
                  III
                </span>
                <div>
                  <div className="flex items-center space-x-2 mb-4"></div>
                  <p className="text-base text-white w-11/12 mb-5">
                    Construcción de vías de acceso a planta y vías interiores
                    con pavimento rígido y flexible de circulación vehicular
                  </p>
                </div>
              </div>

              <div className="hidden mb-4 md:flex space-x-4  w-1/2 justify-center">
                <div className="space-y-4 ">
                  <div className="flex justify-end items-end">
                    <Image
                      src={project31}
                      alt="Proyecto1"
                      width={140}
                      height={90}
                      className="rounded-md"
                      placeholder="blur"
                      onClick={() => openLightbox(project31.src)}
                      objectFit="cover" // Optional blur-up while loading
                    />
                  </div>
                  <div className="w-52 h-32">
                    <Image
                      src={project32}
                      alt="Proyecto1"
                      width={208}
                      height={128}
                      className="rounded-md"
                      placeholder="blur"
                      onClick={() => openLightbox(project32.src)}
                      objectFit="cover" // Optional blur-up while loading
                    />
                  </div>
                  <div className=" flex justify-end items-end ">
                    <Image
                      src={project33}
                      alt="Proyecto1"
                      width={176}
                      height={96}
                      className="rounded-md"
                      placeholder="blur"
                      onClick={() => openLightbox(project33.src)}
                      objectFit="cover" // Optional blur-up while loading
                    />
                  </div>
                </div>
                <div className="space-y-4 translate-y-14 ">
                  <div className="flex justify-start items-start">
                    <Image
                      src={project34}
                      alt="Proyecto1"
                      width={140}
                      height={90}
                      className="rounded-md"
                      placeholder="blur"
                      onClick={() => openLightbox(project34.src)}
                      objectFit="cover" // Optional blur-up while loading
                    />
                  </div>
                  <div className="w-52 h-32">
                    <Image
                      src={project35}
                      alt="Proyecto1"
                      width={208}
                      height={128}
                      className="rounded-md"
                      placeholder="blur"
                      onClick={() => openLightbox(project35.src)}
                      objectFit="cover" // Optional blur-up while loading
                    />
                  </div>
                  <div className="flex justify-start items-start">
                    <Image
                      src={project36}
                      alt="Proyecto1"
                      width={140}
                      height={90}
                      className="rounded-md"
                      placeholder="blur"
                      onClick={() => openLightbox(project36.src)}
                      objectFit="cover" // Optional blur-up while loading
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-4 grid-cols-2 md:hidden">
                {project3Images.map((item, key) => (
                  <Image
                    src={item}
                    key={key}
                    alt="Proyecto1"
                    height={400}
                    layout="responsive"
                    className="rounded-md"
                    placeholder="blur"
                    onClick={() => openLightbox(item.src)}
                    objectFit="cover" // Optional blur-up while loading
                  />
                ))}
              </div>
            </div>

            <div className="flex mb-24 flex-col md:flex-row">
              <div className="hidden  mb-4 md:flex space-x-4  w-1/2 justify-center">
                <div className="space-y-4 ">
                  <div className="flex justify-end items-end">
                    <Image
                      src={project41}
                      alt="Proyecto1"
                      width={140}
                      height={90}
                      className="rounded-md"
                      onClick={() => openLightbox(project41.src)}
                      objectFit="cover" // Optional blur-up while loading
                    />
                  </div>
                  <div className="w-52 h-32">
                    <Image
                      src={project42}
                      alt="Proyecto1"
                      width={208}
                      height={128}
                      className="rounded-md"
                      layout="responsive"
                      onClick={() => openLightbox(project42.src)}
                      objectFit="cover" // Optional blur-up while loading
                    />
                  </div>
                  <div className=" flex justify-end items-end">
                    <Image
                      src={project43}
                      alt="Proyecto1"
                      width={176}
                      height={96}
                      className="rounded-md"
                      onClick={() => openLightbox(project43.src)}
                      objectFit="cover" // Optional blur-up while loading
                    />
                  </div>
                </div>
                <div className="space-y-4 translate-y-14 ">
                  <div className="flex justify-start items-start">
                    <Image
                      src={project44}
                      alt="Proyecto1"
                      width={140}
                      height={90}
                      className="rounded-md"
                      onClick={() => openLightbox(project44.src)}
                      placeholder="blur" // Optional blur-up while loading
                      objectFit="cover"
                    />
                  </div>
                  <div className="w-52 h-32">
                    <Image
                      src={project45}
                      alt="Proyecto1"
                      width={208}
                      height={128}
                      className="rounded-md"
                      layout="responsive"
                      onClick={() => openLightbox(project45.src)}

                      objectFit="cover" // Optional blur-up while loading
                    />
                  </div>
                  <div className="flex justify-start items-start">
                    <Image
                      src={project46}
                      alt="Proyecto1"
                      width={140}
                      height={90}
                      className="rounded-md"
                      placeholder="blur" // Optional blur-up while loading
                      objectFit="cover"
                      onClick={() => openLightbox(project46.src)}
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:translate-y-14 flex flex-col justify-center items-end">
                <span className="font-serif font-bold text-4xl text-red-500">
                  IV
                </span>
                <div className="flex flex-col justify-center items-end">
                  <div className="flex items-center space-x-2 mb-4"></div>
                  <p className="text-base text-white w-11/12 mb-5 text-right">
                    Alcantarillado de aguas Residuales y Saneamiento
                  </p>
                </div>
              </div>

              <div className="grid gap-4 grid-cols-2 md:hidden">
                {project4Images.map((item, key) => (
                  <Image
                  key={key}
                    src={item}
                    alt="Proyecto1"
                    height={400}
                    layout="responsive"
                    className="rounded-md"
                    placeholder="blur"
                    onClick={() => openLightbox(item.src)}
                    objectFit="cover" // Optional blur-up while loading
                  />
                ))}
              </div>
            </div>

            <div className="flex mb-24 flex-col md:flex-row">
              <div className="md:w-1/2 md:translate-y-14">
                <span className="font-serif font-bold text-4xl text-red-500">
                  V
                </span>
                <div>
                  <div className="flex items-center space-x-2 mb-4"></div>
                  <p className="text-base text-white w-11/12 mb-5">
                    Otros Proyectos (Construcción de Estructura Metálico de
                    Planta de Cal y Planta de Reactivos - Muros y Escaleras -
                    Construcción de Campamentos Mineros)
                  </p>
                </div>
              </div>

              <div className="hidden mb-4 md:flex space-x-4  w-1/2 justify-center">
                <div className="space-y-4 ">
                  <div className="flex justify-end items-end">
                    <Image
                      src={project51}
                      alt="Proyecto1"
                      width={140}
                      height={90}
                      className="rounded-md"
                      placeholder="blur"
                      onClick={() => openLightbox(project51.src)}
                      objectFit="cover" // Optional blur-up while loading
                    />
                  </div>
                  <div className="w-52 h-32">
                    <Image
                      src={project52}
                      alt="Proyecto1"
                      width={208}
                      height={128}
                      className="rounded-md"
                      placeholder="blur"
                      onClick={() => openLightbox(project52.src)}
                      objectFit="cover" // Optional blur-up while loading
                    />
                  </div>
                  <div className=" flex justify-end items-end ">
                    <Image
                      src={project53}
                      alt="Proyecto1"
                      width={176}
                      height={96}
                      className="rounded-md"
                      placeholder="blur"
                      onClick={() => openLightbox(project53.src)}
                      objectFit="cover" // Optional blur-up while loading
                    />
                  </div>
                </div>
                <div className="space-y-4 translate-y-14 ">
                  <div className="flex justify-start items-start">
                    <Image
                      src={project54}
                      alt="Proyecto1"
                      width={140}
                      height={90}
                      className="rounded-md"
                      placeholder="blur"
                      onClick={() => openLightbox(project54.src)}
                      objectFit="cover" // Optional blur-up while loading
                    />
                  </div>
                  <div className="w-52 h-32">
                    <Image
                      src={project55}
                      alt="Proyecto1"
                      width={208}
                      height={128}
                      className="rounded-md"
                      placeholder="blur"
                      onClick={() => openLightbox(project55.src)}
                      objectFit="cover" // Optional blur-up while loading
                    />
                  </div>
                  <div className="flex justify-start items-start">
                    <Image
                      src={project56}
                      alt="Proyecto1"
                      width={140}
                      height={90}
                      className="rounded-md"
                      placeholder="blur"
                      onClick={() => openLightbox(project56.src)}
                      objectFit="cover" // Optional blur-up while loading
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-4 grid-cols-2 md:hidden">
                {project5Images.map((item, key) => (
                  <Image
                  key={key}
                    src={item}
                    alt="Proyecto1"
                    height={400}
                    layout="responsive"
                    className="rounded-md"
                    placeholder="blur"
                    onClick={() => openLightbox(item.src)}
                    objectFit="cover" // Optional blur-up while loading
                  />
                ))}
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
        <div className="bg-white">
          <div className="wrapper-container p-6 pt-4 pb-14">
            <span className="font-medium text-4xl mb-1 text-slate-500">05</span>
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
                  <span className="font-medium mt-4">{item.title}</span>
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
                Av. Caminos del Inca 244 Of 1302, Surco
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
