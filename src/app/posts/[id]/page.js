async function PostById({ params }) {
  const { id } = await params;
  console.log(id);
  return (
    <div>
      <p>This is post with id of {id}</p>
    </div>
  );
}

export default PostById;
