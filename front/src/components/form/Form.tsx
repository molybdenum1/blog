import React, { useState } from "react";
import { Button, Form, Input, Label, Textarea } from "./Form.styled";
import { useAddNewPostMutation } from "../../store/posts/posts.api";

function MyForm({showModal}: {showModal: (value: boolean | ((prevVar: boolean) => boolean)) => void}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
    const [addNewPost, response] = useAddNewPostMutation();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let formData = {
        title, content
    }
   addNewPost(formData).unwrap().then(()=>{
    setTitle('');
    setContent('');
    showModal(false);
   }).then((error) => console.log(error))
    console.log("Submitted!", title, content);
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

export default MyForm;
