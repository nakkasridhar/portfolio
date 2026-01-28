import React from "react";

const experience = [
  {
    company: "BrightSpeed",
    period: "Apr 2024–Present",
    title: "Cloud & DevOps Lead",
    bullets: [
      "Designed enterprise AWS architectures, multi-account governance, cloud security.",
      "Built REST APIs (Python Flask, Go, Node.js), integrated with Lambda, DynamoDB.",
      "Led teams for secure AWS app delivery; implemented CI/CD pipelines (Jenkins, GitLab, GitHub Actions, Harness).",
      "Managed OpenShift clusters with ACM, Tekton Pipelines, Kubernetes/Helm deployments.",
      "Conducted vulnerability assessments (Nessus, Trend Micro), ensured compliance.",
    ]
  },
  {
    company: "Experian",
    period: "Oct 2023–Mar 2024",
    title: "Cloud Architect | DevOps Engineer",
    bullets: [
      "AWS architecture, multi-account governance, CI/CD automation.",
      "Data engineering (PySpark, EMR, Synapse), API development (Python, Node.js, Go).",
      "Security policies, monitoring (Grafana, Prometheus, ELK), OpenShift, Tekton, GCP IAM."
    ]
  },
  {
    company: "Texas HHSC",
    period: "Apr 2023–Sep 2023",
    title: "Cloud Architect | DevOps Engineer",
    bullets: [
      "AWS cloud architecture, OpenShift/ACM, Tekton, Terraform, ARM.",
      "Data platforms, security/compliance (GCP, Azure, AWS), IoT integrations, networking."
    ]
  },
  {
    company: "Chubb",
    period: "Aug 2022–Mar 2023",
    title: "Cloud Architect | DevOps Engineer",
    bullets: [
      "AWS/OCI migration, CI/CD (Jenkins, Harness, Artifactory), OpenShift ACM, Tekton, Helm.",
      "Vulnerability management, API dev, web scraping, Terraform, Ansible automation."
    ]
  },
  // Add other experiences as needed
];

const skills = [
  { category: "Cloud", tech: "AWS, Azure, GCP, OCI" },
  { category: "DevOps", tech: "Docker, Kubernetes, Jenkins, Ansible, Chef, Puppet, Vagrant" },
  { category: "IaC", tech: "Terraform (+Sentinel), CloudFormation, ARM, Deployment Manager" },
  { category: "Scripting", tech: "Python, Bash, PowerShell, Shell, YAML" },
  { category: "Monitoring", tech: "Grafana, Prometheus, ELK, Splunk, CloudWatch" },
  { category: "CI/CD", tech: "GitHub Actions, GitLab CI/CD, Jenkins, Harness" },
  { category: "Security", tech: "Nessus, Trend Micro, Qualys, Checkmarx, OWASP ZAP, Veracode, SCP, IAM" },
  { category: "Data", tech: "PySpark, Hadoop, EMR, Synapse, Kafka, RabbitMQ" },
  { category: "Frontend", tech: "Vue.js, JavaScript" },
  { category: "API Dev", tech: "Flask, FastAPI, Django, Node.js (Express), Go" },
  { category: "Networking", tech: "VPC, Security Groups, TGW, Ingress Controllers, DNS, LB" },
  { category: "OS & Virtualization", tech: "Linux (RHEL, Ubuntu, Suse, Fedora), Windows, Solaris, VMware, Hyper-V" },
  { category: "Source Control", tech: "Git, GitHub, SVN, JFrog, Maven" },
  { category: "DBMS", tech: "MySQL, Oracle, PostgreSQL, DynamoDB, Aurora, Bigtable, Snowflake" },
];

const education = [
  { degree: "Master’s in IT Management", school: "All India Management Association", year: "2017" },
  { degree: "Bachelor’s in Computer Science & Engineering", school: "Institution of Engineers (India)", year: "2013" },
  { degree: "Diploma in Electronics & Communication Engineering", school: "SBTET, OU", year: "2001" },
];

const certifications = [
  "Red Hat Certified Engineer (RHCE V4, V7)",
  "AWS Solutions Architect Associate",
  "Azure 400, DevOps Solutions Architect",
  "Google Certified Professional Cloud Architect",
  "ITIL V3 Certified",
];

const achievements = [
  "Led hybrid multi-cloud security for Fortune 500 clients.",
  "Built mission-critical cloud platforms with compliance (PCI, HIPAA, GDPR, DFARS).",
  "Mentored/led DevOps and cloud engineering teams.",
  "Automated cloud infra deployments and security policies at scale."
];

export default function Portfolio() {
  return (
    <main style={{fontFamily: "Segoe UI, Arial, sans-serif", background: "#f4f6fa", color: "#222", minHeight: "100vh"}}>
      <div style={{
        maxWidth: 900, margin: "40px auto", background: "#fff", boxShadow: "0 3px 24px rgba(0,0,0,0.09)", borderRadius: 8,
        padding: "40px 32px"
      }}>
        <h1 style={{color: "#2d5c9f", fontSize: "2.4rem", letterSpacing: 1}}>Sridhar Nakka-On-prem/GCP/AWS/Azure Infra DevOps Engineer/Leader</h1>

        {/* Insert your image here */}
        <div style={{textAlign: "center"}}>
          <img
            src="/profile-photo.jpg" // Change this path to your image file (e.g., public/profile-photo.jpg)
            alt="Sridhar Nakka Profile"
            style={{
              width: 140,
              height: 140,
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "1.2em",
              border: "3px solid #2d5c9f",
              boxShadow: "0 2px 8px rgba(44,92,159,0.25)"
            }}
          />
        </div>
        
        <div style={{marginBottom: "1.6em", fontSize: "1.05em", lineHeight: 1.8}}>
          <span>📱 7138947739</span> ·{" "}
          <a href="mailto:nakkasridhar@gmail.com" style={{color:"#2d5c9f"}}>nakkasridhar@gmail.com</a> ·{" "}
          <a href="https://www.linkedin.com/in/sridhar-nakka-7b678217" target="_blank" style={{color:"#2d5c9f"}}>LinkedIn</a> ·{" "}
          <a href="https://www.credly.com/users/sridhar-nakka/badges" target="_blank" style={{color:"#2d5c9f"}}>Credly Badges</a>
        </div>
        <div className="mt-4">
          <a
            href="/SridharNakka.CSD.docx"
            download
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>

        <section>
          <h2 style={{color:"#364f6b", borderBottom:"1px solid #e6eaf3", paddingBottom:6}}>Objective</h2>
          <p>
            Cloud engineering leader with 15+ years in IT and multiple certifications (ITIL, RHCE, AWS, Azure, GCP).
            I specialize in cloud infrastructure security, hybrid/multi-cloud automation, and DevOps,
            driving innovation and operational excellence for mission-critical enterprise environments.
          </p>
        </section>
        <section>
          <h2 style={{color:"#364f6b", borderBottom:"1px solid #e6eaf3", paddingBottom:6}}>Professional Summary</h2>
          <ul>
            <li>10+ years hands-on in SRE, Cloud, and DevOps, managing Azure, GCP, AWS.</li>
            <li>Backend: Python (Flask, FastAPI), Node.js (Express), Go (Gin, Echo, Beego).</li>
            <li>Frontend: Vue.js dashboards and internal tools.</li>
            <li>CI/CD: Azure DevOps, Jenkins, GitHub Actions, Helm, Tekton, GitOps.</li>
            <li>Containerization: Kubernetes, Docker, OpenShift, Helm, ACM.</li>
            <li>Data Platforms: PySpark, Hadoop (Cloudera/EMR/Synapse), Kafka, RabbitMQ.</li>
            <li>Security: Vulnerability assessments, compliance (PCI, HIPAA, DFARS, GDPR), IAM, SCP.</li>
            <li>Infrastructure Automation: Terraform (+Sentinel), CloudFormation, Ansible, Bash.</li>
            <li>Monitoring: Grafana, Prometheus, ELK, Splunk.</li>
            <li>Networking: VPC, Subnets, TGW, Ingress, network policies.</li>
            <li>Collaboration: GitHub, SVN, Jira, ServiceNow, Confluence.</li>
          </ul>
        </section>
        <section>
          <h2 style={{color:"#364f6b", borderBottom:"1px solid #e6eaf3", paddingBottom:6}}>Skills</h2>
          <table style={{width:"100%", borderCollapse: "collapse", marginTop:10, marginBottom:10, fontSize:"0.98em"}}>
            <thead>
              <tr>
                <th style={{background:"#f0f4ff", color:"#425a7c", border:"1px solid #e6eaf3", padding:"7px 10px"}}>Category</th>
                <th style={{background:"#f0f4ff", color:"#425a7c", border:"1px solid #e6eaf3", padding:"7px 10px"}}>Tools / Technologies</th>
              </tr>
            </thead>
            <tbody>
              {skills.map(skill => (
                <tr key={skill.category}>
                  <td style={{border:"1px solid #e6eaf3", padding:"7px 10px"}}>{skill.category}</td>
                  <td style={{border:"1px solid #e6eaf3", padding:"7px 10px"}}>{skill.tech}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section>
          <h2 style={{color:"#364f6b", borderBottom:"1px solid #e6eaf3", paddingBottom:6}}>Experience</h2>
          {experience.map(exp => (
            <div key={exp.company} style={{marginBottom:"1.6em"}}>
              <div style={{fontWeight:"bold", color:"#2d5c9f"}}>{exp.company} <span style={{fontWeight:"normal", color:"#222"}}>({exp.period})</span></div>
              <div style={{fontStyle:"italic", color:"#222", marginBottom:5}}>{exp.title}</div>
              <ul>
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </section>
        <section>
          <h2 style={{color:"#364f6b", borderBottom:"1px solid #e6eaf3", paddingBottom:6}}>Education</h2>
          <ul>
            {education.map(e => (
              <li key={e.degree}>
                <strong>{e.degree}</strong> — {e.school} ({e.year})
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 style={{color:"#364f6b", borderBottom:"1px solid #e6eaf3", paddingBottom:6}}>Certifications</h2>
          <ul>
            {certifications.map(c => <li key={c}>{c}</li>)}
          </ul>
        </section>
        <section>
          <h2 style={{color:"#364f6b", borderBottom:"1px solid #e6eaf3", paddingBottom:6}}>Projects & Github</h2>
          <ul>
            <li><a href="https://github.com/nakkasridhar" target="_blank" style={{color:"#2d5c9f"}}>GitHub Profile</a></li>
            <li>Created and managed repositories for personal and work projects, showcasing version control, project management, and collaboration (pull requests, issues, project boards).</li>
            <li>Developed tools/dashboards for infra health, cost, compliance, and observability.</li>
            <li>Contributed to testing frameworks, CI/CD, automation, and cloud governance.</li>
          </ul>
        </section>
        <section style={{background:"#f7fafc", borderLeft:"4px solid #2d5c9f", padding:"1em 1.2em", marginTop:10, marginBottom:15, borderRadius:3}}>
          <h2 style={{color:"#364f6b"}}>Achievements</h2>
          <ul>
            {achievements.map(a => <li key={a}>{a}</li>)}
          </ul>
        </section>
        <section style={{background:"#f7fafc", borderLeft:"4px solid #2d5c9f", padding:"1em 1.2em", marginTop:10, marginBottom:15, borderRadius:3}}>
          <h2 style={{color:"#364f6b"}}>Badges & Recognition</h2>
          <ul>
            <li>
              <a href="https://www.credly.com/users/sridhar-nakka/badges" target="_blank" style={{color:"#2d5c9f"}}>View Credly Badges</a>
            </li>
          </ul>
        </section>
        <section style={{fontStyle:"italic", color:"#666", marginBottom:"1.5em"}}>
          <h2 style={{color:"#364f6b"}}>Technical Blog & Publications</h2>
          <span>Coming Soon: Multi-cloud Security, IaC Automation, DevOps Best Practices, Cloud Observability.</span>
        </section>
        <footer style={{textAlign:"center", marginTop:"2em", fontSize:"1em", color:"#364f6b"}}>
          <strong>Contact:</strong> <a href="mailto:nakkasridhar@gmail.com" style={{color:"#2d5c9f"}}>nakkasridhar@gmail.com</a> ·{" "}
          <a href="https://www.linkedin.com/in/sridhar-nakka-7b678217" target="_blank" style={{color:"#2d5c9f"}}>LinkedIn</a>
        </footer>
      </div>
    </main>
  );
}