import type { Route } from "./+types/home";
import Navbar from "../../components/Navbar";
import {ArrowRight, ArrowUpRight, Clock, Layers} from "lucide-react";
import Button from "../../components/ui/Button";
import Upload from "../../components/Upload";
import {useNavigate} from "react-router";

/**
 * Supplies HTML metadata for the route.
 *
 * @returns An array of meta tag objects for the document head: a page title and a description.
 */
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

/**
 * Renders the Home page containing the hero, upload area, and projects gallery.
 *
 * When an image is uploaded via the embedded Upload component, a new numeric id
 * is generated from the current timestamp and the app navigates to `/visualizer/{id}`.
 *
 * @returns The Home page React element.
 */
export default function Home() {
  const navigate = useNavigate();

  const handleUploadComplete = async (base64Image: string) => {
    const newId = Date.now().toString();

    navigate(`/visualizer/${newId}`);
  }

  return (
    <div className="home">
      <Navbar />

      <section className="hero">
        <div className="announce">
          <div className="dot">
            <div className="pulse"></div>
          </div>

          <p>Just Released Atelieria 2.0</p>
        </div>

        <h1>Craft extraordinary spaces at the speed of thought with Atelieria</h1>

        <p className="subtitle">
          Atelieria is an AI-driven design studio that empowers you to visualize, render, and deliver architectural work with precision, elegance, and unprecedented speed.
        </p>

        <div className="actions">
          <a href="#upload" className="cta">
            Begin Your Project <ArrowRight className="icon" />
          </a>

          <Button variant="outline" size="lg" className="demo">
            Watch the Film
          </Button>
        </div>

        <div id="upload" className="upload-shell">
          <div className="grid-overlay"></div>
          <div className="upload-card">
            <div className="upload-head">
              <div className="upload-icon">
                <Layers className="icon" />
              </div>

              <h3>Upload your floor plan</h3>
              <p>Supports JPG, PNG, formats up to 10MB</p>
            </div>

            <Upload onComplete={handleUploadComplete} />
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="section-inner">
          <div className="section-head">
            <div className="copy">
              <h2>Projects</h2>
              <p>A curated space for your latest creations and selected community works — thoughtfully organized in one refined environment.</p>
            </div>
          </div>
          <div className="projects-grid">
            <div className="project-card group">
              <div className="preview">
                <img src="https://roomify-mlhuk267-dfwu1i.puter.site/projects/1770803585402/rendered.png" alt="Project"/>

                <div className="badge">
                  <span>Community</span>
                </div>
              </div>

              <div className="card-body">
                <div>
                  <h3>Seville Oasis</h3>

                  <div className="meta">
                    <Clock size={12} /> <span>{new Date('01.01.2026').toLocaleDateString()}</span> <span>By LucianoMB</span>
                  </div>
                </div>
                <div className="arrow">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}