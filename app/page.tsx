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
            <h3 className="text-xl font-semibold">Multi-Cloud Landing Zone Deployment</h3>
            <p>
              Designed and implemented secure landing zones on AWS and Azure using Control Tower, Service Catalog, SCPs, and Terraform automation for account and policy provisioning.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Kubernetes GitOps CI/CD</h3>
            <p>
              Deployed and managed GitOps-driven CI/CD pipelines using Tekton and ArgoCD for Helm-based microservices on EKS and OpenShift, ensuring consistent releases.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Cloud Observability Framework</h3>
            <p>
              Built observability platform integrating Prometheus, Grafana, ELK, and Python-based probes to improve data pipeline health monitoring and performance KPIs.
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
          <strong>Wells Fargo – Sr. Infrastructure Engineer</strong><br />
          Implemented Azure Kubernetes Services (AKS) GitOps deployment with Azure DevOps CI/CD pipeline; deployed Trend Micro security modules using Helm. Enabled HashiCorp Vault for secret management and policy enforcement using Sentinel and SCPs.
        </p>
        <p className="mb-4">
          <strong>Oracle Corporation – Principal Cloud Engineer</strong><br />
          Automated OCI cloud landing zone provisioning using Terraform and Ansible. Implemented Kubernetes Helm pipeline deployments with GitHub Actions.
        </p>
        <p className="mb-4">
          <strong>AT&T – Cloud Engineer</strong><br />
          Managed AWS workloads with Terraform IaC, Lambda for automation, and cost analysis with Compute Optimizer. Hardened cloud environments with Nessus and Prisma Cloud.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: nakkasridhar@gmail.com</p>
        <p>LinkedIn: <a className="text-blue-600" href="https://www.linkedin.com/in/sridhar-nakka-7b678217" target="_blank">Sridhar Nakka</a></p>
        <p>GitHub: <a className="text-blue-600" href="https://github.com/sridhar-nakka" target="_blank">sridhar-nakka</a> (Optional)</p>
      </section>
    </div>
  );
}
