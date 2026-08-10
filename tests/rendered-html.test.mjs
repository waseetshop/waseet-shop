import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

async function render(pathname = "/") {
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

const servicePages = [
  ["/services/corporate-websites", "مواقع الشركات والمؤسسات"],
  ["/services/ecommerce", "المتاجر الإلكترونية"],
  ["/services/web-applications", "تطبيقات الويب والأنظمة"],
  ["/services/landing-pages", "صفحات الهبوط والحملات"],
];

test("home links to every service page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  for (const [pathname, title] of servicePages) {
    assert.match(html, new RegExp(`href=["']${pathname}["']`));
    assert.match(html, new RegExp(title));
  }
  assert.match(html, /0500615614/);
  assert.doesNotMatch(html, /0560301744|966560301744/);
});

for (const [pathname, title] of servicePages) {
  test(`${pathname} renders a complete service page`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    assert.match(html, new RegExp(title));
    assert.match(html, /لمن هذه الخدمة؟/);
    assert.match(html, /المشاكل التي تحلها/);
    assert.match(html, /ماذا سننفذ؟/);
    assert.match(html, /ما الذي ستستلمه؟/);
    assert.match(html, /مراحل العمل/);
    assert.match(html, /أعمال ذات صلة/);
    assert.match(html, /الأسئلة الشائعة/);
    assert.match(html, /FAQPage/);
    assert.match(html, new RegExp(`https:\\/\\/www\\.waseet-shop\\.com${pathname}`));
  });
}
