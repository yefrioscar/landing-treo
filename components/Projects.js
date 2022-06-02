import Image from "next/image";
import { Lightbox } from "react-modal-image";
import { useState } from "react";

import project1 from "../public/assets/project1/1.jpeg";
import project2 from "../public/assets/project1/2.jpeg";
import project3 from "../public/assets/project1/3.jpeg";
import project4 from "../public/assets/project1/4.jpeg";
import project5 from "../public/assets/project1/5.jpeg";
import project6 from "../public/assets/project1/6.jpeg";
import project7 from "../public/assets/project1/7.jpeg";

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
import project37 from "../public/assets/project3/7.jpeg";
import project38 from "../public/assets/project3/8.jpeg";
import project39 from "../public/assets/project3/9.jpeg";
import project310 from "../public/assets/project3/10.jpeg";
import project311 from "../public/assets/project3/11.jpeg";
import project312 from "../public/assets/project3/12.jpeg";

import project41 from "../public/assets/project4/1.jpeg";
import project42 from "../public/assets/project4/2.jpeg";
import project43 from "../public/assets/project4/3.jpeg";
import project44 from "../public/assets/project4/4.jpeg";
import project45 from "../public/assets/project4/5.jpeg";
import project46 from "../public/assets/project4/6.jpeg";
import project47 from "../public/assets/project4/7.jpeg";
import project48 from "../public/assets/project4/8.jpeg";

import project51 from "../public/assets/project5/1.jpeg";
import project52 from "../public/assets/project5/2.jpeg";
import project53 from "../public/assets/project5/3.jpeg";
import project54 from "../public/assets/project5/4.jpeg";
import project55 from "../public/assets/project5/5.jpeg";
import project56 from "../public/assets/project5/6.jpeg";
import project57 from "../public/assets/project5/7.jpeg";
import project58 from "../public/assets/project5/8.jpeg";
import project59 from "../public/assets/project5/9.jpeg";
import project510 from "../public/assets/project5/10.jpeg";
import project511 from "../public/assets/project5/11.jpeg";
import project512 from "../public/assets/project5/12.jpeg";

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);

  const closeLightbox = () => {
    setOpen(false);
  };

  const openLightbox = (image) => {
    setOpen(true);
    setImage(image);
  };

  const project1Images = [
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    project7,
  ];

  const project2Images = [
    project21,
    project22,
    project23,
    project24,
    project25,
  ];

  const project3Images = [
    project31,
    project32,
    project33,
    project34,
    project35,
    project36,
    project37,
    project38,
    project39,
    project310,
    project311,
    project312,
  ];

  const project4Images = [
    project41,
    project42,
    project43,
    project44,
    project45,
    project46,
    project47,
    project48,
  ];

  const project5Images = [
    project51,
    project52,
    project53,
    project54,
    project55,
    project56,
    project57,
    project58,
    project59,
    project510,
    project511,
    project512,
  ];

  return (
    <>
      {open && (
        <Lightbox medium={image} large={image} alt="" onClose={closeLightbox} />
      )}

      <div className="flex mb-24 flex-col md:flex-row">
        <div className="md:w-1/2 ">
          <span className="font-serif font-bold text-4xl text-red-500">I</span>
          <div>
            <div className="flex items-center space-x-2 mb-4"></div>
            <p className="text-base text-white w-11/12 mb-5 text-center">
              Obras Civiles (Platea de cimentación para tanques 30 x 30 en
              Planta de Lixiviación - Construcción de Oficinas - Dormitorios -
              Campamentos - Laboratorios - Construcción de Sistema de Eductores
              - Plataforma en Desorción)
            </p>
          </div>
        </div>

        <div className="hidden md:flex mb-4 flex-col md:flex-row space-x-4 md:w-1/2 justify-center">
          <div className="space-y-4 flex md:flex-col flex-row">
            <div className="flex justify-center md:justify-end">
              <Image
                src={project21}
                alt="Proyecto1"
                width={140}
                height={90}
                className="rounded-md"
                placeholder="blur"
                onClick={() => openLightbox(project21.src)}
                objectFit="cover" // Optional blur-up while loading
              />
            </div>
            <div className="md:w-52 h-32 flex justify-center">
              <Image
                src={project22}
                alt="Proyecto1"
                width={208}
                height={128}
                className="rounded-md"
                placeholder="blur"
                onClick={() => openLightbox(project22.src)}
                objectFit="cover" // Optional blur-up while loading
              />
            </div>
          </div>
          <div className="space-y-4 -translate-y-10 md:hidden lg:block">
            <div className="flex justify-start items-start">
              <Image
                src={project23}
                alt="Proyecto1"
                width={140}
                height={90}
                className="rounded-md"
                placeholder="blur"
                onClick={() => openLightbox(project23.src)}
                objectFit="cover" // Optional blur-up while loading
              />
            </div>
            <div className="flex justify-start items-start">
              <Image
                src={project24}
                alt="Proyecto1"
                width={140}
                height={90}
                className="rounded-md"
                placeholder="blur"
                objectFit="cover" // Optional blur-up while loading
                onClick={() => openLightbox(project24.src)}
              />
            </div>
          </div>
          <div className="space-y-4 translate-y-10 ">
            <div className="flex justify-start items-start">
              <Image
                src={project25}
                alt="Proyecto1"
                width={176}
                height={96}
                className="rounded-md"
                placeholder="blur"
                onClick={() => openLightbox(project25.src)}
                objectFit="cover" // Optional blur-up while loading
              />
            </div>
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
          </div>
          <div className="space-y-4 -translate-y-10 md:hidden lg:block">
            <div className="flex justify-start items-start">
              <Image
                src={project3}
                alt="Proyecto1"
                width={140}
                height={90}
                className="rounded-md"
                placeholder="blur"
                onClick={() => openLightbox(project3.src)}
                objectFit="cover" // Optional blur-up while loading
              />
            </div>
            <div className="flex justify-start items-start">
              <Image
                src={project4}
                alt="Proyecto1"
                width={140}
                height={90}
                className="rounded-md"
                placeholder="blur"
                objectFit="cover" // Optional blur-up while loading
                onClick={() => openLightbox(project4.src)}
              />
            </div>
            <div className="flex justify-start items-start">
              <Image
                src={project5}
                alt="Proyecto1"
                width={140}
                height={90}
                className="rounded-md"
                placeholder="blur"
                onClick={() => openLightbox(project5.src)}
                objectFit="cover" // Optional blur-up while loading
              />
            </div>
          </div>
          <div className="space-y-4 translate-y-10 ">
            <div className="flex justify-start items-start">
              <Image
                src={project6}
                alt="Proyecto1"
                width={176}
                height={96}
                className="rounded-md"
                placeholder="blur"
                onClick={() => openLightbox(project6.src)}
                objectFit="cover" // Optional blur-up while loading
              />
            </div>

            <div className="flex justify-start items-start">
              <Image
                src={project7}
                alt="Proyecto1"
                width={176}
                height={96}
                className="rounded-md"
                placeholder="blur"
                onClick={() => openLightbox(project7.src)}
                objectFit="cover" // Optional blur-up while loading
              />
            </div>
          </div>
        </div>

        <div className="md:w-1/2 -translate-y-10 flex flex-col justify-center items-end">
          <span className="font-serif font-bold text-4xl text-red-500">II</span>
          <div className="flex flex-col justify-center items-end">
            <div className="flex items-center space-x-2 mb-4"></div>
            <p className="text-base text-white w-11/12 mb-5 text-center">
              Mantenimiento y Protección de Taludes de las Relaveras: <br></br>
              Relavera de Lixiviación - Relavera de Polimetálicos -
              Recrecimiento de Relavera de Lixiviación
            </p>
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
        <div className="md:w-1/2 md:translate-y-32">
          <span className="font-serif font-bold text-4xl text-red-500">
            III
          </span>
          <div>
            <div className="flex items-center space-x-2 mb-4"></div>
            <p className="text-base text-white w-11/12 mb-5 text-center">
              Construcción de vías de acceso a planta y vías interiores con
              pavimento rígido y flexible de circulación vehicular
            </p>
          </div>
        </div>

        <div className="hidden md:flex mb-4 flex-col md:flex-row space-x-4 md:w-1/2 justify-center">
          <div className="space-y-4 flex md:flex-col flex-row">
            <div className="flex justify-center md:justify-end">
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
            <div className="md:w-52 h-32 flex justify-center">
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
            <div className=" flex justify-center md:justify-end">
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
            <div className=" flex justify-center md:justify-end">
              <Image
                src={project34}
                alt="Proyecto1"
                width={176}
                height={96}
                className="rounded-md"
                placeholder="blur"
                onClick={() => openLightbox(project34.src)}
                objectFit="cover" // Optional blur-up while loading
              />
            </div>
          </div>
          <div className="space-y-4 -translate-y-10 md:hidden lg:block">
            <div className="flex justify-start items-start">
              <Image
                src={project35}
                alt="Proyecto1"
                width={140}
                height={90}
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
                objectFit="cover" // Optional blur-up while loading
                onClick={() => openLightbox(project36.src)}
              />
            </div>
            <div className="flex justify-start items-start">
              <Image
                src={project37}
                alt="Proyecto1"
                width={140}
                height={90}
                className="rounded-md"
                placeholder="blur"
                onClick={() => openLightbox(project37.src)}
                objectFit="cover" // Optional blur-up while loading
              />
            </div>
            <div className="flex justify-start items-start">
              <Image
                src={project38}
                alt="Proyecto1"
                width={140}
                height={90}
                className="rounded-md"
                placeholder="blur"
                onClick={() => openLightbox(project38.src)}
                objectFit="cover" // Optional blur-up while loading
              />
            </div>
          </div>
          <div className="space-y-4 translate-y-10 ">
            <div className="flex justify-start items-start">
              <Image
                src={project39}
                alt="Proyecto1"
                width={176}
                height={96}
                className="rounded-md"
                placeholder="blur"
                onClick={() => openLightbox(project39.src)}
                objectFit="cover" // Optional blur-up while loading
              />
            </div>

            <div className="flex justify-start items-start">
              <Image
                src={project310}
                alt="Proyecto1"
                width={176}
                height={96}
                className="rounded-md"
                placeholder="blur"
                onClick={() => openLightbox(project310.src)}
                objectFit="cover" // Optional blur-up while loading
              />
            </div>
            <div className="w-52 h-32">
              <Image
                src={project311}
                alt="Proyecto1"
                width={208}
                height={128}
                className="rounded-md"
                placeholder="blur"
                objectFit="cover" // Optional blur-up while loading
                onClick={() => openLightbox(project311.src)}
              />
            </div>
            <div className="flex justify-start items-start">
              <Image
                src={project312}
                alt="Proyecto1"
                width={140}
                height={90}
                className="rounded-md"
                placeholder="blur"
                onClick={() => openLightbox(project312.src)}
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
        <div className="hidden md:flex mb-4 flex-col md:flex-row space-x-4 md:w-1/2 justify-center">
          <div className="space-y-4 flex md:flex-col flex-row">
            <div className="flex justify-center md:justify-end">
              <Image
                src={project41}
                alt="Proyecto1"
                width={140}
                height={90}
                className="rounded-md"
                placeholder="blur"
                onClick={() => openLightbox(project41.src)}
                objectFit="cover" // Optional blur-up while loading
              />
            </div>
            <div className="md:w-52 h-32 flex justify-center">
              <Image
                src={project42}
                alt="Proyecto1"
                width={208}
                height={128}
                className="rounded-md"
                placeholder="blur"
                onClick={() => openLightbox(project42.src)}
                objectFit="cover" // Optional blur-up while loading
              />
            </div>
            <div className=" flex justify-center md:justify-end">
              <Image
                src={project43}
                alt="Proyecto1"
                width={176}
                height={96}
                className="rounded-md"
                placeholder="blur"
                onClick={() => openLightbox(project43.src)}
                objectFit="cover" // Optional blur-up while loading
              />
            </div>
          </div>
          <div className="space-y-4 -translate-y-10 md:hidden lg:block">
            <div className="flex justify-start items-start">
              <Image
                src={project44}
                alt="Proyecto1"
                width={140}
                height={90}
                className="rounded-md"
                placeholder="blur"
                onClick={() => openLightbox(project44.src)}
                objectFit="cover" // Optional blur-up while loading
              />
            </div>
            <div className="flex justify-start items-start">
              <Image
                src={project45}
                alt="Proyecto1"
                width={140}
                height={90}
                className="rounded-md"
                placeholder="blur"
                objectFit="cover" // Optional blur-up while loading
                onClick={() => openLightbox(project45.src)}
              />
            </div>
            <div className="flex justify-start items-start">
              <Image
                src={project46}
                alt="Proyecto1"
                width={140}
                height={90}
                className="rounded-md"
                placeholder="blur"
                onClick={() => openLightbox(project46.src)}
                objectFit="cover" // Optional blur-up while loading
              />
            </div>
          </div>
          <div className="space-y-4 translate-y-10 ">
            <div className="flex justify-start items-start">
              <Image
                src={project47}
                alt="Proyecto1"
                width={176}
                height={96}
                className="rounded-md"
                placeholder="blur"
                onClick={() => openLightbox(project47.src)}
                objectFit="cover" // Optional blur-up while loading
              />
            </div>

            <div className="flex justify-start items-start">
              <Image
                src={project48}
                alt="Proyecto1"
                width={176}
                height={96}
                className="rounded-md"
                placeholder="blur"
                onClick={() => openLightbox(project48.src)}
                objectFit="cover" // Optional blur-up while loading
              />
            </div>
          </div>
        </div>

        <div className="md:w-1/2 -translate-y-4 flex flex-col justify-center items-end">
          <span className="font-serif font-bold text-4xl text-red-500">IV</span>
          <div className="flex flex-col justify-center items-end">
            <div className="flex items-center space-x-2 mb-4"></div>
            <p className="text-base text-white w-11/12 mb-5 text-center">
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
        <div className="md:w-1/2 md:translate-y-36">
          <span className="font-serif font-bold text-4xl text-red-500">V</span>
          <div>
            <div className="flex items-center space-x-2 mb-4"></div>
            <p className="text-base text-white w-11/12 mb-5 text-center">
              Otros Proyectos (Construcción de Estructura Metálico de Planta de
              Cal y Planta de Reactivos - Muros y Escaleras - Construcción de
              Campamentos Mineros)
            </p>
          </div>
        </div>

        <div className="hidden md:flex mb-4 flex-col md:flex-row space-x-4 md:w-1/2 justify-center">
          <div className="space-y-4 flex md:flex-col flex-row">
            <div className="flex justify-center md:justify-end">
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
            <div className="md:w-52 h-32 flex justify-center">
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
            <div className=" flex justify-center md:justify-end">
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
            <div className=" flex justify-center md:justify-end">
              <Image
                src={project54}
                alt="Proyecto1"
                width={176}
                height={96}
                className="rounded-md"
                placeholder="blur"
                onClick={() => openLightbox(project54.src)}
                objectFit="cover" // Optional blur-up while loading
              />
            </div>
          </div>
          <div className="space-y-4 -translate-y-10 md:hidden lg:block">
            <div className="flex justify-start items-start">
              <Image
                src={project55}
                alt="Proyecto1"
                width={140}
                height={90}
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
                objectFit="cover" // Optional blur-up while loading
                onClick={() => openLightbox(project56.src)}
              />
            </div>
            <div className="flex justify-start items-start">
              <Image
                src={project57}
                alt="Proyecto1"
                width={140}
                height={90}
                className="rounded-md"
                placeholder="blur"
                onClick={() => openLightbox(project57.src)}
                objectFit="cover" // Optional blur-up while loading
              />
            </div>
            <div className="flex justify-start items-start">
              <Image
                src={project58}
                alt="Proyecto1"
                width={140}
                height={90}
                className="rounded-md"
                placeholder="blur"
                onClick={() => openLightbox(project58.src)}
                objectFit="cover" // Optional blur-up while loading
              />
            </div>
          </div>
          <div className="space-y-4 translate-y-10 ">
            <div className="flex justify-start items-start">
              <Image
                src={project59}
                alt="Proyecto1"
                width={176}
                height={96}
                className="rounded-md"
                placeholder="blur"
                onClick={() => openLightbox(project59.src)}
                objectFit="cover" // Optional blur-up while loading
              />
            </div>

            <div className="flex justify-start items-start">
              <Image
                src={project510}
                alt="Proyecto1"
                width={176}
                height={96}
                className="rounded-md"
                placeholder="blur"
                onClick={() => openLightbox(project510.src)}
                objectFit="cover" // Optional blur-up while loading
              />
            </div>
            <div className="w-52 h-32">
              <Image
                src={project511}
                alt="Proyecto1"
                width={208}
                height={128}
                className="rounded-md"
                placeholder="blur"
                objectFit="cover" // Optional blur-up while loading
                onClick={() => openLightbox(project511.src)}
              />
            </div>
            <div className="w-52 h-32">
              <Image
                src={project512}
                alt="Proyecto1"
                width={140}
                height={90}
                className="rounded-md"
                placeholder="blur"
                objectFit="cover" // Optional blur-up while loading
                onClick={() => openLightbox(project512.src)}
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
    </>
  );
};

export default Projects;
