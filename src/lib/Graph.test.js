import Graph from './Graph'
import fs from 'fs'
import path from 'path'

const db = new Graph()
const schemaurl = 'https://devtest.yodata.me/test/schema.nt'
const fileData = fs.readFileSync(path.resolve('./public/schema.nt'),{encoding:'utf8'})
db.parse(fileData,'text/n3');


it('loads schemas', () => {
  expect(db.statements.length).toBe(8106)

})