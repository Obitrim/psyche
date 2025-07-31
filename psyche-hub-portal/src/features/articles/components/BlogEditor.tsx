import { Dispatch } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface BlogEditorProps {
  content: string;
  setContent: Dispatch<React.SetStateAction<string>>;
}

export default function BlogEditor({
  content,
  setContent,
}: Readonly<BlogEditorProps>) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      ["code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "code-block",
    "list",
    "bullet",
    "link",
    "image",
    "clean",
  ];

  return (
    <ReactQuill
      theme="snow"
      value={content}
      onChange={setContent}
      formats={formats}
      modules={modules}
    />
  );
}
