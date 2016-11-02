const responseNormalizer = (response) =>
  response.data.map(record => ({
    id: record.id,
    name: record.name,
    url: record.html_url
  }))

export default responseNormalizer
