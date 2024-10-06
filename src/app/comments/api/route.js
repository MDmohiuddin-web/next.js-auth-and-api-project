export async function GET() {
  return Response.json(comments, {
    headers: {
      "set-cookie": "token=1234567890",
    },
  });
}
export async function POST(request) {
  const newComment = await request.json();
  comments.push({
    id: comments.length + 1,
    text: newComment.text,
  });
  return Response.json({
    Message: "New Comment added successfully",
    comments,
  });
}

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
