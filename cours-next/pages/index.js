import Head from 'next/head'

export default function Home(props) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>titre</title>
      </Head>
      <div className='container'>
        <h1>Vocabulaire de base</h1>
        <table className='table'>
          <thead>
            <tr>
              <th>Anglais</th>
              <th>Français</th>
            </tr>
          </thead>
          <tbody>
            {props.array.map((el, i) => (
              <tr key={i}>
                <td>{el.en}</td>
                <td>{el.fr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

/* Exemple API */
export async function getStaticProps() {
  const data = await import(`/data/vocabulary.json`)
  const array = data.vocabulary 

  return {
    props: {
      array
    }
  }
}
