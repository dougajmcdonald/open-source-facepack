const fs = require('fs')
const xml2js = require('xml2js')
const parser = xml2js.Parser()
const builder = new xml2js.Builder({ headless: true, rootName: 'record' })
const util = require('util')
const GRAPHICS_FOLDER = ''

let recordsInConfig = []

const readConfig = () => {
  // read in the config file
  fs.readFile('config/config.xml', 'utf8', (error, data) => {
    parser.parseString(data, (e, result) => {
      console.log(util.inspect(result, false, null))

      arrays = result.record.list.map(l => l.record.map(r => parseInt(r.$.from, 10)))

      recordsInConfig = [].concat.apply([], arrays)

      //console.log(recordsInConfig)

      const missingItems = doGraphics()

      const jsonObjs = missingItems.map(id => ({
        $: {
          from: id,
          to: `graphics/pictures/person/${id}/portrait`
        }
      }))

      result.record.list.push(jsonObjs)

      console.log(missingItems)

      // result.record.list

      // const obj = {
      //   $: {
      //     from: id,
      //     to: `graphics/pictures/person/${id}/portrait`
      //   }
      // }

      const xml = builder.buildObject(result)

      console.log(xml)

      // return xml

      // result.record.list.record.forEach(r => {
      //   //console.log(JSON.stringify(r))
      //   //console.log(r.record.from)
      //   //console.log(JSON.stringify(r.from.$))
      //   //console.log(Object.keys(r))
      //   recordsInConfig = Object.keys(r.record)
      //   console.log(`found ${recordsInConfig.length} in the config.`)

      //   doGraphics()
      //   //console.log(r.record[0])
      // })

      //allFaces.forEach(f => console.log(f.record.keys))
    })
  })
}

const doGraphics = () => {
  // scan graphics folder for all images
  fs.readdir('graphics', (error, files) => {
    console.log(`located ${files.length} graphics files.`)

    const fileIds = files.map(checkFile).filter(x => x !== undefined)

    console.log(`${fileIds.length} files which are valid .png's`, fileIds)

    const filesWithoutConfig = fileIds.filter(portraitExists)

    console.log(`${filesWithoutConfig.length} files which need adding to the config`)

    return filesWithoutConfig
  })
}

const checkFile = fileName => {
  if (fileName.endsWith('.png')) {
    return parseInt(fileName.substring(0, fileName.indexOf('.')), 10)
  }
}

const portraitExists = id => recordsInConfig.includes(id) === false

const addPortraits = fileNames => {
  const jsonPortraits = fileNames.map(makePortrait)
  console.log(jsonPortraits)
}

const makePortrait = id => {
  const obj = {
    $: {
      from: id,
      to: `graphics/pictures/person/${id}/portrait`
    }
  }

  const xml = builder.buildObject(obj)

  console.log(xml)

  return xml
}

function build() {
  // update local config file
  // copy in local config file
  // copy in any image which doesn't exist
}

readConfig()
