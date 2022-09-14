import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { User, Grid } from "@nextui-org/react";
import { useState } from "react";
import { ImSpinner3 } from "react-icons/im";
import { useRouter } from "next/router";

export default function contact() {
  const [isSubmit, setIsSubmit] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    setIsSubmit(true);

    try {
      const response = await axios(config);
      if (response.status === 200) {
        reset();

        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-transparent shadow-lg shadow-gray-100 border-2 border-gray-200 rounded-lg pointer-events-auto flex ring-1 ring-gray-100 ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <User
                    src="/assets/foto_perfil.png"
                    size="xl"
                    bordered
                    color="gradient"
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-lg font-bold text-gray-100">
                    Ariel Martinez
                  </p>
                  <p className="mt-1 text-lg font-medium text-gray-400">
                    Gracias por tu contacto! 👍
                  </p>
                </div>
              </div>
            </div>
          </div>
        ));
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Layout>
      <Grid.Container gap={4} className="mb-16 mt-4">
        <Grid md={6} xs={12}>
          <h1 className="flex mt-8 text-6xl md:text-9xl font-black text-center items-center text-gray-200">
            Contact me!
          </h1>
        </Grid>
        <Grid md={6}>
          <div className="flex justify-center items-center">
            <div className="mx-auto md:mx-16 w-full h-[580px] rounded-xl border-2 border-sky-500 shadow-lg shadow-indigo-400 bg-transparent">
              <form
                onSubmit={handleSubmit(onSubmitForm)}
                className="gap-y-2 p-8"
              >
                <div className="flex flex-col gap-4">
                  <label className="text-gray-100 font-semibold pl-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...register("name", {
                      required: "* Ingresa un nombre",
                      maxLength: {
                        value: 12,
                        message: "* Maximo 12 caracteres",
                      },
                      minLength: {
                        value: 4,
                        message: "* Minimo 4 caracteres",
                      },
                    })}
                    className={`block md:w-96 shadow-lg py-3 px-4 bg-transparent text-gray-50 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-400 border-sky-300 border-2 rounded-md focus:outline-none focus:ring-2 ${
                      errors.email
                        ? "ring-2 ring-red-500 border-2 border-red-500"
                        : null
                    }`}
                    placeholder="Ingresa tu nombre"
                  />
                  <span className="text-red-500 font-semibold text-sm p-2">
                    {errors.name && errors.name.message}
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-gray-100 font-semibold pl-2">
                    Email
                  </label>
                  <input
                    name="email"
                    type="text"
                    {...register("email", {
                      required: "* Ingresa un email",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "* Ingresa un email valido",
                      },
                    })}
                    className={`block md:w-96 shadow-lg py-3 px-4 bg-transparent text-gray-50 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-400 border-sky-300 border-2 rounded-md focus:outline-none focus:ring-2 ${
                      errors.email
                        ? "ring-2 ring-red-500 border-2 border-red-500"
                        : null
                    }`}
                    placeholder="Ingresa tu email"
                  />
                  <span className="text-red-500 font-semibold text-sm p-2">
                    {errors.email && errors.email.message}
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-gray-100 font-semibold pl-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    {...register("message", {
                      required: "* Ingresa un mensaje",
                      maxLength: {
                        value: 300,
                        message: "* Maximo 300 caracteres",
                      },
                    })}
                    className={`block w-full shadow-lg pt-3 px-4 bg-transparent text-gray-50 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-400 border-sky-300 border-2 rounded-md focus:outline-none focus:ring-2 ${
                      errors.email
                        ? "ring-2 ring-red-500 border-2 border-red-500"
                        : null
                    }`}
                    placeholder="Escribe aqui"
                  ></textarea>
                  <span className="text-red-500 font-semibold text-sm p-2">
                    {errors.message && errors.message.message}
                  </span>
                </div>
                <div className="flex justify-end">
                  <button
                    disabled={isSubmit}
                    type="submit"
                    className="rounded-lg bg-pink-600/75 text-white hover:bg-transparent hover:text-sky-400 hover:ring-2 ring-sky-500 text-lg font-semibold p-2 w-full md:w-40"
                  >
                    {isSubmit ? (
                      <div className="flex gap-6">
                        <ImSpinner3 className="h-6 w-6 animate-spin" />
                        <span>Loading...</span>
                      </div>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Grid>
      </Grid.Container>
    </Layout>
  );
}
