import React, {type ReactNode} from 'react';
import DocVersionBanner from '@theme-original/DocVersionBanner';
import type DocVersionBannerType from '@theme/DocVersionBanner';
import type {WrapperProps} from '@docusaurus/types';
import {useDocsVersion} from '@docusaurus/plugin-content-docs/client';
import policy from '@site/src/data/support-policy.json';

type Props = WrapperProps<typeof DocVersionBannerType>;

// PoC (tektoncd/website#732): per-component support/deprecation banner.
// Driven by src/data/support-policy.json, which mirrors the per-component
// supportEnds/LTS data already present in sync/config/<component>.yaml.
function SupportBanner(): ReactNode {
  let ctx: {pluginId?: string; version?: string} = {};
  try {
    ctx = useDocsVersion() as any;
  } catch {
    return null; // not inside a versioned doc
  }
  const comp = (policy as any)[ctx.pluginId ?? ''];
  const info = comp?.versions?.[ctx.version ?? ''];
  if (!info || info.status === 'supported' || info.status === 'development') {
    return null;
  }
  const ends = info.supportEnds ? ` (support ended ${info.supportEnds})` : '';
  return (
    <div
      role="alert"
      style={{
        border: '1px solid #e0a800',
        background: '#fff8e1',
        color: '#7a5c00',
        padding: '0.75rem 1rem',
        borderRadius: 6,
        margin: '0 0 1rem',
        fontSize: '0.95rem',
      }}>
      <strong>⚠ Deprecated version.</strong> You are reading docs for a{' '}
      <strong>{info.lts ? 'no-longer-supported LTS' : 'non-supported'}</strong>{' '}
      release of <strong>{ctx.pluginId}</strong> {ctx.version}
      {ends}. Supported policy: <em>{comp.policy}</em>. Consider upgrading.
    </div>
  );
}

export default function DocVersionBannerWrapper(props: Props): ReactNode {
  return (
    <>
      <SupportBanner />
      <DocVersionBanner {...props} />
    </>
  );
}
