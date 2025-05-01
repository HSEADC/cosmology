import Airtable from 'airtable'

const token =
  'patJL5VC3LCgSnYyf.dd08f9b85c09acfd59260c7c8688a1ef252a6ff4b183b84c246c490ba7c94f6e'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})
var base = Airtable.base('appbe3qKlLNb8b2d4')

function getArticlesTeasers() {
  return new Promise((resolve, reject) => {
    const content = []

    base('Articles')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            title: record.fields['Title'],
            tag: record.fields['Tags'],
            image: record.fields['Images'],
            url: record.fields['URL'],
            class: record.fields['Class']
          })
        })

        resolve(content)
      })
  })
}

export { getArticlesTeasers }
