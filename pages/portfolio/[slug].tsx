import { GetStaticProps, InferGetStaticPropsType } from 'next';
import hydrate from 'next-mdx-remote/hydrate';
import { getProjectBySlug, getProjectsPaths } from 'lib/mdx';
import Layout from 'components/layout/Layout';
import Navigation from 'components/navigation/Navigation';
import Mdx from '../../components/mdx/Mdx';
import Footer from 'components/footer/Footer';
import Workshop from '../../components/workshop/Workshop';
import Sparkles from '../../components/shared/components/sparkles/Sparkles';
import Player from '../../components/mdx/player/Player';

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { transformedMdx, frontmatter } = await getProjectBySlug(params.slug);

  return {
    props: {
      transformedMdx,
      frontmatter,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const paths = getProjectsPaths();

  return {
    paths,
    fallback: 'blocking',
  };
};

export const customMdxComponents = { Sparkles, Player };

const BlogPost = ({
  transformedMdx,
  frontmatter,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const content = hydrate(transformedMdx, { components: customMdxComponents });

  return (
    <>
      <Layout>
        <Navigation />
      </Layout>
      <main>
        <Mdx frontmatter={frontmatter} content={content} />
      </main>
      <Workshop />
      <Layout>
        <Footer />
      </Layout>
    </>
  );
};

export default BlogPost;
