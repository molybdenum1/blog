import { Button, Input, Label, Form } from "../../ui";
import { useAddNewCommentMutation } from "../../store/comments/comments.api";
import { useState } from "react";
import { IPost } from "../../types";

function AddCommentForm({ data }: { data: IPost }) {
  const [addNewComment] = useAddNewCommentMutation();
  const [comment, setComment] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let formData = { id: data.id, comment: { comment } };
    addNewComment(formData)
      .unwrap()
      .then(() => {
        setComment("");
      })
      .then((error) => console.log(error));
    console.log("Submitted!", comment);
    window.location.reload();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="title">Comment</Label>
      <Input
        type="text"
        id="comment"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        required
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default AddCommentForm;
