// Netlify build plugin: submit the live sitemap to IndexNow after each
// successful production deploy. Notifies Bing, Yandex, Seznam, Naver, Yep.
// (Google does not use IndexNow.)

const HOST = "atvcorner.com";
const KEY = process.env.INDEXNOW_KEY || "b96288cd059c40ee80b65a2aa26e0cb1";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

module.exports = {
  onSuccess: async ({ utils }) => {
    // Only submit real production deploys — skip deploy previews / branch builds.
    if (process.env.CONTEXT !== "production") {
      console.log(`IndexNow: skipping (context: ${process.env.CONTEXT})`);
      return;
    }

    const siteUrl = process.env.URL || `https://${HOST}`;
    const sitemapUrl = `${siteUrl}/sitemap.xml`;

    let urls;
    try {
      const res = await fetch(sitemapUrl);
      if (!res.ok) {
        return utils.build.failPlugin(
          `IndexNow: could not fetch sitemap (${res.status}) at ${sitemapUrl}`,
        );
      }
      const xml = await res.text();
      urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
    } catch (err) {
      return utils.build.failPlugin(`IndexNow: sitemap fetch failed — ${err.message}`);
    }

    if (urls.length === 0) {
      return utils.status.show({
        title: "IndexNow",
        summary: "No URLs found in sitemap — nothing submitted.",
      });
    }

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          host: HOST,
          key: KEY,
          keyLocation: KEY_LOCATION,
          urlList: urls,
        }),
      });
      // IndexNow returns 200/202 on success.
      if (res.status !== 200 && res.status !== 202) {
        const body = await res.text();
        return utils.build.failPlugin(
          `IndexNow: submission rejected (HTTP ${res.status}) ${body}`,
        );
      }
      console.log(`IndexNow: submitted ${urls.length} URLs (HTTP ${res.status})`);
      utils.status.show({
        title: "IndexNow",
        summary: `Submitted ${urls.length} URLs (HTTP ${res.status}).`,
      });
    } catch (err) {
      utils.build.failPlugin(`IndexNow: submission failed — ${err.message}`);
    }
  },
};
