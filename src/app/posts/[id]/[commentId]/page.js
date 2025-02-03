const CommentByIdPage = async ({ params }) => {
  const slug = await params;
  console.log(slug);
  return (
    <div>
      Post Page ID: {slug.id}, Comment ID: {slug.commentId}
    </div>
  );
};

export default CommentByIdPage;
