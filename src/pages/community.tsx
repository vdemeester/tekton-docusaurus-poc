import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

// PoC: mirrors the current /community/ tab.
const CHANNELS = [
  {title: 'Slack', body: 'Chat with the community in real time.', href: 'https://github.com/tektoncd/community/blob/main/contact.md#slack', label: 'Join Slack'},
  {title: 'Community repo', body: 'Governance, working groups, and how to contribute.', href: 'https://github.com/tektoncd/community', label: 'tektoncd/community'},
  {title: 'Working groups', body: 'Regular video calls — everyone is welcome.', href: 'https://github.com/tektoncd/community/blob/main/working-groups.md', label: 'Working groups'},
];

export default function Community(): ReactNode {
  return (
    <Layout title="Community" description="The Tekton community.">
      <main className="container margin-vert--lg">
        <Heading as="h1">Community</Heading>
        <p>
          Tekton is an open-source project built by a welcoming community. Find
          more in the{' '}
          <Link href="https://github.com/tektoncd/community">
            Tekton Community repository
          </Link>
          .
        </p>
        <div className="row margin-top--lg">
          {CHANNELS.map((c) => (
            <div className="col col--4" key={c.title}>
              <div className="card padding--lg" style={{height: '100%'}}>
                <Heading as="h3">{c.title}</Heading>
                <p>{c.body}</p>
                <Link className="button button--primary button--sm" href={c.href}>
                  {c.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
