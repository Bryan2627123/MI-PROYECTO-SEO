import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Mi Sitio Optimizado</title>
        <meta name="description" content="Lee artículos y novedades sobre Next.js y SEO." />
        <meta property="og:title" content="Blog | Mi Sitio Optimizado" />
        <meta property="og:description" content="Últimas noticias sobre desarrollo web optimizado." />
      </Head>

      <h1>Blog</h1>
      <p>Bienvenido a nuestro blog técnico sobre desarrollo web.</p>
    </>
  );
}
