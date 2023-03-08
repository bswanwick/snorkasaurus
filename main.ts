import { SizeHint, Webview } from "https://deno.land/x/webview/mod.ts";

const html = `
  <html>
  <body>
    <h1>Hello from deno v${Deno.version.deno}!</h1>
    <pre>${JSON.stringify(Deno, undefined, 2)}</pre>
    <p>
      Made with <a href="https://github.com/webview/webview_deno">Deno Webview</a>
    </p>
  </body>
  </html>
`;

const webview = new Webview(true);
webview.navigate(`data:text/html,${encodeURIComponent(html)}`);
webview.run();