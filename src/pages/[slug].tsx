import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import client from '../graphql/client';
import { GET_PAGES, GET_PAGE_BY_SLUG } from '../graphql/queries';
import PagesTemplate, { PageTemplateProps } from '../templates/Pages';

type SlugProps = {
  slug: string;
};

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return <PagesTemplate heading={heading} body={body} />;
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 });

  const paths = pages.map(({ slug }: SlugProps) => ({
    params: { slug }
  }));

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  });
  if (!page) return { notFound: true };
  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  };
};
