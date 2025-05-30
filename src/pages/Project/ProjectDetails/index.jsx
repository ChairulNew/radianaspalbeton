import Navbar from "../../Navbar/Index";
import "./ProjectDetails.css"; // Keep only essential external CSS
import Footer from "../../Footer/Index";
import ProdukService from "../../../services/produkService";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import noimg from "./../../../assets/no-img.png";
import { Metadata } from "../../../components/headMetaData";
import useConfigCompanyStore from "../../../store/configCompany.store";

const ProjectDetails = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { storeCompanyData } = useConfigCompanyStore();

  const produkService = ProdukService();
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState([]);
  const [error, setError] = useState(null);

  const getDataProduk = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await produkService.getAllProduk();
      setListData(response.data || []);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setError("Failed to load projects. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataProduk();
  }, []);

  // Inline styles
  const styles = {
    errorMessage: {
      color: "#ff4d4f",
      backgroundColor: "#fff2f0",
      padding: "15px",
      borderRadius: "4px",
      marginBottom: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    retryButton: {
      background: "#ff7a59",
      color: "white",
      border: "none",
      padding: "5px 15px",
      borderRadius: "4px",
      cursor: "pointer",
    },
    noProjects: {
      textAlign: "center",
      padding: "40px",
      color: "#666",
      gridColumn: "1 / -1",
    },
    imagePlaceholder: {
      height: "200px",
      background: "#f5f5f5",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#999",
    },
  };

  return (
    <div id="project-details">
      <Metadata
        title={`Proyek - ${storeCompanyData?.title_web}`}
        description={storeCompanyData?.descripsi_web}
      />
      <Navbar />
      <div className="container">
        <h1 className="title g-text">Detail Proyek</h1>
        <h3 className="sub_title">Detail project yang sudah kami selesaikan</h3>

        {error && (
          <div style={styles.errorMessage}>
            {error}
            <button onClick={getData} style={styles.retryButton}>
              Try Again
            </button>
          </div>
        )}

        <div className="projects_grid">
          {loading
            ? Array(6)
                .fill(0)
                .map((_, index) => (
                  <div className="project_card" key={`skeleton-${index}`}>
                    <div className="project_image">
                      <Skeleton height={200} />
                    </div>
                    <div className="project_content">
                      <h3 className="sub_title">
                        <Skeleton width={150} />
                      </h3>
                      <p>
                        <Skeleton count={3} />
                      </p>
                    </div>
                  </div>
                ))
            : listData.length > 0
            ? listData.map((project, index) => (
                <div className="project_card" key={index}>
                  <div className="project_image">
                    {project.images && project.images[0]?.url ? (
                      <img
                        src={apiUrl + project.images[0].url}
                        alt={project.name || "Project image"}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <img
                        src={noimg}
                        alt={project.name || "Project image"}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </div>
                  <div className="project_content">
                    <h3 className="sub_title">{project.name}</h3>
                    {project.description ? (
                      <div>{parse(project.description)}</div>
                    ) : (
                      <p>No description available</p>
                    )}
                  </div>
                </div>
              ))
            : !error && <div style={styles.noProjects}>No projects found</div>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
