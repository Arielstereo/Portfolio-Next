import Layout from "../components/Layout";
import { Grid, Collapse, Text, Avatar, Badge, Spacer } from "@nextui-org/react";
import { ImSpinner9 } from "react-icons/im";

export default function about() {
  return (
    <Layout>
      <Grid.Container gap={2} className="mx-auto lg:my-32 md:pb-48 lg:pb-36">
        <Grid xs={12} md={6}>
          <Text
            h1
            className="text-gray-50 text-6xl md:text-8xl lg:text-9xl font-black mx-auto my-16 lg:my-32"
          >
            About me
          </Text>
        </Grid>
        <Grid xs={12} md={6} className="mx-auto">
          <Grid.Container gap={6}>
            <Grid xs={12}>
              <Collapse
                className="rounded-xl z-0 border-2 border-sky-500 shadow-lg shadow-indigo-400 bg-transparent p-4 w-[500px]"
                title={
                  <Text h4 className="text-gray-50">
                    UTN
                  </Text>
                }
                arrowIcon={<ImSpinner9 className="text-sky-400 text-2xl" />}
                subtitle="2021"
                contentLeft={
                  <Avatar
                    size="lg"
                    src="/assets/utn.jpg"
                    color="error"
                    bordered
                    squared
                  />
                }
              >
                <Text className="text-white">
                  <Badge color="error" variant="points" className="m-1" />
                  <span className="text-lg font-bold mx-4">
                    Diplomatura Programación Web Full Stack
                  </span>
                  <p className="mx-8 mt-3 font-mono">
                    <span className="font-semibold underline underline-offset-2">
                      Frontend
                    </span>{" "}
                    HTML- CSS - JavaScript. React. <Spacer y={1} />
                    <span className="font-semibold underline underline-offset-2">
                      Maquetación Web
                    </span>{" "}
                    Flexbox y Grid- Responsive Design- Bootstrap.
                    <Spacer y={1} />{" "}
                    <span className="font-semibold underline underline-offset-2">
                      Base de datos
                    </span>{" "}
                    Lenguaje MySQL - MongoDB.
                    <Spacer y={1} />
                    <span className="font-semibold underline underline-offset-2">
                      Backend
                    </span>{" "}
                    Node.js - Express - API Rest.
                  </p>
                </Text>
              </Collapse>
            </Grid>
            <Grid xs={12}>
              <Collapse
                className="rounded-xl z-0 border-2 border-sky-500 shadow-lg shadow-indigo-400 bg-transparent p-4 w-[500px]"
                arrowIcon={<ImSpinner9 className="text-sky-400 text-2xl" />}
                title={
                  <Text h4 className="text-white">
                    Equo
                  </Text>
                }
                subtitle="2022"
                contentLeft={
                  <Avatar
                    size="lg"
                    src="/assets/equo.png"
                    color="primary"
                    bordered
                    squared
                  />
                }
              >
                <Text className="text-white">
                  <Badge color="primary" variant="points" className="m-1" />
                  <span className="text-lg font-bold mx-4">
                    Pasantía Frontend Developer
                  </span>
                  <p className="mx-8 mt-3 font-mono">
                    Desarrollo del website de la empresa.(https://equo.dev/)
                    <Spacer y={1} />
                    Trabajo remoto mediante metodologia SCRUM.
                    <Spacer y={1} />
                    Nuxt (Vue.js), Tailwind.css , Gitlab , Node.
                  </p>
                </Text>
              </Collapse>
            </Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </Layout>
  );
}
