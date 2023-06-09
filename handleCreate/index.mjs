import dynamoose from 'dynamoose';


const schema = new dynamoose.Schema({
    "id": String,
    "title": String,
    "author": String
});

const books = dynamoose.model('books', schema);

export const handler = async(event) => {
  // console.log('this is the body', event.body);
  // TODO implement
  const response = { statusCode: null, body: null };
  
  try {
    let results = await books.scan().exec(); // will scan all items with no filters or options
    // console.log('results-----', results);
    
    response.body = JSON.stringify(results);
    response.statusCode = 200;
  } catch(e){
    response.body = JSON.stringify(e.message)
    response.statusCode = 500;
  }
  
  
  //   const response = {
  //     statusCode: 200,
  //     body: JSON.stringify('Hello from Lambda!'),
  // };
  return response;
};
