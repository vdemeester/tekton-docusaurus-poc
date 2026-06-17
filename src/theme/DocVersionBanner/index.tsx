import React, {type ReactNode} from 'react';
import DocVersionBanner from '@theme-original/DocVersionBanner';
import type DocVersionBannerType from '@theme/DocVersionBanner';
import type {WrapperProps} from '@docusaurus/types';
import {useDocsVersion} from '@docusaurus/plugin-content-docs/client';
import policy from '@site/src/data/support-policy.json';

type Props = WrapperProps<typeof DocVersionBannerType>;

// PoC (tektoncd/website#732): per-component support/deprecation banner.
// Driven by src/data/support-policy.json, which carries the REAL End-of-Life
// dates from each component's upstream releases.md. Status (supported vs
// deprecated) is COMPUTED from eol vs. today, so it never goes stale and we
// don't hand-flag versions (which is how the earlier draft wrongly marked
// still-supported LTS releases as deprecated).
function SupportBanner(): ReactNode {
  let ctx: {pluginId?: string; version?: string} = {};
  try {
    ctx = useDocsVersion() as any;
  } catch {
    return null; // not inside a versioned doc
  }
  const comp = (policy as any)[ctx.pluginId ?? ''];
  const info = comp?.versions?.[ctx.version ?? ''];
  if (!info || !info.eol) {
    return null; // unknown or development (main) -> rely on built-in banner
  }
  const eol = new Date(info.eol);
  const isDeprecated = eol.getTime() < Date.now();
  if (!isDeprecated) {
    return null; // still within support window -> no banner
  }
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
      <strong>⚠ End of life.</strong> You are reading docs for{' '}
      <strong>{ctx.pluginId}</strong> {ctx.version}, a{' '}
      {info.lts ? 'no-longer-supported LTS' : 'non-supported'} release
      (EOL {info.eol}). Support policy: <em>{(policy as any).policy}</em>.
      Please upgrade to a supported version.
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
