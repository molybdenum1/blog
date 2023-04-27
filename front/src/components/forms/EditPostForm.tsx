import { Button, Input, Label, Textarea, Form } from "../../ui";
import { useState } from "react";
import { useUpdatePostMutation } from "../../store/posts/posts.api";
import { IPost } from "../../types";

interface editFormProps {
  data: IPost;
  setShowModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

function EditPostForm({ data, setShowModal }: editFormProps) {
  const [title, setTitle] = useState(data.title);
  const [content, setContent] = useState(data.content);
  const [updatePost] = useUpdatePostMutation();

  const handleSubmitEdit = (event: React.FormEvent) => {
    updatePost({
      id: data.id,
      body: {
        title,
        content,
      },
    });
    setShowModal(false);
    window.location.reload();
  };
  return (
    <Form onSubmit={handleSubmitEdit}>
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

      <Button type="submit">Save</Button>
    </Form>
  );
}

export default EditPostForm;
