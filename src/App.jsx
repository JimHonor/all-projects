import { getProjects } from "./data/data";

const projects = getProjects();

import { Row, Col, Typography, Space } from "antd";

const { Text, Title, Link } = Typography;

import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ textAlign: "center", padding: "2rem 1rem" }}>
      <Space direction="vertical" size={"large"}>
        <Title>Projects</Title>
        <Row gutter={[0, 64]}>
          {projects.map((project) => (
            <Col xs={24} sm={12} md={8} key={project.id}>
              <a
                className="project-item"
                href={project.githubPageUrl}
                target="_blank"
                style={{ display: "inline-block", borderRadius: "4px" }}
              >
                <img
                  src={
                    new URL(
                      `./assets/screenshots/${project.id}-${project.repoName}.png`,
                      import.meta.url
                    ).href
                  }
                  alt=""
                  style={{
                    width: "300px",
                    height: "300px",
                    borderRadius: "4px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "2rem 1rem",
                  }}
                >
                  <Text strong>
                    {project.name} - #{project.id}
                  </Text>
                  <Link href={project.githubRepoUrl} target="_blank">
                    Source
                  </Link>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Space>
    </div>
  );
};

export default App;
