import Head from 'next/head';
import Header from '../components/header';

function Search() {
  return (
    <div>
      <Head>
        <title> Search Results </title>
        <link rel="icon" href="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"/>
      </Head>

      {/*  Header */}

      <Header />

      {/* Search Results */}


    </div>
  )
}

export default Search

export async function getServerSideProps(context) {
  const useDummyData = false;

  const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${context.query.term}`);

}