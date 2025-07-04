import React, { useRef, useEffect } from 'react';
import './Project.css'; 
import project1Thumbnail from '../assets/project1-thumbnail.jpg';
import project2Thumbnail from '../assets/project2-thumbnail.jpg';
import project3Thumbnail from '../assets/project3-thumbnail.jpg';
import project4Thumbnail from '../assets/project4-thumbnail.jpg';
import project5Thumbnail from '../assets/project5-thumbnail.jpg';
import project6Thumbnail from '../assets/project6-thumbnail.jpg';

const projects = [
  {
    id: 1,
    title: 'Sistem Pembayaran Kasir Offline',
    description: 'Pengembangan sistem kasir (POS) offline yang efisien untuk manajemen produk, perhitungan belanja, dan pemrosesan pembayaran di ritel',
    technologies: ['Java', 'NetBeans IDE', 'GUI (Swing/JavaFX)'], 
    imageUrl: project1Thumbnail,
    githubUrl: 'https://github.com/MaylaniPutriaL/Sistem-Pembayaran-Kasir-Offline',
  },
  {
    id: 2,
    title: 'Web Kalkulator',
    description: 'Aplikasi kalkulator berbasis web yang responsif dengan fungsionalitas dasar (penjumlahan, pengurangan, perkalian, pembagian) dan antarmuka pengguna yang intuitif',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: project2Thumbnail,
    githubUrl: 'https://github.com/MaylaniPutriaL/kalkulator',
  },
  {
    id: 3,
    title: 'Sistem Pendaftaran Universitas',
    description: 'Pengembangan platform pendaftaran mahasiswa baru secara daring, memungkinkan calon mahasiswa mengisi formulir, mengunggah dokumen, dan memantau status pendaftaran secara real-time. Sistem ini mendukung alur pendaftaran yang efisien dan terintegrasi',
    technologies: ['HTML', 'CSS', 'PHP', 'MySQL', 'Apache'],
    imageUrl: project3Thumbnail,
    githubUrl: 'https://github.com/MaylaniPutriaL/computerClub1',
  },
  {
    id: 4,
    title: 'Todo List',
    description: 'Aplikasi To-Do List berbasis web untuk mengelola tugas. Pengguna dapat menambah, menandai selesai, dan menghapus tugas',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: project4Thumbnail,
    githubUrl: 'https://github.com/MaylaniPutriaL/TodoList',
  },
  {
    id: 5,
    title: 'Tic Tac Toe Game',
    description: 'Menampilkan logika permainan, deteksi kemenangan/seri, dan reset game',
    imageUrl: project5Thumbnail,
    githubUrl: 'https://github.com/MaylaniPutriaL/Tic-Tac-Toe-Game',
  },
  {
    id: 6,
    title: 'Birthday Card',
    description: 'Sebuah kartu ucapan ulang tahun digital dan interaktif yang menampilkan nama penerima secara dinamis, dilengkapi dengan animasi balon dan efek confetti untuk pengalaman yang meriah',
    imageUrl: project6Thumbnail,
    githubUrl: 'https://github.com/MaylaniPutriaL/Birthday-Card',
  },
];

function ProjectsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="projects-background-shapes">
        <div className="projects-shape projects-shape-1"></div>
        <div className="projects-shape projects-shape-2"></div>
        <div className="projects-shape projects-shape-3"></div>
      </div>

      <h2>My Projects</h2> 
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image-wrapper">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              {project.githubUrl && ( 
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-project">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
