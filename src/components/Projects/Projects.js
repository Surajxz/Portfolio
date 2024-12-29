import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";

// // import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";


import proj1 from "../../Assets/Projects/Screenshot 2024-09-20 014534.png";
import proj2 from "../../Assets/Projects/img-1(myntra).png";
import proj3 from "../../Assets/Projects/a0833ac3-dfd7-4386-951f-b59e0caa8c96.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj1}
              isBlog={false}
              title="News article webpage"
              description="News Search: Users can input keywords or phrases to search for articles related to their interests. Category Filtering: The application offers filtering options to browse news by category (e.g., business, technology, sports, entertainment). Article Details: Clicking on an article will display its full content, including the headline, author, publication date, and source. Responsive Design: The website is designed to be accessible and visually appealing on various devices, including desktops, tablets, and smartphones.   Technologies Used Frontend: HTML CSS JavaScript A JavaScript framework (e.g., React, Angular, Vue) for efficient UI development and management"
              ghLink=""
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj2}
              isBlog={false}
              title="Myntra clone"
              description="Myntra-Clone This project is a static webpage clone of Amazon's main landing page, built with HTML and CSS for educational purposes.
              "
              ghLink="https://github.com/Surajxz/Amazon-clone-HTML-CSS-.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj3}
              isBlog={false}
              title="AI Jarvis robot "
              description="The AI Jarvis Project has the potential to revolutionize how we interact with technology, making our lives more efficient, productive, and enjoyable. It could also pave the way for more advanced AI systems with even greater capabilities"
              ghLink="https://github.com/Surajxz/AI-jarvis-python-.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj4}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink=""
              demoLink="/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj5}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink=""
              demoLink=""
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink=""
              // demoLink="" <--------Please include a demo link here
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
