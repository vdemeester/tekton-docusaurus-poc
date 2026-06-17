import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// PoC homepage (tektoncd/website#732) — mirrors the current tekton.dev
// Hugo/Docsy landing: "Cloud Native CI/CD" hero + feature blocks +
// install/contribute/try row. Intentionally close to the live site so #732 can
// compare the look/IA on Docusaurus.

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          Cloud Native CI/CD
        </Heading>
        <p className={styles.heroSubtitle}>
          Tekton is a powerful and flexible open-source framework for creating
          CI/CD systems, letting developers build, test, and deploy across cloud
          providers and on-premise systems.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--lg button--secondary" to="/pipelines/">
            Documentation
          </Link>
          <Link
            className="button button--lg button--outline button--secondary"
            href="https://github.com/tektoncd">
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

const FEATURES = [
  {
    title: 'Standardization',
    body: 'Tekton standardizes CI/CD tooling and processes across vendors, languages, and deployment environments. It works well with Jenkins, Jenkins X, Skaffold, Knative, and many other popular CI/CD tools.',
  },
  {
    title: 'Built-in best practices',
    body: 'Tekton lets you create CI/CD systems quickly, giving you scalable, serverless, cloud native execution out of the box.',
  },
  {
    title: 'Maximum flexibility',
    body: "Tekton abstracts the underlying implementation so that you can choose the build, test, and deploy workflow based on your team's requirements.",
  },
];

const ACTIONS = [
  {title: 'Install Tekton', to: '/pipelines/', label: 'Get Tekton here'},
  {title: 'Contributions welcome', to: '/community', label: 'Join the Tekton Community'},
  {title: 'Try Tekton', to: '/guides', label: 'Get started with Tekton'},
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="Cloud Native CI/CD"
      description="Tekton — a cloud native framework for building CI/CD systems.">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {FEATURES.map((f) => (
                <div className="col col--4" key={f.title}>
                  <Heading as="h3">{f.title}</Heading>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={clsx(styles.actions)}>
          <div className="container">
            <div className="row">
              {ACTIONS.map((a) => (
                <div className="col col--4 text--center" key={a.title}>
                  <Heading as="h3">{a.title}</Heading>
                  <Link className="button button--primary" to={a.to}>
                    {a.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
