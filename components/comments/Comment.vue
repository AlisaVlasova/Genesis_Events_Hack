methods: { async addComment(requestData) { console.log(requestData) const
response = await fetch(
`https://kyiv-events-b93ca-default-rtdb.europe-west1.firebasedatabase.app/comments/${requestData.eventId}.json`,
{ method: 'POST', body: JSON.stringify({ text: requestData.text, author:
requestData.userId, }), headers: { 'Content-Type': 'application/json', }, } )
const data = await response.json() if (!response.ok) { throw new
Error(data.message || 'Could not add comment.') } return { commentId: data.name
} }
