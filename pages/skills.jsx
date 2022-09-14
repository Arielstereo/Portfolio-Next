import Layout from "../components/Layout";
import { Card, Grid, Text, Row } from "@nextui-org/react";
import dbConnection from "../lib/database";
import Skill from "../models/Skills";

export default function skills({ skills }) {
  return (
    <Layout>
      <Grid.Container gap={2} className="py-16">
        {skills.map(({ title, img }) => (
          <Grid xs={12} sm={6} lg={4} key={title}>
            <Card
              isPressable
              className="rounded-2xl border-2 border-sky-500 shadow-lg shadow-indigo-400 bg-transparent"
            >
              <Card.Body>
                <Card.Image
                  src={img}
                  objectFit="cover"
                  width={120}
                  height={120}
                  alt={title}
                  className="rounded-lg"
                />
              </Card.Body>
              <Card.Footer className="bg-gradient-to-r from-indigo-700 to-sky-500">
                <Row>
                  <Text b className="text-gray-50">
                    {title}
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    await dbConnection();
    const res = await Skill.find({});

    const skills = res.map((item) => {
      const skill = item.toObject(); // trae propiedad y valor..
      skill._id = skill._id.toString(); //convierte el id de mongo en un string..
      return skill;
    });
    return { props: { skills } };
  } catch (error) {
    console.log(error);
  }
}
