// Export an asynchronous GET function to handle GET requests
export async function GET() {
  // Return a JSON response with comments and set a cookie
  return Response.json(comments, {
    headers: {
      "set-cookie": "token=1234567890",
    },
  });
}

// Export an asynchronous POST function to handle POST requests
export async function POST(request) {
  // Parse the JSON body of the request
  const newComment = await request.json();

  // Add a new comment to the comments array
  comments.push({
    id: comments.length + 1,
    text: newComment.text,
  });

  // Return a JSON response with a success message and updated comments
  return Response.json({
    Message: "New Comment added successfully",
    comments,
  });
}

// Define an array of initial comments
const comments = [
  {
    id: 1,
    text: "This is the first comment",
  },
  {
    id: 2,
    text: "This is the second comment",
  },
  {
    id: 3,
    text: "This is the third comment",
  },
];
