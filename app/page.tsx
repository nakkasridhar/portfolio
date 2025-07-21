import React from "react";

export default function Portfolio() {
  return (
    <div className="p-6 max-w-7xl mx-auto text-gray-800">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Sridhar Nakka</h1>
        <p className="text-xl">Cloud | Infra | DevOps | Site Reliability Engineer</p>
        <div className="mt-2 text-sm text-gray-600">
          <a href="mailto:nakkasridhar@gmail.com" className="mr-4">nakkasridhar@gmail.com</a>
          <a href="https://www.linkedin.com/in/sridhar-nakka-7b678217" target="_blank">LinkedIn</a>
        </div>
        <div className="mt-4">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I am a cloud engineering and infrastructure leader with over 15 years of extensive experience in IT, delivering enterprise-grade solutions across AWS, Azure, GCP, and OCI. I have deep expertise in infrastructure design, Terraform automation, Kubernetes administration, cost optimization, security governance, CI/CD pipelines, and DevSecOps practices. My work has spanned across diverse sectors including Healthcare, Financial, Telecom, Retail, and Government.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Core Skills</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Cloud Platforms: AWS, Azure, GCP, OCI</li>
          <li>Infrastructure as Code: Terraform, ARM, CloudFormation, GCP Deployment Manager</li>
          <li>CI/CD Tools: Jenkins, Azure DevOps, GitHub Actions, Harness, Tekton</li>
          <li>Kubernetes: EKS, AKS, GKE, OpenShift, Helm, GitOps</li>
          <li>Security: Trend Micro, Prisma Cloud, Nessus, SCPs, Azure Policies, Sentinel</li>
          <li>Monitoring: Prometheus, Grafana, ELK, Splunk, CloudWatch</li>
          <li>Programming & Scripting: Python, Bash, PowerShell, Go</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Recent Projects</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">GCP Cost Optimization Automation</h3>
            <p>
              Designed Terraform modules to identify and downscale underutilized resources across multiple GCP projects. Integrated with alerting tools and automated remediation workflows.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Pega Application Deployment on Kubernetes</h3>
            <p>
              Automated deployment of Pega applications using Helm charts and GitOps workflow with ArgoCD. Integrated with enterprise CI/CD and observability tools.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Multi-Cloud DevSecOps Framework</h3>
            <p>
              Implemented end-to-end CI/CD pipeline incorporating security scanning tools (SonarQube, Prisma, OWASP ZAP) across AWS, Azure, and OCI using GitHub Actions and Terraform.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Red Hat Certified Engineer (RHCE V4, V7)</li>
          <li>AWS Solutions Architect – Associate</li>
          <li>Azure DevOps Engineer Expert (AZ-400)</li>
          <li>Google Cloud Professional Cloud Architect</li>
          <li>ITIL V3 Foundation Certified</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
        <p className="mb-4">
          <strong>Brightspeed – Cloud Infra DevOps Engineer</strong><br />
          Built and managed Kubernetes clusters on AWS using EKS and GitOps pipelines via ArgoCD. Delivered cost-effective cloud governance using Terraform and Vault.
        </p>
        <p className="mb-4">
          <strong>Experian – Cloud DevOps Engineer</strong><br />
          Developed automation for infrastructure provisioning on Azure using Terraform. Implemented DevSecOps pipeline with security scanning and monitoring integrations.
        </p>
        <p className="mb-4">
          <strong>Texas Health and Human Services Commission (HHSC), TX  – Senior Consultant</strong><br />
          Delivered end-to-end solutions for financial services using OCI native tools and Kubernetes. Built CI/CD pipelines with GitHub Actions and infrastructure automation.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: nakkasridhar@gmail.com</p>
        <p>LinkedIn: <a className="text-blue-600" href="https://www.linkedin.com/in/sridhar-nakka-7b678217" target="_blank">Sridhar Nakka</a></p>
        <p>GitHub: <a className="text-blue-600" href="https://github.com/sridhar-nakka" target="_blank">sridhar-nakka</a> </p>
      </section>
    </div>
  );
}
