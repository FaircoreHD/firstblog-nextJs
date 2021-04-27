// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mysql from 'serverless-mysql'

const db = mysql({
  config : {
    host : 'localhost',
    port : '3306',
    database : 'db_myblog',
    user : 'root',
    password : 'harwin23'
  }
})

async function execQuery({query}) {
  try {
    const data = await db.query(query)
    await db.end()
    return data
  } catch (error) {
    console.log(error)
  }
}

export default async (req, res) => {
  try {
    const data = await execQuery({
      query : 'SELECT * FROM tbl_kategori'
    })

    res.status(200).json(data)
  } catch (error) {
    console.log(error)  
  }
}
