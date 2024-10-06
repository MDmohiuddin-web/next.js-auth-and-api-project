export async function PATCH(request, { params }) {
  console.log(params.id);
  const body = await request.json();
  const index = comments.findIndex((c) => c.id === parseInt(params.id));
  comments[index] = {
    text: body.text,
  };

  return Response.json({
    Message: "comment updated  ",
    comments,
  });
}

export async function DELETE(request, { params }) {
  const newComment = comments.filter((c) => c.id === parseInt(params.id));
  return Response.json({
    Message: "comment deleted  ",
    newComment,
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
