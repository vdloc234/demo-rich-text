/* eslint-disable @typescript-eslint/no-explicit-any */
import { CKEditor } from "ckeditor4-react";
import "./App.css";

function App() {
  return (
    <>
      <CKEditor
        type="classic"
        initData="<p>Hello from CKEditor 4!</p>"
        onInstanceReady={() => {
          alert("Editor is ready!");
        }}
        editorUrl="https://cdn.ckeditor.com/4.22.1/full/ckeditor.js"
        config={{
          extraPlugins: "image", // Kích hoạt plugin Image
          filebrowserImageUploadUrl: "/upload-image", // Đường dẫn backend xử lý upload
        }}
      />
    </>
  );
}

export default App;
