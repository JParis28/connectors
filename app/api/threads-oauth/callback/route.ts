import { NextRequest } from "next/server";

// Landing pad for the Threads OAuth dance.
//
// The Threads OAuth flow (https://threads.net/oauth/authorize) sends the
// user back to a redirect URI with ?code=... in the query string. The
// social-posting skill's threads_oauth.py script exchanges that code
// for a token off-machine — so this route's only job is to render the
// code in a copy-pasteable way.
//
// Single-use, never authenticated. No user data is stored. The route
// returns text/html so opening it in a browser shows a friendly screen.

export const runtime = "edge";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function page(title: string, body: string, status = 200): Response {
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>${escapeHtml(title)}</title>
<style>
  :root { color-scheme: light dark; }
  body { font: 16px/1.5 system-ui, sans-serif; max-width: 640px; margin: 4rem auto; padding: 0 1.5rem; }
  h1 { font-size: 1.25rem; margin-bottom: 1rem; }
  code, pre { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
  pre { background: #1115; padding: 1rem; border-radius: 6px; overflow-x: auto; word-break: break-all; white-space: pre-wrap; }
  .err { color: #c00; }
</style>
</head>
<body>${body}</body>
</html>`;
  return new Response(html, {
    status,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export async function GET(request: NextRequest): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const error = url.searchParams.get("error");
  const errorDescription = url.searchParams.get("error_description");

  if (error) {
    return page(
      "Threads OAuth — error",
      `<h1 class="err">OAuth error</h1>
       <p><strong>${escapeHtml(error)}</strong></p>
       <pre>${escapeHtml(errorDescription ?? "(no description)")}</pre>
       <p>Re-run <code>threads_oauth.py --authorize</code>.</p>`,
      400
    );
  }

  if (!code) {
    return page(
      "Threads OAuth — missing code",
      `<h1>Missing code parameter</h1>
       <p>This URL is the redirect target for the Connectors Threads OAuth dance.
       Open it via <code>threads_oauth.py --authorize</code>, not directly.</p>`,
      400
    );
  }

  const stateBlock = state
    ? `<p>State (verify it matches what <code>--authorize</code> printed):</p>
       <pre>${escapeHtml(state)}</pre>`
    : `<p class="err">No state parameter returned — refuse to continue and re-run <code>--authorize</code>.</p>`;

  return page(
    "Threads OAuth — code received",
    `<h1>Paste this code back into the terminal</h1>
     ${stateBlock}
     <p>Then run:</p>
     <pre>python3 .claude/Skills/social-posting/scripts/threads_oauth.py --exchange ${escapeHtml(code)}</pre>
     <p>You can close this tab.</p>`
  );
}
