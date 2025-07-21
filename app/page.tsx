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
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I am a cloud engineering leader with over 15 years of IT experience, specializing in designing and implementing secure, scalable, and cost-efficient cloud architectures across AWS, Azure, GCP, and OCI. I hold certifications including RHCE, AWS Solutions Architect, Azure DevOps, and Google Cloud Architect. I bring a strong background in Infrastructure as Code, DevOps, CI/CD, Kubernetes, observability, and cloud-native security.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Core Skills</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Cloud Platforms: AWS, GCP, Azure, OCI</li>
          <li>DevOps: Jenkins, GitLab CI/CD, GitHub Actions, Harness, Tekton</li>
          <li>IaC: Terraform, CloudFormation, Azure ARM, Deployment Manager</li>
          <li>Kubernetes: EKS, AKS, GKE, OpenShift, Helm, ACM, GitOps</li>
          <li>Monitoring: Prometheus, Grafana, ELK, Splunk</li>
          <li>Scripting: Python, Bash, PowerShell, Go</li>
          <li>Security & Compliance: Nessus, TrendMicro, SCPs, Sentinel, OWASP</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Recent Projects</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">AWS Landing Zone Automation</h3>
            <p>
              Designed and deployed a secure, multi-account AWS environment using AWS Control Tower, Service Catalog, and SCPs. Automated provisioning and enforced security/compliance policies.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Kubernetes GitOps Pipeline</h3>
            <p>
              Managed Helm-based Kubernetes deployments on OpenShift and EKS using Tekton pipelines integrated with GitOps workflows, reducing CI/CD latency by 40%.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Cloud-Native Observability Framework</h3>
            <p>
              Built a monitoring stack using Prometheus, Grafana, and ELK integrated with Python-based observability modules for real-time data pipeline insights.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Red Hat Certified Engineer (RHCE V4, V7)</li>
          <li>AWS Solutions Architect – Associate</li>
          <li>Azure DevOps Solutions Architect (AZ-400)</li>
          <li>Google Cloud Professional Cloud Architect</li>
          <li>ITIL V3 Certified</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: nakkasridhar@gmail.com</p>
        <p>LinkedIn: <a className="text-blue-600" href="https://www.linkedin.com/in/sridhar-nakka-7b678217" target="_blank">Sridhar Nakka</a></p>
        <p>GitHub: <a className="text-blue-600" href="https://github.com/nakkasridhar/portfolio" target="_blank">sridhar-nakka</a> </p>
      </section>
    </div>
  );
}
