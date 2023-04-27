import React, { useState } from "react";
import { Form } from "../../ui";
import { Button, Input, Label, Textarea } from "../../ui/index";
import { useAddNewPostMutation } from "../../store/posts/posts.api";

function AddNewPostForm({
  showModal,
}: {
  showModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [addNewPost] = useAddNewPostMutation();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let formData = {
      title,
      content,
    };
    addNewPost(formData)
      .unwrap()
      .then(() => {
        setTitle("");
        setContent("");
        showModal(false);
      })
      .then((error) => console.log(error));
    console.log("Submitted!", title, content);
    window.location.reload();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="title">Title</Label>
      <Input
        type="text"
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />

      <Label htmlFor="content">Content</Label>
      <Textarea
        id="content"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        required
      />

      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default AddNewPostForm;
